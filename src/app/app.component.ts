import { CommonModule } from '@angular/common';
import { Component, afterNextRender, effect, viewChild, viewChildren } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AsyncComponent } from './src/components/async/async.component';
import { ChildComponent } from './src/components/child/child.component';
import { PanelComponent } from './src/components/panel/panel.component';
import { ListComponent } from './src/components/list/list.component';
import { CounterComponent } from './src/components/counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AsyncComponent,CommonModule,RouterLink,ChildComponent,PanelComponent,ListComponent,CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  cond = false; // Condicion del defer

  childComponent = viewChild.required(ChildComponent)
  childrenComponent = viewChildren(ChildComponent);

  valueFromParent = 20;

  constructor(){
        // Este metodo solo se inicializa una vez. Para que se reinicie cada f5, es afterRender
    afterNextRender(() =>{
      // console.log(window.location.pathname);
    })

    effect(()=> console.log('hello fromchild', this.childrenComponent()));
  }

  //#region Antigua forma sin signal

  /* 
  
  @ViewChild(ChildComponent) childComponent !: ChildComponent;
  @ViewChildren(ChildComponent) childrenComponent !: QueryList<ChildComponent>;

  ngAfterViewInit(): void {
    his.childrenComponent.forEach((child) => console.log(child.value()));
    onsole.log('this.childcomponent', this.childComponent().value());
  } 
  
  */

  //#endregion
 
}
