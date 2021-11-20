// Docs => https://jestjs.io/docs/getting-started

describe('Pruebas en el archivo demo.test.js', () => {

  test( 'deben de ser iguales los string', () => {

    //1. Initialization 
    const msg = 'Hello world';

    //2. Stimulus
    const msg2 = `Hello world`;

    //3. Observe behavior => https://jestjs.io/docs/expect#tobevalue
    expect( msg ).toBe( msg2 );

  })

})