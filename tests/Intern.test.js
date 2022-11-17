const Employee = require("./Employee.test")

class Manager extends Employee {
    constructor(name = "", id = "", email = "", portfolioData = "") {
        super(name, id, email);

        this.portfolioData = portfolioData;
    }

    getPortfolioData() {
        return `Portfolio Data: ${this.portfolioData}`;
    }

    getRole() {
        return 'Role: Intern'
    }
}

expect(intern.name).toEqual("Jazmine");
    expect(intern.id).toBe("767007");

module.exports = Manager;