import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import StudyCard from "./StudyCard";
import Breadcrumbs from "../Other/Breadcrumbs";


export default function StudyPage() {
    //Initialize the states for Deck, get deckId from params.
    const [deck, setDeck] = useState([]);
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


    if (Object.keys(deck).length) {
        return (
            <div className="container">
                <nav aria-label="breadcrumb">
                    <Breadcrumbs crumbs={[
                        { name: "Home", url: "/" },
                        { name: deck.name, url: `/decks/${deckId}` },
                        { name: "Study" }
                    ]}
                    />
                </nav>
                <h1>Study: {deck.name}</h1>
                {/* STUDY CARD WITH CARDS HERE */}
                <StudyCard cards={deck.cards} deckId={deckId} />
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