import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BodyComponent } from './Dashboard/body/body.component';
import { SidenavComponent } from './Dashboard/sidenav/sidenav.component';
import { DComponent } from './Dashboard/d/d.component';
import { ProductsComponent } from './Dashboard/products/products.component';
import { StaticsComponent } from './Dashboard/statics/statics.component';
import { CoupensComponent } from './Dashboard/coupens/coupens.component';
import { MediaComponent } from './Dashboard/media/media.component';
import { SettingsComponent } from './Dashboard/settings/settings.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ServicesComponent } from './services/services.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { PrivacytermsComponent } from './privacyterms/privacyterms.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    BodyComponent,
    SidenavComponent,
    DComponent,
    ProductsComponent,
    StaticsComponent,
    CoupensComponent,
    MediaComponent,
    SettingsComponent,
    ForgetPasswordComponent,
    ServicesComponent,
    VerifyEmailComponent,
    PrivacytermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
