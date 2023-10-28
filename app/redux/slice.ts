
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState:(string|number)[] = {
  user: [],
};

export const userSlice:any = createSlice({
  name: 'addUser',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = { 
        id: nanoid(),
        name: action.payload,
      };
      state.user.push(data);
    },
    removeUser: (state, action) => {
      state.user = state.user.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
