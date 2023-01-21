interface Props {
  cardHolder: string
  cardNumber: string
  cardMonth: string
  cardYear: string
}

const CardFront = ({ cardHolder, cardNumber, cardMonth, cardYear }: Props) => {
  return (
    <div className='flex flex-col items-center absolute top-1/4 right-[-100px] w-[400px] h-[228px] bg-gradient-to-br shadow-xl from-purple-700 to-purple-800 z-50 rounded-[9px]'>
      <div className='flex items-center w-full gap-4 justify-start px-8 pt-8'>
        <div className='w-10 h-10 rounded-full bg-gray-50'></div>
        <div className='w-5 h-5 rounded-full border-gray-50 border-2'></div>
      </div>
      <div className='w-fit font-medium text-2xl text-gray-50 tracking-[0.24em] mt-16 mr-[-0.24em]'>
        <p>{cardNumber}</p>
      </div>
      <div className='flex w-full justify-between px-8 mt-5 text-gray-50 text-sm tracking-widest'>
        <p>{cardHolder}</p>
        <p>
          {cardMonth}/{cardYear}
        </p>
      </div>
    </div>
  )
}

export default CardFront
