import { Person, PersonConstructor } from "@models/Person";

interface PhysicalPersonConstructor extends PersonConstructor {
    cpf: string;
    gender: string;
    birthDate: Date;
}

export class PhysicalPerson extends Person {

    private cpf: string;
    private gender: string;
    private birthDate: Date;

    /**
     * Initializes all class variables
     *
     * @param data
    */
    constructor(data: PhysicalPersonConstructor) {
        super({
            id: data.id,
            firstName: data.firstName,
            lastName: data.lastName
        });

        this.cpf = data.cpf;
        this.gender = data.gender;
        this.birthDate = data.birthDate;
    }

}
