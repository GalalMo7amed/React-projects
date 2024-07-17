import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { logInsert } from './ReportSlice';


// get book from API
export const getBook = createAsyncThunk('books/getbook',
    async (_, thunkAPI) => {

        const { rejectWithValue } = thunkAPI;

        try {
            const res = await fetch('http://localhost:8000/Book');
            const data = await res.json();
            return data;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    })

// Send data for API


export const InsertBook = createAsyncThunk("books/InsertBook", async (bookData, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    try {

        bookData.userName = getState().auth.name;
        const res = await fetch("http://localhost:8000/Book", {
            method: "POST",
            body: JSON.stringify(bookData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await res.json();

        dispatch(logInsert({ name: 'insert book', status: 'success' }))

        return data;
    }
    catch (error) {
        dispatch(logInsert({ name: 'insert book', status: 'failed' }))
        return rejectWithValue(error.message);
    }
})

// DELETE BOOK


export const DeleteBook = createAsyncThunk("books/DeleteBook", async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        await fetch(`http://localhost:8000/Book/${item.id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return item
    }
    catch (error) {
        rejectWithValue(error.message)
    }
})


// GET BOOK


export const ReadBook = createAsyncThunk("books/ReadBook", async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        await fetch(`http://localhost:8000/Book/${item.id}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return item
    }
    catch (error) {
        rejectWithValue(error.message)
    }
})

const bookSlice = createSlice({
    name: ' books',
    initialState: { books: [], isloading: false, isError: null, bookinfo: null },
    extraReducers: (books) => {

        books
            .addCase(getBook.pending, (state, action) => {
                state.isloading = true;
                state.isError = null;

            })
            .addCase(getBook.fulfilled, (state, action) => {
                state.isloading = false
                state.books = action.payload;
            })
            .addCase(getBook.rejected, (state, action) => {
                state.isloading = false
                state.isError = action.payload;
            })


            //InsertBook
            .addCase(InsertBook.pending, (state, action) => {
                state.isloading = true;
                state.isError = null;
            })
            .addCase(InsertBook.fulfilled, (state, action) => {
                state.isloading = false
                state.books.push(action.payload);
            })
            .addCase(InsertBook.rejected, (state, actoin) => {
                state.isError = actoin.payload;
                state.isloading = true
            })


            //DELETE BOOK

            .addCase(DeleteBook.pending, (state, action) => {
                state.isloading = true;
                state.isError = null;
            })
            .addCase(DeleteBook.fulfilled, (state, action) => {
                state.isloading = false;
                state.books = state.books.filter((el) => el.id !== action.payload.id);
            })
            .addCase(DeleteBook.rejected, (state, actoin) => {
                state.isError = actoin.payload;
                state.isloading = false;
            })

            // Read Book
            .addCase(ReadBook.fulfilled, (state, action) => {
                state.isloading = false;
                state.bookinfo = action.payload;
            })
    },
})


export default bookSlice.reducer;