import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-empleado',
  templateUrl: './perfil-empleado.component.html',
  styleUrls: ['./perfil-empleado.component.css']
})
export class PerfilEmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  async editar() {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Cambios',
      inputPlaceholder: 'Editar Seccion de perfil',
      inputAttributes: {
        'aria-label': ''
      },
      showCancelButton: true
    })
    
    if (text) {
      Swal.fire(text)
    }
  }

  async editar1() {
    const { value: file } = await Swal.fire({
      title: 'Seleciona una imagen',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Carga tu imagen de perfil'
      }
    })
  }

  metodosdepago(){
    Swal.fire({
      title: 'Escoge tu metodo de pago',
      text: 'Seras redirigido a una pagina extarna para completar tu pago',
      imageUrl: '../assets/metodos.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }

  
}
