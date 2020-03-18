import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GmapComponent } from './gmap/gmap.component';
import { ParkingAPIComponent } from './parking-api/parking-api.component';
import { VenuesComponent } from './venues/venues.component';
import { MapDirectionsComponent } from './map-directions/map-directions.component';

@NgModule({
  declarations: [
    AppComponent,
    GmapComponent,
    ParkingAPIComponent,
    VenuesComponent,
    MapDirectionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
