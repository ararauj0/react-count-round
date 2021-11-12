import React from 'react'

const MostraVoltas = (props) => {
  return (
    <p>
      {props.voltas} <br />
      Voltas
    </p>
  )
}

const MostraTempo = (props) => {
  return (
    <p>{props.tempo} <br />
      Tempo medio por voltas
    </p>
  )
}

const Btn = (props) => <button>{props.btn}</button>

function App () {
  return (
    <div className='App'>
      <MostraVoltas voltas='12' />
      <Btn btn='+' />
      <Btn btn='-' />
      <MostraTempo tempo='01:30' />
      <Btn btn='Iniciar' />
      <Btn btn='Reiniciar' />
    </div>
  )
}

export default App
