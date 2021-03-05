import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { ErrorServiceService } from './error-service/error-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ErrorHandler as myErrorHandler } from './error-handler/error-handler';

@NgModule({
  declarations: [ErrorComponentComponent],
  imports: [CommonModule, RouterModule, ErrorRoutingModule, SharedModule],
  providers: [
    ErrorServiceService,
    {
      provide: ErrorHandler,
      useClass: myErrorHandler
    }
  ]
})
export class ErrorModule {}
