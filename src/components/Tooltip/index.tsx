import React from 'react'

import { Tooltip as MUITooltip, TooltipProps as MUITooltipProps, Typography } from '@mui/material'

import styles from './styles'

type TooltipProps = Omit<MUITooltipProps, 'title'> & {
  text: React.ReactNode | string
}

const Tooltip: React.FC<TooltipProps> = ({ children, placement, text }) => {
  return (
    <MUITooltip
      arrow
      placement={placement}
      title={typeof text === 'string' ? <Typography sx={styles.toolTipText}>{text}</Typography> : text}
      slotProps={{
        arrow: {
          sx: styles.toolTipArrow,
        },
        tooltip: {
          sx: styles.toolTip,
        },
      }}
    >
      {children}
    </MUITooltip>
  )
}

export default Tooltip
