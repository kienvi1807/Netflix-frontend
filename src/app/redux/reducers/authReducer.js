
const initialState = {
    data: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'login': {
            const a = {
                ...state,
                data: action.payload
            }
            return a
        }
            

        default: {
            return state
        }
    }
}

export default authReducer

