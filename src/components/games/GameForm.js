import { useState } from "react";
import GameItem from "./GameItem";

const GameForm = () => {

    const [newGame, setNewGame ] = useState("");
    const [games, setGames] = useState(["Super Mario"]);

    const handleChange = (event) =>{
        const title = event.target.value;
        setNewGame(title);
    }
    const createGameList = () => {
        return games.map( (game, key) => {
            return <li>
                <GameItem key={key} title={game} />
            </li>
        } )
    }
    const addGame = () => {
        /*let gameArray = games;
        gameArray.push(newGame);
        setGames(gameArray);*/
        setGames([newGame, ...games ]); // ... = spread operator
    }
    return (
        <section>
            <section>
                <h3>Legg til spill du kjenner</h3>
                <p>Antall spill: {games.length}</p>
                <p>{newGame}</p>
                <div>
                    <label>Tittel</label>
                    <input onChange={handleChange} type="text" />
                </div>
                <input onClick={addGame} type="button" value="Legg til spill"/>
            </section>
            <section>
                <h3>Dine spill</h3>
                <ul>
                    {createGameList()}
                </ul>
            </section>

        </section>
    )
}

export default GameForm;