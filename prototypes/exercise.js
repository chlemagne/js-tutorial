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

}

// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype) is not
// used because HtmlElement.click() is an instance method. Otherwise,
// it will not be inherited.
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const e = new HtmlElement();
const s = new HtmlSelectElement();

console.log(e);
console.log(s);
