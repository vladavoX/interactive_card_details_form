import Form from './Form'

interface Props {
  setCardDetails: React.Dispatch<
    React.SetStateAction<{
      cardHolder: string
      cardNumber: string
      cardMonth: string
      cardYear: string
      cvc: string
    }>
  >
}

const RIghtSide = ({ setCardDetails }: Props) => {
  return (
    <div className='w-full flex justify-center items-center'>
      <Form setCardDetails={setCardDetails} />
    </div>
  )
}

export default RIghtSide
