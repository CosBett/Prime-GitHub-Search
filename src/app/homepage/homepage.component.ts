import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Find } from '../find';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  searchUser = new Find('');
  @Output() getUsername = new EventEmitter<Find>();
  getData: any;

  findUser(data: any) {
    this.getData.emit(data.value.searchGhUser)
    console.log(data.value.searchGhUser)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
