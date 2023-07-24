import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import articleSlice from './articleSlice'
import boutiqueSlice from './boutiqueSlice'
import cartSlice from './cartSlice'
import orderSlice from './orderSlice'

export const store = configureStore({
  reducer: {
    user : userSlice,
    article : articleSlice,
    cart : cartSlice,
    boutique : boutiqueSlice,
    order : orderSlice,
    
  },
})