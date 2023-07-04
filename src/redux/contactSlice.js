import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        const checkDuplicate =  state.some(cnt => {
          return cnt.name.toLowerCase() === payload.name.toLowerCase()
        })
        !checkDuplicate ? state.push(payload) : alert(`${payload.name} is already in contacts.`)    
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        }
      }
    },

    deleteContact (state, {payload}) {
        return state.filter(({id}) => id !== payload);
      },
  },
})

export const { addContact, deleteContact} = contactSlice.actions;
export default contactSlice.reducer;
export const getContacts = (state) => state.contacts;