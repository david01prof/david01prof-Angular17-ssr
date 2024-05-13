import { Component ,afterNextRender} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncComponent } from './src/components/async/async.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AsyncComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'newsAngular17';

  constructor(){
        // Este metodo solo se inicializa una vez. Para que se reinicie cada f5, es afterRender
    afterNextRender(() =>{
      console.log(window.location.pathname);
    })

  }
}
