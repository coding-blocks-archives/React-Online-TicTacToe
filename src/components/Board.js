import React from 'react'
import Square from './Square'

export default function Board() {
  return (
    <div>
      <div className="border-row">
        <Square/>
        <Square/>
        <Square/>
      </div>

      <div className="border-row">
        <Square/>
        <Square/>
        <Square/>
      </div>

      <div className="border-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </div>
  )
}