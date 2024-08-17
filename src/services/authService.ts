import api from '../api/axios';

export const registerUser = async (name: string, email: string, password: string) => {
    try {
        const res = await api.post('/register', { name, email, password });

        return res.data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw new Error('Ocorreu um erro ao tentar registrar!');
    }
}
