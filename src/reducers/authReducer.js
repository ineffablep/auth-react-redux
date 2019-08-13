import { ON_LOGIN, ON_LOGIN_FIELD_CHANGE } from "../const";
const initialState = {
    userName: '',
    password: ''
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ON_LOGIN:
            return state;
        case ON_LOGIN_FIELD_CHANGE:
            const newSate = { ...state };
            newSate[action.data.id] = action.data.value;
            return newSate;
        default:
            return state;
    }
};
