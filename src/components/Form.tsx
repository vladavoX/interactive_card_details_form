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

const Form = ({ setCardDetails }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCardDetails((prev) => ({
      ...prev,
      cardHolder: 'Jane Appleseed',
      cardNumber: '0000000000000000',
      cardMonth: '00',
      cardYear: '00',
      cvc: '000',
    }))
    e.currentTarget.reset()
  }

  return (
    <form
      className='w-96 flex flex-col gap-8'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col gap-2'>
        <label
          htmlFor='name'
          className='font-bold text-xs tracking-widest'
        >
          CARDHOLDER NAME
        </label>
        <input
          name='cardHolder'
          type='text'
          placeholder='e.g. Jane Appleseed'
          className='border-2 border-gray-100 rounded-md px-2 py-2'
          required
          onChange={handleChange}
          pattern='[a-zA-Z ]+'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label
          className='font-bold text-xs tracking-widest'
          htmlFor='number'
        >
          CARD NUMBER
        </label>
        <input
          name='cardNumber'
          type='text'
          placeholder='e.g. 1234 5678 9123 0000'
          className='border-2 border-gray-100 rounded-md px-2 py-2'
          required
          onChange={handleChange}
          maxLength={19}
          pattern='[0-9 ]+'
          onInput={(e) => {
            const value = e.currentTarget.value
            const newValue = value
              .replace(/\s/g, '')
              .replace(/(\d{4})/g, '$1 ')
              .trim()
            e.currentTarget.value = newValue
          }}
        />
      </div>
      <div className='flex w-full gap-4'>
        <div className='flex flex-col gap-2'>
          <label className='font-bold text-xs tracking-widest'>EXP. DATE</label>
          <div className='flex gap-2'>
            <input
              name='cardMonth'
              type='text'
              placeholder='MM'
              className='border-2 border-gray-100 rounded-md px-2 py-2 w-20'
              required
              maxLength={2}
              pattern='[0-9]+'
              onChange={handleChange}
            />
            <input
              name='cardYear'
              type='text'
              placeholder='YY'
              className='border-2 border-gray-100 rounded-md px-2 py-2 w-20'
              required
              maxLength={2}
              pattern='[0-9]+'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label className='font-bold text-xs tracking-widest'>CVC</label>
          <input
            name='cvc'
            type='text'
            placeholder='e.g.123'
            className='border-2 border-gray-100 rounded-md px-2 py-2 w-full'
            required
            maxLength={3}
            pattern='[0-9]+'
            onChange={handleChange}
          />
        </div>
      </div>
      <button className='w-full bg-slate-700 py-2 text-gray-50 rounded-md font-medium'>
        Confirm
      </button>
    </form>
  )
}

export default Form
