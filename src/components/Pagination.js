import React from "react";

const Pagination = props => {
  return (
    <nav aria-label="Page navigation example">
      <hr />
      <ul className="pagination justify-content-end">
        <li className="page-item">
          <button className="page-link" onClick={e => props.handlePrev(e)}>
            Previous
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={e => props.handleNext(e)}>
            Next
          </button>
        </li>
      </ul>
      <hr />
    </nav>
  );
};

export default Pagination;
