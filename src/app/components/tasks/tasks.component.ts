import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  employers: Task[] = [];
  /*   onDelete(employee) {
    console.log(employee);
  } */
  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.taskService
      .getEmployees()
      .subscribe((employees) => (this.employers = employees));
  }
}
