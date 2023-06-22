// import { createSlice,  createAsyncThunk  } from '@reduxjs/toolkit';
// import { db } from "../components/firebase/firebase"


// //creating initial state
// const initialState = {
//   users:[]
// }

// export const addOrUpdateUserData = createAsyncThunk(
//   'users/addOrUpdateUserData',
//   async (userData, { dispatch }) => {
//     try {
//       const userRef = db.collection('users').doc(userData.id);
//       await userRef.set(userData, { merge: true });
//       dispatch(setUsersData(userData));
//       dispatch(updateUser({ userId: userData.id, updatedData: userData }));
//     } catch (error) {
//       console.error('Error adding or updating user data:', error);
//       throw error;
//     }
//   }
// );

// const userSlice = createSlice({
//     name:"users",
//     initialState,
//     reducers:{
//         setUsersData:(state,action)=>{
//             state.users = [...state.users, action.payload]
//         },
//         updateUser: (state, action) => {
//           const { userId, updatedData } = action.payload;
//           const userIndex = state.users.findIndex((user) => user.id === userId);
//           if (userIndex !== -1) {
//             state.users[userIndex] = { ...state.users[userIndex], ...updatedData };
//           }
//         },
//     }
// })



// export const { setUsersData,updateUser } = userSlice.actions;
// export default userSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from "../components/firebase/firebase";
import { collection, addDoc }from 'firebase/firestore';

const initialState = {
  users: []
};

// export const addOrUpdateUserData = createAsyncThunk(
//   'users/addOrUpdateUserData',
//   async (userData, { dispatch }) => {
//     try {
//       const userRef = db.collection('users');
//       await userRef.set(userData, { merge: true });
//       dispatch(setUsersData(userData));
//       dispatch(updateUser({ userId: userData.id, updatedData: userData }));
//     } catch (error) {
//       console.error('Error adding or updating user data:', error);
//       throw error;
//     }
//   }
// );

export const addOrUpdateUserData = createAsyncThunk(
  'users/addOrUpdateUserData',
  async (userData, { dispatch }) => {
    try {
      await addDoc(collection(db, 'users'), userData);
      dispatch(setUsersData(userData));
       dispatch(updateUser({ userId: userData.id, updatedData: userData }));
    } catch (error) {
      console.error('Error adding or updating user data:', error);
      throw error;
    }
  }
);

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
