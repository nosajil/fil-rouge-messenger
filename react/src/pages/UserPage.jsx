export const UserPage = () => {
    return (
        <div className="UserPage">

            <div className="UserPage-profil-card">
                <div className="UserPage-profil-card-img"></div>
                <button type="button" className="UserPage-profil-card-button">Changer de photo de profil</button>
            </div>

            <div className="UserPage-color-card">
                <div className="UserPage-color-card-img"></div>
                <button type="button" className="UserPage-color-card-button">Acheter changement de couleurs de pseudo</button>
            </div>

            <div className="UserPage-pseudo-card">
                <div className="UserPage-pseudo-card-titre">Pseudo</div>
                <button type="button" className="UserPage-pseudo-card-button1">Changer de pseudo</button>
                <button type="button" className="UserPage-pseudo-card-button2">Changer le mot de passe</button>
            </div>
            <div className="UserPage-salons-card">
                <div className="UserPage-salons-card-titre">0 / 5 Salons privés</div>
                <button type="button" className="UserPage-salons-card-button">Acheter plus</button>
            </div>
            <div className="UserPage-block-card">
                <div className="UserPage-block-card-titre">Liste des utilisateurs bloqués</div>
                <ul className="UserPage-block-card-ul">
                    <li className="UserPage-block-card-li">
                        Pseudo1
                        <button type="button" className="UserPage-block-card-button">Débloquer</button>
                    </li>
                    <li className="UserPage-block-card-li">
                        Pseudo2
                        <button type="button" className="UserPage-block-card-button">Débloquer</button>
                    </li>
                    <li className="UserPage-block-card-li">
                        Pseudo3
                        <button type="button" className="UserPage-block-card-button">Débloquer</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};