![lengthy-header](https://raw.githubusercontent.com/supercrabtree/lengthy/master/media/lengthy-header.jpg)

Although you can create arrays at a certain length using

`Array(5)`

you can't iterate over these. This is kinda annoying because you can't do stuff
like this:

`Array(5).map(() => Math.random() * 5)`

Which is pretty useful.


Lengthy saves the day with simple syntax:


`Lengthy(5)`


So you can create all kinds of fun one liners.

`const randData = Lengthy(1000).map((val, i) => Math.PI * i)`

Good times 🙂️

`npm install lengthy`
