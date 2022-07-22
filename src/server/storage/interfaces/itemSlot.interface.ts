/** Represents a physical slot in the vending machine. */
export interface ItemSlot {
  /** The displayed name of the snack option. */
  name: string;

  /** The unique identifier for the snack.
   * Used for requesting a lightning invoice. */
  id: string;

  /** The cost of the item, in sats. */
  price: number;

  /** The quantity of the snack option that is left in the machine. */
  stock: number;
}
