Prototype is simply a parent of an Object.

There is an Object who is the parent of all objects , and it doesn't have any more parent , this is the origin of all objects. just for reference we can call it as objectBase.

Example :
if we do number.toString();

    at first it will look for that method in same object. And if not found it will look towards it's parents methods. If still not found it will look till objectBase.

All the objects created from the same constructor will have same prototype.

In javascript properties of objects have attributes attached to them.
