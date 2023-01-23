import { checkNameExists } from '@/repositories/guests.repository';
import { createGuest } from '@/services/guests.services';

export async function newGuest(req: Request, res: Response) {
	const { name } = req.body;

	try {
		await createGuest(name);
		res.status(200).send(`${name} created`);
	} catch (error) {
		console.log(error);
		res.status(500).send('error');
	}
}
