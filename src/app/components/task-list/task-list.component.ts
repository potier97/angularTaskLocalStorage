import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../service/task.service";
import { Task } from '../../models/task';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addTask(task: Task) {
    console.log(task);
    this.taskService.addTask(task);
  }

}
