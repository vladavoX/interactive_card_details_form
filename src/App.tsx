import { useState, useEffect } from 'react'

import LeftSide from './components/LeftSide'
import RIghtSide from './components/RIghtSide'

function App() {
  const [cardDetails, setCardDetails] = useState({
    cardHolder: 'JANE APPLEASEED',
    cardNumber: `0000000000000000`,
    cardMonth: '00',
    cardYear: '00',
    cvc: '000',
  })
  useEffect(() => {
    const cardNumber = cardDetails.cardNumber
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim()
    setCardDetails((prev) => ({ ...prev, cardNumber }))
  }, [cardDetails.cardNumber])
  return (
    <div className='bg-white min-h-screen flex justify-evenly items-center'>
      <LeftSide cardDetails={cardDetails} />
      <RIghtSide setCardDetails={setCardDetails} />
    </div>
  )
}

export default App
