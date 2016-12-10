import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { SurahPage, VersePage, MoreOptionsPopoverPage } from '../pages/shared';
import { DbService, QuranService, BookmarkService } from '../shared/shared';
import { SurahService } from '../pages/surah/surah.service';
import { VerseService } from '../pages/verse/verse.service';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    SurahPage,
    VersePage,
    MoreOptionsPopoverPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    SurahPage,
    VersePage,
    MoreOptionsPopoverPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbService, QuranService, BookmarkService, SurahService, VerseService
  ]
})
export class AppModule {}
