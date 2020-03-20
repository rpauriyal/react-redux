import { Add_DETAILS ,DELETE_DETAILS} from '../constants';
import { createRoutine } from 'redux-saga-routines'

const routines = createRoutine('Add_DETAILS','DELETE_DETAILS');
console.log(routines.TRIGGER);

export const addDetails = (post, heading, description, disable, enable, id) => {
    const action = {
        type: Add_DETAILS,
        post,
        heading,
        description,
        disable,
        enable,
        id
    }
    return action
}
export const deleteDetails = (id) => {
    // debugger
    const action = {
        type: DELETE_DETAILS,
        id
    }
    return action
}