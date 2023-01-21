const Form = () => {
  return (
    <form className='w-96 flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <label
          htmlFor='name'
          className='font-bold text-xs tracking-widest'
        >
          CARDHOLDER NAME
        </label>
        <input
          type='text'
          placeholder='e.g. Jane Appleseed'
          className='border-2 border-gray-100 rounded-md px-2 py-2'
          required
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
          type='text'
          placeholder='e.g. 1234 5678 9123 0000'
          className='border-2 border-gray-100 rounded-md px-2 py-2'
          required
        />
      </div>
      <div className='flex w-full gap-4'>
        <div className='flex flex-col gap-2'>
          <label className='font-bold text-xs tracking-widest'>EXP. DATE</label>
          <div className='flex gap-2'>
            <input
              type='text'
              placeholder='MM'
              className='border-2 border-gray-100 rounded-md px-2 py-2 w-20'
              required
            />
            <input
              type='text'
              placeholder='YY'
              className='border-2 border-gray-100 rounded-md px-2 py-2 w-20'
              required
            />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label className='font-bold text-xs tracking-widest'>CVC</label>
          <input
            type='text'
            placeholder='e.g.123'
            className='border-2 border-gray-100 rounded-md px-2 py-2 w-full'
            required
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