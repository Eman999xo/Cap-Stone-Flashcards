import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'
import {createDeck} from '../../utils/api/index'


function CreateDeck() {

    const [newDeck, setNewDeck] = useState({name: "", description: ""});
    const history = useHistory();

    const formChange = ({ target }) => {
        setNewDeck({...newDeck, [target.name]: target.value});
    }
    
    const formSubmit = async (event) => {
        event.preventDefault();
        const response = await createDeck(newDeck);
        history.push(`/decks/${response.id}`);
        

    }
    return (
        <> 
        <div className="col-13 mx-auto">
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={"/"}><i className="fa-fa-home" aria-hidden="true"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
</svg> Home</Link></li>
                    <li className="breadcrumb-item">CreateDeck</li>
                    </ol>
            </nav>
            <h1>Create Deck</h1>
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                    type="text"
                    name="name"
                    value={newDeck.name}
                    onChange={formChange}
                    id="name"
                    className="form-control"
                    placeholder="Deck Name"
                    required
                    />
                </div>
  <div className="form-group">
                    <label>Description</label>
                    <textarea
                    name="description" 
                    value={newDeck.description}
                    onChange={formChange}
                    className="form-control" 
                    id="description" 
                    placeholder="Brief description of the deck."
                    rows={4}
                    required
                    />
                </div>
                <Link to="/" name="cancel" className="btn btn-secondary mr-3">Cancel</Link>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>
        </>
    )

}






export default CreateDeck;