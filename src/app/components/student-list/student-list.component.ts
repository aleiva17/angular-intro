import { Component } from '@angular/core';
import students from 'src/app/data/students';
import IStudent from '../../interfaces/student.interface';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: IStudent[] = students
}
