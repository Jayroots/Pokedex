import { useEffect, useState } from "react"
import RickAndMortyCard from "../RickAndMortyCard"

function HomePage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((reponseFormatee) => setData(reponseFormatee.results))
            .catch((err) => console.log(err))

    }, [])

    return (
        <main className="HomePage">
            <select name="" id="">
                <option value="">...</option>
            </select>
            <ul className="HomePage_ul">
                {data.map((elementsRencontresDansLaBoucle) => {
                    return (
                        <RickAndMortyCard key={elementsRencontresDansLaBoucle.id}
                            name={elementsRencontresDansLaBoucle.name}
                            image={elementsRencontresDansLaBoucle.image} />
                    )
                })


                }
            </ul>

        </main>
    )
}

export default HomePage