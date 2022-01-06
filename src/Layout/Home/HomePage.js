import React, { useEffect, useState } from "react";
import { listDecks, deleteDeck } from "../../utils/api";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";


export default function HomePage() {
    //Initialize decks state
    const [decks, setDecks] = useState([]);
    const [loaded, setLoaded] = useState(false);

    //Fetch and load the decks when the page loads.
    useEffect(() => {
        const abortSwitch = new AbortController();
        async function loadDecks() {
            const response = await listDecks(abortSwitch.signal);
            setDecks(response);
            setLoaded(true);
            return () => abortSwitch.abort();
        }
        loadDecks();
    }, [])

    //Function to handle deletion of a deck
    const handleDelete = async ({ target }) => {
        const prompt = window.confirm(`Delete deck ${target.value}?`);
        if (prompt) {
            await deleteDeck(target.value);
            const result = await listDecks();
            setDecks(result);
        }
    };

    //At this point, we have valid decks, map them out.
    const list = decks.map((deck) => <HomeCard key={deck.id} deck={deck} handleDelete={handleDelete} />)

    return (
        <div className="container">
            <Link to="/decks/new" className="btn btn-secondary">Create Deck</Link>
            <hr />
            {
                (loaded && decks.length === 0)
                ? <p>Please add a deck.</p>
                : (Object.keys(list).length)
                    ? <section>{list}</section>
                    : <p>Loading...</p>
            }
        </div>
    )
}