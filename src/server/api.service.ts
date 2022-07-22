import {Injectable} from '@nestjs/common';
import {SnackOption} from '../client/api';

@Injectable()
export class ApiService {
  private inventory: SnackOption[];

  constructor() {
    // TODO - Pull data dynamically, rather
    // than using hardcoded values.
    this.inventory = [
      {
        name: 'Cool Ranch Doritos',
        id: '1',
        price: 12000,
        stock: 5
      },
      {
        name: 'Snickers Bar',
        id: '2',
        price: 5000,
        stock: 4
      },
      {
        name: 'Skittles',
        id: '3',
        price: 5000,
        stock: 2
      },
      {
        name: 'Reese\'s Cups',
        id: '4',
        price: 8000,
        stock: 6
      }
    ];
  }

  public getInventory(): SnackOption[] {
    return this.inventory;
  }

  public getInventoryItemById(itemId: string): SnackOption|undefined {
    return this.inventory.find((item) => item.id === itemId);
  }

  public getInvoiceForItem(itemId: string): string {
    const item = this.getInventoryItemById(itemId);
    if (!item) {
      throw new Error(`Item with id ${itemId} does not exist!`);
    }
    // TODO - Actually generate an invoice.
    // This is just a mock to build the UI.
    return 'lnbc20m1pvjluezpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwz' +
      'qfqypqhp58yjmdan79s6qqdhdzgynm4zwqd5d7xmw5fk98klysy043l2ahrqsfpp3qjmp' + 
      '7lwpagxun9pygexvgpjdc4jdj85fr9yq20q82gphp2nflc7jtzrcazrra7wwgzxqc8u77' +
      '54cdlpfrmccae92qgzqvzq2ps8pqqqqqqpqqqqq9qqqvpeuqafqxu92d8lr6fvg0r5gv0' +
      'heeeqgcrqlnm6jhphu9y00rrhy4grqszsvpcgpy9qqqqqqgqqqqq7qqzqj9n4evl6mr5a' +
      'j9f58zp6fyjzup6ywn3x6sk8akg5v4tgn2q8g4fhx05wf6juaxu9760yp46454gpg5mtz' +
      'gerlzezqcqvjnhjh8z3g2qqdhhwkj';
  }
}
