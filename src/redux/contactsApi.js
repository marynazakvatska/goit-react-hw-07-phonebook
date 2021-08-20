import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const phonebookApi = createApi({
  reducerPath: "phonebookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4040",
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ["Contacts"],
    }),
    deleteContacts: builder.mutation({
      query: (id) => ({ url: `/contacts/${id}`, method: "DELETE" }),
      invalidatesTags: ["Contacts"],
    }),
    addContact: builder.mutation({
      query: (contact) => ({
        url: "/contacts",
        method: "POST",
        body: {
          ...contact,
        },
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactsMutation,
  useAddContactMutation,
} = phonebookApi;
