import Button from '@mui/material/Button';

export const UserPage = () => {
    return (
        <div className="UserPage">

            <div className="UserPageChild1">
                <div className="UserPage-profil-card Card">
                    <div className="UserPage-profil-card-img Card-img">
                        <img src="./img/default-user-img.png" alt="Photo de profil" />
                    </div>
                    <Button variant="contained" className="UserPage-profil-card-button UserBtn">Changer de photo de profil</Button>
                </div>

                <div className="UserPage-color-card Card">
                    <div className="UserPage-color-card-img Card-img">
                        <img src="./img/palette.png" alt="Palette de couleur" />
                    </div>
                    <Button variant="contained" className="UserPage-color-card-button UserBtn">Acheter changement de couleurs de pseudo</Button>
                </div>

                <div className="UserPage-pseudo-card Card">
                    <div className="UserPage-pseudo-card-titre Title-card">
                        <h2 className='Title-of-pseudo-card'>Pseudo</h2>
                    </div>
                    <div className='Buttons-UserPage'>
                        <Button variant="contained" className="UserPage-pseudo-card-button1">Changer de pseudo</Button>
                        <Button variant="contained" className="UserPage-pseudo-card-button2">Changer le mot de passe</Button>
                    </div>
                </div>
                <div className="UserPage-salons-card Card">
                    <div className="UserPage-salons-card-titre Title-card">
                        <h2 className='Title-of-salons-card'>0 / 5 Salons privés</h2>
                    </div>
                    <Button variant="contained" className="UserPage-salons-card-button">Acheter plus</Button>
                </div>
            </div>
            
            <div className="UserPageChild2">
                <div className="UserPage-block-card">
                    <div className="UserPage-block-card-titre">
                        <h1>Liste des utilisateurs bloqués</h1>
                    </div>
                    <ul className="UserPage-block-card-ul">
                        <li className="UserPage-block-card-li">
                            <h3>Pseudo1</h3>
                            <Button variant="outlined" color="error" className="UserPage-block-card-button">Débloquer</Button>
                        </li>
                        <li className="UserPage-block-card-li">
                            <h3>Pseudo2</h3>
                            <Button variant="outlined" color="error" className="UserPage-block-card-button">Débloquer</Button>
                        </li>
                        <li className="UserPage-block-card-li">
                            <h3>Pseudo3</h3>
                            <Button variant="outlined" color="error" className="UserPage-block-card-button">Débloquer</Button>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};