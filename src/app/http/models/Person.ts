export interface PersonConstructor {
    id: number
    firstName: string;
    lastName: string;
}

export class Person {

    private id: number;
    private firstName: string;
    private lastName: string;

    /**
     * Initializes all class variables
     *
     * @param data
    */
    constructor(data: PersonConstructor) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
    }

    /**
     * get id from person
     *
     * @returns number
    */
    public getID(): number {
        return this.id;
    }

    /**
     * set id from person
     *
     * @param id
    */
    public setID(id: number) {
        this.id = id;
    }

    /**
     * get fist name from person
     *
     * @returns string
    */
    public getFistName(): string {
        return this.firstName;
    }

    /**
     * set first name from person
     *
     * @param firstName
    */
    public setFistName(firstName: string) {
        this.firstName = firstName;
    }

    /**
     * get last name from person
     *
     * @returns string
    */
    public getLastName(): string {
        return this.lastName;
    }

    /**
     * set last name from person
     *
     * @param lastName
    */
    public setLastName(lastName: string) {
        this.lastName = lastName;
    }
}
