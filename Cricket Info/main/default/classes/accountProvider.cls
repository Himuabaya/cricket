public with sharing class accountProvider {
    
        @AuraEnabled
        public static string createAccount( string accName){
            try {
                    if(!string.isBlank(accName)){
                        Account objAcc= new Account(Name= accName);
                        insert objAcc;
                        return 'Record has been Created Successfully...!!!';
                    }
                    else {
                        return 'Locha';
                    }
                
            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
        }
        @AuraEnabled
        public static string createNewRecord(Account objAcc){
            try {
                    if(objAcc!= null){
                        Insert objAcc;
                        return 'New Account Record Created Successfully...!!! ';

                    }
                    else {
                        return 'Locha ,Something is Wrong....!!!';
                    }
            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
        }
        @AuraEnabled
        public static Account searchAccountRecord(Account objAcc){
            try {
                If(objAcc !=null){
                    return [select id, Name, Type, SLA__c from Account where Name=: objAcc.Name];

                }
                else {
                    return null;
                }

            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
        }
        @AuraEnabled
        public static List<Account> searchAccountRecordAsPerType(Account objAcc){
            try {
                if(objAcc != null){
                    return [select Id, Name,Type, SLA__C, createdDate from Account Where Type=:objAcc.Type];

                }
                else {
                    return null;
                }
                
            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
        }
        @AuraEnabled(cacheable=true)
        public static  List<Account> getRecords(Integer numOfEmployee){
            try {
                if(numOfEmployee != null){
                    return[Select Id, Name from Account Where NumberOfEmployees >=: numOfEmployee];

                }
                else{
                    return null;
                }
                
            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
        }
        @AuraEnabled(cacheable=true)
    public static List<Contact> fetchContactRecord(String accId){
        try {
            return[Select Id, AccountId,Account.Name,FirstName, LastName, Email,Phone From Contact where AccountId =:accId];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }


    }