import { Component } from '@angular/core';
import Swal from'sweetalert2';

@Component({
  selector: 'app-sessaocompras',
  templateUrl: './sessaocompras.component.html',
  styleUrls: ['./sessaocompras.component.scss']
})
export class SessaocomprasComponent {
  Comprar(){
    Swal.fire({
      title: "Você deseja comprar esse produto?",
      showDenyButton: true,
      icon: "question",
      confirmButtonText: "Sim",
      denyButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Produto adicionado ao carrinho", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Erro ao adicionar ao carrinho", "", "error");
      }
    });
  }
}
