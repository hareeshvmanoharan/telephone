
import { Component, OnInit } from '@angular/core';
import '../../assets/js/algorithm.js';
declare var telephoneRouter:any;

const mockOperators: any = require('../mock-operators.json');

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  phnumber:number;
  tR:any;
  operotorList:any;
  isFound:boolean = true;
  result:Object;

  constructor() { }

  ngOnInit() {
    this.tR = telephoneRouter;
    this.operotorList = mockOperators;
  }

  findOperator():any{
    this.result  = this.tR.findCheapest(this.phnumber, this.operotorList);
    if(this.result != null){
      this.isFound = true;
    }else{
      this.isFound = false;
    }
  }

}
