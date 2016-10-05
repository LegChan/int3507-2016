import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import { Book } from '../pages/book/book';
import { Unit } from '../pages/unit/unit';
import { Learning } from '../pages/learning/learning'; 
import { Playing } from '../pages/playing/playing';
import { Review } from '../pages/review/review';

import { Listening } from '../components/listening/listening';
import { Reading } from '../components/reading/reading';
// import { Speaking } from '../components/speaking/speaking';
import { Writing } from '../components/writing/writing';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Book,
    Unit,
    Learning,
    Review,
    Playing,
    Listening,
    Reading,
    // Speaking,
    Writing
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Book,
    Unit,
    Learning,
    Playing,
    Review
  ],
  providers: []
})
export class AppModule {}
