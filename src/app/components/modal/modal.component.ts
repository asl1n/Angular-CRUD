import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MeroType } from 'src/app/mero-type';
import { WorkersService } from 'src/app/service/workers.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  meroForm: FormGroup;

  education: string[]= [
    'Basic Level',
    'Secondary Level',
    'Higher Secondary Level',
    'Diploma',
    'Graduated'
  ]

  constructor(private fb : FormBuilder, 
    private workerService : WorkersService, 
    private dialogRef : DialogRef<ModalComponent>){
    this.meroForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      salary: ''
    })
  }

  meroFormSubmit(){
    if(this.meroForm.valid){
      this.workerService.addWorker(this.meroForm.value as MeroType).subscribe({
        next: (val: any) => {
          this.dialogRef.close();
        },
        error: (err: any) => {
          console.log(err);
        }
      })
  }};
}
