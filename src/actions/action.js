import { Add_DETAILS } from '../constants';
export const addDetails =(post,heading,description ) => {
    const action = {
        type: Add_DETAILS,
        post,
        heading,
        description
    }
    return action
}