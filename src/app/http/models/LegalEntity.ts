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

    /**
     * get business name from address
     *
     * @returns string
    */
    public getBusinessName(): string {
        return this.businessName;
    }

    /**
     * set business name from address
     *
     * @param businessName
    */
    public setBusinessName(businessName: string) {
        this.businessName = businessName;
    }

    /**
     * get cnpj from address
     *
     * @returns string
    */
    public getCnpj(): string {
        return this.cnpj;
    }

    /**
     * set cnpj from address
     *
     * @param cnpj
    */
    public setCnpj(cnpj: string) {
        this.cnpj = cnpj;
    }

}
