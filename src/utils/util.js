import bcrypt from 'bcryptjs';

export const generatePassword = async (password) => bcrypt.hash(password, process.env.NODE_ENV === 'production' ? 10 : 1);

export default generatePassword;
