import db from '@/database/database';

export async function insertGuest(name: string) {
	return db.query(
		`
    INSERT INTO guests (name)
    VALUES ($1);
    `,
		[name]
	);
}

export async function checkNameExists(name: string) {
	return db.query(
		`
    SELECT *
    FROM guests
    WHERE name = $1;
    `,
		[name]
	);
}
