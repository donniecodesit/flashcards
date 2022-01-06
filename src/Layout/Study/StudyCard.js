import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

export default function StudyCard({ cards, deckId }) {
    //Set up a state to track what card is currently displaying and if the next button should be shown based on flipped
    const startingState = {
        flipped: false,
        currentCard: 0
    };
    const [studyState, setStudyState] = useState(startingState);
    const history = useHistory();

    //Add functionality to the next button that changing the state
    const nextButton = () => {
        //If you're not on the last card, continue. Otherwise, offer restart.
        if (studyState.currentCard < cards.length - 1) {
            setStudyState({ ...studyState, currentCard: studyState.currentCard + 1, flipped: false });
        } else {
            window.confirm('Restart the deck? Click "cancel" to return home.')
                ? setStudyState(startingState)
                : history.push("/");
        }
    }

    //If there are more than 2 cards, display them normally and cycle through them. Otherwise inform the user the deck is too short.
    //Cards need to flip to view the back, then enable the next button to move to the next card. Use history to go home at the end prompt.
    if (cards.length > 2) {
        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">
                        Card {studyState.currentCard + 1} of {cards.length}
                    </h3>
                    <p className="card-text">
                        {studyState.flipped ? cards[studyState.currentCard].back : cards[studyState.currentCard].front}
                    </p>
                    <button className="btn btn-secondary mr-2" onClick={() => setStudyState({ ...studyState, flipped: !studyState.flipped })}>Flip</button>

                    {studyState.flipped && (
                        <button className="btn btn-primary mr-2" onClick={nextButton}>Next</button>
                    )}
                </div>
            </div>
        );
    } else {
        return (
            <>
                <h2>Not enough cards</h2>
                <p>You need at least 3 cards to study. There are {cards.length} cards in this deck.</p>
                <Link to={`/decks/${deckId}/cards/new`}>
                    <button className="btn btn-primary">➕ Add Cards</button>
                </Link>
            </>
        )
    }


}