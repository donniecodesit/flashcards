import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import FormCard from "./FormCard";
import Breadcrumbs from "../Other/Breadcrumbs";

export default function AddCard() {
    //Set up initial state, front back, formdata, deck, id from params
    const initialFormState = {
        front: "",
        back: ""
    }
    const [formData, setFormData] = useState(initialFormState);
    const [deck, setDeck] = useState([]);
    const history = useHistory();
    const { deckId } = useParams();

    //Handle change function
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: [event.target.value] })
    }

    //Handle submit (createCard)
    async function handleSubmit(event) {
        event.preventDefault();
        await createCard(deckId, formData);
        setFormData(initialFormState);
        history.push(`/decks/${deckId}`);
    }

    //Load deck
    useEffect(() => {
        const abortSwitch = new AbortController();
        async function loadDeck() {
            const response = await readDeck(deckId, abortSwitch.signal);
            setDeck(response);
            return () => abortSwitch.abort();
        }
        loadDeck();
    }, [deckId]);

    //return bredcrumb, name: add card, form for front and back, two buttons. done returns to deck, save submits
    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <Breadcrumbs crumbs={[
                    { name: "Home", url: "/" },
                    { name: deck.name, url: `/decks/${deckId}` },
                    { name: "Add Card" }
                ]}
                />
            </nav>
            <h1>{deck.name}: Add Card</h1>
            {/* NEW CARD FORM*/}
            <FormCard formData={formData} deckId={deckId} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    )
}