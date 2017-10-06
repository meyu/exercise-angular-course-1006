import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() todoCount: number = 0;
  fltType: number = 0;

  flt: string[] = ['all','active','completed']

  constructor() { }
  ngOnInit() { }

  chgFltType(val: number) {
    this.fltType = val;
  }

  
}
