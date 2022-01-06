import React from "react";
import { Link } from "react-router-dom";

export default function DeckForm({ formData, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input required name="name" type="text" className="form-control" value={formData.name} placeholder="Deck Name" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea required name="description" style={{ resize: "none" }} rows="5" className="form-control" value={formData.description} placeholder="Brief description of the deck" onChange={handleChange} />
            </div>
            <div>
                <Link to="/">
                    <button className="btn btn-secondary mr-2">Cancel</button>
                </Link>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    )
}