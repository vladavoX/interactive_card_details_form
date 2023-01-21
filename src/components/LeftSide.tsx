import CardBack from './CardBack'
import CardFront from './CardFront'

const LeftSide = () => {
  return (
    <div className='z-50 relative h-screen w-1/2 bg-gradient-to-br from-slate-900 to-slate-700'>
      <CardFront />
      <CardBack />
    </div>
  )
}

export default LeftSide
