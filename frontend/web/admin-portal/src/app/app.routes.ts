import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomManagementComponents } from './room-management/room-management.component';
import { BookingManagementComponent } from './booking-management/booking-management.component';

const routes: Routes = [
  { path: 'rooms', component: RoomManagementComponents },
  { path: 'bookings', component: BookingManagementComponent },
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: '**', redirectTo: '/rooms' } // Redirect to rooms if route not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

