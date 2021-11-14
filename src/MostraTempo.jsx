import React from 'react'

export const MostraTempo = (props) => {
  const temp = props.tempo
  const min = Math.round(temp / 60)
  const seg = Math.round(temp % 60)
  const minStr = min < 10 ? '0' + min : min
  const segStr = seg < 10 ? '0' + seg : seg
  const formatTemp = `${minStr}:${segStr}`
  return (
    <p className='tempo'>{formatTemp} <br />
      <span>Tempo medio por voltas</span>
    </p>
  )
}
