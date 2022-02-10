"use strict";
const bAdd = document.documentElement.querySelector('#bAdd');
const inputTitle = document.documentElement.querySelector('#title');
//esta es otra forma
const inputCost = document.documentElement.querySelector('#cost');
const inputCurrency = document.documentElement.querySelector('#currency');
const expenses = new Expenses('USD');
//si puede ser nulo
//bAdd?.addEventListener();
//si estamos seguros que no es nulo
bAdd.addEventListener('click', e => {
    if (inputTitle.value != '' && inputCost.value != '' && !isNaN(parseFloat(inputCost.value))) {
        const title = inputTitle.value;
        const cost = parseFloat(inputCost.value);
        const currency = (inputCurrency.value);
        expenses.add({ title: title, cost: { number: cost, currency: currency } });
        render();
    }
    else {
        alert('Completa los datos completamente');
    }
});
function render() {
    let html = '';
    expenses.getItems().forEach(item => {
        const { id, title, cost } = item;
        const { number, currency } = cost;
        html += `
        <div class="item">
            <div><span class="currency">${currency}</span>${number} </div>
            <div>${title}</div>
            <div><button class="bEliminar" data-id=${id}>Eliminar</button></div>
        </div>`;
    });
    //asignar al html
    $('#iems').innerHTML = html;
    $('#display').textContent = expenses.getTotal();
    $$('.bEliminar').forEach(bEliminar => {
        bEliminar.addEventListener('click', e => {
            const id = e.target.getAttribute('data-id');
            expenses.remove(parseInt(id));
            render();
        });
    });
}
function $(selector) {
    return document.querySelector(selector);
}
function $$(selector) {
    return document.querySelectorAll(selector);
}
