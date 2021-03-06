import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { AppSettings } from './../../../../config/app.settings';

declare var require: any;
const Highcharts = require('highcharts/highstock');
Highcharts.theme = AppSettings.CHART_OPTIONS;
Highcharts.setOptions(Highcharts.theme);

@Component({
  selector: 'app-demo-charts',
  templateUrl: './demo-charts.component.html',
  styleUrls: ['./demo-charts.component.css']
})
export class DemoChartsComponent implements OnInit {
  
  public line_ChartData = [
      ['Year', 'Sales', 'Expenses'],
      ['2004', 1000, 400],
      ['2005', 1170, 460],
      ['2006', 660, 1120],
      ['2007', 1030, 540]];
  public bubble_ChartData = [
      ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
      ['CAN', 80.66, 1.67, 'North America', 33739900],
      ['DEU', 79.84, 1.36, 'Europe', 81902307],
      ['DNK', 78.6, 1.84, 'Europe', 5523095],
      ['EGY', 72.73, 2.78, 'Middle East', 79716203],
      ['GBR', 80.05, 2, 'Europe', 61801570],
      ['IRN', 72.49, 1.7, 'Middle East', 73137148],
      ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
      ['ISR', 81.55, 2.96, 'Middle East', 7485600],
      ['RUS', 68.6, 1.54, 'Europe', 141850000],
      ['USA', 78.09, 2.05, 'North America', 307007000]];
  public scatter_ChartData = [
      ['Date', 'Sales Percentage'],
      [new Date(2016, 3, 22), 78],
      [new Date(2016, 3, 21, 9, 30, 2), 88],
      [new Date(2016, 3, 20), 67],
      [new Date(2016, 3, 19, 8, 34, 7), 98],
      [new Date(2016, 3, 18, 15, 34, 7), 95],
      [new Date(2016, 3, 16, 7, 30, 45), 89],
      [new Date(2016, 3, 16, 15, 40, 35), 68]
  ];
  public candle_ChartData = [
      ['Day', 'Low', 'Opening value', 'Closing value', 'High'],
      ['Mon', 28, 28, 38, 38],
      ['Tue', 38, 38, 55, 55],
      ['Wed', 55, 55, 77, 77],
      ['Thu', 77, 77, 66, 66],
      ['Fri', 66, 66, 22, 22]
  ];
  public pie_ChartData = [
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]];
  public bar_ChartData = [
      ['City', '2010 Population', '2000 Population'],
      ['New York City, NY', 8175000, 8008000],
      ['Los Angeles, CA', 3792000, 3694000],
      ['Chicago, IL', 2695000, 2896000],
      ['Houston, TX', 2099000, 1953000],
      ['Philadelphia, PA', 1526000, 1517000]];
  public map_ChartData = [
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
  ];
  public org_ChartData = [
      ['Name', 'Manager', 'ToolTip'],
      [{ v: 'Mike', f: 'Mike<div style="color:red; font-style:italic">President</div>' },
          '', 'The President'],
      [{ v: 'Jim', f: 'Jim<div style="color:red; font-style:italic">Vice President</div>' },
          'Mike', 'VP'],
      ['Alice', 'Mike', ''],
      ['Bob', 'Jim', 'Bob Sponge'],
      ['Carol', 'Bob', '']
  ];
  public line_ChartOptions = {
      title: 'Company Performance',
      curveType: 'function',
      legend: {
          position: 'bottom'
      }
  };
  public bubble_ChartOptions = {
      title: 'Correlation between life expectancy, fertility rate ' +
      'and population of some world countries (2010)',
      hAxis: { title: 'Life Expectancy' },
      vAxis: { title: 'Fertility Rate' },
      bubble: { textStyle: { fontSize: 11 } }

  };
  public candle_ChartOptions = {
      legend: 'none',
      bar: { groupWidth: '100%' }, // Remove space between bars.
      candlestick: {
          fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
          risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
      }
  };
  public scatter_ChartOptions = {
      legend: {
          position: 'bottom'
      },
      title: 'Company Sales Percentage'
  };
  public bar_ChartOptions = {
      title: 'Population of Largest U.S. Cities',
      chartArea: { width: '50%' },
      hAxis: {
          title: 'Total Population',
          minValue: 0,
          textStyle: {
              bold: true,
              fontSize: 12,
              color: '#4d4d4d'
          },
          titleTextStyle: {
              bold: true,
              fontSize: 18,
              color: '#4d4d4d'
          }
      },
      vAxis: {
          title: 'City',
          textStyle: {
              fontSize: 14,
              bold: true,
              color: '#848484'
          },
          titleTextStyle: {
              fontSize: 14,
              bold: true,
              color: '#848484'
          }
      }
  };
  public pie_ChartOptions = {
      title: 'My Daily Activities',
      width: 900,
      height: 500
  };
  public gauge_ChartData = [
      ['Label', 'Value'],
      ['Systolic', 120],
      ['Diastolic', 80]];
  public gauge_ChartOptions = {
      width: 400, height: 120,
      redFrom: 90, redTo: 100,
      yellowFrom: 75, yellowTo: 90,
      minorTicks: 5
  };
  public area_ChartData = [
      ['Year', 'Sales', 'Expenses'],
      ['2013', 1000, 400],
      ['2014', 1170, 460],
      ['2015', 660, 1120],
      ['2016', 1030, 540]
  ];

  public area_ChartOptions = {
      title: 'Company Performance',
      hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
      vAxis: { minValue: 0 }
  };
  public map_ChartOptions = {};
  public org_ChartOptions = {
      allowHtml: true
  };

  chartData = {
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    series: [
      {
        name: 'NC',
        data: [7057, 6858, 6643, 6570, 6115, 107, 31, 635, 203, 2, 2]
      }, {
        name: 'OK',
        data: [54047, 52484, 50591, 49479, 46677, 33, 156, 947, 408, 6, 2]
      }, {
        name: 'KO',
        data: [11388, 11115, 10742, 10757, 10290, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'VALID',
        data: [8836, 8509, 8255, 7760, 7621, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'CHECK',
        data: [115, 162, 150, 187, 172, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'COR',
        data: [12566, 12116, 11446, 10749, 10439, 973, 914, 4054, 732, 34, 2]
      }
    ]
  };

  // StockChart Options
  options: Object;  

  constructor(private http: Http) { 
    http.get('https://cdn.rawgit.com/gevgeny/angular2-highcharts/99c6324d/examples/aapl.json').subscribe(res => {
        this.options = {
            title : { text : 'AAPL Stock Price' },
            chart: {
                // width: 800
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

  ngOnInit() {
  }

}
