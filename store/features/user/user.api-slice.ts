import { apiSlice } from '../api/apiSlice';
import { UserType } from './user.interface';

export const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		users: builder.query<UserType[], undefined>({
			query: (): string => `users`,
			providesTags: ['Users'],
		}),

		storeUser: builder.mutation<UserType, undefined>({
			query: (payload) => ({
				url: `users`,
				method: 'POST',
				body: payload,
			}),
			invalidatesTags: ['Users'],
		}),

		deleteUser: builder.mutation<UserType, string>({
			query: (id) => ({
				url: `users/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Users'],
		}),
	}),
});

export const { useUsersQuery, useStoreUserMutation, useDeleteUserMutation } =
	api;
