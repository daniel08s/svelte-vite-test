import { getUserById } from '../../api/users';

export async function get({ params }) {
    const user = await getUserById(params.id);

    if (user) {
        return {
            body: { user },
        };
    }

    return {
        status: 404,
    };
}
