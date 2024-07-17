import React from "react";

import { useSelector } from "react-redux";

const BooksList = ({ isloading, books, DeleteBook, Dispatch, ReadBook }) => {
  const { isloggedIn } = useSelector((state) => state.auth);

  const GetBooks =
    books.length > 0
      ? books.map((item) => (
        <li
          className="list-group-item d-flex  justify-content-between align-items-center"
          key={item.id}
        >
          <div>{item.title}</div>
          <p>{item.price}$</p>
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => ReadBook(item.id)}
            >
              Read
            </button>
            <button
              type="button"
              className="btn btn-danger"
              disabled={!isloggedIn}
              onClick={() =>
                Dispatch(DeleteBook(item))
                  .unwrap()
                  .then((originalPromiseResult) => {
                    console.log(originalPromiseResult);
                    // alert(originalPromiseResult.title);
                  })
                  .catch((rejectedValueOrSerializedError) => {
                    console.log(rejectedValueOrSerializedError);
                  })
              }
            >
              Delete
            </button>
          </div>
        </li>
      ))
      : "There is not avilable";

  return (
    <div>
      <h2>Books List</h2>

      {isloading ? "looding...." : <ul className="list-group">{GetBooks}</ul>}
    </div>
  );
};

export default BooksList;
