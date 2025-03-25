import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private fb : FormBuilder){
    this.meroForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: ''
    })
  }
}
