import { Component, OnInit } from '@angular/core';
import { Task } from '../../modles/task';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-manegment',
  templateUrl: './manegment.component.html',
  styleUrls: ['./manegment.component.css']
})
export class ManegmentComponent implements OnInit {
  task: Task;
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
  
    this.serviceService.get().subscribe(res => {
      console.log(res);
      this.task = res;
    })
    
  }
}


