# H1
## H2
### H3
Bold	**bold text**
Italic	*italicized text*
Strikethrough  ~~word~~
Blockquote	> blockquote
Ordered List	
    1. First item
    2. Second item
    3. Third item

Unordered List	
    - First item
    - Second item
    - Third item
Task list
- [x] Write the press release
- [] Update the website
- [] Contact the media
Code	`code`
Horizontal Rule	---
===========================================================================

our application should include a scoreboard, which counts the current score, 
and a “Best Score”, which shows the highest score you’ve achieved thus far.

# header:
    2 divs
    div left:
        h1, p
    div right: 
        best score, score


# CARDs:
    - simple version:
        cards just have pix. no names. 
    - complex version:
        cards with names at the bottom.
    
    first render 20 cards from the api with the pokemon name on them.

## logic
every click should change the order of the pokemon
    [x] trigger function shuffleArray with every click
    ~~[]remove the clicked pokemon from the array and shuffle the new array~~
    [x] the clicked card should be added to an array to be checked if clicked more than once or not
    [x] if clicked twice console.log clickedpokemon.length and game over.
    [x] score state gets updated with the clickedPokemon.length
        1. make a score state in the parent component
        2. pass the state and setter to the sibling components
    [x] store high score in local storage
    [x] high score shows the highest score
    [] reset/game over func

### aesthetics
    add some *skeleton screen* effect to the cards