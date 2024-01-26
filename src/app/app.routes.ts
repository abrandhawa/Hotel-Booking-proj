import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';
import { BookingListComponent } from './pages/booking-list/booking-list.component';
import { BookingCalanderComponent } from './pages/booking-calander/booking-calander.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {path:'rooms',
            component:RoomsComponent
            },
            {path:'dashboard',
            component:DashboardComponent
            },
            {path:'newBooking',
            component:NewBookingComponent
            },
            {path:'bookings',
            component:BookingListComponent
            },
            {path:'booking-calender',
            component:BookingCalanderComponent
            },
            {path:'dashboard',
            component:DashboardComponent
            },
        ]
    }
];
