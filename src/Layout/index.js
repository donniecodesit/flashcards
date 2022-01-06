import React from "react";
import Header from "./Other/Header";
import NotFound from "./Other/NotFound";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Home/HomePage";
import StudyPage from "./Study/StudyPage";
import CreateDeck from "./Deck/CreateDeck";
import DeckInfoPage from "./Deck/DeckInfoPage";
import EditDeck from "./Deck/EditDeck";
import AddCard from "./Cards/AddCard";
import EditCard from "./Cards/EditCard";

export default function Layout() {
  //React Router to handle page management
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyPage />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <DeckInfoPage />
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
    </>
  );
}