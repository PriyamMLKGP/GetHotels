const hotelsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HOTELS':
            return action.payload;
        default:
            return state;
    }
};

export default hotelsReducer;
