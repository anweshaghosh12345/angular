import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers:[RecordsService]
})
export class EmpInfoComponent implements OnInit{

  infoReceive1: string[]=[];
  infoReceive2: string[]=[];
  infoReceive3: string[]=[];

  getInfoFromServiceClass1(){
    this.infoReceive1=this.rservice.getinfo1();
  }

  getInfoFromServiceClass2(){
    this.infoReceive2=this.rservice.getinfo2();
  }

  getInfoFromServiceClass3(){
    this.infoReceive3=this.rservice.getinfo3();
  }


constructor(private rservice: RecordsService){

}
ngOnInit(): void {
    
}
}
