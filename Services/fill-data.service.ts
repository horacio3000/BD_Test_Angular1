import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../Models/ProductModel';
import configurl from '../../assets/Config/config.json';
import { ClientModel } from '../Models/ClientModel';
import { TableMother } from '../Models/tableMother';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class FIllDataService {


  tableMother: TableMother[] = [];
  clinetlst: ClientModel[] = [];
  productlis: ProductModel[] = [];

  mResult: Subject<TableMother[]> = new Subject<TableMother[]>();


  mCounter = 0;


  constructor(private mhttp: HttpClient) {

  }


  refresh():Observable<any> {
    let url = configurl.apiServer.url + '/api/Main/Refresh/';
    return this.mhttp.get<any>(url)
  }


  init() {

    //Resetting data
    this.tableMother = [];
    this.clinetlst = [];
    this.productlis = [];
    this.mCounter = 0;

    ///Getting client list asynchronic by promes
    const myPromise = new Promise((resolve, reject) => {
      let url = configurl.apiServer.url + '/api/Main/ClientLIst';
      this.mhttp.get<ClientModel[]>(url)
        .subscribe((res) => {
          this.clinetlst = res;
          resolve("1");
        })
    });
    myPromise.then((value) => {
      this.JoinPromisesAndTables();
    });

    ///Getting product list asynchronic by promes
    const myPromise2 = new Promise((resolve, reject) => {
      let url = configurl.apiServer.url + '/api/Main/ProductsList';
      this.mhttp.get<ProductModel[]>(url)
        .subscribe((res) => {
          this.productlis = res;
          resolve("2");
        });
    });
    myPromise2.then((value) => {
      this.JoinPromisesAndTables();
    });
  }

  //Checking the end of the 2 requests
  JoinPromisesAndTables() {

    //Counting request
    this.mCounter++;

    //the 2 tables are ready by asynchronic method
    if (this.mCounter == 2) {

      //Refreshing the table mother
      this.tableMother = [];
      let counter = 0;
      //Joining by productType
      for (const iteratorProduct of this.productlis) {

        //Definition of the table row
        let mRow: TableMother = new TableMother();

        for (const iteratorClient of this.clinetlst) {
          if (iteratorClient.productType != iteratorProduct.productType) {
            continue;
          }
          mRow.cliname = iteratorClient.cliname;
          mRow.cliidzeut = iteratorClient.idzeut;
          mRow.clidDate = this.formatDate(iteratorClient.dDate);
          mRow.cliisMale = iteratorClient.isMale;
          mRow.prname = iteratorProduct.prname;
          mRow.productid = iteratorProduct.productid
          mRow.price = iteratorProduct.price;
          mRow.productType = iteratorProduct.productType;

          counter++;
          mRow.id = counter;
          //Adding table row
          this.tableMother.push(mRow);
        }
        console.log(this.tableMother);
        //Sending the tablemother to the index page as observable.
        this.mResult.next(this.tableMother);

      }

    }



  }



  formatDate(date: any) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }




}

