import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Business } from '../com.biz';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class BusinessService {

	
		private NAMESPACE: string = 'com.biz.Business';
	



    constructor(private dataService: DataService<Business>) {
    };

    public getAll(): Observable<Business[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Business> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Business> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Business> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Business> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
