import { createSlice } from '@reduxjs/toolkit';

// create slice is used to create cart slice in the store
const searchSlice = createSlice({
    name: 'search',

    //In initialState empty string is stored
    initialState: {
        searchText: ''
    },
    reducers: {
        // to add search query to the search slice in the store here setSearchText is defined
        setSearchText: (state, action) => {
            state.searchText = action.payload
        },
    },
});

export const { setSearchText } = searchSlice.actions;
export default searchSlice.reducer;
