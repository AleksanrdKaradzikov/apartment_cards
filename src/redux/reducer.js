import { SET_DATA_TO_STATE_ACTION_TYPE, CHAHGE_ITEM_ACTION_TYPE } from './actions';

export const announcementReducer = (state = [], action) => {
    switch(action.type) {
        case SET_DATA_TO_STATE_ACTION_TYPE: {
            return action.payload;
        }
        case CHAHGE_ITEM_ACTION_TYPE: {
            const { payload } = action;

            return state.map((item) => {
                if (item.id === payload) {
                    return {
                        ...item,
                        isLike: !item.isLike,
                    }
                }
                return item;
            })
        }

        default:
            return state;
    }
};