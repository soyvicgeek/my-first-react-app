import { getUser, getUsuarioActivo } from '../test/funciones';

describe('Pruebas en funciones', () => {

  test('getUser debe retornar un objeto', () => {

    const userTest = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    });

    const user = getUser();

    expect( user ).toEqual( userTest() );
  })

  test('getUserActivo debe retornar un objeto', () => {

    const nombre = 'Daniel';
    const userActivo = getUsuarioActivo(nombre);

    const userActivoTest = () => ({
        uid: 'ABC123',
        username: nombre
    });

    expect( userActivo ).toEqual( userActivoTest() );
  })

})