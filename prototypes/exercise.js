// Exercise 1

function HtmlElement() {
    this.click = function() {
        console.log("Clicked...");
    }
}

HtmlElement.prototype.focus = function() {
    console.log("Focused...");
};

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    };

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    };

    this.render = function() {
        return `<select>${this.items.map(item => `
    <option>${item}</option>`).join('')}
</select>`;
    };
}

// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype) is not
// used because HtmlElement.click() is an instance method. Otherwise,
// it will not be inherited.
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
    this.src = src;

    this.render = function() {
        return `<img src=${this.src} />`;
    };
}

// Extend HtmlImageElement
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const e = new HtmlElement();
const s = new HtmlSelectElement();
const i = new HtmlImageElement();

console.log(e);
console.log(s);
console.log(i);

// Polymorphism exercise
const elements = [
    new HtmlSelectElement(['Apple', 'Banana', 'Carrot']),
    new HtmlImageElement('http://example.com')
];

for (let element of elements)
    console.log(element.render());