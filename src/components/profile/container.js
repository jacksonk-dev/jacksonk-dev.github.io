import compose from 'recompose/compose';
import { connect } from 'react-redux';

export default compose(
  connect(state => ({ data: state.profile })),
);
