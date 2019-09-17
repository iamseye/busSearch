import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../styles/list.scss';

const ListCard = () => (
  <Card className="listCard">
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        Departure
      </Typography>
    </CardContent>
  </Card>
);

export default ListCard;
