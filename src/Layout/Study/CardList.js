import React, { useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";

function CardList({ deckName}) {
  const history = useHistory();
  const { deckId } = useParams();
  const [cardIndex, setCardIndex] = useState(0);
  const [side, setSide] = useState(true);

  const cards = deckName.cards || [];
  function handleFlip(event) {
    setSide(!side);
  }

  function nextHandler() {
    setCardIndex((cardIndex) => cardIndex + 1);
    setSide(true);
    if (cardIndex === cards.length - 1) {
      return window.confirm(
        "Restart Cards?\n\n Click 'cancel' to return to the home page"
      )
        ? setCardIndex(0)
        : history.push("/");
    }
  }

  
  if (cards.length && cards.length > 2) {
    return (
      <div key={deckId} className="card">
        <div className="card-body">
          <h5 className="card-title">
            Card {cardIndex + 1} of {cards.length}
          </h5>
          <p className="card-text">
            {side ? cards[cardIndex].front : cards[cardIndex].back}
          </p>
          {/* Flip card button */}
          <button className="btn btn-secondary" onClick={handleFlip}>
            Flip
          </button>
          {/* IF card is on backside, provide a button to go to next card*/}
          {side ? null : (
            <button className="btn btn-primary" onClick={nextHandler}>
              Next
            </button>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Not enough cards.</h5>
          <p className="card-text">
            You need atleast 3 cards to study. There are {cards.length} cards in
            this deck.
          </p>
          <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">
            Add Cards
          </Link>
        </div>
      </div>
    );
  }
}

export default CardList;