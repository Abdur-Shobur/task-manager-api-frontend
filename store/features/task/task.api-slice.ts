import { apiSlice } from '../api/apiSlice';
import { TaskType } from './task.interface';

export const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// get all
		tasks: builder.query<TaskType[], undefined>({
			query: (): string => `tasks`,
			providesTags: ['Tasks'],
		}),

		storeTask: builder.mutation<TaskType, undefined>({
			query: (payload) => ({
				url: `tasks`,
				method: 'POST',
				body: payload,
			}),
			invalidatesTags: ['Tasks'],
		}),
	}),
});

export const { useTasksQuery, useStoreTaskMutation } = api;
