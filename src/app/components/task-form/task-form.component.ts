import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  title: string;
  description: string;

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

  addTask(newTitle: HTMLInputElement, newDescription: HTMLInputElement) {
    this.taskService.addTask({
      title: newTitle.value,
      description: newDescription.value,
      hide: true
    });
    newTitle.value = '';
    newDescription.value = '';
    newTitle.focus();
    return false;
  }

}
