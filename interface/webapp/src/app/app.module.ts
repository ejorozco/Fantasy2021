import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MastHeadComponent } from './masthead/masthead.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        MastHeadComponent
    ],
    // providers: [
    //     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    //     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // ],
    bootstrap: [AppComponent]
})

export class AppModule { }