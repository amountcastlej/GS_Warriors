class Profile {
    constructor(name, jersey, drafted, month) {
        this.name = name;
        this.jersey = jersey;
        this.drafted = drafted;
    }
    getSummary() {
        return `${this.name} wears jersey number ${this.jersey}`;
    }
    getYearsInGSW() {
        const years = new Date().getFullYears - this.drafted;
        return `${this.name} has been on the team for ${this.drafted} years.`;
    }
    revise(changeYear) {
        this.drafted = changeYear;
        this.revised = true;
    }
    static teamLeague() {
        return 'Pacific Division';
    }
}

const profile11 = new Profile('James Wiseman', '6', '2020');

console.log(profile11)
console.log(profile11.getSummary());