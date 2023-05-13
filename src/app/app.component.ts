import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as rg4js from 'raygun4js'
import { environment } from 'src/environments/environment';

const VERSION_NUMBER = '1.0.0.0'
rg4js('apiKey', environment.raygunAPIKey)
rg4js('setVersion', VERSION_NUMBER)
rg4js('enablePulse', true)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRouterEvents()
  }

  getRouterEvents() {
    this.router.events.subscribe(event => {
      if( event instanceof NavigationEnd) {
        rg4js('trackEvent', {
          type: 'pageView',
          path: event.url
        })
      }
    })
  }
}
