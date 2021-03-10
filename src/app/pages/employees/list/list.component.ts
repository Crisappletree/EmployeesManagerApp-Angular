import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employees$ = this.employeesSvc.employees;
  navigationExtras: NavigationExtras = {
    state: {
      employee: null
    }
  }



  constructor(private router: Router, private employeesSvc: EmployeesService) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any):void {
    this.navigationExtras.state.employee = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }
  
  onGoToDetail(item: any):void {
    this.navigationExtras.state.employee = item;
    this.router.navigate(['details'], this.navigationExtras);
  }

  async onGoToDelete(empId: string): Promise<void> {
    try {
      await this.employeesSvc.onDeleteEmployees(empId);
      Swal.fire('Employee succesfully deleted', '', 'info')
    } catch (err) {
      console.log(err)
    }
  }
}
