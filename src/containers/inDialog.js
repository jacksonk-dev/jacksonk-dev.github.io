import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Slide, Dialog } from '@material-ui/core';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" {...props} ref={ref} />);


const inDialog = (C) => {
  const Dialogged = ({
    open, onClose, onCloseRoute, history, ...props
  }) => (
    <Dialog
      PaperComponent="div"
      open={open}
      onClose={onClose || (() => { history.replace(onCloseRoute); })}
      TransitionComponent={Transition}
    >
      <C
        {...props}
        onClose={onClose}
        onCloseRoute={onCloseRoute}
      />
    </Dialog>
  );
  Dialogged.propTypes = {
    onClose: PropTypes.func,
    onCloseRoute: PropTypes.string,
    open: PropTypes.bool.isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
  };

  Dialogged.defaultProps = {
    onClose: undefined,
    onCloseRoute: undefined,
  };

  return withRouter(Dialogged);
};

export default inDialog;
