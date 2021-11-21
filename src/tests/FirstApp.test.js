import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

//import { render } from '@testing-library/react';
import FirstApp from './../FirstApp';

describe('Pruebas en <FirstApp />', () => {

  /*==========================================
  Tests with Jest
  ==========================================*/
  /*test('Debe de mostrar el mensaje "Hola, Soy Goku"', () => {
    const saludo = 'Hola, Soy Goku';
    const { getByText } = render( <FirstApp item={ saludo }/>);
    expect( getByText( saludo ) ).toBeInTheDocument();
  })*/

  test('Debe de mostrar <PrimeraApp /> correctamente', () => {

    const item = 'Hola, Soy Goku';
    const wrapper = shallow( <FirstApp item={item}/>);

    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe de mostrar el subtitulo enviado por props', () => {

    const item = 'Hola, Soy Goku';
    const subtitle = 'Default Subtitle';
    const wrapper = shallow(
      <FirstApp
        item={ item }
        subtitle={ subtitle }
      />
    );

    const textParrafo = wrapper.find('p').text().trim();
    expect(textParrafo).toBe( subtitle );
    //console.log(textParrafo);

  });

})