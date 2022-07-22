import {Injectable} from '@nestjs/common';
import * as ElectronStore from 'electron-store';
import {v4 as uuidv4} from 'uuid';
import {ItemSlot} from './interfaces/itemSlot.interface';
import {StorageData} from './interfaces/storageData.interface';

@Injectable()
export class StorageService {
  private store: ElectronStore<StorageData>;

  constructor() {
    this.store = new ElectronStore<StorageData>({schema: {
      deviceUuid: {
        // Generate a new random device ID if this is a new device.
        default: uuidv4()
      },
      inventory: {
        type: 'array',
        default: [],
        items: {
          type: 'object',
          properties: {
            name: {type: 'string'},
            id: {type: 'string'},
            price: {type: 'number'},
            stock: {type: 'string'}
          }
        }
      }
    }});
  }

  public getDeviceUUID() {
    return this.store.get('deviceUuid');
  }

  public getInventory(): ItemSlot[] {
    return this.store.get('inventory');
  }
}
