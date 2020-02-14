import React from 'react';
import { shallow } from 'enzyme';
import { TodoForm } from '../../../src/features/home/TodoForm';

describe('home/TodoForm', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <TodoForm {...props} />
    );

    expect(
      renderedComponent.find('.home-todo-form').length
    ).toBe(1);
  });
});
