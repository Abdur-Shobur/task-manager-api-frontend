'use client';
import { CreateTask, useTasksQuery } from '@/store/features/task';
import React from 'react';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function Page() {
	const { data } = useTasksQuery(undefined);
	return (
		<div>
			<CreateTask />
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{data?.map((task) => (
					<Card key={task.id}>
						<CardHeader>
							<CardTitle>{task.title}</CardTitle>
							<CardDescription>{task.description}</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>
		</div>
	);
}
