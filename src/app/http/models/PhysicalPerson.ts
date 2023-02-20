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

    /**
     * get cpf from address
     *
     * @returns string
    */
    public getCpf(): string {
        return this.cpf;
    }

    /**
     * set cpf from address
     *
     * @param cpf
    */
    public setCpf(cpf: string) {
        this.cpf = cpf;
    }

    /**
     * get gender from address
     *
     * @returns string
    */
    public getGender(): string {
        return this.gender;
    }

    /**
     * set gender from address
     *
     * @param gender
    */
    public setGender(gender: string) {
        this.gender = gender;
    }

    /**
     * get birthDate from address
     *
     * @returns Date
    */
    public getBirthDate(): Date {
        return this.birthDate;
    }

    /**
     * set birthDate from address
     *
     * @param birthDate
    */
    public setBirthDate(birthDate: Date) {
        this.birthDate = birthDate;
    }
}
