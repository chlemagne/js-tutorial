// Stack Exercise

const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    }

    get count() {
        return _items.get(this).length;
    }

    peek() {
        if (!this.count)
            throw new Error("Stack is empty")
        
        return _items.get(this)[this.count - 1];
    }

    pop() {
        if (!this.count)
            throw new Error("Stack is empty")
            
        return _items.get(this).pop();
    }

    push(obj) {
        _items.get(this).push(obj);
    }
}

const stack = new Stack();

console.log(stack);
