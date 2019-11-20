
import {PaysListComponent} from './pays-list/pays-list.component';
import {PaysFormComponent} from './pays-form/pays-form.component';

export const paysPageRoutes = [
  { path: 'pays-list', component: PaysListComponent },
  { path: 'pays-form', component: PaysFormComponent },
  { path: 'pays-form/:id', component: PaysFormComponent }
];
