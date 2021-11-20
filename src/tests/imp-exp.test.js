import { getHeroeById, getHeroesByOwner } from './../test/imp-exp'
import heroes from './../test/datos/heroes'

describe('Pruebas en funciones de Héroes', () => {

  test('debe retornar un héroe', () => {

    const id = 2;
    const heroe = getHeroeById( id );

    const heroeData = heroes.find( h => h.id === id );

    expect( heroe ).toEqual( heroeData );

  })

  test('debe de retornar un undefined si Héroe no existe', () => {

    const id = 10;
    const heroe = getHeroeById( id );

    expect( heroe ).toBe( undefined );

  })

  test('debe de retornar un arreglo con los héroes de DC', () => {

    const owner = 'DC';
    const heroes = getHeroesByOwner( owner );

    const ownersData = heroes.filter( h => h.owner === owner );

    expect( heroes ).toEqual( ownersData );

  })

  test('debe de retornar un arreglo con los héroes de MARVEL', () => {

    const owner = 'Marvel';
    const heroes = getHeroesByOwner( owner );

    expect( heroes.length ).toEqual( 2 );

  })

})