import Image from "next/image";
import { useState } from "react";

interface ShoppingCart {
  name: string;
  date: string;
  email: string;
  number: string | number;
  cakeFlavor: string;
  fillingFlavor: string;
  imageSrc: string;
  deliveryMethod: string;
  address: string;
  city: string;
  state: string;
  zipCode: number;
  comments: string;
}

// const newShoppingCart: ShoppingCart = {
//     name: "John Doe",
//     date: "06/09/2023",
//     email: "johndoe@example.com",
//     number: "1234567890",
//     cakeFlavor: "Chocolate",
//     fillingFlavor: "Vanilla",
//     imageSrc: "path/to/image.jpg",
//     deliveryMethod: "Express",
//     address: "123 Main St",
//     city: "New York",
//     state: "NY",
//     zipCode: 12345,
//     comments: "Please include a birthday message on the cake."
//   };

// You can now use the newShoppingCart object with the defined properties.
