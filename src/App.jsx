import { useState } from 'react'
import InputSearch from './components/InputSearch'
import { Box } from '@mui/material'
import CardInfo from './components/CardInfo'

function App() {

  const [userInfo, setUserInfo] = useState({})

  const saveInfo = (user) => {
    setUserInfo(user)
  }

  return (
    <>
      <Box component="div" sx={{display: 'flex', justifyContent: 'center', paddingBlock: '2em'}}>
        <InputSearch saveInfo={saveInfo} />
      </Box>
      <CardInfo userInfo={userInfo} />
    </>
  )
}

export default App
