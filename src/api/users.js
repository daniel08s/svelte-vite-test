// Implementations for the users endpoints
import API from '../services/api';

const path = '/user';

// Method to get a list of all users
export const getUserList = async () => {
    try {
        const response = await API.get(`${path}?limit=10`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// Get a user by its ID
export const getUserById = async id => {
    try {
        const response = await API.get(`${path}/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

// Create an user
export const postUser = async user => {
    try {
        const response = await API.post(path, user);
        return response;
    } catch (error) {
        console.error(error);
    }
};
