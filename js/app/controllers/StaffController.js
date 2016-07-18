function StaffController(){
  this.name = "Steve Jobs"
  this.email ="Steve@apple.com"
  this.phone ="1234567893"
}

angular
  .module('app')
  .controller('StaffController', StaffController)