import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produt-card',
  templateUrl: './produt-card.component.html',
  styleUrls: ['./produt-card.component.css']
})
export class ProdutCardComponent implements OnInit {
  @Input() productDetails;
  constructor() { }

  ngOnInit() {
  }

}
