import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {IsLogInOut} from '../store/AuthSlice';

const Header = () => {

  const { isError } = useSelector((state) => state.books);

  const { isloggedIn } = useSelector((state) => state.auth);

  const Dispatch = useDispatch();

  return (
    <>
      {
        isError && (
          <div class="alert alert-danger mb-0 text-center" role="alert">
            {isError}
          </div>
        )
      }

      <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand mb-0 h1'>My Books</span>

        <button className='btn btn-outline-primary' type='submit' onClick={() => Dispatch(IsLogInOut())}>
          {isloggedIn ? "Log Out" : "Log In"}
        </button>
      </nav>
    </>

  );
};

export default Header;