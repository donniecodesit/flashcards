import React from "react";
import { Link } from "react-router-dom";

//Forms the layout for a card with View, Study, and Delete buttons.
export const HomeCard = ({ deck, handleDelete }) => (
    <div className="card">
        <div className="container">
            <div className="row card-header">
                <div className="col-10">
                    <h4>{deck.name}</h4>
                </div>
                <div className="col-2">
                    <p style={{ fontSize: 14, textAlign: "right" }}>{deck.cards.length} cards</p>
                </div>
            </div>
        </div>

        <div className="card-body">
            <div className="container">
                <p className="card-text">{deck.description}</p>
                <div className="row justify-content-between">
                    <div className="col-4">
                        <Link to={`decks/${deck.id}`} className="btn btn-secondary mr-2">View</Link>
                        <Link to={`decks/${deck.id}/study`} className="btn btn-primary">Study</Link>
                    </div>
                    <div className="col-2 text-right">
                        <button className="btn btn-danger" value={deck.id} onClick={handleDelete}>🗑</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HomeCard;