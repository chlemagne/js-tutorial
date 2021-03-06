// Typescript Types

let price: number;
let isActive: boolean;
let firstName: string;
let myVar: any;
let prices: number[] = [1, 2, 3];

enum Color {
    // NOTE: good practice to explicitly define the indices
    Red = 0,
    Green = 1,
    Blue = 2
};
let foregroundColor = Color.Green;

// Type assertions
let message;
message = 'hello, world!';

const endsWithC = (<string>message).endsWith('c');      // true
const endsWithD = (message as string).endsWith('d');    // false
