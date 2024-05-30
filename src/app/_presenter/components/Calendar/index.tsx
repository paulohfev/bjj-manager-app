import React, { useState } from 'react'

import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'

import dayjs from '@/dates'

import styles from './styles'

const Calendar: React.FC = () => {
  const dateObject = dayjs()
  const [selectedDate, setSelectedDate] = useState(dateObject)

  const firstDayOfMonth = Number(dateObject.startOf('month').format('d'))
  const currentMonthName = dateObject.format('MMMM')
  const currentMonthNumber = dateObject.format('MM')
  const currentYear = dateObject.format('YYYY')
  const weekDays = dateObject.localeData().weekdaysShort()

  const handleSelectedDate = (selectedDate: dayjs.Dayjs) => {
    setSelectedDate(selectedDate)
  }

  const weekDayNamesList = weekDays.map((weekDay) => {
    return (
      <TableCell key={weekDay} sx={styles.weekDay}>
        {weekDay}
      </TableCell>
    )
  })

  const getBlankDaysList = () => {
    const blankDays = []
    for (let i = 0; i < firstDayOfMonth; i++) {
      blankDays.push(
        <TableCell sx={styles.calendarDay} key={`blank-${i}`}>
          {''}
        </TableCell>
      )
    }
    return blankDays
  }

  const getDaysList = () => {
    const days = []
    for (let d = 1; d <= dateObject.daysInMonth(); d++) {
      const formattedDay = () => (d.toString().length === 1 ? `0${d}` : `${d}`)
      const isDaySelected = selectedDate.date() === d

      days.push(
        <TableCell
          key={`day-${d}`}
          sx={styles.calendarDay}
          onClick={() => handleSelectedDate(dayjs(`${currentYear}-${currentMonthNumber}-${d}`))}
        >
          <Box sx={styles.selectedCalendarDay(isDaySelected)}>{formattedDay()}</Box>
        </TableCell>
      )
    }

    return days
  }

  const renderDaysInMonth = () => {
    const totalSlots = [...getBlankDaysList(), ...getDaysList()]
    const rows = [] as React.ReactElement[][]
    let rowCount = 0

    for (let i = 0; i < totalSlots.length; i++) {
      // checks for every 7 items in the totalSlots list.
      if (i % 7 === 0) {
        // extracts every 7 items and places them in a new array.
        const row = totalSlots.slice(rowCount, i + 7)
        rows.push(row)
        // increments the rowCount to get the next 7 items.
        rowCount += 7
      }
    }

    const daysInMonth = rows.map((row, index) => {
      return <TableRow key={`row-${index}`}>{row}</TableRow>
    })

    return daysInMonth
  }

  return (
    <Box>
      <Typography component='h1' sx={styles.yearTitle}>
        {currentYear}
      </Typography>
      <Typography component='h3' sx={styles.monthTitle}>
        {currentMonthName}
      </Typography>

      <Table>
        <TableHead>
          <TableRow>{weekDayNamesList}</TableRow>
        </TableHead>

        <TableBody>{renderDaysInMonth()}</TableBody>
      </Table>
    </Box>
  )
}

export default Calendar
