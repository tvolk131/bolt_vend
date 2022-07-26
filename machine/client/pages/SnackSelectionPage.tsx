import {Button, Card, CardActions, CardContent, Typography} from '@mui/material';
import * as React from 'react';
import {useState, useEffect} from 'react';
import {ItemSlot} from '../../server/storage/interfaces/itemSlot.interface';
import {getInventory} from '../api';

const SnackSelectionPage = () => {
  const [inventory, setInventory] = useState<ItemSlot[]>([]);

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
              <Button disabled={item.stock === 0}>Order</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SnackSelectionPage;
