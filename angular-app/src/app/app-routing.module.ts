import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { FieldComponent } from './Field/Field.component';
import { AnimalComponent } from './Animal/Animal.component';
import { BusinessComponent } from './Business/Business.component';

const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'Field', component: FieldComponent},
		
		{ path: 'Animal', component: AnimalComponent},
		
		{ path: 'Business', component: BusinessComponent},
		
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
