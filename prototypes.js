function Profile(name, jersey, year) {
    this.name = name;
    this.jersey = jersey;
    this.year = year;
}

Profile.prototype.getSummary = function() {
    return `${this.name}, jersey number ${this.jersey} was drafted in ${this.drafted}.`;
}

// Get years on GSW
Profile.prototype.getYears = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.name} has been with the Golden State Warriors for ${years} year(s).`;
}

//Change year 
Profile.prototype.revise = function(changeYear) {
    this.year = changeYear;
    this.revised = true;
}

// Instantiate an Object

const profile8 = new Profile('Kevon Looney', '5', '2015');
const profile9 = new Profile('Eric Paschall', '7', '2019');

console.log(profile9);
profile9.revise('2020');