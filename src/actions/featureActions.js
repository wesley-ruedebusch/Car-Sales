export const removeFeature = item => {
    // dispatch an action here to remove an 
    return {
        type: 'REMOVE_FEATURE',
        payload: item
    }
};

export const buyItem = item => {
    // dipsatch an action here to add an item
    console.log('this is item', item);

    return {
        type: 'ADD_FEATURE',
        payload: item
    }
};