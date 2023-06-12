import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [ {
        id: 1,
        title: 'Product 1',
        price: 10.99,
        image: 'product1.jpg',
      },
      {
        id: 2,
        title: 'Product 2',
        price: 19.99,
        image: 'product2.jpg',
      },], // Update this array with your own data
    status: STATUSES.IDLE,
  },
  reducers: {
    // setProducts(state, action) {
    //     state.data = action.payload;
    // },
    // setStatus(state, action) {
    //     state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  // Replace the fetch URL with your own API endpoint or data source
  const res = await fetch('https://inventory-app-jxkd.onrender.com/api/product');
  const data = await res.json();
  return data.products;
});

// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://your-api-endpoint.com/api/product');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     };
// }
