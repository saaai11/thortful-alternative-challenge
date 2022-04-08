import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ICat } from './cats.interface';
import { CatsListService } from './services/cats-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aat-test';
  catsList$: Observable<ICat[]> = this.catsListService.fetchCatsList();
  constructor(private catsListService: CatsListService) {}
}
