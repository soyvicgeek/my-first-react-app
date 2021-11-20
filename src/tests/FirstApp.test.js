import React from 'react';

import { render } from '@testing-library/react';
import FirstApp from './../FirstApp';

describe('Pruebas en <FirstApp />', () => {

  test('Deebe de mostrar el mensaje "Hola, Soy Goku"', () => {

    const saludo = 'Hola, Soy Goku';

    const { getByText } = render( <FirstApp item={ saludo }/>);

    expect( getByText( saludo ) ).toBeInTheDocument();

  })

})