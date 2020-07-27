import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ChartsModule,
    ],
    entryComponents: [
        HomePage
    ]
})
export class HomeModule { }
