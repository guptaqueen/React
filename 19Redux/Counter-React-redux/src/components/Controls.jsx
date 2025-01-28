import React from 'react'

function Controls() {
  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">+1</button>
        <button type="button" className="btn btn-success px-4">-1</button>
      </div>
    </div>
  )
}

export default Controls
