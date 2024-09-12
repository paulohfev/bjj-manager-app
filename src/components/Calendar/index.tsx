import React from 'react'

import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'

import dayjs from '@/dates'
import { useDateSelectorStore } from '@/store/dateSelectorStore'

import styles from './styles'

const Calendar: React.FC = () => {
  const { currentDate, selectedDate, setSelectedDate } = useDateSelectorStore()

  const firstDayOfMonth = Number(selectedDate.startOf('month').format('d'))
  const currentMonthName = selectedDate.format('MMMM')
  const currentMonthNumber = selectedDate.format('MM')
  const currentYear = selectedDate.format('YYYY')
  const weekDays = selectedDate.localeData().weekdaysShort()

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
    for (let d = 1; d <= selectedDate.daysInMonth(); d++) {
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

  const backTrackOneMonth = () => {
    const previousMonth = selectedDate.subtract(1, 'months')
    setSelectedDate(previousMonth)
  }

  const forwardOneMonth = () => {
    const nextMonth = selectedDate.add(1, 'months')
    setSelectedDate(nextMonth)
  }

  const returnToCurrentDate = () => {
    setSelectedDate(currentDate)
  }

  return (
    <Box>
      <Box sx={styles.navigationContainer}>
        <Box sx={styles.dateHeaderContainer}>
          <Typography component='h1'>{currentYear}</Typography>
          <Typography component='h3'>{currentMonthName}</Typography>
        </Box>

        <Box>
          <Button onClick={() => returnToCurrentDate()} sx={styles.currentDateButton}>
            Today
          </Button>
          <Button onClick={() => backTrackOneMonth()} sx={styles.arrowButton}>
            <ArrowBackIos />
          </Button>
          <Button onClick={() => forwardOneMonth()} sx={styles.arrowButton}>
            <ArrowForwardIos />
          </Button>
        </Box>
      </Box>

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
