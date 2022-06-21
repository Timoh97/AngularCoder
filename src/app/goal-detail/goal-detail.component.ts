import { Component, OnInit, Input} from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  
  // input binding
  @Input() goal!: Goal;
  // input binding
  constructor() { }

  ngOnInit(): void {
  }

}
