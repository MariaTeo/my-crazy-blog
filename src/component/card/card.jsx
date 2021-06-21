import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'
import {CatWomanHero} from '../../constants/images';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  media: {
    height: 220,
  },
});

export const CarourselCard = ({image, title, content}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {title}
          </Typography>
            <Typography gutterBottom variant="h6" component="h2">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

CarourselCard.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.string
}

CarourselCard.defaultProps = {
  image: CatWomanHero,
  title: 'Detalii mai multe', 
  content: 'mai multi cacati cu mai mult content de cacat'
}
