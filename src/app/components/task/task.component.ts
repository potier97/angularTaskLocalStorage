import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../models/task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  constructor(public taskService: TaskService) { }

  deleteTask(task: Task) {
    if(confirm('Desea eliminar la tarea?')) {
      this.taskService.deleteTask(task);
    }
  }

  ngOnInit(): void {
  }

}
