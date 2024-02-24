import { LightningElement, api, track, wire } from 'lwc';

import fetchContactRecord from '@salesforce/apex/accountProvider.fetchContactRecord';

export default class ConListByRecordId extends LightningElement {

@api recordId;

@track columns = [
    { label: 'Account Id', fieldName: 'AccountId', type: 'text' , sortable: true },
    { label: 'Phone',  fieldName: 'Phone', type: 'text' , sortable: true},
    { label: 'First Name',  fieldName: 'FirstName', type: 'text' , sortable: true},
    { label: 'Last Name',  fieldName: 'LastName', type: 'text' , sortable: true},
    { label: 'Email Id', fieldName: 'Email',type: 'text' , sortable: true}
];




@wire(fetchContactRecord, {accId : '$recordId'})Contacts;

}