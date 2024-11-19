'use client';
import { useTasksQuery } from '@/store/features/task';
import React from 'react';

export default function Page() {
	const { data } = useTasksQuery(undefined);
	console.log(data);
	return <div>page</div>;
}
