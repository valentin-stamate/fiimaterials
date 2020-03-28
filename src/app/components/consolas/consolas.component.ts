import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html',
  styleUrls: ['./consolas.component.scss']
})
export class ConsolasComponent implements OnInit {
  @Input('text') text:string;
  @Input('color') color = '#737373';
  constructor() { }

  ngOnInit(): void {

  }

}
