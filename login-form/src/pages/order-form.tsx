// import Image from "next/image";
// import { useState } from "react";

// export default function OpenOrderModal() {
//   return (
//     <div
//       className="modal fade"
//       tabIndex={-1}
//       id="orderModal"
//       role="dialog"
//       aria-labelledby="orderModalLabel"
//     >
//       <div
//         className="modal-dialog modal-dialog-centered text-success "
//         role="document"
//       >
//         <div className="modal-content">
//           <div className="modal-header d-flex">
//             <h5
//               className="modal-title text-center fw-bold text-success col-11"
//               id="orderModalLabel"
//             >
//               Order your cake
//             </h5>
//             <button
//               type="button"
//               className="btn-close col-1"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//             ></button>
//           </div>
//           <div className="modal-body">
//             <form className="row g-3">
//               <div className="col-md-6">
//                 <label className="form-label">Name</label>
//                 <input
//                   type="email"
//                   className="form-control form-control-sm"
//                   id="inputName"
//                   required
//                 />
//               </div>
//               <div className="col-md-6 date">
//                 <label htmlFor="date-input" className="form-label date-label">
//                   Required date
//                 </label>
//                 <input
//                   className="form-control form-control-sm"
//                   type="date"
//                   id="date-input"
//                 />
//               </div>

//               <div className="col-md-6">
//                 <label className="form-label">Email</label>
//                 <input
//                   type="email"
//                   className="form-control form-control-sm"
//                   id="inputEmail4"
//                   required
//                 />
//               </div>

//               <div className="col-md-6">
//                 <label className="form-label ">Number</label>
//                 <div className="input-group input-group-sm ">
//                   <div className="input-group-text ">+1</div>
//                   <input
//                     type="text"
//                     className="form-control form-control-sm"
//                     id="inlineFormInputGroupUsername"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="col-md-6">
//                 <label className="form-label">Choose the cake flavor</label>
//                 <select
//                   className="form-select form-select-sm"
//                   aria-label=".form-select-sm example"
//                   required
//                 >
//                   <option selected value="0" className="text-warning">
//                     Dominican cake
//                   </option>
//                   <option value="1">Vanilla sponge cake</option>
//                   <option value="2">Chocolate cake</option>
//                   <option value="3">Red Velvet</option>
//                   <option value="4">
//                     Other (please specify in the comments)
//                   </option>
//                 </select>
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Choose the filling flavor</label>
//                 <select
//                   className="form-select form-select-sm"
//                   aria-label=".form-select-sm example"
//                   required
//                 >
//                   <option selected value="0">
//                     Dulce de leche
//                   </option>
//                   <option value="1">Vanilla</option>
//                   <option value="2">Pineapple</option>
//                   <option value="3">Guava</option>
//                   <option value="3">Strawberry</option>
//                   <option value="3">Chocolate</option>
//                 </select>
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Amount(lbs)</label>
//                 <input
//                   type="number"
//                   className="form-control form-control-sm"
//                   id="amount"
//                   required
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Number of guests</label>
//                 <input
//                   type="number"
//                   className="form-control form-control-sm"
//                   id="guests"
//                   required
//                 />
//               </div>

//               <div className="col-12">
//                 <div className="mb-3">
//                   <label className="form-label">
//                     Upload the desired cake image
//                   </label>
//                   <input
//                     className="form-control form-control-sm"
//                     type="file"
//                     id="formFile"
//                   />
//                 </div>

//                 <div className="delivery-checkbox d-flex justify-content-center mt-4">
//                   <div className="form-check form-check-inline">
//                     <input
//                       className="form-check-input mx-2"
//                       name="delivery-pickup"
//                       type="radio"
//                       value="option1"
//                       required
//                     />
//                     <label className="form-check-label">Delivery</label>
//                   </div>
//                   <div className="form-check form-check-inline">
//                     <input
//                       className="form-check-input mx-2"
//                       name="delivery-pickup"
//                       type="radio"
//                       value="option2"
//                       required
//                     />
//                     <label className="form-check-label">Pick up</label>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-12">
//                 <label className="form-label">Address</label>
//                 <input
//                   type="text"
//                   className="form-control form-control-sm"
//                   id="inputAddress2"
//                   placeholder="Apartment, studio, or floor"
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">City</label>
//                 <input
//                   type="text"
//                   className="form-control form-control-sm"
//                   id="inputCity"
//                 />
//               </div>
//               <div className="col-md-4">
//                 <label className="form-label">State</label>
//                 <select id="inputState" className="form-select form-select-sm">
//                   <option selected value="city1">
//                     Connecticut
//                   </option>
//                   <option value="city2">New York</option>
//                 </select>
//               </div>
//               <div className="col-md-2">
//                 <label className="form-label">Zip</label>
//                 <input
//                   type="text"
//                   className="form-control form-control-sm"
//                   id="inputZip"
//                 />
//               </div>
//               <div className="col-12">
//                 <div className="mb-3">
//                   <label className="form-label">Add your comments</label>
//                   <textarea
//                     className="form-control form-control-sm"
//                     id="exampleFormControlTextarea1"
//                     placeholder="Please, add a birthday message..."
//                     rows={3}
//                     style={{ resize: "none" }}
//                   ></textarea>
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div className="modal-footer">
//             <button type="button" className="btn btn-success">
//               Add to the cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

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

