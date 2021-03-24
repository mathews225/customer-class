class Customer {
    constructor(id, name, stateCode, sales) {
        this.id = id;
        this.name = name;
        this.stateCode = stateCode;
        this.sales = sales;
    }

    addSales(amount) {
        this.sales += amount;
    }
    subSales(amount) {
        //this.sales -= amount;
        this.addSales(amount * -1);
    }


    print(){
        return `${this.id} |  ${this.name} |  ${this.stateCode} | ${this.sales}`
    }
}

let cust1 = new Customer(1,"MAX", "OH", 0.0);
cust1.addSales(100.00);
cust1.addSales(50);

let cust2 = new Customer(2, "P&G", "OH", 100);
cust2.addSales(1000);
cust2.addSales(500);
cust2.subSales(1020);

console.log(cust1.print());
console.log(cust2.print());