import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})

export class CreateComponent implements OnInit {
    public schoolstudent = {
        student_name: '',
        student_email: '',
    }

    constructor (
        private createService: CreateService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createService.GpCreate(this.schoolstudent).subscribe(data => {
            this.schoolstudent.student_name = ''
 	 	this.schoolstudent.student_email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}