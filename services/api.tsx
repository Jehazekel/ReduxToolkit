import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const MenuApi = createApi({
    reducerPath : 'MenuApi',       //key for Api Slice
    baseQuery: fetchBaseQuery({
        baseUrl: ''
    }),
    tagTypes : ['MenuItem'], // defining tags for validating & invalidating cache


    //keepUnusedDataFor: 30, //defines # of seconds for cahcing requested data (OPTIONAL)
    endpoints: (builder)=> ({
        getMenu : builder.query({
            query : ()=> { return '/v1/main/menu_items'},
            providesTags : ['MenuItem']  //assigns a cache key to GET query in cache store
            
        }),

        insertItem: builder.mutation({
            query: (data)=>({
                url: `/v1/main/menu_item`,
                method: 'POST',
                body: { "data": data}//DO NOT USE JSON.stringify({ "data": data})
            }),
            invalidatesTags: ['MenuItem']  //clears this cache  store with the matching tags (& reloads automatically)
        }),
        deleteItem: builder.mutation({
            query: (data)=>({
                url: `/v1/main/menu_item`,
                method: 'DELETE',
                body: { "data": data}
            }),
            invalidatesTags: ['MenuItem']  //clears this cache store with the matching tags (& reloads automatically)
        }),
    }),

});


//useGetMenuQuery is react hook to call the api endpoint getMenu
export const { useGetMenuQuery, useInsertItemMutation, useDeleteItemMutation } = MenuApi;
