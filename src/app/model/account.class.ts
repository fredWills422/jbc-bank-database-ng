export class Account {

    id: number;
    accountHolder: string;
    birthdate: string;
    balance: number;
    fees: number;

    
    constructor(id:number = 0, accountHolder:string = "", birthdate:string = "",
                balance:number = 0, fees:number = 0) {
        
        this.id=id;
        this.accountHolder=accountHolder;
        this.birthdate=birthdate;
        this.balance=balance;
        this.fees=fees;
        
    }

}
