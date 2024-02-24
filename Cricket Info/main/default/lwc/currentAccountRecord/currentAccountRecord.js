import { LightningElement,api,wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';   
import  TYPE_FIELD from '@salesforce/schema/Account.Type';
const fields = [ TYPE_FIELD ];


export default class CurrentAccountRecord extends LightningElement {
    @api recordId;
    @wire (getRecord, { recordId: '$recordId', fields })
    account;
    typeFlag=false;

    get type(){
        if(getFieldValue(this.account.data, TYPE_FIELD) == 'Prospect'){
            this.typeFlag=true;
        }
        else{
            this.typeFlag=false;

        }
        return getFieldValue(this.account.data, TYPE_FIELD);

    }
    

}