import { Component } from '@angular/core';
import { WorkersService } from '../service/workers.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private workerService: WorkersService){}

  getWorkers(){
    this.workerService.getWorkers().subscribe({
      next: (val: any) => {
        console.log(val)
      },
      error: console.log
    })
  }

  ngOnInit(): void {
    this.getWorkers();
  }
}
