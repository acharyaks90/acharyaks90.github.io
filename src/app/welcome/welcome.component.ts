import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }
  skill = ['Anil Kumar','Software Engineer','Yoga Trainer','Social Activist'];
  type;
  ngOnInit(): void {

  let idx=0;
  let n=0;
  let up = true;

  setInterval(()=>{
    
      var word = this.skill[idx];
      var ln = word.length;
  
      if(up){
        this.type = word.slice(0,n);
        n++
      };
      if(n===ln+1){up=false};
      if(!up){
       this.type = word.slice(0,n);
        n--
      }
      if(n===0){
        up=true
        idx++
      }
      if(idx==this.skill.length){
        idx=0;
      }
      
  
  },200)

  }

}
