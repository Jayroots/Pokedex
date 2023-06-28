function RickAndMortyCard({ name, image }) {
    return (

        <li className="rick-and-morty-card">
            <img src={image} alt="Card" />
            <p>{name}</p>
        </li>


    )
}

export default RickAndMortyCard;