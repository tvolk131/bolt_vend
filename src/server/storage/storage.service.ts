import {Injectable} from '@nestjs/common';
import * as ElectronStore from 'electron-store';
import {v4 as uuidv4} from 'uuid';

interface StorageData {
  /** The unique identifier for the device. */
  deviceUuid: string;
}

@Injectable()
export class StorageService {
  private store: ElectronStore<StorageData>;

  constructor() {
    this.store = new ElectronStore<StorageData>({schema: {
      deviceUuid: {
        // Generate a new random device ID if this is a new device.
        default: uuidv4()
      }
    }});
  }

  public getDeviceUUID() {
    return this.store.get('deviceUuid');
  }
}
