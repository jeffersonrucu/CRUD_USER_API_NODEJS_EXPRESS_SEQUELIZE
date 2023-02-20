import { User, UserSequelize } from '@models/User';
import { UserDAO } from '@daos/user/UserDAO';

export class UserDAOImpl implements UserDAO {

    /**
     * performs the insertion of the data of the new user to the database
     *
     * @param user
     * @returns {}
    */
    async save(user: User) {
        try {
            await UserSequelize.create({
                username:   user.getUsername(),
                password:   user.getPassword(),
                email:      user.getEmail(),
                created_at: user.getCreatedAt(),
                updated_at: user.getUpdatedAt()
            })
        } catch (error) {
            if (error instanceof Error) {
                return {
                  code: 400,
                  error: error.message
                };
            } else {
                return {
                  code: 400,
                  error: "Erro desconhecido"
                };
            }
        }

        return { code: 200 };
    }
}
