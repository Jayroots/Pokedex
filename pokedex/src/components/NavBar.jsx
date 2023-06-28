
import react, { useEffect } from 'react';
import PropTypes from "prop-types"

const NavBar = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {

    const handleClickPrevious = () => {
        setPokemonIndex(pokemonIndex - 1)
    };
    const handleClickNext = () => {
        setPokemonIndex(pokemonIndex + 1)
    };
    useEffect(() => {
        pokemonIndex === 3 ? alert("pika pikaaaaaa !!! ") : null;
    })
    return (
        <nav className='flex max-w-sm mx-auto p-6' >
            {pokemonIndex > 0 && (
                <button className='text-white max-w-sm mx-auto' type="button" onClick={handleClickPrevious}>
                    previous
                </button>
            )}


            {pokemonIndex < pokemonList.length - 1 && (
                <button className='text-white max-w-sm mx-auto' type="button" onClick={handleClickNext}>
                    next
                </button>
            )}
        </nav>
    );
}

NavBar.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    setPokemonIndex: PropTypes.func.isRequired,
    pokemonList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string,
        })
    ).isRequired,
};

export default NavBar;