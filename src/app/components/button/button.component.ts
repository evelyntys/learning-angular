import { Component, OnInit } from '@angular/core';
import { JokesService } from 'src/app/jokes.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  // template: `<h1>this is a button</h1>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  jokes: any;
  currentSetup = null;
  currentPunchline = null;
  currentI = -1;
  name = '';
  loader = true;

  constructor(private jokeService: JokesService){

  }

  ngOnInit(): void {
    this.readJoke();
  }

  readJoke(){
    this.jokeService.getJoke().subscribe(joke => {
      this.currentSetup = joke.setup;
      this.currentPunchline = joke.punchline;
      console.log(joke);
      this.loader = false;
    });
  }

  printButton(){
    console.log("i am a button...")
  }

  doSomething(){
    console.log("doing something")
  }

  showAlert(){
    alert("hello!")
  }

  text = "button";

}
