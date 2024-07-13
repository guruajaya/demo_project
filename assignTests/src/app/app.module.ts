import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './common.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPipe } from './search.pipe';
import { UserDetailsComponent } from './user-details/user-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { ActiveComponent } from './active/active.component';
import { CompletedComponent } from './completed/completed.component';
import { FilterPipe } from './filter.pipe';
import { CompletedPipe } from './completed.pipe';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatDialogModule} from '@angular/material/dialog';
import { RegistraionComponent } from './registraion/registraion.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { NewUserComponent } from './new-user/new-user.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    UserDetailsComponent,
    ActiveComponent,
    CompletedComponent,
    FilterPipe,
    CompletedPipe,
    RegistraionComponent,
    UserinfoComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,MatInputModule,MatFormFieldModule,ReactiveFormsModule, 
    AppRoutingModule, HttpClientModule,FormsModule, BrowserAnimationsModule, MatCardModule,MatTabsModule,
    MatButtonModule, ScrollingModule, MatDialogModule, FormsModule,MatSelectModule, 
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
