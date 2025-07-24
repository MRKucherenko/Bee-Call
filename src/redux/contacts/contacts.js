import { ReducerType } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery = 
  ({baseUrl} = {baseUrl: ''}) => 
    async ({url, method, data, params}) => {
      try {
        const result = await axios({url: baseUrl + url, method, data, params});

        return {data: result.data};
      } catch (axiosError) {
        let error = axiosError;

        return {
          error: {
            status: error.response?.status,
            data: error.response?.data || error.message,
          },
        };
      }
    };

export const contactApi = createApi({ 
  reducerPath: 'contacts',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://phone-book-b.onrender.com'
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => ({
        url: '/api/contacts/getContacts',
        method: 'GET',
      }),
      providesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: (value) => ({
        url: '/api/contacts/addContacts',
        method: 'POST',
        data: value,
      }),
      invalidatesTags: ['contacts']
    }),
      deleteContact: builder.mutation({
      query: (id) => ({
        url: `/api/contacts/deleteContact/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
    updateContact: builder.mutation({
      query: (value) => ({
        url:`/api/contacts/updateContact/${value.id}`,
        method: 'PUT',
        data: ({
          name: value.name,
          phone: value.number,
          email: value.email,
        }),
      }),
      invalidatesTags: ['contacts'],
    })
  })
})

export const {useAddContactMutation, 
useDeleteContactMutation, 
useGetAllContactsQuery, 
useUpdateContactMutation} = contactApi;