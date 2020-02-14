import React from 'react';
import { shallow } from 'enzyme';
import { TodoBody } from '../../../src/features/home/TodoBody';

describe('home/TodoBody', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <TodoBody {...props} />
    );

    expect(
      renderedComponent.find('.home-todo-body').length
    ).toBe(1);
  });
});
