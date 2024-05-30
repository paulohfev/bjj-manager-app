const styles = {
  calendarDay: {
    cursor: 'pointer',
    height: '52px',
    textAlign: 'center',
    width: '52px',
  },

  monthTitle: {
    margin: '0 0 60px',
  },

  selectedCalendarDay: (isDaySelected: boolean) => ({
    alignItems: 'center',
    background: isDaySelected ? 'linear-gradient(90deg, #FF465D 0%, #BC46BA 100%)' : 'transparent',
    borderRadius: '50%',
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

  yearTitle: {
    margin: 0,
  },
}

export default styles
