import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-statecity',
  templateUrl: './statecity.component.html',
  styleUrls: ['./statecity.component.scss']
})
export class StatecityComponent implements OnInit {
results;
  constructor() { }
  

  ngOnInit() {}
  public countries= [{
    "country": "Afghanistan",
"states": [
          { "name":"Nurestan", "cities":["c1", "c2", "c3"]  },
          { "name":"Oruzgan", "cities":["orc1", "oruc2", "oruc3"] },
          { "name":"Panjshir", "cities":["3c1", "3c2", "3c3"]  }
        ]
},
{
    "country": "Albania",
    "states": [ 
          { "name": "Korce" , "cities":["c1", "c2", "c3"] },
          { "name": "Kukes",  "cities":["orc1", "oruc2", "oruc3"] },
          { "name": "Lezhe","cities":["orc1", "oruc2", "oruc3"]},
          { "name": "Shkoder", "cities":["orc1", "oruc2", "oruc3"]},
          { "name": "Tirane","cities":["orc1", "oruc2", "oruc3"]}
        ]
},      
{
    "country": "Antarctica",
    "states": []
}           
]

states= []; cities = [];
countryChange(e){
console.log(e.target.value)
this.countries.filter(element => {
if(element.country == e.target.value){
  console.log(element.states[0],"first state")
  this.states = element.states;
}
});
this.cities = []
}
statesChange(evt){
console.log(evt.target.value,this.states)
this.states.filter( element =>{
if(element.name == evt.target.value){
  this.cities = element.cities;
}
});
}
}

