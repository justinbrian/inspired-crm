import {  
    GET_CONTACTS, 
    ADD_CONTACT,
    EDIT_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT, 
    SELECTALL_CONTACT,
    TRACK_CONTACT,
    UNTRACK_CONTACT} from "../actions/types";

const initialState = {
    contacts: [],
    contact: {},
    edit: {},
    update: {},
    delete: {},
    selectall: false,
    selected: {},
    selected_id:[]
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
        case TRACK_CONTACT:
            state.selected_id.push(action.payload);
            return{
                ...state
            }
        case UNTRACK_CONTACT:
            var index = state.selected_id.indexOf(action.payload);
            if (index > -1){
                state.selected_id.splice(index, 1);
            }
            return{
                ...state
            }
        default:
            return state;
    }
}