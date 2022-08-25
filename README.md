# Project: Flashcard-o-matic

> A local school has decided to put together a flashcard application, Flashcard-o-matic, to help their students study online. This application will allow teachers to create decks of flashcards for the subjects they teach, and students will study the decks.

![Home view of Flashcard-o-matic](./public/8ad6e17b7d849280a619e4bb69c26baa-home.png)

## Project setup

Follow the instructions below to get this project up and running on your own machine:

- Fork and clone this repository.
- Run `npm install` to install the dependencies needed for this project.

To run the tests, you can run the following command:

```bash
npm test
```

To watch how the code you write affects the application website, you can run the following command, which will start a server and take over your terminal window:

```bash
npm start
```

To stop the server and regain control of your terminal, you can press `Ctrl + C`.

Instructions
You are tasked with building a number of different screens for the users of the flashcard app, as summarized below:

Screen	Path	Description

Home	```/```	Shows a list of decks with options to create, study, view, or delete a deck


Study	```/decks/:deckId/study```	Allows the user to study the cards from a specified deck

Create Deck	```/decks/new```	Allows the user to create a new deck

Deck	```/decks/:deckId```	Shows all of the information about a specified deck with options to edit or add cards to the deck, navigate to the study screen, or delete the deck

Edit Deck	```/decks/:deckId/edit```	Allows the user to modify information on an existing deck

Add Card	```/decks/:deckId/cards/new```	Allows the user to add a new card to an existing deck

Edit Card	```/decks/:deckId/cards/:cardId/edit```	Allows the user to modify information on an existing card
