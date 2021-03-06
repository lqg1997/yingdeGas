import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CameraTabDefaultPagePage } from '../pages/camera-tab-default-page/camera-tab-default-page';
import { CartTabDefaultPagePage } from '../pages/cart-tab-default-page/cart-tab-default-page';
import { CloudTabDefaultPagePage } from '../pages/cloud-tab-default-page/cloud-tab-default-page';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { NewTaskPage } from '../pages/new-task/new-task';
import { ToDoTaskPage } from '../pages/to-do-task/to-do-task';
import { PagePage } from '../pages/page/page';
import { LoginPage } from '../pages/login/login';
import { PersonHomeDetailPage } from '../pages/person-home-detail/person-home-detail';
import { WriteWeightNotePage } from '../pages/write-weight-note/write-weight-note';
import { MileLengthPage } from '../pages/mile-length/mile-length';
import { DetailePage } from '../pages/detaile/detaile';
import { PringPagePage } from '../pages/pring-page/pring-page';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { File } from '@ionic-native/file';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from "@angular/common/http";
import {PrinterProvider} from "../providers/printer/printer";
import {HomePage} from "../pages/home/home";
import {HttpSerProvider} from "../providers/http-service/http-service";
import {MyTestPage} from "../pages/my-test/my-test";
import {MyTestPageNewPage} from "../pages/my-test-page-new/my-test-page-new";
import {ScheduilingPlanPage} from "../pages/scheduiling-plan/scheduiling-plan";
import {NewtaskdetailPage} from "../pages/newtaskdetail/newtaskdetail";
import {PersondetailPage} from "../pages/persondetail/persondetail";
import {PoundlistPage} from "../pages/poundlist/poundlist";
import {FillWeightPage} from "../pages/fill-weight/fill-weight";
import {ImagePicker} from "@ionic-native/image-picker";
import { FileTransfer } from '@ionic-native/file-transfer';
import { Camera } from '@ionic-native/camera';
import { ImageUitProvider } from '../providers/image-uit/image-uit';

@NgModule({
  declarations: [
    MyApp,
    CameraTabDefaultPagePage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    NewTaskPage,
    ToDoTaskPage,
    PagePage,
    LoginPage,
    PersonHomeDetailPage,
    WriteWeightNotePage,
    MileLengthPage,
    DetailePage,
    PringPagePage,
    HomePage,
    PersondetailPage,
    NewtaskdetailPage,
    ScheduilingPlanPage,
    PoundlistPage,
    FillWeightPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    IonicModule.forRoot(MyApp
      ,{
        backButtonText:"返回",

      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CameraTabDefaultPagePage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    NewTaskPage,
    ToDoTaskPage,
    PagePage,
    LoginPage,
    PersonHomeDetailPage,
    WriteWeightNotePage,
    MileLengthPage,
    DetailePage,
    PringPagePage,
    HomePage,
    PersondetailPage,
    NewtaskdetailPage,
    ScheduilingPlanPage,
    PoundlistPage,
    FillWeightPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BluetoothSerial,
    PrinterProvider,
    HttpSerProvider,
    ImagePicker,
    FileTransfer,
    Camera,
    File,
    ImageUitProvider

  ]
})
export class AppModule {}
