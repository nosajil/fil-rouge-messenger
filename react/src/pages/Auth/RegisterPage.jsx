import * as React from 'react';
import { useState } from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export const RegisterPage = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()
    const registerUser = async (userData) => {
        try {
            const response = await axios.post('http://localhost:3000/signup', userData);
            return response.data;
        } catch (error) {
            console.error('Erreur lors de l\'inscription:', error);
            throw error;
        }
    };

    const isValidEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    };

    const isPasswordStrong = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        let username = formData.get('username'); 
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
    
        if (!isValidEmail(email)) {
            setErrorMessage('L\'email n\'est pas valide.');
            return;
        }
    
        if (!isPasswordStrong(password)) {
            setErrorMessage('Le mot de passe doit comporter au moins 8 caractères dont une majuscule, une minuscule, un chiffre et un caractère spécial.');
            return;
        }
    
        if (password !== confirmPassword) {
            setErrorMessage('Les mots de passe ne correspondent pas.');
            return;
        }
    
        if (username.length < 3) {
            setErrorMessage('Le nom d\'utilisateur doit comporter au moins 3 caractères.');
            return;
        }
    
       
        username = username.charAt(0).toUpperCase() + username.slice(1);
    
        const userData = { email, password, username };
    
        try {
            const result = await registerUser(userData);
            console.log('Inscription réussie:', result);
            navigate('/tchat');
            setErrorMessage(''); 
        } catch (error) {
            console.log('Erreur lors de l\'inscription:', error.message);
            setErrorMessage('Erreur lors de l\'inscription. Veuillez réessayer.');
        }
    };
    


    return (
        <main>
            <div className="RegisterPage">
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
                    variant="outlined"
                >
                    <div>
                        <Typography
                            sx={{
                                textAlign: 'center',
                                padding: '10px 5px',
                                backgroundColor: 'purple',
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
                        <Typography level="body-sm">Inscrivez-vous pour continuer.</Typography>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input name="username" type="username" placeholder="John" />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input name="email" type="email" placeholder="johndoe@email.com" />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Mot de passe</FormLabel>
                            <Input name="password" type="password" placeholder="*******" />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Confirmation du mot de passe</FormLabel>
                            <Input name="confirmPassword" type="password" placeholder="*******" />
                        </FormControl>

                        {errorMessage && (
                            <div style={{ color: 'red', marginTop: '10px' }}>
                                {errorMessage}
                            </div>
                        )}

                        <Button type='submit' sx={{ mt: 1, backgroundColor: 'purple' }}>S'inscrire</Button>
                    </form>

                    <Typography
                        endDecorator={<Link href="/login">Se connecter</Link>}
                        fontSize="sm"
                        sx={{ alignSelf: 'center' }} >
                        Vous avez déjà un compte?
                    </Typography>
                </Sheet>
            </div>
        </main>
    );
}