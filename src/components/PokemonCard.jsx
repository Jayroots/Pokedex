import { React } from 'react';
import { PropTypes } from 'prop-types';


const PokemonCard = ({ pokemon }) => {



    return < div className=' p-6 max-w-sm mx-auto rounded-xl shadow-lg bg-slate-500 '>
        <figure className='flex  bg-slate-400 max-w-sm mx-auto rounded-xl shadow-lg'>
            {pokemon.imgSrc != null ? (
                <img src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
                <p>???</p>
            )}

        </figure>
        <h1 className='text-3xl text-white font-medium text-center p-6 '>I am "{pokemon.name}"</h1>

    </div >


}







/* <figure>
<img src="/media/cc0-images/elephant-660-480.jpg"
    alt="Bulbasaur">
    <figcaption>An elephant at sunset</figcaption>
</figure>
;
} */
PokemonCard.PropTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
    }).isRequired,
}

export default PokemonCard;