import { AfterViewInit, Component ,QueryList,ViewChild,ViewChildren,afterNextRender, effect, viewChild, viewChildren} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AsyncComponent } from './src/components/async/async.component';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './src/components/child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AsyncComponent,CommonModule,RouterLink,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'newsAngular17';
  cond = false;

  constructor(){
        // Este metodo solo se inicializa una vez. Para que se reinicie cada f5, es afterRender
    afterNextRender(() =>{
      // console.log(window.location.pathname);
    })

    effect(()=> console.log('hello fromchild', this.childrenComponent()));
  }


  valueFromParent = 20;

  childComponent = viewChild.required(ChildComponent)
  childrenComponent = viewChildren(this.childComponent);

  //@ViewChild(ChildComponent) childComponent !: ChildComponent;

  //@ViewChildren(ChildComponent) childrenComponent !: QueryList<ChildComponent>;


  ngAfterViewInit(): void {
    //this.childrenComponent.forEach((child) => console.log(child.value()));
    //console.log('this.childcomponent', this.childComponent().value());
  }
 
}
