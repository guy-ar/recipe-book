import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  @Output() itemAdded: EventEmitter<Ingridient> = new EventEmitter<Ingridient>();

  constructor() { }

  ngOnInit() {
  }
  onaddItem(){
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const ingItem = new Ingridient(name,amount);
    this.itemAdded.emit(ingItem);

  }
  
}
