import { Container, CssBaseline } from '@mui/material'
import React from 'react'

const ContainerApp = ({children}:{children:JSX.Element}) => {
  return (
    <>
      <CssBaseline  />
      <Container fixed>
        {children}
      </Container>
    </>
  )
}

export default ContainerApp