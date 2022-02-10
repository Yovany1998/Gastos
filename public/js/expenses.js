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
}
class Expenses {
}
