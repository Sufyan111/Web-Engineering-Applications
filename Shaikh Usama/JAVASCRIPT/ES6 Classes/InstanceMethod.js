class Square {
    constructor(params) {
        
    }
    // Here Draw is a Instance Method as it is available on the Object of the class.
    draw(){

    }
    // Here parse is a Static method and it is not availble on class object but can 
    // be accessed with Class using DOT notation.
    static parse ()
}

// Instance Method
const Obj = new Square;
Obj.draw();

// Static Method
Square.parse();