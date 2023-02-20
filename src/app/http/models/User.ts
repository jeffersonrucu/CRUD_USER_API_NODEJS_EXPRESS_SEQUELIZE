interface UserConstructor {
    id: number
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export class User {

    private id: number;
    private username: string;
    private password: string;
    private email: string;
    private createdAt: Date;
    private updatedAt: Date;

    /**
     * Initializes all class variables
     *
     * @param data
    */
    constructor(data: UserConstructor) {
        this.id = data?.id;
        this.username = data?.username;
        this.password = data?.password;
        this.email = data?.email;
        this.createdAt = data?.createdAt;
        this.updatedAt = data?.updatedAt;
    }

    /**
     * get id from user
     *
     * @returns number
    */
    public getID(): number {
        return this.id;
    }

    /**
     * set id from user
     *
     * @param id
    */
    public setID(id: number) {
        this.id = id;
    }

    /**
     * get username from user
     *
     * @returns string
    */
    public getUsername(): string {
        return this.username;
    }

    /**
     * set username from user
     *
     * @param username
    */
    public setUsername(username: string) {
        this.username = username;
    }

    /**
     * get password from user
     *
     * @returns string
    */
    public getPassword(): string {
        return this.password;
    }

    /**
     * set password from user
     *
     * @param password
    */
    public setPassword(password: string) {
        this.password = password;
    }

    /**
     * get e-mail from user
     *
     * @returns string
    */
    public getEmail(): string {
        return this.email;
    }

    /**
     * set e-mail from user
     *
     * @param email
    */
    public setEmail(email: string) {
        this.email = email;
    }

    /**
     * get created at from user
     *
     * @returns Date
    */
    public getCreatedAt(): Date {
        return this.createdAt;
    }

    /**
     * set created at from user
     *
     * @param createdAt
    */
    public setcreatedAt(createdAt: Date) {
        this.createdAt = createdAt;
    }

    /**
     * get update at from user
     *
     * @returns Date
    */
    public getUpdatedAt(): Date {
        return this.updatedAt;
    }

     /**
     * set update at from user
     *
     * @param updatedAt
    */
    public setUpdatedAt(updatedAt: Date) {
        this.updatedAt = updatedAt;
    }

}
