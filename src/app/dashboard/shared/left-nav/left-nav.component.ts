import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  showNav: boolean = false;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
