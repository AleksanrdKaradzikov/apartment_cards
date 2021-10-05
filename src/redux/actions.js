export const SET_DATA_TO_STATE_ACTION_TYPE = 'SET_DATA_TO_STATE_ACTION_TYPE';
export const CHAHGE_ITEM_ACTION_TYPE = 'CHAHGE_ITEM_ACTION_TYPE';

export const setDataToStateAction = (payload) => ({
    type: SET_DATA_TO_STATE_ACTION_TYPE,
    payload,
});

export const changeItemAction = (payload) => ({
    type: CHAHGE_ITEM_ACTION_TYPE,
    payload,
});