interface OpenOrderModalProps {
  setCartItems: (items: CartItem[]) => void;
}

export default function OpenOrderModal({ setCartItems }: OpenOrderModalProps) {
  const [cartItems, setCartItemsState] = useState<CartItem[]>([]); // Declare cartItems state variable
  const [formData, setFormData] = useState<CartItem>({
    name: "",
    date: "",
    email: "",
    number: "",
    cakeFlavor: "",
    fillingFlavor: "",
    imageSrc: "",
    amount: 0,
    guests: 0,
    deliveryMethod: "",
    address: "",
    city: "",
    state: "",
    zipCode: 0,
    comments: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newCartItems = [...cartItems, formData];
    console.log(newCartItems); // Console log the newly created object
    // setCartItems(newCartItems);
  };

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div
      className="modal fade"
      tabIndex={-1}
      id="orderModal"
      role="dialog"
      aria-labelledby="orderModalLabel"
    >
      <div
        className="modal-dialog modal-dialog-centered text-success "
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header d-flex">
            <h5
              className="modal-title text-center fw-bold text-success col-11"
              id="orderModalLabel"
            >
              Order your cake
            </h5>
            <button
              type="button"
              className="btn-close col-1"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="inputName"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 date">
                <label htmlFor="date-input" className="form-label date-label">
                  Required date
                </label>
                <input
                  className="form-control form-control-sm"
                  type="date"
                  id="date-input"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="inputEmail4"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Number</label>
                <div className="input-group input-group-sm ">
                  <div className="input-group-text ">+1</div>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="inlineFormInputGroupUsername"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Choose the cake flavor</label>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  name="cakeFlavor"
                  value={formData.cakeFlavor}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled selected>
                    Select a flavor
                  </option>
                  <option value="Dominican cake">Dominican cake</option>
                  <option value="Vanilla sponge cake">
                    Vanilla sponge cake
                  </option>
                  <option value="Chocolate cake">Chocolate cake</option>
                  <option value="Red Velvet">Red Velvet</option>
                  <option value="Other">
                    Other (please specify in the comments)
                  </option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Choose the filling flavor</label>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  name="fillingFlavor"
                  value={formData.fillingFlavor}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled selected>
                    Select a flavor
                  </option>
                  <option value="Dulce de leche">Dulce de leche</option>
                  <option value="Vanilla">Vanilla</option>
                  <option value="Pineapple">Pineapple</option>
                  <option value="Guava">Guava</option>
                  <option value="Strawberry">Strawberry</option>
                  <option value="Chocolate">Chocolate</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Amount (lbs)</label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Number of guests</label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-12">
                <div className="mb-3">
                  <label className="form-label">
                    Upload the desired cake image
                  </label>
                  <input
                    className="form-control form-control-sm"
                    type="file"
                    id="formFile"
                    name="imageSrc"
                    value={formData.imageSrc}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="delivery-checkbox d-flex justify-content-center mt-4">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input mx-2"
                      name="deliveryMethod"
                      type="radio"
                      value="Delivery"
                      checked={formData.deliveryMethod === "Delivery"}
                      onChange={handleInputChange}
                      required
                    />
                    <label className="form-check-label">Delivery</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input mx-2"
                      name="deliveryMethod"
                      type="radio"
                      value="Pickup"
                      checked={formData.deliveryMethod === "Pickup"}
                      onChange={handleInputChange}
                      required
                    />
                    <label className="form-check-label">Pick up</label>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="inputAddress2"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="inputCity"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">State</label>
                <select
                  id="inputState"
                  className="form-select form-select-sm"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    Select a state
                  </option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="New York">New York</option>
                </select>
              </div>
              <div className="col-md-2">
                <label className="form-label">Zip</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="inputZip"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <label className="form-label">Add your comments</label>
                  <textarea
                    className="form-control form-control-sm"
                    id="exampleFormControlTextarea1"
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    placeholder="Please, add a birthday message..."
                    rows={3}
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-success">
                  Add to the cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
