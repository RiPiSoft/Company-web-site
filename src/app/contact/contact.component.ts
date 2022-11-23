import { Component, OnInit, ViewEncapsulation   } from '@angular/core';
import TomTom from '@tomtom-international/web-sdk-maps';
import {Settings as TomTomSettings}  from 'src/app/models/tomtom/settings';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const map = TomTom.map({
      key: TomTomSettings.Key,
      container: TomTomSettings.Container,
      style: TomTomSettings.Style,
      center: TomTomSettings.LngLat,
      zoom: TomTomSettings.Zoom
    });
    map.addControl(new TomTom.FullscreenControl());
    map.addControl(new TomTom.NavigationControl());

    var marker = new TomTom.Marker().setLngLat(TomTomSettings.LngLat).addTo(map);
  }

}
