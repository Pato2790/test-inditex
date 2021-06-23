import React from 'react'
import { shallow, configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Item from '.'

configure({ adapter: new Adapter() });

describe('Item component', () => {
  const item = {
    id: '1',
    brand: 'Acer',
    model: 'Iconia Talk S',
    price: '120'
  }

  const onItemSelected = () => {
    return 1
  }

  const wrapper = shallow(<Item item={item} onItemSelected={() => onItemSelected()} />)

  it('Should have 3 paragraphs', () => {
    expect(wrapper.find('p').length).toEqual(3);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy(onItemSelected);
    wrapper.find('.card').simulate('click');
    expect(onButtonClick()).toEqual(1);
  });

})