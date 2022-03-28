import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details-empleador',
  templateUrl: './details-empleador.component.html',
  styleUrls: ['./details-empleador.component.css']
})
export class DetailsEmpleadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
