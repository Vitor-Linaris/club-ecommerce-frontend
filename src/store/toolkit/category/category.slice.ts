import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'

// Utilities
import Category from '../../../types/category.types'
import { db } from '../../../config/firebase.config'
import { categoryConverter } from '../../../converters/firestore.converters'

export const fetchCategories = createAsyncThunk(
  'categories/fetch',
  async () => {
    const categoriesFromFirestore: Category[] = []

    const querySnapshot = await getDocs(
      collection(db, 'categories').withConverter(categoryConverter)
    )

    querySnapshot.forEach((doc) => {
      categoriesFromFirestore.push(doc.data())
    })

    return categoriesFromFirestore
  }
)

interface InitialState {
  categories: Category[]
  isLoading: boolean
}

const initialState: InitialState = {
  categories: [],
  isLoading: false
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchCategories.rejected, (state) => {
      state.isLoading = false
    })
  }
})

export default categorySlice.reducer
