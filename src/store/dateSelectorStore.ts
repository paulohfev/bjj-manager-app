import { create } from 'zustand'

import dayjs from '@/dates'

export type DateSelectorStore = {
  currentDate: dayjs.Dayjs
  selectedDate: dayjs.Dayjs
  setSelectedDate: (date: dayjs.Dayjs) => void
}

export const useDateSelectorStore = create<DateSelectorStore>((set, _get) => ({
  currentDate: dayjs(),
  selectedDate: dayjs(),
  setSelectedDate: (date: dayjs.Dayjs) => set({ selectedDate: date }),
}))
