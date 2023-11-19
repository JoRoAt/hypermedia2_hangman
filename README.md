# hypermedia2_hangman

This project is a hangman game, where the player inputs a series of one letter guesses to try to find the secret word to win. Each guess will either be a part of the word, showing every instance of that letter within the word, or wrong, in which
case a piece of the hangman drawing will appear. If the word is guessed correctly, the player will win, however if the hangman drawing is completed, the player will lose. Theres a total of 6 possible mistakes the player can make before losing the
set.

To input a guess, the player will type a single letter on the text box and then click on the guess button. This will prompt the letter to be enlisted within the already attempted guesses. If a letter is already in that list, it will not count as a
guess and instead let the player try with a different letter.

Once a round is over, wether the player has won or lost, a new one will immediately begin right after clicking ok in the alert.
