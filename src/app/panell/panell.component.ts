import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Presu } from '../home/home.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.scss']
})

export class PanellComponent {

  number1: number = 1
  number2: number = 1
  pagLang: number = 30

  @Input() presus: Presu[] = []

  @Input() countNum1: number = 1;
  @Output() num1: EventEmitter<number> = new EventEmitter<number>()
  @Input() countNum2: number = 1;
  @Output() num2: EventEmitter<number> = new EventEmitter<number>()
  @Input() countPLS: number = 30;
  @Output() pagLangSuma: EventEmitter<number> = new EventEmitter<number>()

  public panellForm: FormGroup = this.fb.group({
    paginas: [1, [Validators.pattern(/^[0-9]*$/),
      Validators.min(1)]],
    idiomas: [1, [Validators.pattern(/^[0-9]*$/),
      Validators.min(1)]],
  })
  modal: any;
  constructor(private fb: FormBuilder) { }

  get f() { return this.panellForm.controls }

  plus1() {
    this.number1++
    this.num1.emit(this.number1);
  }
  minus1() {
    if (this.number1 > 1) {
      this.number1--
      this.num1.emit(this.number1);
    }
  }
  plus2() {
    this.number2++
    this.num2.emit(this.number2);
  }
  minus2() {
    if (this.number2 > 1) {
      this.number2--
      this.num2.emit(this.number2);
    }
  }
  webPrice() {
    this.pagLang = (this.number1 * this.number2 * 30)
    this.pagLangSuma.emit(this.pagLang)
    return this.pagLang
  }


  /* public contentModal: string = "";

  public openModal(content: any, id: string) {
    
    if(id == "pageModal") {
      this.contentModal = "En este componente tiene que indicarse el número de paginas que tendra su sitio web."
      this.modal.open(content, {size: "xl"})
    }
    if(id == "langModal") {
      this.contentModal = "En este componente tiene que indicarse el número de idiomas que tendra su sitio web."
      this.modal.open(content, {size: "xl"})
    }
  } */

}