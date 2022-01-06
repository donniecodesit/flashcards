import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { deleteDeck, readDeck } from "../../utils/api";
import InfoCard from "./InfoCard";
import Breadcrumbs from "../Other/Breadcrumbs";

export default function DeckInfoPage() {
    //Initialize the state for Deck, get history and deckId from params.
    const [deck, setDeck] = useState([]);
    const history = useHistory();
    const { deckId } = useParams();

    //Read/Load the deck and set it
    useEffect(() => {
        const abortSwitch = new AbortController();
        async function loadDeck() {
            const response = await readDeck(deckId, abortSwitch.signal);
            setDeck(response);
            return () => abortSwitch.abort();
        }
        loadDeck();
    }, [deckId]);

    //Function to add behavior to delete buttons
    async function handleDelete() {
        const prompt = window.confirm("Are you sure you want to delete this deck? It will be removed.")
        if (prompt) {
            await deleteDeck(deck.id);
            history.push("/")
        }
    }

    //If the deck has an ID value, return our component. Otherwise Loading.
    if (deck.id) {
        return (
            <div className="container">
                <nav aria-label="breadcrumb">
                    <Breadcrumbs crumbs={[
                        { name: "Home", url: "/" },
                        { name: deck.name }
                    ]}
                    />
                </nav>
                <h3>{deck.name}</h3>
                <p>{deck.description}</p>
                <div className="d-flex justify-content-between">
                    <div>
                        <Link to={`/decks/${deck.id}/edit`}>
                            <button className="btn btn-secondary mr-2">
                                Edit
                            </button>
                        </Link>
                        <Link to={`/decks/${deck.id}/study`}>
                            <button className="btn btn-primary mr-2">
                                <i className='bi bi-journal-bookmark-fill'></i> Study
                            </button>
                        </Link>
                        <Link to={`/decks/${deck.id}/cards/new`}>
                            <button className="btn btn-primary">
                                ➕ Add Cards
                            </button>
                        </Link>
                    </div>
                    <button className="btn btn-danger" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
                <h2 className="my-2">Cards</h2>
                <div className="mb-3">
                    {deck.cards.map((card) => (
                        <InfoCard key={card.id} id={card.id} front={card.front} back={card.back} />
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div className="container">
                <p>Loading...</p>
            </div>
        )
    }
}