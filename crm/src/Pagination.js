
// import React from 'react';


// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

//   return (
//     <div className="pagination">
//       {pages.map((page) => (
//         <button
//           key={page}
//           className={page === currentPage ? 'active' : ''}
//           onClick={() => onPageChange(page)}
//         >
//           {page}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Pagination;

import React from 'react';
import chevronR from './img/chevronr.png';
import chevronL from './img/chevronl.png';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  const visiblePages = () => {
    if (totalPages <= 8) {
      return pages;
    } else {
      if (currentPage <= 4) {
        return [...pages.slice(0, 4), '...', totalPages];
      } else if (currentPage > 4 && currentPage < totalPages - 3) {
        return [1, '...', ...pages.slice(currentPage - 2, currentPage + 1), '...', totalPages];
      } else {
        return [1, '...', ...pages.slice(totalPages - 4)];
      }
    }
  };

  return (
    <div className="pagination">
      <button
        className="pagination-arrow"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src={chevronL} alt="Previous" />
      </button>
      {visiblePages().map((page, index) => (
        <button
          key={index}
          className={page === currentPage ? 'active' : ''}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={typeof page !== 'number'}
        >
          {page}
        </button>
      ))}
      <button
        className="pagination-arrow"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img src={chevronR} alt="Next" />
      </button>
    </div>
  );
};

export default Pagination;
