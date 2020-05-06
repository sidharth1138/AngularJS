export class Admin {

    email:string;
    pwd:string;

    constructor(values:Object={}){
        Object.assign(this,values);
    }
}
