import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const BookingModal = ({bookingBrand, setBookingBrand}) => {
    const {user} = useContext(AuthContext)
    const {name, resalePrice} = bookingBrand

    const handleModal = event => {
        event.preventDefault()
        const form = event.target;
        const brandName = form.brandName.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const price = form.price.value;
        const phnNumber = form.phnNumber.value;
        const location = form.location.value;
        const bookingDetails = {
            brandName,
            buyerName: userName,
            email,
            price,
            phnNumber,
            location
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast.success(`Your ${brandName} Booking Successful`)
                setBookingBrand(null);
            }
        })
    }
    const closebtn = () => {
        return setBookingBrand(null)
    }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
            <label
            htmlFor="booking-modal"
            onClick={closebtn}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleModal} className="grid grid-cols-1 gap-5 mt-6">
          <input type="text" name="brandName" disabled defaultValue={name} placeholder="brand Name" className="input input-bordered input-accent font-bold w-full" />
          <input type="text" name="userName" disabled defaultValue={user.displayName} placeholder="User Name" className="input input-bordered input-accent font-bold w-full" />
          <input type="email" name="email" disabled defaultValue={user.email} placeholder="email" className="input input-bordered input-accent w-full" />
          <input type="text" name="price" disabled defaultValue={resalePrice} placeholder="price" className="input input-bordered input-accent w-full" />
          <input type="text" name="phnNumber" placeholder="Your Phone Number" className="input input-bordered input-accent w-full" />
          <input type="text" name="location" placeholder="Meeting location" className="input input-bordered input-accent w-full" />
          <input type="submit"  className="w-full btn bg-green-400 hover:bg-green-500 text-black" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
