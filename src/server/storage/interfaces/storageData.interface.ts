import {ItemSlot} from "./itemSlot.interface";

export interface StorageData {
  /** The unique identifier for the device. */
  deviceUuid: string;
  inventory: ItemSlot[]
}
