import react, { useRef } from 'react'
import SignaturePad from 'react-signature-canvas'
import './App.css'

function App() {

  let sigPad = useRef({})
  let data = '';


  function Clear() {
    sigPad.current.clear();
  }

  function Save() {
    data = sigPad.current.toDataURL()
  }
  function Show() {
    sigPad.current.fromDataURL(data)
  }

  return (
    <div className='App'>
      <h2>Signature</h2>
      <div className='signature' >
        <SignaturePad
          ref={sigPad}
          penColor='blue'
          canvasProps={{ width: 500, height: 200 }} />
      </div>
      <div className='btn'>
        <button onClick={Clear}>clear</button>
        <button onClick={Save}>Save</button>
        <button onClick={Show}>Show</button>
      </div>
    </div>


  )
}

export default App
