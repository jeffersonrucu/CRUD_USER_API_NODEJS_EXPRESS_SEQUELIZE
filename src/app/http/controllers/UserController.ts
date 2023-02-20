import { Request, Response } from 'express';
import { User } from '@models/User'
import { UserDAOImpl } from '@daos/user/UserDAOImpl';
import { createHash } from '@helpers/hash';

const userDAOImpl = new UserDAOImpl();

export class UserController {

    /**
     * register a new user
     *
     * @param req
     * @param res
     * @returns json
    */
    async save(req: Request, res: Response) {
        let { username, password, email } = req.body

        password = await createHash(password);

        const data = {
            username: username,
            password: password,
            email: email,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        const user = new User(data)
        const createUser = await userDAOImpl.save(user)

        if(createUser.code !== 200) {
            return res.json({
                error: createUser.error,
                code: createUser.code
            })
        }

        return res.json({
            message: 'successfully registered user',
            code: 200
        })
    }

    async findById() {}

    async findAll() {}

    async update() {}

    async delete(){}
}
