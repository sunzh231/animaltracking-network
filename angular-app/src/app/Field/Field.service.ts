import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Field } from '../com.biz';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class FieldService {

	
		private NAMESPACE: string = 'com.biz.Field';
	



    constructor(private dataService: DataService<Field>) {
    };

    public getAll(): Observable<Field[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Field> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Field> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Field> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Field> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
