import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate, Link } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#443f40' }}>
                    <Toolbar>
                        <Box sx={{ flexGrow: 1, display: 'flex', gap: 4 }}>
                            <Typography variant="h6" component="div">
                                <Link to="/tchat" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Tchat
                                </Link>
                            </Typography>

                            <Typography variant="h6" component="div">
                                <Link to="/shop" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Boutique
                                </Link>
                            </Typography>

                            <Typography variant="h6" component="div">
                                <Link to="/user" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Profil
                                </Link>
                            </Typography>
                        </Box>
                        <Button onClick={() => navigate('/')} variant="contained" color="primary" sx={{ marginRight: 2 }}>Se connecter</Button>
                        <Button onClick={() => navigate('/register')} variant="contained" color="secondary">S'inscrire</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}