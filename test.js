import test from 'ava';
import Lengthy from './';

console.log('Lengthy', Date.now());

test('Lengthy creates arrays at a given length', t => {
  t.is(Lengthy(0).length, 0);
  t.is(Lengthy(5).length, 5);
  t.is(Lengthy(1000).length, 1000);
});

test('Lengthy creates arrays that are iterable', t => {
  t.plan(10);
  Lengthy(10).forEach(() => t.pass());
});
