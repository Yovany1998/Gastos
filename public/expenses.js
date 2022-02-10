"use strict";
//declarar mi clase de arreglo
class ArrayList {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    get(index) {
        const item = this.items.filter((x, i) => {
            return i == index;
        });
        if (item.length == 0) {
            return null;
        }
        else {
            return item[0];
        }
    }
    createFerom(value) {
        this.items = [...value];
    }
    getAll() {
        return this.items;
    }
}
class Expenses {
    constructor(currency) {
        this.count = 0;
        this.finalCurrency = currency;
        this.expenses = new ArrayList();
    }
    add(item) {
        item.id = this.count;
        this.count++;
        this.expenses.add(item);
        return true;
        throw new Error("Method not implemented.");
    }
    get(index) {
        return this.expenses.get(index);
        throw new Error("Method not implemented.");
    }
    //refresa totdos
    getItems() {
        return this.expenses.getAll();
    }
    getTotal() {
        const total = this.getItems().reduce((acc, item) => {
            return acc += this.converCurrency(item, this.finalCurrency);
        }, 0);
        throw new Error("Method not implemented.");
        return `${this.finalCurrency} $${total.toFixed(2).toString()}`;
    }
    remove(id) {
        throw new Error("Method not implemented.");
    }
    converCurrency(item, currency) {
        switch (item.cost.currency) {
            //el tipo de dato Currency
            case 'USD':
                switch (currency) {
                    case 'MXN':
                        return item.cost.number * 22;
                        break;
                    case 'LPS':
                        return item.cost.number * 24;
                        break;
                    default:
                        return item.cost.number;
                }
                break;
            case 'MXN':
                switch (currency) {
                    case 'USD':
                        return item.cost.number / 22;
                        break;
                    case 'LPS':
                        return item.cost.number / 24;
                        break;
                    default:
                        return item.cost.number;
                }
                break;
            case 'LPS':
                switch (currency) {
                    case 'USD':
                        return item.cost.number / 24;
                        break;
                    case 'MXN':
                        return item.cost.number / 24;
                        break;
                    default:
                        return item.cost.number;
                }
                break;
            default:
                return 0;
        }
    }
}
