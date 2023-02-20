interface AddressConstructor {
    id: number
    primaryAddress: string;
    latitude: number;
    longitude: number;
    createdAt: Date;
    updatedAt: Date;
}

export class Address {

    private id: number;
    private primaryAddress: string;
    private latitude: number;
    private longitude: number;
    private createdAt: Date;
    private updatedAt: Date;

    /**
     * Initializes all class variables
     *
     * @param data
    */
    constructor(data: AddressConstructor) {
        this.id = data?.id;
        this.primaryAddress = data?.primaryAddress;
        this.latitude = data?.latitude;
        this.longitude = data?.longitude;
        this.createdAt = data?.createdAt;
        this.updatedAt = data?.updatedAt;
    }

    /**
     * get id from address
     *
     * @returns number
    */
    public getID(): number {
        return this.id;
    }

    /**
     * set id from address
     *
     * @param id
    */
    public setID(id: number) {
        this.id = id;
    }

}
