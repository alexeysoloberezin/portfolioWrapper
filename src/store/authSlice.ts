import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  currentUser: User | null; // Replace 'any' with the actual type of your currentUser
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  currentUser: null,
  loading: false,
  error: null,
};

export interface User {
  uid: string;
  email: string;
  displayName: string;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<User | null>) {
      state.currentUser = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setCurrentUser, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
