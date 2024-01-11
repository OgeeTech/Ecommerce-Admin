// // apiSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const apiUrl = "https://api.techpem.com/api/user/";

// // Create an asynchronous thunk to handle API requests
// export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
//   try {
//     const response = await axios.get(apiUrl);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// });

// export const addUser = createAsyncThunk("user/addUser", async (values) => {
//   try {
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         first_name: values.first_name,
//         last_name: values.last_name,
//         password: values.password,
//         email: values.email,
//         phone_no: values.phone_no,
//       }),
//     });

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// });

// // Create a slice with initial state and reducer
// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     loading: false,
//     user: [],
//     error: "",
//     isSuccess: "",
//   },

//   extraReducers: (builder) => {
//     builder.addCase(fetchUsers.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(fetchUsers.fulfilled, (state, action) => {
//       state.loading = false;
//       state.user = action.payload;
//       state.error = "";
//     });
//     builder.addCase(fetchUsers.rejected, (state, action) => {
//       state.loading = false;
//       state.user = [];
//       state.error = action.error.message;
//     });

//     // add user
//     builder.addCase(addUser.pending, (state) => {
//       state.loading = true;
//       state.error = "";
//     });
//     builder.addCase(addUser.fulfilled, (state, action) => {
//       state.loading = false;
//       state.user = [];
//       state.isSuccess = action.payload;
//     });
//     builder.addCase(addUser.rejected, (state, action) => {
//       state.loading = false;
//       state.user = [];
//       state.error = action.error.message;
//     });
//   },
// });

// export default userSlice.reducer;
