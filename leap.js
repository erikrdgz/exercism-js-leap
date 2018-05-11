//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (year) {

  this.year = year

};

Year.prototype.isLeap = function () {

  response = false

  if (this.year % 400 == 0){
    response = true;
  }
  else if (this.year % 100 == 0){
    response = false;
  }
  else if (this.year % 4 == 0){
    response = true;
  }
return response
};

module.exports = Year;
