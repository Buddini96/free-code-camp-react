/* eslint-disable no-unused-vars */
import { useState } from 'react';
import user from '../assets/images/user.png'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa"; //filled

function UserContact() {

    const [contact, setContact] = useState({
      firstName: "John",
      lastName: "Doe",
      phone: "+1 (212) 555-1212",
      email: "itsmyrealname@example.com",
      isFavorite: true,
    });

    function toogleFavourite () {
        setContact((prev) => {
            return {
                ...prev,
                isFavorite:!prev.isFavorite
            }
        })
    }

    
  return (
    <div className="w-3/4 md:w-1/4 lg:w-1/5 h-auto rounded-lg shadow-lg mx-auto mt-5 py-5 overflow-hidden bg-slate-100 flex justify-center items-center">
      <div className="flex flex-col space-y-3">
        <img src={user} className="w-50 h-50" />
        <button onClick={toogleFavourite}>
          {/* <FaHeart className='w-6 h-6 text-pink-600'/> */}
          {contact.isFavorite ? (
            <FaHeart className="w-6 h-6 text-pink-600" />
          ) : (
            <FaRegHeart className="w-6 h-6 text-pink-600" />
          )}
        </button>
        <h1 className="font-bold text-2xl">
          {contact.firstName} {contact.lastName}
        </h1>
        <p className="font-medium ">{contact.phone}</p>
        <p className="font-medium text-sm">{contact.email}</p>
      </div>
    </div>
  );
}

export default UserContact
