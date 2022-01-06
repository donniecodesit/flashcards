import React from "react";
import { Link } from "react-router-dom";

export default function FormCard({ formData, deckId, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="front">Front</label>
                <textarea required name="front" style={{ resize: "none" }} rows="3" className="form-control" value={formData.front} placeholder="Front of the card" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="back">Back</label>
                <textarea required name="back" style={{ resize: "none" }} rows="3" className="form-control" value={formData.back} placeholder="Back of the card" onChange={handleChange} />
            </div>
            <div>
                <Link to={`/decks/${deckId}`} className="btn btn-secondary mr-2">Cancel</Link>
                <button type="submit" className="btn btn-primary mr-2">Submit</button>
            </div>
        </form>
    )
}