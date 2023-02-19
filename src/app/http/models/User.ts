interface UserConstructor {
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export class User {
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;

    /**
     * Initializes all class variables
     * 
     * @param data
    */
    constructor(data: UserConstructor) {
        this.username = data?.username;
        this.password = data?.password;
        this.email = data?.email;
        this.createdAt = data?.createdAt;
        this.updatedAt = data?.updatedAt;
    }
}
