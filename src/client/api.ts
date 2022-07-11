import * as axios from 'axios';

export interface SnackOption {
  /** The displayed name of the snack option. */
  name: string;

  /** The unique identifier for the snack.
   * Used for requesting a lightning invoice. */
  id: string;

  /** The cost of the item, in sats. */
  price: number;

  /** The quantity of the snack option that is left in the machine. */
  remainingStock: number;
}

export interface GetInventoryResponse {
  items: SnackOption[]
}

export const getInventory = async (): Promise<GetInventoryResponse> => {
  return (await (axios.default.get('/api/inventory'))).data as GetInventoryResponse;
}
