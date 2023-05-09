import { Component, EventEmitter, Input, Output, NgModule } from '@angular/core';
import { Presu } from '../home/home.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


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


  private _numPage!: number;
  private _numLang!: number;

  get countPage() {
    return this.number1
  }
  set countPage(numPag: number) {
    this._numPage = numPag
  }
  get countLang() {
    return this.number2
  }
  set countLang(numLang: number) {
    this._numPage = numLang
  }

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


  public contentModal: string = "";

  public openModal(content: any, id: string) {
    
    if(id === "pageModal") {
      this.contentModal = "Selecciona el número de páginas que tendrá tu web."
      this.modal.open(content)
    }
    if(id === "langModal") {
      this.contentModal = "Selecciona el número de idiomas que tendrá tu web."
      this.modal.open(content)
    }
  }

}