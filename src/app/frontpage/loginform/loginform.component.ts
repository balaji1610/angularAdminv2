import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit(): void {
  }
  visible:boolean = true;
  login() {
      this.router.navigate(["dheader"]);
      this.visible = this.visible?false:true;
}

}
