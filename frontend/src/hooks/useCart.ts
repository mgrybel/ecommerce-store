import { Item } from '../models/cart';
import { useClearCartMutation, useFetchCartQuery } from '../api/cartApi';

export const useCart = () => {
  const { data: cart } = useFetchCartQuery();
  const [clearCart] = useClearCartMutation();

  const subtotal =
    cart?.items.reduce(
      (sum: number, item: Item) => sum + item.quantity * item.price,
      0
    ) ?? 0;
  const deliveryFee = subtotal > 10000 ? 0 : 500;

  let discount = 0;

  if (cart?.coupon) {
    if (cart.coupon.amountOff) {
      discount = cart.coupon.amountOff;
    } else if (cart.coupon.percentOff) {
      discount =
        Math.round(subtotal * (cart.coupon.percentOff / 100) * 100) / 100;
    }
  }

  const total = Math.round((subtotal - discount + deliveryFee) * 100) / 100;

  return { cart, subtotal, deliveryFee, discount, total, clearCart };
};
