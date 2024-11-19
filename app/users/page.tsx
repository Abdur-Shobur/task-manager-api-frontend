'use client';
import React from 'react';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	CreateUser,
	useDeleteUserMutation,
	useUsersQuery,
} from '@/store/features/user';
import { Button } from '@/components/ui/button';
import { apiDelete } from '@/store/features/basic-api';
import { Delete } from 'lucide-react';

export default function Page() {
	const { data } = useUsersQuery(undefined);
	const [deleteUser, { isLoading }] = useDeleteUserMutation();

	return (
		<div>
			<CreateUser />
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{data?.map((user, i: number) => (
					<Card key={user.id} className="relative">
						<Button
							onClick={() =>
								apiDelete({
									deleting: deleteUser,
									id: user.id,
								})
							}
							variant="destructive"
							size="icon"
							type="button"
						>
							<Delete className="h-4 w-4" /> {isLoading && '...'}
						</Button>
						<CardHeader>
							<CardTitle>User {i + 1}</CardTitle>
							<CardDescription>{user.username}</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>
		</div>
	);
}
