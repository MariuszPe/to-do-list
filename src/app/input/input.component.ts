import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { emit } from 'cluster';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @ViewChild('inpucik') inpucikZHtmla: ElementRef;
  @Output() taskCreated: EventEmitter<String> = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  addTask(task: string): void {
    this.taskCreated.emit(task);
    this.inpucikZHtmla.nativeElement.value = '';
  }

}
