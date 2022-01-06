import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readCard, updateCard, readDeck } from "../../utils/api";
import Breadcrumbs from "../Other/Breadcrumbs";
import FormCard from "./FormCard";

export default function EditCard() {
    //set up initial state, front back, formdata, deck, id from params
    const [deck, setDeck] = useState([]);
    const history = useHistory();
    const { deckId, cardId } = useParams();
    const initialFormState = {
        id: 0,
        front: "",
        back: "",
        deckId: deckId
    }
    const [formData, setFormData] = useState(initialFormState);

    //Handle change function
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: [event.target.value] })
    }

    //Handle submit (updateCard)
    async function handleSubmit(event) {
        event.preventDefault();
        await updateCard(formData);
        history.push(`/decks/${deckId}`);
    }

    //Load Deck, then Card
    useEffect(() => {
        const abortSwitch = new AbortController();
        async function loadDeck() {
            const apiDeck = await readDeck(deckId, abortSwitch.signal);
            const apiCard = await readCard(cardId);
            setDeck(apiDeck);
            setFormData({ id: apiCard.id, front: apiCard.front, back: apiCard.back, deckId: apiDeck.id });
            return () => abortSwitch.abort();
        }
        loadDeck();
    }, [deckId, cardId]);


    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <Breadcrumbs crumbs={[
                    { name: "Home", url: "/" },
                    { name: deck.name, url: `/decks/${deckId}` },
                    { name: `Edit Card: ${cardId}` }
                ]}
                />
            </nav>
            <h1>{deck.name}: Edit Card {cardId}</h1>
            {/* NEW CARD FORM*/}
            <FormCard formData={formData} deckId={deckId} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    )
}