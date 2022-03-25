import { Router } from '@angular/router';
import { Resgister } from './../../models/register';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productForm: FormGroup;

  constructor(private fb: FormBuilder,) { 
    
    this.productForm = this.fb.group({
      Nombre: ['', Validators.required],
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

      nombre: this.productForm.get('Nombre')?.value,
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
