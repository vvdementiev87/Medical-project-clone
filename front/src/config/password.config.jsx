import bcrypt from 'bcryptjs-react';

export const passwordSalt = '$2a$10$CwTycUXWue0Thq9StjUM0u';

export function hashedPassword(password) {
	return bcrypt.hashSync(password, passwordSalt);
}
