const webpush = require('web-push');
let configuration = {};
try {
  configuration = require('../../config.json');
} catch {
  console.log(configuration);
}
const vapidkeys = {
  publicKey: process.env.VPAID_PUBLIC || configuration?.VPAID_PUBLIC,
  privateKey: process.env.VPAID_PRIVATE || configuration?.VPAID_PRIVATE
};
webpush.setVapidDetails('mailto:viveksai26@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey);
let subscriptions = [];
class subscriptionController {
  constructor() {}
  static async newsletter(req, res, next) {
    var message = req.query['message'];
    var title = req.query['title'];
    const notificationPayload = {
      notification: {
        title: title,
        body: message,
        icon:
          'https://cdn4.iconfinder.com/data/icons/happy-easter-5/64/easter_rabbit_bunny_holiday_animal_happy_cute-512.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [
          {
            action: 'explore',
            title: 'Go to the site'
          }
        ]
      }
    };

    Promise.all(
      subscriptions.map((sub) =>
        webpush.sendNotification(sub, JSON.stringify(notificationPayload)).catch((error) => {
          console.log(error);
          const index = subscriptions.indexOf(sub);
          if (index > -1) {
            subscriptions.splice(index, 1);
          }
        })
      )
    )
      .then((data) => {
        console.log('webPush success data', data);
        res.status(200).json({ message: 'Newsletter sent successfully.' });
      })
      .catch((err) => {
        console.error('Error sending notification, reason: ', err);
        res.sendStatus(500);
      });
  }
  static async subscribers(req, res, next) {
    res.status(200).json(subscriptions);
  }
  static async clearSubscriptions(req, res, next) {
    subscriptions = [];
    res.status(200).json('subscriptions cleared');
  }
  static async subscribe(req, res, next) {
    const sub = req.body;
    console.log('Received Subscription on the server: ', sub);
    if (!subscriptions.some((subsc) => subsc.endpoint === sub.endpoint)) {
      subscriptions.push(sub);
    }
    res.status(200).json({ message: 'Subscription added successfully.' });
  }
}
module.exports = subscriptionController;
