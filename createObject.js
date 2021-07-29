const GSWProfile = {
    getSummary: function() {
        return `${this.name} was drafted in ${this.drafted}.`;
    }, 
    getYearsinGSW: function() {
        const years = new Date().getFullYears() - this.year;
        return `${this.name} has been with GSW for ${this.drafted} years.`;
    }
}

const profile10 = Object.create(GSWProfile)
    profile10.name = 'Jordan Poole';
    profile10.jersey = '3',
    profile10.drafted = '2019';

    console.log(profile10);