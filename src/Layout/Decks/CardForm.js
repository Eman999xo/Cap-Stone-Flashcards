import React from "react";
import { Link } from "react-router-dom";

function CardForm({ saveHandler, handleInputChange, newCard, deckId }) {
  // function handleInputChange(event) {
  //   setNewCard({
  //     ...newCard,
  //     [event.target.name]: event.target.value,
  //   });
  // }

  return (
    <form onSubmit={saveHandler}>
      <div>
        <label htmlFor="front">Front</label>
        <textarea
          className="form-control"
          id="front"
          name="front"
          rows="3"
          placeholder="Front side of card"
          value={newCard.front}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="back">Back</label>
        <textarea
          className="form-control"
          id="back"
          name="back"
          rows="3"
          placeholder="Back side of card"
          value={newCard.back}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <Link
        to={`/decks/${deckId}`}
        name="cancel"
        className="btn btn-secondary mr-3"
      >
        Cancel
      </Link>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CardForm;
