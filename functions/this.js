// JS ``this`` keyword
/*
    The keyword ``this`` refers to the object that is executing the current function.
    
    Rules:
    +-------+-----------+-----------------------------------+
    | rule  | callee    | this refers to                    |
    +=======+===========+===================================+
    |       |           | object (i.e. defined thru         |
    | 1     | method    | obj literal syntax, constructor   |
    |       |           | functions)                        |
    +-------+-----------+-----------------------------------+
    | 2     | function  | window or (node) global           |
    +=======+===========+===================================+
*/

const video = {
    title: 'Underworld',
    genre: ['Action', 'Thriller', 'Romance'],
    showGenre() {
        // (ES6) arrow function inherits ``this``
        this.genre.forEach(genre => console.log(`${this.title}: ${genre}`));
    }
};

// Underworld: Action
// Underworld: Thriller
// Underworld: Romance
video.showGenre();

// JS Function .call(), .apply(), and .bind() methods
// NOTE: a JS function is an object; hence, it has methods.
function playVideo(startTime, playSpeed) {
    console.log(
        `Playing <${this.title}> starting at <${startTime}> at speed <${playSpeed}>`);
}

// Playing <Naruto> starting at <00:00:30> at speed <1.5x>
playVideo.call({ title: `Naruto` }, `00:00:30`, `1.5x`);

// Playing <One Piece> starting at <00:01:00> at speed <1x>
playVideo.apply({ title: `One Piece` }, [`00:01:00`, `1x`]);

// Playing <Fairy Tail> starting at <00:00:30> at speed <1.5x>
const fairyTail = playVideo.bind({ title: `Fairy Tail` }, `00:00:30`, `1.5x`);
fairyTail();
