import { Component, Injector, computed, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  searchQuery = signal<string>('searchQuery');
  searchQueryReadOnly = this.searchQuery.asReadonly();
  user = signal<string>('David Martinez')
  resultComputed = computed(()=> `Result ${this.user()} ${this.searchQuery()}`)
  private readonly injector = inject(Injector)

  constructor(){
    effect(() => console.log(this.user()))
  }

  onChangeValue(){
    this.searchQuery.set('New Value searchQuery')
  }

  onChangeUser(){
    this.user.set('David Dev')
    // effect(() => console.log(this.user()),{injector:this.injector})
  }

  onUpdateValue(){
    this.searchQuery.update((current)=> current + 'Youtube!');
  }

}
