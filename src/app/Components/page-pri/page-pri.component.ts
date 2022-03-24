import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Resgister } from './../../models/register';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-page-pri',
  templateUrl: './page-pri.component.html',
  styleUrls: ['./page-pri.component.css']
})
export class PagePriComponent implements OnInit {

  productForm: FormGroup;

  constructor(private fb: FormBuilder,) { 
    
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      Correo: ['', Validators.required],
      telefono: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
  }
 

  ngOnInit(): void {
  }

  Registrar(){
    console.log(this.productForm)

    const REGISTER: Resgister = {

      nombre: this.productForm.get('nombre')?.value,
      apellido: this.productForm.get('apellido')?.value,
      Correo: this.productForm.get('Correo')?.value,
      telefono: this.productForm.get('telefono')?.value,
      contraseña: this.productForm.get('contraseña')?.value


    }
    console.log(REGISTER);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Registro completo, Revisa tu buzon de Correo',
      showConfirmButton: false,
      timer: 2000
    })
    
  }

}
