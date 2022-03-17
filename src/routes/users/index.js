import { getUserList } from '../../api/users';

export async function get() {
    const users = await getUserList();

    if (users?.length) {
        return {
            body: { users },
        };
    }

    return {
        status: 404,
    };
}
