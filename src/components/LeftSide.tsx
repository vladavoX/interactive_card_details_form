import CardBack from './CardBack'
import CardFront from './CardFront'

interface Props {
  cardDetails: {
    cardHolder: string
    cardNumber: string
    cardMonth: string
    cardYear: string
    cvc: string
  }
}

const LeftSide = ({ cardDetails }: Props) => {
  return (
    <div className='z-50 relative h-screen w-1/2 bg-gradient-to-br from-slate-900 to-slate-700'>
      <CardFront
        cardHolder={cardDetails.cardHolder}
        cardNumber={cardDetails.cardNumber}
        cardMonth={cardDetails.cardMonth}
        cardYear={cardDetails.cardYear}
      />
      <CardBack cvc={cardDetails.cvc} />
    </div>
  )
}

export default LeftSide
