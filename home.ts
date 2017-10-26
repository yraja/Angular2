import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private http: Http) {}
  testResponse:any=[];
  submitMobile(mobileNumber){
    alert(mobileNumber);
    if(mobileNumber == undefined){

      alert('Please enter the mobile number');

    }else{
    this.http.get('http://ec2-35-154-60-53.ap-south-1.compute.amazonaws.com:8080/KisanService/user/checkMobile/',mobileNumber).subscribe(
      data => {
       alert('ok');
       data => {
        this.testResponse = data;
        console.log("I CANT SEE DATA HERE: ", this.testResponse);
      }
        alert(this.testResponse.message)
        this.navCtrl.push(LoginPage);
       
      },
      error => {
       alert(this.testResponse.message);
      }
    )
  
  }
    
  }

}
