import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import uuid from "uuid"


const initialState = {
  users: []
};


const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsersData: (state, action) => {
      const newUserId = state.users.length + 1;
      const newUser = {
        id: newUserId,
        ...action.payload
      };
      state.users = [...state.users, newUser];
    },
    // updateUser: (state, action) => {
    //             const { userId, updatedData } = action.payload;
    //             const userIndex = state.users.findIndex((user) => user.id === userId);
    //             if (userIndex !== -1) {
    //               state.users[userIndex] = { ...state.users[userIndex], ...updatedData };
    //             }
    // },
    
    updateUser: (state, action) => {
      const { userId, updatedData } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === userId);
      if (userIndex !== -1) {
        state.users = state.users.map((user, index) =>
          index === userIndex ? { ...user, ...updatedData } : user
        );
      }
    }
  },
 
});

export const { setUsersData, updateUser } = userSlice.actions;
export default userSlice.reducer;
