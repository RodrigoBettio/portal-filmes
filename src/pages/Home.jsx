import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard"
import movies from "../data/movies.json"


export default function Home(){
    return(
        <>
            <CardContainer titulo="Filmes antigos">
            {
                movies.map(filme => (
                    <MovieCard key={filme.id}{...filme}/> //Spread Array
                ))
            }
            </CardContainer>
        </>
    )
}