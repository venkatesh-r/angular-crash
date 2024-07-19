import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  @Input() employee!: Task;
  faTimes = faTimes;
  @Output() OnDeleteTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  onDelete(employee: Task) {
    console.log(employee);
  }
}
