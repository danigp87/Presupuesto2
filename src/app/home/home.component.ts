import { AfterViewChecked, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PanellComponent } from '../panell/panell.component';
export { Presu }

interface Presu {
  nombre: string;
  web: boolean;
  pags: number;
  langs: number;
  precioWeb: number;
  seo: boolean;
  ad: boolean;
  precioTotal: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  presu: Presu[] = [
    { nombre: "Presupuesto 1", web: true, pags: 5, langs: 2, precioWeb: 300, seo: true, ad: true, precioTotal: 1300 },
    { nombre: "Presupuesto 2", web: true, pags: 6, langs: 2, precioWeb: 360, seo: true, ad: true, precioTotal: 1360 },
    { nombre: "Presupuesto 3", web: true, pags: 5, langs: 1, precioWeb: 150, seo: true, ad: true, precioTotal: 1150 }
  ]

  @Output() presus: Presu[] = []

  /* public myForm: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    web: new FormControl(false),
    pags: new FormControl(0),
    idiomas: new FormControl(0),
    seo: new FormControl(false),
    ad: new FormControl(false),
    precio: new FormControl(0),
  }) */


  /* ngOnInit() { */
  public myForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    web: [false, Validators.required],
    seo: [false, Validators.required],
    ad: [false, Validators.required],
  })
  constructor(private fb: FormBuilder) { }

  get f() { return this.myForm.controls }

  /* } */

  num1: number = 0
  precioPag(event: number) {
    this.num1 = event
  }

  num2: number = 0
  precioLang(event: number) {
    this.num2 = event
  }

  pagLangSuma: number = 0
  precioWeb(event: number) {
    this.pagLangSuma = event
  }

  web: boolean = false;
  seo: boolean = false;
  ad: boolean = false;

  calcularPrecio() {
    let precioTotal = 0;
    if (this.f['web'].value === true) {
      precioTotal += 500;
    }
    if (this.f['seo'].value === true) {
      precioTotal += 300;
    }
    if (this.f['ad'].value === true) {
      precioTotal += 200;
    }
    precioTotal += this.pagLangSuma;
    return precioTotal;
  }

  presuMostrado: boolean = false

  verPresus() {
    this.presuMostrado = !this.presuMostrado
  }

  onSave() {
    const nombre = this.myForm.controls['nombre'].value
    const web = this.f['web'].value
    const pags = this.num1
    const langs = this.num2
    const precioWeb = this.pagLangSuma
    const seo = this.f['seo'].value
    const ad = this.f['ad'].value
    const precioTotal = this.calcularPrecio()

    const nuevoPresu = { nombre, web, pags, langs, precioWeb, seo, ad, precioTotal }
    this.presu.push(nuevoPresu)

    this.myForm.reset()
    this.f['web'].value === false
    this.f['seo'].value === false
    this.f['ad'].value === false
  }


  /* ordenarNombre() {
    this.presu.sort((a, b) => a.nombre - b.nombre)
  } */
}