import '@testing-library/jest-dom';
import { getSaludo } from './../test/template-string';

describe('Test on template-string.js', () => {

  test('test on the method getSaludo', () => {

    const name = 'Vic';

    const greeting = getSaludo( name );

    expect(greeting).toBe('Hola ' + name + '!');

  })

  test('getSaludo debe de retornar Hola Carlos! si no hay argumento nombre', () => {

    const greeting = getSaludo();
    expect(greeting).toBe('Hola Carlos!');

  })

})