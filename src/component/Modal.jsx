// // Modal.js
// import React from 'react';

// const Modal = ({ show, onClose, coupon, isLoggedIn, onLoginClick }) => {
//   if (!show) return null; // মডাল যদি না থাকে তবে কিছু দেখাবে না

//   return (
//     <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
//       <div className="modal-content bg-white p-6 rounded-lg w-[500px]">
//         <h2 className="text-2xl font-bold mb-4">Coupon Details</h2>
//         {isLoggedIn ? (
//           <>
//             <p><strong>Coupon Code:</strong> {coupon?.coupon_code}</p>
//             <p><strong>Description:</strong> {coupon?.descriptionP}</p>
//             <p><strong>Expiry Date:</strong> {coupon?.expiry_date}</p>
//             <p><strong>Conditions:</strong> {coupon?.condition}</p>
//             <p><strong>Coupon Type:</strong> {coupon?.coupon_type}</p>
//           </>
//         ) : (
//           <p>Please <span className="text-blue-500 cursor-pointer" onClick={onLoginClick}>login</span> to view coupon details.</p>
//         )}
//         <button className="mt-4 p-2 bg-blue-500 text-white rounded" onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default Modal;
