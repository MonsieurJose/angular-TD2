/**
 * Created by cleme on 14/02/2017.
 */



angular.module("ContactApp").controller("ContactController",[function(){
        var self = this;
        this.visible = 0;
        this.tmpcontact={};
        this.q = "";
        this.modification = false;
    this.contacts=[
        {
            "nom" : "VIVIER", "prenom":"Clement" , "adresse" : "21505847@etu.unicaen.fr"
        },
        {
            "nom" : "FAUVEL", "prenom":"Anthony" , "adresse" : "fezgez@etu.unicaen.fr"
        },
        {
            "nom" : "BOI", "prenom":"Ari" , "adresse" : "gezgezgze@etu.unicaen.fr"
        }
    ];
    this.contact={};
    this.delete = function (contact) {
            contact.delete = true;
            self.visible = 0;
    };
    this.toAdd = function () {
        if (self.visible == 1) {
            self.visible = 0;
        } else {
            self.visible = 1;
        }
    };

    this.vider = function() {
        this.tmpcontact=[];
    };

    this.add = function () {
        self.contacts.push(self.tmpcontact);
    };
    this.respawn = function () {
        for(var i=0;i<self.contacts.length;i++) {
            self.contacts[i].delete = false;
        }
    };
    this.toUpdate = function (contact) {
        if (self.visible == 2) {
            self.visible = 0;
            self.modification = false;
        } else {
            self.visible = 2;
            self.contact=contact;
            self.tmpcontact=angular.copy(self.contact);
            self.modification = true;
        }
    };
    this.update = function () {
        if (self.modification == true) {
            self.contacts[self.contacts.indexOf(self.contact)]=self.tmpcontact;
            self.visible = 0;
        }
    };

}]).directive('myContact', function() {
    return {
        restrict:'A',
        templateUrl: 'contact.html'

    };
});
angular.module("ContactApp").filter("notDeleted",function() {
    return function(items){
        var results=[];
        for(var i=0;i<items.length;i++) {
            if(!items[i].delete)
                results.push(items[i]);
        }
        return results;
    };
});