import { Component, OnInit } from '@angular/core';
//import * as CanvasJS  from 'canvasjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //this.showChart();
  }
  showChart() {
//     var chart = new CanvasJS.Chart("chartContainer", {
//       animationEnabled: true,
//       theme: "light2",
//       exportEnabled: true,      
//       title:{
//         text: "Fruits sold in First & Second Quarter"              
//       },

//       data: [  //array of dataSeries     
//       { //dataSeries - first quarter
//  /*** Change type "column" to "bar", "area", "line" or "pie"***/        
//        type: "column",
//        name: "First Quarter",
//        showInLegend: true,
//        dataPoints: [
//        { label: "banana", y: 58 },
//        { label: "orange", y: 69 },
//        { label: "apple", y: 80 },                                    
//        { label: "mango", y: 74 },
//        { label: "grape", y: 64 }
//        ]
//      },

//      { //dataSeries - second quarter

//       type: "column",
//       name: "Second Quarter", 
//       showInLegend: true,               
//       dataPoints: [
//       { label: "banana", y: 63 },
//       { label: "orange", y: 73 },
//       { label: "apple", y: 88 },                                    
//       { label: "mango", y: 77 },
//       { label: "grape", y: 60 }
//       ]
//     }
//     ],
//     /** Set axisY properties here*/
//         axisY:{
//           prefix: "$",
//           suffix: "K",
//           includeZero: false
//         }    
//     });

//     chart.render();
  }
}


