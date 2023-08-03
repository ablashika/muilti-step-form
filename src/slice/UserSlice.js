import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  users: []
};


const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsersData: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    updateUser: (state, action) => {
                const { userId, updatedData } = action.payload;
                const userIndex = state.users.findIndex((user) => user.id === userId);
                if (userIndex !== -1) {
                  state.users[userIndex] = { ...state.users[userIndex], ...updatedData };
                }
    },
  },
 
});

export const { setUsersData, updateUser } = userSlice.actions;
export default userSlice.reducer;
