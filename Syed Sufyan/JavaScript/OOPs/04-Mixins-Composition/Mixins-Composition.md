If we have complex hierarchy in inheritance, we shud avoid using inheritance,
Instead we shud go for compositions wherein we can compose any new object
out of some pre defined properties.

Example
Objects - Person Dog
methods- eat(), walk()

so we can create a parent obj called Animal and define eat() & walk() in it and inherit them in Objects

But later if we add Goldfish to our Objects, it cannot walk, it swims,
so we again have to add swim() method and also change heirarchy terresterial & aqua.

and if we had different animals, the hierarchy will get more & more complex.

To avoid this, comes in COMPOSITON.
Wherein we can predefine objects such as canEat, canWalk, canSwim

and with the combinations of these objects we can create any type of new obj.
