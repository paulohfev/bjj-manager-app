const styles = {
  arrowButton: {
    height: '24px',
    minWidth: 'fit-content',
    padding: 0,
    width: '24px',
  },

  calendarDay: {
    cursor: 'pointer',
    height: '52px',
    textAlign: 'center',
    width: '52px',
  },

  currentDateButton: {
    margin: '0 6px 0 3px',
  },

  dateHeaderContainer: {
    textAlign: 'center',
  },

  navigationContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
    padding: '20px 0',
  },

  selectedCalendarDay: (isDaySelected: boolean) => ({
    alignItems: 'center',
    background: isDaySelected ? 'linear-gradient(90deg, #FF465D 0%, #BC46BA 100%)' : 'transparent',
    borderRadius: '50%',
    color: isDaySelected ? '#fff' : '#000',
    display: 'flex',
    height: '36px',
    justifyContent: 'center',
    margin: '0 auto',
    width: '36px',
  }),

  weekDay: {
    letterSpacing: '1px',
    padding: '0 15px 15px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
}

export default styles
