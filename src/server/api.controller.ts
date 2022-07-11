import {Controller, Get, Res} from '@nestjs/common';
import {Response} from 'express';
import {GetInventoryResponse} from '../client/api';

@Controller('api')
export class ApiController {
  @Get('inventory')
  public async getInventory(@Res() res: Response) {
    // TODO - Pull data dynamically, rather
    // than using hardcoded values.
    const response: GetInventoryResponse = {
      items: [
        {
          name: 'Cool Ranch Doritos',
          id: '1',
          price: 12000,
          remainingStock: 5
        },
        {
          name: 'Snickers Bar',
          id: '2',
          price: 5000,
          remainingStock: 4
        },
        {
          name: 'Skittles',
          id: '3',
          price: 5000,
          remainingStock: 2
        },
        {
          name: 'Reese\'s Cups',
          id: '4',
          price: 8000,
          remainingStock: 6
        }
      ]
    };
    res.json(response);
  }
}
