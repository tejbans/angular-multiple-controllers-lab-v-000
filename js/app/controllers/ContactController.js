function ContactController(){
  var vm=this;
  vm.name = "Bill Gates";
  vm.email ="bill@microsoft.com";
  vm.phone ="1234567890";
  

  this.changeName = function(){
    vm.name = 'Bill Nye'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)