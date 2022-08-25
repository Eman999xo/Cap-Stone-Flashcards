import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { listDecks, deleteDeck } from "../../utils/api/index";

function Home() {
  const history = useHistory();
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    console.log("useEffects runs");
    async function fetchDecks() {
      const data = await listDecks();
      console.log(data);
      setDecks(data);
    }
    fetchDecks();
  }, []);

  function handleClickCreateDeck(event) {
    event.preventDefault();
    history.push("/decks/new");
  }
  function handleDelete(deckId) {
    if (
      !window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      return;
    }
    deleteDeck(deckId);
    history.push("/");
    window.location.reload(false);
  }
  console.log(decks);

  function handleView(deckId) {
    history.push(`/decks/${deckId}`);
  }

  function handleStudy(deckId) {
    history.push(`/decks/${deckId}/study`);
  }

  return (
    <div className="col-18 mx-auto">
      <button
        type="button"
        className="btn btn-secondary btn-lg"
        onClick={handleClickCreateDeck}
      >
        <span>&#43;</span>
        <span> </span>
        Create Deck
      </button>
      {decks.map((deck) => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{deck.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {deck.cards.length} cards
            </h6>
            <p className="card-text">{deck.description}</p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleView(deck.id)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg> <span> </span>
              View
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleStudy(deck.id)}
            >
              Study
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDelete(deck.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
