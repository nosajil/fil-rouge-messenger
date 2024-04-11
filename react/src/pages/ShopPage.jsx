export const ShopPage = () => {
    return (
        <div className="ShopPage">
            <div className="titre">Achat de fonctionnalités premium</div>

            <div className="ShopPage-card d1">
                <p className="ShopPage-card-header">COLORATION DE PSEUDO</p>
                <div className="ShopPage-card-img"></div>
                <p className="ShopPage-card-description">Permet de sélectionner une couleur de pseudo personnalisée au sein du chat en ligne</p>
                <button className="ShopPage-card-button">Acheter à 2.99€</button>
            </div>

            <div className="ShopPage-card d2">
                <p className="ShopPage-card-header">+ SALONS PRIVÉS</p>
                <div className="ShopPage-card-img"></div>
                <p className="ShopPage-card-description">Permet la création de plus de canaux de discussion privés</p>
                <button className="ShopPage-card-button">Acheter à 4.99€</button>
            </div>

            <div className="ShopPage-card d3">
                <p className="ShopPage-card-header">DÉBANISSEMENT</p>
                <div className="ShopPage-card-img"></div>
                <p className="ShopPage-card-description">Permet de débloquer un banissement</p>
                <button className="ShopPage-card-button">Acheter à 9.99€</button>
            </div>
        </div>
    );
};