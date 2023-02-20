import { User } from '@models/User';

export interface UserDAO {
    // findAll():                Promise<User[]>;
    // findById(id: number):     Promise<User | undefined>;
    save(user: User):            Promise<User | {}>;
    // update(user: User):       Promise<void>;
    // delete(user: User):       Promise<void>;
}
