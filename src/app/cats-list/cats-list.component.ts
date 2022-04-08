import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICat } from '../cats.interface';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss'],
})
export class CatsListComponent implements OnInit {
  @Input() catsList$!: Observable<ICat[]>;
  constructor() {}

  ngOnInit(): void {}
}
