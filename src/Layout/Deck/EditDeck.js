import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateDeck, readDeck } from "../../utils/api";
import DeckForm from "./DeckForm";
import Breadcrumbs from "../Other/Breadcrumbs";

export default function EditDeck() {
    //Set up initial form state for editing a card deck
    const initialFormState = {
        name: "",
        description: ""
    }
    const [formData, setFormData] = useState(initialFormState);
    const [deck, setDeck] = useState([])
    const history = useHistory();
    const { deckId } = useParams();

    //load the deck based on ID
    useEffect(() => {
        const abortSwitch = new AbortController();
        async function loadDeck() {
            const response = await readDeck(deckId, abortSwitch.signal);
            setDeck(response);
            setFormData({ id: response.id, name: response.name, description: response.description });
            return () => abortSwitch.abort();
        }
        loadDeck();
    }, [deckId]);

    //handle the change
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: [event.target.value] })
    }

    //handle the submission
    async function handleSubmit(event) {
        event.preventDefault();
        const updatedDeck = await updateDeck(formData);
        history.push(`/decks/${updatedDeck.id}`);
    }
    //return the form

    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <Breadcrumbs crumbs={[
                    { name: "Home", url: "/" },
                    { name: deck.name, url: `/decks/${deckId}` },
                    { name: "Edit Deck" }
                ]}
                />
            </nav>
            <h1>Edit Deck</h1>
            {/* EDIT DECK FORM*/}
            <DeckForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    )
}