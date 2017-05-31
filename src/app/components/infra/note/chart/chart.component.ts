import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { AppSettings } from './../../../../config/app.settings';

declare var require: any;
const Highcharts = require('highcharts/highstock');
Highcharts.theme = AppSettings.CHART_OPTIONS;
Highcharts.setOptions(Highcharts.theme);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {

  @Input() infra: string;
  @Input() isFull: boolean = false;

  width: number;
  height: number = 390;
  options: Object;

  constructor(private http: Http) { }

  ngOnInit() {
    // console.log(this.width);
  }

  ngAfterViewInit() {
    if(this.isFull || window.innerWidth < 768) {
      this.width = (window.innerWidth) - AppSettings.MENU_WIDTH - 42;
      this.height = 480;
      if(!this.isFull) {
        if(window.innerWidth < 768 && window.innerWidth >= 400) {
          this.height = 230;
        } 
        else if(window.innerWidth < 400) {
          this.height = 230;
        }
      }
    }
    else {
      this.width = ((window.innerWidth) - AppSettings.MENU_WIDTH)/2 - 42;
    }
    this.renderChart(this.width, this.height);
  }

  onResize(event) {
    if(this.isFull || event.target.innerWidth < 768) {
      this.height = 480;
      if(!this.isFull) { 
        if(event.target.innerWidth < 768 && event.target.innerWidth >= 400) {
          this.height = 230;
        } 
        else if(event.target.innerWidth < 400) {
          this.height = 230;
        }
      }
      this.width = event.target.innerWidth - AppSettings.MENU_WIDTH - 42;
    }
    else {
      this.width = (event.target.innerWidth - AppSettings.MENU_WIDTH)/2 - 42;
    }
    this.renderChart(this.width, this.height);
  }

  renderChart(w, h) {
    this.http.get('https://cdn.rawgit.com/gevgeny/angular2-highcharts/99c6324d/examples/aapl.json').subscribe(res => {
        this.options = {
            title : { text : 'AAPL Stock Price' },
            chart: {
                width: w,
                height: h 
            },    
            series : [{
                name : 'AAPL', 
                data : res.json(), 
                tooltip: {
                    valueDecimals: 2 
                }
            }]
        };
    });
  }

}
