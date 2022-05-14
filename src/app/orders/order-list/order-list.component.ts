import { Component, Input, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  p: any = 1;

  public isRemoveComponentFromDom: any = false
  public formData: any
  public orderIdToBeDeleted: any
  @Output() sendFormData: EventEmitter<any> = new EventEmitter();
  @ViewChild('closeModal') closeModal: ElementRef | undefined

  constructor(public mockData:MockDataService,public router:Router) { }

  ngOnInit(): void {}

  sendFormDate(formData?: any) {
    try {
      this.formData = formData
      this.isRemoveComponentFromDom = true
    } catch (error) {
      console.log(error)
    }
  }

  update(value: any) {
    try {
      let index = this.mockData.data.findIndex((elem) => elem.orderNo === value.orderNo)
      if (index > -1) {
        this.mockData.data[index] = value
      }
      this.isRemoveComponentFromDom = false
      this.closeModal?.nativeElement.click()
    } catch (error) {
      console.log(error)
    }
  }

  cancle() {
    this.closeModal?.nativeElement.click()
    this.isRemoveComponentFromDom = false
  }

  create(values: any) {
    try {
      this.mockData.data.push(values)
      this.closeModal?.nativeElement.click()
      this.isRemoveComponentFromDom = false
    } catch (error) {
      console.log(error)
    }
  }

  openDeleteModel(index: any) {
    this.orderIdToBeDeleted = index
  }

  delete() {
    this.mockData.data.splice(this.orderIdToBeDeleted, 1)
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['login'])
  }



}
