const CardBack = () => {
  return (
    <div className='flex flex-col items-center absolute bottom-1/4 right-[-200px] w-[400px] h-[228px] bg-gradient-to-br shadow-xl from-white to-gray-300 z-50 rounded-[9px]'>
      <div className='bg-zinc-800 w-full h-12 mt-6'></div>
      <div className='bg-gray-400 w-4/5 h-8 rounded-sm mt-6 text-gray-50 flex items-center justify-end px-4 text-sm tracking-widest font-medium'>
        <p>000</p>
      </div>
      <div className='mt-3'>
        <p className='text-gray-300 font-bold text-center leading-3'>
          __________ __ __ _<br />
          __ ______ ____ _<br />_ ___ ___ _________
        </p>
      </div>
    </div>
  )
}

export default CardBack
