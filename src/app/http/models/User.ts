interface UserConstructor {
    id: number;
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

interface UserVerify {
    id: boolean;
    username: boolean;
    password: boolean;
    email: boolean;
    createdAt: boolean;
    updatedAt: boolean;
}

export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: UserConstructor) {
        const field = this.validate(data)

        

        this.id = data.id;
        this.username = data.username;
        this.password = data.password;
        this.email = data.email;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    validate(data: UserConstructor): UserVerify {
        let verify = {
            id: false,
            username: false,
            password: false,
            email: false,
            createdAt: false,
            updatedAt: false
        };

        if (data.id) verify.id = false

        if (data.username) verify.username = false

        if (data.password) verify.password = false

        if (data.email) verify.email = false

        if (data.createdAt) verify.createdAt = false

        if (data.updatedAt) verify.updatedAt = false

        return verify;
    }
}