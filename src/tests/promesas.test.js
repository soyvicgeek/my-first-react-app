import { getHeroeByIdAsync } from './../test/promesas'
import heroes from './../test/datos/heroes'

describe('Pruebas con promesas', () => {

  test('debe retornar un Héroe async', ( done ) => {

    const id = 1;
    getHeroeByIdAsync( id )
      .then( heroe => {

        expect( heroe ).toBe( heroes[0] );
        done();

      });

  });

  test('debe de obtener un error si el héroe por id no existe', (  ) => {

    const id = 10;
    getHeroeByIdAsync( id )
      .catch( error => {

        expect( error ).toBe( 'No se encontró el héroe' );
        //done();

      });

  });

})