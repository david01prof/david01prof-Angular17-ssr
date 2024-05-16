import { Component, model } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  value = model(0);

  increment(): void {
    this.value.update((value) => value + 1);
  }
}
