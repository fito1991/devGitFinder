import { Box, Button, FormControl, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const InputSearch = ({ saveInfo }) => {

  const [userName, setUserName] = useState("")
  const [error, setError] = useState(false)


  useEffect(() => {
    const getFirstData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/octocat`)
        saveInfo(response.data)
      } catch (error) {
        if(error.response.status === 404){
          setError(true)
          setUserName("")
          saveInfo(response.data)
        }
      }
    }
    getFirstData()
  }, [saveInfo])
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response =  await axios.get(`https://api.github.com/users/${userName}`)
      saveInfo(response.data)
    } catch (error) {
      if(error.response.status === 404){
        setError(true)
        setUserName("")
        saveInfo(response.data)
      }
    }
  }

  const handleChange = e => {
    setUserName(e.target.value)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
          display: 'flex',
      }}
    >
      <FormControl>
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Name"
          onChange={handleChange}
          value={userName}
        />
      </FormControl>
      <Button type="submit" variant="contained">Search</Button>
    </Box>
  )
}

export default InputSearch