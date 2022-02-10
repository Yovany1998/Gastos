//Definir tipo de dato
type Currency = 'MXN' | 'USD'|'LPS';

//Interfaz
interface Price{
    number:number,
    currency:Currency
}

interface ExpenseItem{
    id:number,
    title:string,
    cost: Price
}

interface IExpenses{
    expenses:ArrayList<ExpenseItem>,
    finalCurrency: Currency,
    add(item:ExpenseItem): boolean,
    get(index:number): ExpenseItem|null,
    getTotal(): string,
    remove(id:number):boolean
}

//declarar mi clase de arreglo
class ArrayList<T>{

    private items:T[];

        
    constructor(){
        this.items =[];
    }
    add(item:T){
        this.items.push(item);
    }

    get(index:number):T|null{
        const item:T[] = this.items.filter((x:T, i) => {
            return i == index;
        });

        if(item.length == 0){
            return  null;
        }else{
            return item[0];
        }
    }
    createFerom(value:T[]):void{
        this.items =[...value];
    }

    getAll():T[]{
        return this.items;
    }
}


class Expenses implements IExpenses{
    expenses: ArrayList<ExpenseItem>;
    finalCurrency: Currency;

    private count = 0;

    constructor(currency:Currency){
        this.finalCurrency = currency;
        this. expenses = new ArrayList<ExpenseItem>();
    }
    add(item: ExpenseItem): boolean {
        item.id = this.count;
        this.count++;
        this.expenses.add(item);
        return true;

        throw new Error("Method not implemented.");
    }
    get(index:number): ExpenseItem | null {
        return this.expenses.get(index);

        throw new Error("Method not implemented.");
    }
    //refresa totdos
    getItems():ExpenseItem[]{
        return this.expenses.getAll()
    }
    getTotal(): string {
        const total= this.getItems().reduce((acc, item) =>{
            return acc += this.converCurrency(item, this.finalCurrency);
        }, 0)

        throw new Error("Method not implemented.");
        return `${this.finalCurrency} $${total.toFixed(2).toString()}`;
    }
    remove(id: number): boolean {
        throw new Error("Method not implemented.");
    }

    private converCurrency(item:ExpenseItem, currency:Currency):number{
        switch(item.cost.currency){
            //el tipo de dato Currency
            case 'USD':
                switch(currency){
                    case 'MXN':
                        return item.cost.number *22;
                        break;

                    case 'LPS':
                        return item.cost.number *24;
                        break;

                        default:
                            return item.cost.number;
                }
                break;
                
                case 'MXN':
                    switch(currency){
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
                        switch(currency){
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