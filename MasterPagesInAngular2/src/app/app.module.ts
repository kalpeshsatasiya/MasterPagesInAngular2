import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Layout
import { SecureComponent } from './layout/secure';
import { PublicComponent } from './layout/public';

// Secure Component
import { HomeComponent } from './secure/home';

//Public Component
import { LoginComponent } from './public/login';
import { AppComponent } from './app.component';

// Common
import { AuthGuard } from './../common/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SecureComponent,
    PublicComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
