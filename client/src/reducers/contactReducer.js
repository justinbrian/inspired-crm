import {  
    GET_CONTACTS, 
    ADD_CONTACT,
    EDIT_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT, 
    SELECTALL_CONTACT} from "../actions/types";

const initialState = {
    contacts: [],
    contact: {},
    edit: {},
    update: {},
    delete: {},
    selectall: false,
    selected: {}
};

export default function(state = initialState, action){
    switch (action.type){
        case GET_CONTACTS:
            return{
                ...state,
                contacts: action.payload
            }
        case ADD_CONTACT:
            return{
                ...state,
                contact: action.payload
            }
        case EDIT_CONTACT:
            return{
                ...state,
                edit: action.payload
            }
        case UPDATE_CONTACT:
            return{
                ...state,
                update: action.payload
            }
        case DELETE_CONTACT:
            return{
                ...state,
                delete: action.payload
            }
        case SELECTALL_CONTACT:
            return{
                ...state,
                selectall: action.payload
            }
        default:
            return state;
    }
}