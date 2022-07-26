import * as axios from 'axios';
import {ItemSlot} from '../server/storage/interfaces/itemSlot.interface';

export interface GetInventoryResponse {
  items: ItemSlot[]
}

export const getInventory = async (): Promise<GetInventoryResponse> => {
  return (await (axios.default.get('/api/inventory'))).data as GetInventoryResponse;
}
