import { Component, OnInit } from '@angular/core';
import { Task } from '../../modles/task';
import { ServiceService } from '../../services/service.service';
import { Siblings } from '../../modles/siblings';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  task: Task;
  sibling: Siblings

  constructor(private serviceService: ServiceService) {
    this.task = {
      discription: '',
      date: null,
      sibling_id: null
    };
  }


  ngOnInit() {
    this.getsibling();
  }

  onClick() {

    this.serviceService.onClick(this.task).subscribe((t) => {
      console.log(t);
    });
  }

  getsibling() {
    this.serviceService.gets().subscribe(res => {
      console.log(res);
      this.sibling = res;
    });
  }
}
