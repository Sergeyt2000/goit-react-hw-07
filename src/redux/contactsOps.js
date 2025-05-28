import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://683586c1cd78db2058c20103.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        console.log("response", response.data);
        
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", contact);
        return response.data;        
    } catch {
        return thunkAPI.rejectWithValue();
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        await axios.delete(`/contacts/${contactId}`);
        return contactId;        
    } catch {
        return thunkAPI.rejectWithValue();
    }
});