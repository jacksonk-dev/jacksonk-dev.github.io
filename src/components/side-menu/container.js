import compose from 'recompose/compose';
import withState from 'recompose/withState';
import { connect } from 'react-redux';

export default compose(
  connect(),
  withState('expanded', 'expandMenu', false),
);
