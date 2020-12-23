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
        this.genre.forEach(function(genre) {
            // NOTE: ``this`` below follows Rule#2 since it belongs to a
            // a function. Hence, ``this.title`` returns ``undefined``.
            console.log(`${this.title}: ${genre}`);
        })
    }
};

// undefined: Action
// undefined: Thriller
// undefined: Romance
video.showGenre();
