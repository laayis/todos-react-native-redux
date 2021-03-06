import { expect } from 'chai';
import * as actionTypes from '../../app/constants/actionTypes';
import * as actions from '../../app/actions';

describe('actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).to.eql(
      { type: actionTypes.ADD_TODO, id: 0, text: 'Use Redux' }
    );
  });
  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).to.eql(
      { type: actionTypes.TOGGLE_TODO, id: 1 }
    );
  });
  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).to.eql(
      { type: actionTypes.SET_VISIBILITY_FILTER, filter: 'active' }
    );
  });
});
