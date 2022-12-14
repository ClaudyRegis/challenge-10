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
        return 'Role: Manager'
    }
}

expect(manager.name).toEqual("Jay");
    expect(manager.id).toBe("889945");

module.exports = Manager;