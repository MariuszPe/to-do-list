import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() taskList = [];
  @Output() removeTask: EventEmitter <number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteTask(index: number) {
    this.removeTask.emit(index);
  }
}
