// import React from 'react';

// const CustomerList = ({ customers }) => {
//   return (
//     <div>
//       {customers.map((customer, index) => (
//         <div key={customer.id}>
//           <p>{`${customer.customer}`}</p>
//           <p>{`${customer.company}`}</p>
//           <p>{`${customer.phone}`}</p>
//           <p>{`${customer.email}`}</p>
//           <p>{`${customer.country}`}</p>
//           <p className={customer.status === 'Active' ? 'status-active' : 'status-inactive'}>{`${customer.status}`}</p>
          
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CustomerList;

// CustomerList.js


// CustomerList.js
import React from 'react';



const CustomerList = ({ customers, currentPage, rowsPerPage }) => {
  const indexOfLastCustomer = currentPage * rowsPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - rowsPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  return (
    <div>
      {currentCustomers.map((customer) => (
        <div key={customer.id} className="customer">
          <p>{`${customer.customer}`}</p>
          <p>{`${customer.company}`}</p>
          <p>{`${customer.phone}`}</p>
          <p>{`${customer.email}`}</p>
          <p>{`${customer.country}`}</p>
          <p className={customer.status === 'Active' ? 'status-active' : 'status-inactive'}>
            {`${customer.status}`}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
