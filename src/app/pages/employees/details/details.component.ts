import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Employee } from 'src/app/shared/models/employee.interface';
import Swal from 'sweetalert2';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  employee: Employee = null;

  navigationExtras: NavigationExtras = {
    state: {
      employee: null
    }
  }

  constructor(private router: Router, private employeesSvc: EmployeesService) { 
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras.state?.employee;
  }

  ngOnInit(): void {
    if (typeof this.employee === 'undefined'){
      this.router.navigate(['list']);
    }
  }

  onGoToEdit():void {
    this.navigationExtras.state.employee = this.employee;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  async onGoToDelete(): Promise<void> {
    try {
      await this.employeesSvc.onDeleteEmployees(this.employee?.id);
      Swal.fire('Employee succesfully deleted', '', 'info')
      this.onGoBackToList();
    } catch (err) {
      console.log(err)
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }


}
