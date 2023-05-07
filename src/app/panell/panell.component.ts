import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Presu } from '../home/home.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.scss']
})

export class PanellComponent {
  
  number1: number = 0
  number2: number = 0
  pagLang: number = 0

  @Input() presus: Presu[] = []

  @Input() countNum1: number = 0;
  @Output() num1: EventEmitter<number> = new EventEmitter<number>()
  @Input() countNum2: number = 0;
  @Output() num2: EventEmitter<number> = new EventEmitter<number>()
  @Input() countPLS: number = 0;
  @Output() pagLangSuma: EventEmitter<number> = new EventEmitter<number>()

    public panellForm: FormGroup = this.fb.group({
    paginas: [0, Validators.required],
    idiomas: [0, Validators.required],
  })
  constructor(private fb: FormBuilder) { }
  get f() { return this.panellForm.controls }


  /* numPag: number = 0
  numLang: number = 0

  @ViewChild('inputPag') inputRef!: ElementRef;
  @ViewChild('inputLang') inputRef: ElementRef;
  valorNumerico = 0;

  plus1() {
    this.valorNumerico++;
    this.inputRef.nativeElement.value = this.valorNumerico;
  } */


  plus1() {
    this.number1++
    this.num1.emit(this.number1);
  }
  minus1() {
    if (this.number1 > 0) {
      this.number1--
      this.num1.emit(this.number1);
    }
  }
  plus2() {
    this.number2++
    this.num2.emit(this.number2);
  }
  minus2() {
    if (this.number2 > 0) {
      this.number2--
      this.num2.emit(this.number2);
    }
  }
  webPrice() {
    this.pagLang = (this.number1 * this.number2 * 30)
    this.pagLangSuma.emit(this.pagLang)
    return this.pagLang
  }
}