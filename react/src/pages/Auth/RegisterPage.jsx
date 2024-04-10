import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

export const RegisterPage = () => {
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
                        <Input name="password" type="password" placeholder="*******" />
                    </FormControl>

                    <Button sx={{ mt: 1, backgroundColor: 'purple' }}>S'inscrire</Button>

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