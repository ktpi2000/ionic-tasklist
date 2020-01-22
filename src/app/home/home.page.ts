import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'タスク登録';
  tasks: { name: string }[] = [
    { name: 'タスク1' },
    { name: 'タスク2' },
  ];
  task: string;
  constructor() { }

  //ページ読み込み時にlocalStorageから値取得
  ionViewWillEnter() {
    if ('tasks' in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks)
    }
  }

  addTask() {
    this.tasks.push({
      name: this.task
    });

    //json文字列にして保存
    localStorage.tasks = JSON.stringify(this.tasks);

    //入力値を空にする
    this.task = '';
  }

}
