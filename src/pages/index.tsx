import React, { useState, ChangeEvent, MouseEvent } from 'react'
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import 'tailwindcss/tailwind.css'

const PalindromeChecker: React.FC = () => {
  const [input, setInput] = useState(``)
  const [alert, setAlert] = useState({ open: false, text: `` })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value.length <= 5 && /^\d*$/.test(value)) {
      setInput(value)
    }
  }

  const handleButtonClick = (event: MouseEvent) => {
    event.preventDefault()
    const reversedInput = input.split(``).reverse().join(``)
    if (input === reversedInput) {
      setAlert({ open: true, text: `El número es un palíndromo.` })
    } else {
      setAlert({ open: true, text: `El número no es un palíndromo.` })
    }
  }

  const handleCloseAlert = () => {
    setAlert({ open: false, text: `` })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-8 border border-gray-300 rounded-lg flex flex-col items-center justify-center">
        <h1 className="my-4 text-blue-500">Verificador de Número palíndromo</h1>
        <TextField
          className="mb-4"
          label="Número"
          variant="outlined"
          value={input}
          onChange={handleInputChange}
          inputProps={{ inputMode: `numeric`, maxLength: 5 }}
        />
        <div className="my-4">
            <Button
              variant="contained"
              onClick={handleButtonClick}
              className="!bg-blue-500"
            >
              Verificar Palíndromo
            </Button>
        </div>

        <Dialog open={alert.open} onClose={handleCloseAlert}>
          <DialogTitle>{`Resultado`}</DialogTitle>
          <DialogContent>
            <DialogContentText>{alert.text}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAlert} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}

export default PalindromeChecker

