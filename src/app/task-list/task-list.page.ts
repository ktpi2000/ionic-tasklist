import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {
  tasks: { name: string }[] = [
    { name: 'タスク1' },
    { name: 'タスク2' },
  ];
  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if ('tasks' in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks);
    }
  }
}
