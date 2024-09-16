import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list'
import { first } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = [

  ];

  ngDoCheck(): void {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false});
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm('Você Deseja realmente deletar tudo?')

    if(confirm){
      this.taskList = [];
    }
  }
}
