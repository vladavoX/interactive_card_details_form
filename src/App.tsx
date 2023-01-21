import { useState } from 'react'

import LeftSide from './components/LeftSide'
import RIghtSide from './components/RIghtSide'

function App() {
  const [cardDetails, setCardDetails] = useState({
    cardHolder: 'JANE APPLEASEED',
    cardNumber: '0000 0000 0000 0000',
    cardMonth: '00',
    cardYear: '00',
    cvc: '000',
  })
  return (
    <div className='bg-white min-h-screen flex justify-evenly items-center'>
      <LeftSide cardDetails={cardDetails} />
      <RIghtSide />
    </div>
  )
}

export default App
