/**
 * Created by cleme on 14/02/2017.
 */



angular.module("ContactApp").controller("ContactController",[function(){
        var self = this;
    this.contacts=[
        {
            "nom" : "VIVIER", "prenom":"Clement" , "adresse" : "21505847@etu.unicaen.fr", "supp" : "false"
        },
        {
            "nom" : "FAUVEL", "prenom":"Anthony" , "adresse" : "fezgez@etu.unicaen.fr", "supp" : "false"
        },
        {
            "nom" : "BOI", "prenom":"Ari" , "adresse" : "gezgezgze@etu.unicaen.fr", "supp" : "true"
        }
    ];
    this.contact={};
    this.delete = function () {

    };
    this.toAdd = function () {

    };
    this.add = function () {

    };
    this.toUpdate = function () {

    };
    this.update = function () {

    };

}]).directive('myContact', function() {
    return {
        restrict:'A',
        scope:{contact:"="},
        templateUrl: 'contact.html'

    };
});