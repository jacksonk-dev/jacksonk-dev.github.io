import { withState, compose } from 'recompose';
import { connect } from 'react-redux';

export default compose(
  connect(),
  withState('expanded', 'expandMenu', false),
);
