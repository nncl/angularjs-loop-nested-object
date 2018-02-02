var app = angular.module("app", []);

app.controller("AppCtrl",function(ObjectService){
    var vm = this,
        object = {},
        o = object;

    vm.objectService = ObjectService;

    vm.categories = ["Cuidados Diários", "Corpo", "Loção Hidratante"];

    for (var i = 0; i < vm.categories.length; i++) {
        // o = o[vm.categories[i]] = {};
        o = o["item"] = {
            "name" : vm.categories[i]
        };
    }

    vm.menu = object;
});

app.factory("ObjectService", function(){
    var self = {};

    return self;
});

// TODO https://stackoverflow.com/questions/28282419/angular-ng-repeat-with-nested-json-objects