const RickAndMortyCard = ({ name, image }) => {
    return (
        <li className="center border-2 rounded-xl shadow-sm">
            <img className="flex rounded-md mx-auto	" src={image} alt={name} />
            <p className="p-6 text-center text-2xl">{name}</p>
        </li>
    );
};

export default RickAndMortyCard;