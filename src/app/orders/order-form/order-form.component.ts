import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-order-form',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  @Input() formData: Object | any = {}

  @Output() updateData = new EventEmitter<any>();
  @Output() newEntry = new EventEmitter<any>();
  @Output() cancle = new EventEmitter<any>();

  public form: FormGroup | any;

  // public formData:any
  constructor(private fb: FormBuilder,private mockData:MockDataService) { }

  ngOnInit(): void {
    this.initializeForm()
    if(this.formData && Object.keys(this.formData).length){
      this.form.patchValue(this.formData)
    }else{
      this.form.get('orderNo').setValue(this.mockData.data.length+1)
    }
  }

  initializeForm(orderNo?:any) {
    this.form = this.fb.group({
      orderNo: [{value:'', disabled:true}, [Validators.required, Validators.minLength(4)]],
      orderDueDate: ['', [Validators.required, Validators.minLength(4)]],
      customerName: ['', [Validators.required, Validators.minLength(4)]],
      customerAddress: ['', [Validators.required, Validators.minLength(4)]],
      customerPhone: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      totalOrder: ['', [Validators.required, Validators.minLength(1)]],
    })
  }

  update() {
    this.updateData.emit(this.form.getRawValue())
    this.initializeForm()
  }

  create(){
    this.newEntry.emit(this.form.getRawValue())
    this.initializeForm()
  }

  closeModel() {
    this.cancle.emit()
    this.initializeForm()
  }

  delete(){
    this.updateData.emit()
    this.initializeForm()
  }

}
