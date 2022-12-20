const _items = new WeakMap();
class Stack {
  constructor() {
    _items.set(this, []);
  }
  push(param) {
    _items.get(this).push(param);
  }
  pop() {
    if (_items.get(this).length === 0) throw new Error("Stack is Empty");

    return _items.get(this).pop();
  }

  peek() {
    if (_items.get(this).length === 0) throw new Error("Stack is Empty");

    return _items.get(this)[_items.get(this) - 1];
  }

  get count() {
    return _items.get(this).length;
  }
}

const Obj = new Stack();
