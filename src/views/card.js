/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, CardContent, CardActions, CardHeader,
  Divider, Typography, makeStyles, Modal,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  image: {
    objectFit: 'cover',
    display: 'block',
    height: 230,
    minWidth: 0,
    flexGrow: 1,
  },
  imageModal: {
    margin: 'auto',
    alignSelf: 'center',
    maxHeight: '85vh',
    maxWidth: '85vw',
    outline: 'none',
  },
  modal: {
    display: 'flex',
  },
  divider: {
    margin: '10px 0',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    maxHeight: 120,
    overflowY: 'auto',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    textTransform: 'none',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: '#0097A7',
    '&:hover': {
      backgroundColor: '#006064',
    },
    color: '#fff',
    minWidth: 80,
    width: 'fit-content',
  },
  closeButton: {
    backgroundColor: '#d32f2f',
    '&:hover': {
      backgroundColor: '#b71c1c',
    },
  },
}));

const CardView = ({
  item: {
    name, description, image, url, linkText,
  }, onClose,
}) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  function toggleModal() {
    setShowModal(!showModal);
  }
  return (
    <Card
      className={classes.root}
      square
    >
      {
        (image)
        && (
          <>
            <Modal open={showModal} onClose={toggleModal} className={classes.modal}>
              <img
                src={image}
                alt={name}
                className={classes.imageModal}
              />
            </Modal>
            <img
              onClick={toggleModal}
              src={image}
              alt={name}
              className={classes.image}
            />
          </>
        )
      }
      <CardContent className={classes.content} style={{ padding: 16 }}>
        <CardHeader
          style={{ padding: 0 }}
          title={name}
          titleTypographyProps={{ style: { fontSize: '1.1rem', fontWeight: 500, lineHeight: 1 } }}
        />
        {
          description
          && (
            <>
              <Divider style={{ margin: '8px 0' }} variant="middle" />
              <Typography variant="body2">
                {description}
              </Typography>
            </>
          )
        }
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          color="secondary"
          onClick={onClose}
          className={`${classes.button} ${classes.closeButton}`}
        >
            Close
        </Button>
        <Button
          color="primary"
          component="a"
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className={classes.button}
        >
          {linkText}
        </Button>
      </CardActions>
    </Card>
  );
};

CardView.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    linkText: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CardView;
