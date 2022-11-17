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
        return 'Role: Engineer'
    }
}

expect(manager.name).toEqual("Matt");
    expect(manager.id).toBe("889945");

module.exports = Manager;