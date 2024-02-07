import * as React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export default function CatalogSkeleton() {
  return (
    <Stack spacing={1}>
      <Skeleton
        variant="rectangular"
        sx={{ borderRadius: '15px' }}
        width={257}
        height={566}
      />
    </Stack>
  )
}
