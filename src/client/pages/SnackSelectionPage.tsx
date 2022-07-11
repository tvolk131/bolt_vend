import {Button, Card, CardActions, CardContent, Typography} from '@mui/material';
import * as React from 'react';
import {useState, useEffect} from 'react';
import {getInventory, SnackOption} from '../api';

const SnackSelectionPage = () => {
  const [inventory, setInventory] = useState<SnackOption[]>([]);

  useEffect(() => {
    getInventory().then((getInventoryResponse) => setInventory(getInventoryResponse.items));
  }, []);

  return (
    <div>
      <Typography variant={'h4'}>
        Select a snack!
      </Typography>
      <div style={{padding: '10px'}}>
        {inventory.map((item) => (
          <Card style={{marginBottom: '10px'}}>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {item.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {item.price} sats
              </Typography>
            </CardContent>
            <CardActions>
              <Button disabled={item.remainingStock === 0}>Order</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SnackSelectionPage;
