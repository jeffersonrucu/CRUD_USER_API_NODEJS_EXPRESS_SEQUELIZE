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

    /**
     * get primary address from address
     *
     * @returns string
    */
     public getPrimaryAddress(): string {
        return this.primaryAddress;
    }

    /**
     * set primaryAddress from address
     *
     * @param primaryAddress
    */
    public setPrimaryAddress(primaryAddress: string) {
        this.primaryAddress = primaryAddress;
    }

    /**
     * get latitude from address
     *
     * @returns number
    */
    public getLatitude(): number {
        return this.latitude;
    }

    /**
     * set latitude from address
     *
     * @param latitude
    */
    public setLatitude(latitude: number) {
        this.latitude = latitude;
    }

    /**
     * get longitude from address
     *
     * @returns number
    */
    public getLongitude(): number {
        return this.longitude;
    }

    /**
     * set longitude from address
     *
     * @param longitude
    */
    public setLongitude(longitude: number) {
        this.longitude = longitude;
    }

    /**
     * get created at from address
     *
     * @returns Date
    */
    public getCreatedAt(): Date {
        return this.createdAt;
    }

    /**
     * set created at from address
     *
     * @param createdAt
    */
    public setcreatedAt(createdAt: Date) {
        this.createdAt = createdAt;
    }

    /**
     * get update at from address
     *
     * @returns Date
    */
    public getUpdatedAt(): Date {
        return this.updatedAt;
    }

     /**
     * set update at from address
     *
     * @param updatedAt
    */
    public setUpdatedAt(updatedAt: Date) {
        this.updatedAt = updatedAt;
    }

}
