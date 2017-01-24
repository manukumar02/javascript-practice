// var x = function(j) {
//     this.i = 0;
//     this.j = j;
// };
//
// x.prototype.getJ = function () {
//   return this.j;
// };
//
// var x1 = new x(1);
// var x2 = new x(2);
//
// console.log(x1.getJ());
// console.log(x2.getJ());

var job = function () {
    this.pays = true;
};

// job.prototype.print = function () {
//     console.log(this.pays ? 'Please hire me': 'No Thank You');
// };

//subclass
var TechJob = function (title, pays) {
    job.call(this);
    this.title = title;
    this.pays = pays;
};


TechJob.prototype = Object.create(job.prototype);
TechJob.prototype.constructor = TechJob;

// TechJob.prototype.print = function() {
//     console.log(this.pays? this.title + ' Tech Job is Awesome': 'No Thanks!!!');
// };

Object.prototype.print = function () {
  console.log(this.pays + ', '+ this.title, ' I am executing from the Master Object');
};

var softwarePosition = new TechJob('Javascript Programmer', true);
var softwarePosition2 = new TechJob('VB Programmer', true);

console.log(softwarePosition.print());
console.log(softwarePosition2.print());