// import { combineReducers } from "redux";
// import {
//   createReducer,
//   createSlice,
//   createEntityAdapter,
// } from "@reduxjs/toolkit";
// import * as actions from "./actions";
// import { toast } from "react-toastify";
// import { fetchContacts } from "./contactsOperations";

// // import { createSelector } from "@reduxjs/toolkit";

// // export const getContacts = (state) => state.contacts.items;
// // export const getFilter = (state) => state.contacts.filter;

// // export const getVisibleContacts = createSelector(
// //   [getContacts, getFilter],
// //   (contacts, filter) => {
// //     const normalizedFilter = filter.toLowerCase();
// //     return contacts.filter((contact) =>
// //       contact.name.toLowerCase().includes(normalizedFilter)
// //     );
// //   }
// // );

// const contactsAdapter = createEntityAdapter({
//   selectId: (contact) => contact.id,
// });

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: contactsAdapter.getInitialState({ isLoading: false }),
//   extraReducers: {
//     [fetchContacts.fulfilled](state, action) {
//       contactsAdapter.setAll(state, action.payload);
//     },
//   },
// });

// export const contactsSelectors = contactsAdapter.getSelectors(
//   (state) => state.contacts
// ); //new22

// const addContact = (state, { payload }) => {
//   if (state.find((contact) => contact.name.toLowerCase() === payload.name)) {
//     toast.error(` '${payload.name}' is already in your list`);
//     return state;
//   }
//   return [...state, payload];
// };
// /*

// const items = createReducer([], {
//      [fetchContacts.fulfilled]:(_,action)=>action.payload,
//      [actions.addContact]: actions.addContact ,
//      [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),

// })

// const isLoading = createReducer(false, {
//     [fetchContacts.pending]: () => true,
//     [fetchContacts.fulfilled]: () => false,
//     [fetchContacts.rejected]: () => false,
// })

// const error = createReducer(null, {          //new
//     [fetchContacts.rejected]: (_, action) => action.payload,
//     [fetchContacts.pending]: () => null,
// }) */

// const filter = createReducer("", {
//   [actions.changeFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   /*   items, */
//   filter,
//   contacts: contactsSlice.reducer,
//   /* isLoading,
//     error,   */ //new
// });
