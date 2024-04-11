import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export const LoginPage = () => {
    const navigate = useNavigate()

    const logUser = async (userData) => {
        try {
            const response = await axios.post('http://localhost:3000/login', userData);
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            throw error;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = {
            email: formData.get('email'),
            password: formData.get('password'),


        };


        try {
            const result = await logUser(userData);
            console.log('Connexion réussie:', result);
            navigate('/tchat')

        } catch (error) {
            console.log('Big Mistake', error.message);
        }
    };


    return (
        <main>
            <div className="LoginPage">
                <Sheet
                    sx={{
                        width: 300,
                        mx: 'auto',
                        my: 4,
                        py: 3,
                        px: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        borderRadius: 'sm',
                        boxShadow: 'md',
                    }}
                    variant="outlined"  >
                    <div>
                        <Typography
                            sx={{
                                textAlign: 'center',
                                padding: '10px 5px',
                                backgroundColor: '#1565C0',
                                fontSize: '1.2em',
                                color: 'white',
                                borderRadius: '10px',
                                marginBottom: '10px'
                            }}>
                            Connexion
                        </Typography>
                        <Typography level="h4" component="h1">
                            <b>Bievenue!</b>
                        </Typography>
                        <Typography level="body-sm">Connectez-vous pour continuez.</Typography>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input name="email" type="email" placeholder="johndoe@email.com" />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Mot de passe</FormLabel>
                            <Input name="password" type="password" placeholder="*******" />
                        </FormControl>

                        <Button type='submit' sx={{ mt: 1, backgroundColor: '#1565C0' }}>Se connecter</Button>
                    </form>
                    <Typography
                        endDecorator={<Link href="/register">S'inscrire</Link>}
                        fontSize="sm"
                        sx={{ alignSelf: 'center' }} >
                        Vous n'avez pas encore de compte?
                    </Typography>
                </Sheet>
            </div>
        </main>
    );
}