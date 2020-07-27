import { Component, OnInit } from '@angular/core';
import { FactUsecase } from 'src/app/domain/usecases/fact.usecase';
import { Observable } from 'rxjs';
import { FactModel } from 'src/app/domain/models/fact.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  facts$: Observable<FactModel[]>;

  constructor(private list: FactUsecase) { }

  async ngOnInit() {
    this.facts$ = this.list.execute();
  }

}
