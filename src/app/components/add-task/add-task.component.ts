import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from "../../Task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>()

  text: string;
  day: string = 'Tomorrow';
  reminder: boolean = false;

  onSubmit() {
    if(!this.text) {
      alert('Please add task')
    }

    const newTask:Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }


    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
