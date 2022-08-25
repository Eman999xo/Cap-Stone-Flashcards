import { readDeck, deleteDeck, deleteCard } from "../../utils/api/index";
import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";


function Deck() {
  const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
  const cards = deck.cards || [];

  async function fetchDeck(deckId) {
    const response = await readDeck(deckId);
    setDeck(response);
  }
  useEffect(() => {
    // async function fetchDeck() {
    //   const response = await readDeck(deckId);
    //   setDeck(response);
    // }
    fetchDeck(deckId);
  }, [deckId]);

  async function handleCardDelete(cardId) {
    //console.log(cardId)
    if (
      !window.confirm("Delete this card? You will not be able to recover it.")
    ) {
      return;
    }
    await deleteCard(cardId);
    await fetchDeck(deckId);
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

  return (
    <div className="col-13 mx-auto">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house-door-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
              </svg>{" "}
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <h3>{deck.name}</h3>
      <h5>{deck.description}</h5>
      <div className="d-flex justify-content-around">
      <Link to={`/decks/${deckId}/edit`}>
        <button type="button" className="btn btn-secondary">
          Edit
        </button>
      </Link>
      <Link to={`/decks/${deckId}/study`}>
        <button type="button" className="btn btn-primary">
          Study
        </button>
      </Link>
      <Link to={`/decks/${deckId}/cards/new`}>
        <button type="button" className="btn btn-primary">
          Add Cards
        </button>
      </Link>
      <button type="button" className="btn btn-danger" onClick={handleDelete}>
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
      <br />
      </div>

      <h1>Cards</h1>
      {cards.map((card) => (
        <div key={card.id} className="card my-3">
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">Front</h6>
            <p className="card-text">{card.front}</p>
            <h6 className="card-subtitle mb-2 text-muted">Back</h6>
            <p className="card-text">{card.back}</p>
            <div className="d-flex justify-content-end">
              <Link to={`/decks/${deckId}/cards/${card.id}/edit`}>
                <button type="button" className="btn btn-secondary">
                  Edit
                </button>
              </Link>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleCardDelete(card.id)}
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
        </div>
      ))}
    </div>
  );
}

export default Deck;
