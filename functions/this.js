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
        const self = this;
        this.genre.forEach(function(genre) {
            console.log(`${self.title}: ${genre}`);
        })
    }
};

// Underworld: Action
// Underworld: Thriller
// Underworld: Romance
video.showGenre();
