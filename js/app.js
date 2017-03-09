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

(function(){
  angular.module("wdinstagram", [])
})();


angular
  .module("wdinstagramApp", [ "ui.router", "ngResource"])
  .config(["$stateProvider", RouterFunction])



  function RouterFunction($stateProvider){
  $stateProvider
  .state("instagramIndex", {
    url: "/instagrams",
    templateUrl: "js/ng-views/index.html",
    controller: "InstagramIndexController",
    controllerAs: "vm"
  })
  .state("InstagramShow", {
    url: "/entries/:id",
    templateUrl: "js/ng-views/show.html",
  })


  function InstagramIndexControllerFunction(EntryFactory){
  this.instagrams = InstagramFactory.query()
}
