Unit testing Notes

spec is short for 'expect'
config for testing

Karma is the test runner, it spins up a server and runs the test.
Karma is built to work with Angular.
Mocha gives us the describe and it helper functions.
Chai let's up make assertions: expect something to equal something.

// KARMA //

Command Line Stuff

karma init karma.conf.js

Answers: mocha, no, Chrome, , src/**.js, spec/**.test.js, , , yes

Go in to karma.conf.js, add chai to frameworks array

Put 'node_modules' in exclude

when comparing strict database use 'eql' instead of equal in your function test

test for wreid cases
