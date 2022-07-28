import React from "react";

export default function Pagination(props) {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <div className="pagination">
      <button onClick={onLeftClick}>Previous</button>
      <div>
        {page} / {totalPages}
      </div>
      <button onClick={onRightClick}>Next</button>
    </div>
  );
}
