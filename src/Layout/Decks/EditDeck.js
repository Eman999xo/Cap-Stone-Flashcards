import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from 'react-router-dom';
import { updateDeck, readDeck } from '../../utils/api/index.js'
import CardForm from '../Decks/CardForm'


function EditDeck () {

    const [deckName, setDeckName] = useState({});
    const {deckId} = useParams();
    const history = useHistory()

    useEffect(() => {
        async function fetchDecks() {
          const currDeck = await readDeck(deckId);
          //console.log(data)
          setDeckName(currDeck);
        }
        fetchDecks();
      }, [deckId]);

      function handleInputChange({target}) {
        setDeckName({ ...deckName, [target.name]: target.value });
      }
    
      const saveHandler = async (event) => {
        event.preventDefault()
        await updateDeck(deckName)
        history.push(`/decks/${deckName.id}`)
      }
    
      




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
            Edit Deck {deckId}
          </li>
        </ol>
      </nav>
      <div>
        <h1>Edit Deck</h1>
      </div>
      <div> 
      <form onSubmit={saveHandler}>
                    <div class="form-group">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="name"
                        value={deckName.name}
                        onChange={handleInputChange}
                        id="name" 
                        class="form-control" 
                        placeholder={deckName.name} 
                        />
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea
                        name="description" 
                        value={deckName.description}
                        onChange={handleInputChange}
                        class="form-control" 
                        id="description" 
                        placeholder={deckName.description}
                        rows={4}
                        />
                    </div>
                    <Link to={`/decks/${deckId}`} name="cancel" class="btn btn-secondary mr-3">Cancel</Link>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
      </div>
      
        </div>
    )
}

export default EditDeck