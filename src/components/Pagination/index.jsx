import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ pageCount, currentPage, setCurrentPage }) => {
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <ReactPaginate
      pageCount={3}
      initialPage={currentPage}
      onPageChange={handlePageClick}
      containerClassName={styles.root}
      activeClassName={styles.active}
      pageClassName={styles.page}
      previousClassName={styles.back}
      nextClassName={styles.next}
      breakClassName={styles.break}
      previousLabel={'Back'}
    />
  );
};

export default Pagination;