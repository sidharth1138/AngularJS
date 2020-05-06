export class User {

    id: number;
    email: string;
    password: {
        pwd: string;
        confirmpwd: string;
    };
    gender: string;
    terms: boolean;

    constructor(values: Object = {}) {

        Object.assign(this, values);
    }


}
