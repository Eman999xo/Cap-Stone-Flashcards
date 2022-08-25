import React, { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";

function AddCard() {
  const history = useHistory();
  const [newCard, setNewCard] = useState({});
  const [deckName, setDeckName] = useState([]);
  const { deckId } = useParams();

  useEffect(() => {
    async function fetchDecks() {
      const currDeck = await readDeck(deckId);
      //console.log(data)
      setDeckName(currDeck);
    }
    fetchDecks();
  }, [deckId, setDeckName]);

  async function saveHandler(event) {
    event.preventDefault();
    console.log("form submitted")
    await createCard(deckId, newCard);
    console.log("card created")
    //console.log(data);
    history.push(`/decks/${deckId}`);
    setNewCard({});
  }
  function handleFrontChange(event) {
    setNewCard({ ...newCard, front: event.target.value });
  }

  function handleBackChange(event) {
    setNewCard({ ...newCard, back: event.target.value });
  }
  console.log("newcard", newCard);
  return (
    <div className="col-12 mx-auto">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
</svg> Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deckName.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <h1>{deckName.name}: Add Card</h1>
      <form onSubmit={saveHandler} >
        <label htmlFor="front">Front</label>
        <textarea
          className="form-control"
          id="front"
          rows="3"
          placeholder="Front side of card"
          onChange={handleFrontChange}
        ></textarea>
        <label htmlFor="back">Back</label>
        <textarea
          className="form-control"
          id="back"
          rows="3"
          placeholder="Back side of card"
          onChange={handleBackChange}
        ></textarea>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => history.push(`/decks/${deckId}`)}
        >
          Done
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default AddCard;