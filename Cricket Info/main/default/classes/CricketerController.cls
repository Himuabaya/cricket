public with sharing class CricketerController {
    @AuraEnabled(cacheable=true)
    public static List<Cricketer__c> getPlayersRecords(){
        return [Select Id, Name,Image_Url__c,Age__c,Nationality__c,Run__c from Cricketer__c];
    }
   
}