import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import configurl from '../../assets/Config/config.json';
import { Observable, Subject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteRowService {

  constructor(private mhttp: HttpClient) {

  }

  public delete(productid:number | undefined,type:number | undefined) : Observable<any>
  {
      if(productid != undefined && type != undefined)
      {
          let url = configurl.apiServer.url + '/api/Main/ArticleDelete/'+productid.toString()+'/'+type.toString();
          return this.mhttp.get<any>(url)
      }
      return new Observable;
  }

}
