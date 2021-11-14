import React, { useState, useEffect } from 'react'
import { MostraVoltas } from './MostraVoltas'
import { MostraTempo } from './MostraTempo'
import './styles.css'
import { Btn } from './Btn'

function App () {
  const [numVoltas, setNumVoltas] = useState(0)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    console.info(running)
    let timer = null
    if (running) {
      timer = setInterval(() => {
        setTempo(old => old + 1)
      }, 100)
    }
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
    if (!running && numVoltas === 0) setNumVoltas(numVoltas + 1)
  }

  const increment = () => {
    setNumVoltas(numVoltas + 1)

    if (numVoltas === 0) setRunning(!running)
  }

  const dencrement = () => {
    console.info('dencrement ' + numVoltas)
    if (numVoltas > 0) {
      setNumVoltas(numVoltas - 1)
    }
    if (numVoltas === 1) {
      setTempo(0)
      setNumVoltas(0)
      setRunning(false)
    }
  }

  const reset = () => {
    setTempo(0)
    setNumVoltas(0)
    setRunning(false)
  }
  return (
    <div className='App'>
      <MostraVoltas voltas={numVoltas} />
      <Btn className='bigger' btn='+' onClick={increment} />
      <Btn className='bigger' btn='-' onClick={dencrement} />
      {numVoltas > 0 && <MostraTempo tempo={tempo} />}
      <Btn onClick={toggleRunning} btn='Iniciar' />
      <Btn onClick={reset} btn='Reiniciar' />
    </div>
  )
}

export default App
