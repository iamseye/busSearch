import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../styles/list.scss';

const ListCard = () => (
  <Card className="listCard">
    <CardContent>
      <div className="listCard__upper">
        <div>
          <Typography color="textSecondary" gutterBottom>
            Greyhund
          </Typography>
        </div>
        <div className="listCard__upper--price">
          CAD $109
        </div>
      </div>

      <div className="listCard__lower">
        <div className="listCard__lower--schedule">
          <Typography variant="body2" component="p">
            Depart
          </Typography>
          <Typography variant="h5" component="h2">
            11:45pm Montreal -- Gare d'autocars
          </Typography>
        </div>

        <div className="listCard__lower--schedule">
          <Typography variant="body2" component="p">
            Arrive
          </Typography>
          <Typography variant="h5" component="h2">
            9:05am New York -- Brooklyn Downtown
          </Typography>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ListCard;
