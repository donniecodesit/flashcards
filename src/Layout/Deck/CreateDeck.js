import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import DeckForm from "./DeckForm";
import Breadcrumbs from "../Other/Breadcrumbs";

export default function CreateDeck() {
    //Set up initial form state for making a new card deck
    const initialFormState = {
        name: "",
        description: ""
    }
    const [formData, setFormData] = useState(initialFormState);
    const history = useHistory();

    //Functions to handle Form Change and Form Submission
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: [event.target.value] })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const newDeck = await createDeck(formData);
        history.push(`/decks/${newDeck.id}`);
    }

    //Return a breadcrumb navigation bar with a functional deck form
    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <Breadcrumbs crumbs={[
                    { name: "Home", url: "/" },
                    { name: "Create Deck" }
                ]}
                />
            </nav>
            <h1>Create Deck</h1>
            {/* NEW DECK FORM*/}
            <DeckForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    )
}