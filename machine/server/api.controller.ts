import {Controller, Get, Res} from '@nestjs/common';
import {Response} from 'express';
import {GetInventoryResponse} from '../client/api';
import {ApiService} from './api.service';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('inventory')
  public async getInventory(@Res() res: Response) {
    const response: GetInventoryResponse = {
      items: this.apiService.getInventory()
    };
    res.json(response);
  }
}
