import React from "react";
import {useState} from 'react'
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/Home";
import CreateDeck from "./Decks/CreateDeck";
import Study from "./Study/Study"
import Deck from "./Decks/Deck"
import EditDeck from "./Decks/EditDeck";
import AddCard from "./Decks/AddCard";
import EditCard from "./Decks/EditCard";



function Layout() {

  const [deckLength, setDeckLength] = useState(0);  

  const updateDecks = (newDecks) => {
    setDeckLength(() => deckLength + newDecks)  
  }
  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home updateDecks={updateDecks} deckLength={deckLength}/>
          </Route>
          <Route path ="/decks/new">
            <CreateDeck updateDecks={updateDecks} />
          </Route>
          <Route exact path = "/decks/:deckId">
            <Deck />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new"> 
            <AddCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard /> 
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
