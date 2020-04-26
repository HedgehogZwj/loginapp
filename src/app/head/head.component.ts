import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  host: {
    class: 'div'
  }
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Login() {
    const pages = document.getElementsByClassName('page');
    pages[1].className = 'page';
    pages[2].className = 'page hide';
    pages[3].className = 'page hide';
    pages[4].className = 'page hide';
  }

  Register() {
    const pages = document.getElementsByClassName('page');
    pages[1].className = 'page hide';
    pages[2].className = 'page';
    pages[3].className = 'page hide';
    pages[4].className = 'page hide';
  }
}
