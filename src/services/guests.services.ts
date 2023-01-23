import { checkNameExists, insertGuest } from '@/repositories/guests.repository';

export async function createGuest(name: string) {
	const nameExists = await checkNameExists(name);

	if (nameExists.rows.length > 0) {
		throw {
			name: 'DuplicatedNameError',
			message: 'There is already an user with given name',
		};
	}

	await insertGuest(name);
	return name;
}
