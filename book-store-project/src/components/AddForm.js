import React, { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { InsertBook } from "../store/BookSlice";



const Addform = () => {

    const { isloggedIn } = useSelector((state) => state.auth)


    const Dispatch = useDispatch();



    //ref

    const title = useRef(null);
    const price = useRef(null);
    const dec = useRef(null);


    const HundelForm = (e) => {
        e.preventDefault();

        const Data = {
            title: title.current.value,
            price: price.current.value,
            dec: dec.current.value,
        };

        Dispatch(InsertBook(Data));

        title.current.value = null;
        price.current.value = null;
        dec.current.value = null;


    }


    return (
        <div className='row'>
            <div className='col-6 offset-3 mt-3'>
                <h2>Insert Book</h2>
                <form onSubmit={HundelForm} >
                    <div className='form-group'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' className='form-control' id='title' required ref={title} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='price'>Price</label>
                        <input type='number' className='form-control' id='price' required ref={price} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='Description'>Description</label>
                        <textarea
                            className='form-control'
                            id='Description'
                            rows='3'
                            required
                            ref={dec}
                        ></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary' disabled={!isloggedIn}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addform;