![lengthy-header](https://raw.githubusercontent.com/supercrabtree/lengthy/master/media/lengthy-header.jpg)

[![Build Status](https://travis-ci.org/supercrabtree/lengthy.svg?branch=master)](https://travis-ci.org/supercrabtree/lengthy)

Lengthy provides a similar mechanism to Ruby's `times`, but without extending
the prototype of number.

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

Lengthy sets the value of the array to the same as the key, this means that you
can rewrite the above a little simpler:

`const randData = Lengthy(1000).map(i => Math.PI * i)`

Good times 🙂️

`npm install lengthy`
