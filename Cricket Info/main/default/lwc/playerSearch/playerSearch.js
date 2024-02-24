import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import cricketer_object from '@salesforce/schema/Cricketer__c';
import Nationality_Field from '@salesforce/schema/Cricketer__c.Nationality__c';

export default class PlayerSearch extends NavigationMixin(LightningElement) {
    recordTypeId;
    picklistValue;
    optionsArray;
    selectNationality = '';

    @wire(getObjectInfo, { objectApiName: cricketer_object })
    objectInfo({ data, error }) {
        if (error) {
            console.error('Error fetching object info:', error);
        } else if (data) {
            this.recordTypeId = data.defaultRecordTypeId;
            console.log('Default Record Type ID:', this.recordTypeId);
        }
    }

    @wire(getPicklistValues, { recordTypeId: '$recordTypeId', fieldApiName: Nationality_Field })
    fieldInfo({ data, error }) {
        if (error) {
            console.error('Error fetching picklist values:', error);
        } else if (data) {
            let arr = [];
            this.picklistValue = data.values;
            console.log('Picklist Values:'+JSON.stringify( this.picklistValue));

            this.picklistValue.forEach(element => {
                arr.push({ label: element.value, value: element.value });
            });

            this.optionsArray = arr;
            console.log('Options Array:'+JSON.stringify (this.optionsArray));
        }
    }

    searchCricketerHandler() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Cricketer__c',
                actionName: 'new'
            }
        });
    }

    handleOptionChange(event) {
        this.selectNationality = event.detail.value;
        console.log('Selected Nationality:'+JSON.stringify( this.selectNationality));
    }
}