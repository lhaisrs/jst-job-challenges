import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ChartsModule,
        NgxPaginationModule
    ],
    entryComponents: [
        HomePage
    ]
})
export class HomeModule { }
