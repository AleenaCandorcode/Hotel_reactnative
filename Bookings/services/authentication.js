import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const registerApi = createApi({
  reducerPath: 'registerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://10.0.2.2:8000/' }),
  endpoints: (builder) => ({
    userRegister: builder.mutation({
        query: (user) => {
            return {
                url: 'register/',
                method: 'POST',
                body: user,
                headers: {
                    'Content-type': 'application/json',
                }
            }
          }
    }),

    userLogin: builder.mutation({
      query: (user) => {
          return {
              url: 'login/',
              method: 'POST',
              body: user,
              headers: {
                  'Content-type': 'application/json',
              }
          }
        }
  })
  }),

//   hotel: builder.mutation({
//     query: (user) => {
//         return {
//             url: 'hotel/',
//             method: 'POST',
//             body: user,
//             headers: {
//                 'Content-type': 'application/json',
//             }
//         }
//       }
// }),



})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUserRegisterMutation, useUserLoginMutation, 
    // useUserHotelMutation 
} = registerApi