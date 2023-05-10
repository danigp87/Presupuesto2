import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Presu } from '../home/home.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.scss']
})

export class PanellComponent {

  public panellForm: FormGroup = this.fb.group({
    paginas: [1, [Validators.pattern(/^[0-9]*$/),
    Validators.min(1)]],
    idiomas: [1, [Validators.pattern(/^[0-9]*$/),
    Validators.min(1)]],
  })
  constructor(private fb: FormBuilder) { }
  get f() { return this.panellForm.controls }

  @Input() presus: Presu[] = []

  number1: number = 1
  number2: number = 1
  pagLang: number = 30
  @Input() countNum1: number = 1;
  @Output() num1: EventEmitter<number> = new EventEmitter<number>()
  @Input() countNum2: number = 1;
  @Output() num2: EventEmitter<number> = new EventEmitter<number>()
  @Input() countPLS: number = 30;
  @Output() pagLangSuma: EventEmitter<number> = new EventEmitter<number>()


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

  updateValue(valueToAdd: number, fieldName: string) {
    let currentValue = this.panellForm.get(fieldName)?.value;
    let newValue = currentValue + valueToAdd;
    if (newValue >= 1) {
      this.panellForm.patchValue({
        [fieldName]: newValue
      });
    }
    if (fieldName === 'paginas') {
      this.num1.emit(newValue)
    }
    if (fieldName === 'idiomas') {
      this.num2.emit(newValue)
    }
  }

  webPrice() {
    let price = this.panellForm.get('paginas')?.value * this.panellForm.get('idiomas')?.value * 30
    this.pagLangSuma.emit(price)
    return price
  }



  //BOTONES MÁS Y MENOS. ENVÍO DEL NÚMERO POR EMIT A HOME. ACTUALIZA EL NÚMERO DENTRO DEL INPUT.

  /* plus1() {
    this.number1++
    this.num1.emit(this.number1);
    this.panellForm.patchValue({
      paginas: this.countPage
    });
  }
  minus1() {
    if (this.number1 > 1) {
      this.number1--
      this.num1.emit(this.number1);
      this.panellForm.patchValue({
        paginas: this.countPage
      });
    }
  }
  plus2() {
    this.number2++
    this.num2.emit(this.number2);
    this.panellForm.patchValue({
      idiomas: this.countLang
    });
  }
  minus2() {
    if (this.number2 > 1) {
      this.number2--
      this.num2.emit(this.number2);
      this.panellForm.patchValue({
        idiomas: this.countLang
      });
    }
  } */

  //CÁLCULO DEL PRECIO TOTAL DEL PANELL Y ENVÍO A HOME CON EL EMIT

  /* webPrice() {
    this.pagLang = (this.number1 * this.number2 * 30)
    this.pagLangSuma.emit(this.pagLang)
    return this.pagLang
  } */

  //No he llegado a usarlo pero lo dejo aquí para estudiarlo en el futuro
  /*   ngOnInit() {
    this.panellForm.controls['paginas'].valueChanges.subscribe(value => {
      return value = this.countPage
    })
    this.panellForm.controls['idiomas'].valueChanges.subscribe(value => {
      return this.countLang = value
    })
    } */

}