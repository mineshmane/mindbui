import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule, MatSnackBarModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { GetemployeeComponent } from './components/getemployee/getemployee.component';
import { MngsubscriptionComponent } from './components/mngsubscription/mngsubscription.component';
import { DisplayempComponent } from './components/displayemp/displayemp.component';
import { UpdateComponent } from './components/update/update.component';
import { ConfirmationboxComponent } from './components/confirmationbox/confirmationbox.component';
import { PaymentComponent } from './components/payment/payment.component';
import {AuthguardService} from './services/authguardservice/authguard.service'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    GetemployeeComponent,
    MngsubscriptionComponent,
    DisplayempComponent,
    UpdateComponent,
    ConfirmationboxComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatSnackBarModule,FlexLayoutModule,MatCardModule,
    MatDatepickerModule,MatNativeDateModule,HttpClientModule,MatListModule,
    BrowserAnimationsModule,FormsModule,ReactiveFormsModule,MatInputModule,
    MatIconModule,MatFormFieldModule,MatButtonModule,MatToolbarModule,MatSidenavModule,MatTabsModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent],
  entryComponents:[UpdateComponent,ConfirmationboxComponent]
})
export class AppModule { }
