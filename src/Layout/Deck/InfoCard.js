import React from "react";
import { useRouteMatch, Link, useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api";

export default function InfoCard({ id, front, back }) {
    //Use our URL for shortening code, function to add behavior to delete button.
    const { url } = useRouteMatch();
    const history = useHistory();
    async function handleDelete() {
        const prompt = window.confirm("Are you sure you want to delete this card? It will be removed.")
        if (prompt) {
            await deleteCard(id);
            history.go({url})
        }
    };

    return (
        <>
            <div className="card" style={{ width: "60%" }}>
                <div className="card-body">
                    <div className="d-flex justify-content-between row">
                        <p className="col-6 card-text">{front}</p>
                        <p className="col-6 card-text">{back}</p>
                    </div>
                    <div className="d-flex justify-content-end">
                        <Link to={`${url}/cards/${id}/edit`}>
                            <button className="btn btn-secondary mr-2">
                                Edit
                            </button>
                        </Link>
                        <button className="btn btn-danger" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}