import { Person, PersonConstructor } from "@models/Person";

interface LegalEntityConstructor extends PersonConstructor {
    businessName: string;
    cnpj: string;
}

export class LegalEntity extends Person {

    private businessName: string;
    private cnpj: string;

    /**
     * Initializes all class variables
     *
     * @param data
    */
    constructor(data: LegalEntityConstructor) {
        super({
            id: data.id,
            firstName: data.firstName,
            lastName: data.lastName
        });

        this.businessName = data.businessName;
        this.cnpj = data.cnpj;
    }

}
