import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() titlepost: string;
  @Input() contentpost: string;
  @Input() loveItspost: number;
  @Input() createdDatepost: Date;
  constructor() { }

  ngOnInit(): void {
  }

}
