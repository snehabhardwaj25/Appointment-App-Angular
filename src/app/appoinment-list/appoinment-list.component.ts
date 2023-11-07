import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.css']
})
export class AppoinmentListComponent implements OnInit{
 

  newAppoinmentTille: string = "";
  newAppoinmentDate: Date = new Date();

    appointments:Appointment[] = []

    ngOnInit(): void {
      let saveAppointments = localStorage.getItem("appointments")
      this.appointments = saveAppointments ? JSON.parse(saveAppointments) : []
    }

    addAppointment(){
      if(this.newAppoinmentTille.trim().length && this.newAppoinmentDate){
        let newAppointment: Appointment ={
          id: Date.now(),
          tille: this.newAppoinmentTille,
          date: this.newAppoinmentDate
        }
        this.appointments.push(newAppointment)

        this.newAppoinmentTille = " ";
        this.newAppoinmentDate = new Date();

        // Storing appointments in local storage
        localStorage.setItem("appointments",JSON.stringify(this.appointments))
      }
    }

    deleteAppointment(index: number){
      this.appointments.splice(index, 1)
      localStorage.setItem("appointments",JSON.stringify(this.appointments))
    }
   
}
