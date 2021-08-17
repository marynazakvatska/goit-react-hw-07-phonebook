import { createAsyncThunk } from "@reduxjs/toolkit";
/* import * as actions from "./actions"; */
import * as contactsApi from './contactsApi';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();
  return contacts;
    } catch (error) {
      return rejectWithValue(error)
    }
  
})


/* export const fetchContacts = () => async dispatch => {
    dispatch(actions.fetchContactsRequest());

  
  try {
     const contacts = await contactsApi.fetchContacts();
    dispatch(actions.fetchContactsSuccess(contacts))
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
    
} */


