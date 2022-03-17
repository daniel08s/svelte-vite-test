import { getPostList } from '../../api/posts';

export async function get() {
    const posts = await getPostList();

    if (posts?.length) {
        return {
            body: { posts },
        };
    }

    return {
        status: 404,
    };
}
