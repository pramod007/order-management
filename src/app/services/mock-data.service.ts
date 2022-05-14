import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  public data: Array<any> = [
    {
      orderNo: 1,
      orderDueDate: '2022-05-06',
      customerName: 'Nikhil',
      customerAddress: 'Pune',
      customerPhone: 9986878787,
      totalOrder: 98,
    },
    {
      orderNo: 2,
      orderDueDate: '2022-05-08',
      customerName: 'Pawan',
      customerAddress: 'Vadodara',
      customerPhone: 9846465454,
      totalOrder: 86,
    },
    {
      orderNo: 3,
      orderDueDate: '2022-05-12',
      customerName: 'Hitesh',
      customerAddress: 'Delhi',
      customerPhone: 9735434545,
      totalOrder: 8,
    },
    {
      orderNo: 4,
      orderDueDate: '2022-05-15',
      customerName: 'Pappya',
      customerAddress: 'Jaypur',
      customerPhone: 9975754322,
      totalOrder: 9,
    },
    {
      orderNo: 5,
      orderDueDate: '2022-05-06',
      customerName: 'Nikhil',
      customerAddress: 'Pune',
      customerPhone: 9986878787,
      totalOrder: 98,
    },
    {
      orderNo: 6,
      orderDueDate: '2022-05-08',
      customerName: 'Pawan',
      customerAddress: 'Vadodara',
      customerPhone: 9846465454,
      totalOrder: 86,
    },
    {
      orderNo: 7,
      orderDueDate: '2022-05-12',
      customerName: 'Hitesh',
      customerAddress: 'Delhi',
      customerPhone: 9735434545,
      totalOrder: 8,
    },
    {
      orderNo: 8,
      orderDueDate: '2022-05-15',
      customerName: 'Pappya',
      customerAddress: 'Jaypur',
      customerPhone: 9975754322,
      totalOrder: 9,
    },
    {
      orderNo: 9,
      orderDueDate: '2022-05-06',
      customerName: 'Nikhil',
      customerAddress: 'Pune',
      customerPhone: 9986878787,
      totalOrder: 98,
    },
    {
      orderNo: 10,
      orderDueDate: '2022-05-08',
      customerName: 'Pawan',
      customerAddress: 'Vadodara',
      customerPhone: 9846465454,
      totalOrder: 86,
    },
    {
      orderNo: 11,
      orderDueDate: '2022-05-12',
      customerName: 'Hitesh',
      customerAddress: 'Delhi',
      customerPhone: 9735434545,
      totalOrder: 8,
    },
    {
      orderNo: 12,
      orderDueDate: '2022-05-15',
      customerName: 'Pappya',
      customerAddress: 'Jaypur',
      customerPhone: 9975754322,
      totalOrder: 9,
    },
    {
      orderNo: 13,
      orderDueDate: '2022-05-06',
      customerName: 'Nikhil',
      customerAddress: 'Pune',
      customerPhone: 9986878787,
      totalOrder: 98,
    },
    {
      orderNo: 14,
      orderDueDate: '2022-05-08',
      customerName: 'Pawan',
      customerAddress: 'Vadodara',
      customerPhone: 9846465454,
      totalOrder: 86,
    },
    {
      orderNo: 15,
      orderDueDate: '2022-05-12',
      customerName: 'Hitesh',
      customerAddress: 'Delhi',
      customerPhone: 9735434545,
      totalOrder: 8,
    },
    {
      orderNo: 16,
      orderDueDate: '2022-05-15',
      customerName: 'Pappya',
      customerAddress: 'Jaypur',
      customerPhone: 9975754322,
      totalOrder: 9,
    },
    {
      orderNo: 17,
      orderDueDate: '2022-05-15',
      customerName: 'Pappya',
      customerAddress: 'Jaypur',
      customerPhone: 9975754322,
      totalOrder: 9,
    }
  ]

  constructor() { }
}
