import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomerDataService {

    customers: any;
    subscription: any;

    constructor(private db: AngularFirestore) { }

    subscribeToCustomers() {
        if (!this.customers) {
            this.subscription = this.db.collection('customers').valueChanges({ idField: 'id' })
                .subscribe(customer => {
                    this.customers = customer;
                });
        }
    }

    getCustomer(id: string) {
        if (this.customers) {
            const cached = this.customers.find((v: any) => v.id === id);
            console.log('use cached');
            return of(cached);
        } else {
            console.log('use db');
            return this.db.collection('customers').doc(id).valueChanges();
        }
    }

    dispose() {
        this.subscription.unsubscribe();
        this.customers = null;
    }
}
