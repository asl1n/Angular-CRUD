import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { WorkersService } from '../service/workers.service';
import { MeroType } from '../mero-type';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  displayedColumns: string[] = 
  [
    'id',
    'firstName', 
    'lastName', 
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'salary'
  ];
  dataSource!: MatTableDataSource<MeroType>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
  private workerService: WorkersService
  ){}

  getWorkers(){
    this.workerService.getWorkers().subscribe({
      next: (val: MeroType[]) => {
        this.dataSource = new MatTableDataSource(val);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log
    })
  }

  ngOnInit(): void {
    this.getWorkers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
