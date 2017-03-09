let data = [
  {
    author: "Gill",
    body: "About cars",
    photo_url: "http://www.ford.com/resources/ford/general/newvehicles/Future_Landing_Page/fordGT_large.jpg?v=1451486780000"
  },
  {
    author: "Gill",
    body: "Rainy Day",
    photo_url: "http://commonwealthmagazine.org/wp-content/uploads/sites/2/2015/09/rainy_day_raining_cold_abstract_1600x1200_hd-wallpaper-1557994.jpg"
  },
  {
    author: "Gill",
    body: "Just comment",
    photo_url: "http://i2.kym-cdn.com/photos/images/newsfeed/000/895/827/a67.png"
  }
]


"use strict";



angular
  .module("wdinstagramApp", [ "ui.router", "ngResource"])
  .config(["$stateProvider", RouterFunction])
  .factory("InstagramFactory", ["$resource", InstagramFactoryFunction])
  .controller("InstagramNewController", ["InstagramFactory", "$state", InstagramNewControllerFunction])
  .controller("InstagramShowController", ["InstagramFactory", "$stateParams", InstagramShowControllerFunction])
  .controller("InstagramEditController", ["InstagramFactory", "$stateParams", "$state", InstagramEditControllerFunction])

  function RouterFunction($stateProvider){
  $stateProvider
  .state("instagramIndex", {
    url: "/instagrams",
    templateUrl: "js/ng-views/index.html",
    controller: "InstagramIndexController",
    controllerAs: "vm"
  })
  .state("instagramNew", {
    url: "/instagrams/new",
    templateUrl: "js/ng-views/new.html",
    controller: "InstagramNewController",
    controller: "vm"
  })
  .state("instagramShow", {
    url: "/instagrams/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "InstagramShowController",
    controllerAs: "vm"
  })
  .state("instagramEdit", {
    url: "instagrams/edit",
    templateUrl: "js/ng-views/edit.html",
    controller: "InstagramEditController",
    controller: "vm"
  })
}

  function InstagramFactoryFunction($resource) {
    return $resource("http://localhost:3000/instagrams/:id")
  }

  function InstagramIndexControllerFunction(InstagramFactory){
  this.instagrams = InstagramFactory.query()
  }

  function InstagramNewControllerFunction(InstagramFactory, $state) {
  this.instagram = new InstagramFactory();
  this.create = function() {
    this.instagram.$save(function(instagram) {
      $state.go("instagramShow", {id: instagram.id})
    })
   }
  }

  function InstagramShowControllerFunction(InstagramFactory, $stateParams) {
  this.instagram = InstagramFactory.get({id: $stateParams.id})
  }

  function InstagramEditControllerFunction(InstagramFactory, $stateParams, $state) {
  this.instagram = InstagramFactory.get({id: $stateParams.id})
  this.update = function() {
    this.instagram.$update({id: $stateParams.id})
  }
  this.destroy = function() {
      this.instagram.$delete({id: $stateParams.id});

    }
  }
