import { useEffect, useRef, useState } from 'react'

import { Box, Skeleton, useTheme } from '@mui/material'

import styles from './styles'

const CourseSchedulesListSkeleton: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()
  const [visibleSkeletonCount, setVisibleSkeletonCount] = useState(0)

  useEffect(() => {
    const updateSkeletonCount = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.offsetHeight
        const skeletonHeight = theme.skeletons.scheduleCardBase.height
        const count = Math.floor(containerHeight / skeletonHeight)
        setVisibleSkeletonCount(count)
      }
    }

    updateSkeletonCount()
    window.addEventListener('resize', updateSkeletonCount)
    return () => {
      window.removeEventListener('resize', updateSkeletonCount)
    }
  }, [theme.skeletons.scheduleCardBase.height])

  return (
    <Box sx={styles.wrapper} ref={containerRef}>
      {Array.from({ length: visibleSkeletonCount }).map((_, index) => (
        <Skeleton
          component='div'
          key={`course-schedules-list-skeleton-${index}`}
          variant='rounded'
          sx={styles.skeleton}
        />
      ))}
    </Box>
  )
}

export default CourseSchedulesListSkeleton
