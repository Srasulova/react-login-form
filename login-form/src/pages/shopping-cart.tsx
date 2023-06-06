import { useState } from "react";
import OpenOrderModal from "./order-form";

interface CartItem {
  name: string;
  date: string;
  email: string;
  number: string | number;
  cakeFlavor: string;
  fillingFlavor: string;
  imageSrc: string;
  amount: number;
  guests: number;
  deliveryMethod: string;
  address: string;
  city: string;
  state: string;
  zipCode: number;
  comments: string;
}

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <div>
      {/* Render your shopping cart items here */}
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          {/* Render other properties */}
        </div>
      ))}

      {/* Render the order form */}
      <OpenOrderModal setCartItems={setCartItems} />
    </div>
  );
}
