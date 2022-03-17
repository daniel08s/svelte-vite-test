// Implementations for the posts endpoints
import API from '../services/api';

const path = '/post';

// Method to get a list of all posts
export const getPostList = async () => {
    try {
        const response = await API.get(`${path}?limit=10`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// Get a post by its ID
export const getPostById = async id => {
    try {
        const response = await API.get(`${path}/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

// Create a post
export const postPost = async post => {
    try {
        const response = await API.post(`${path}/create`, post);
        return response;
    } catch (error) {
        console.error(error);
    }
};
