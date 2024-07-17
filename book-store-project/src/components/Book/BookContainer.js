import React, { Fragment, useEffect, useState } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";

import "./book.css";

import { useDispatch, useSelector } from "react-redux";
import { getBook, DeleteBook } from "../../store/BookSlice";

const PostContainer = () => {

  const Dispatch = useDispatch();

  const [selectedBook, setslectedBook] = useState([]);


  const { isloading, books } = useSelector((state) => state.books);

  useEffect(() => {
    Dispatch(getBook());
  }, [Dispatch]);

  const Readbook = (id) => {
    const selectedBook = books.find((item) => item.id === id);
    setslectedBook((prev) => { return { ...prev, ...selectedBook } });
  };

  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList
            isloading={isloading}
            books={books}
            DeleteBook={DeleteBook}
            Dispatch={Dispatch}
            ReadBook={Readbook}
          />
        </div>
        <div className="col side-line">
          <BookInfo info={selectedBook} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
