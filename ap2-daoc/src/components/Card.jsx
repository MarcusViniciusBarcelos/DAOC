import propTypes from 'prop-types';

Card.propTypes = {
  name: propTypes.string.isRequired,
  role: propTypes.string.isRequired,
  imgSrc: propTypes.string.isRequired,
  isConfirmed: propTypes.bool,
};

export function Card({ name, role, imgSrc, isConfirmed }) {
  return (
    <>
      <div className='w-56 h-56 bg-blue-900 flex flex-col justify-between items-center p-6 rounded-xl text-white hover:shadow-md shadow-inner shadow-cyan-500 hover:scale-105  hover:shadow-cyan-500 transition-all'>
        <img
          src={imgSrc}
          alt=""
          className='w-50 rounded-full' />
        <span >{name}</span>
        <div className='flex flex-col items-center'>
          <span className='text-zinc-400 '>{ role }</span>
          <span className={isConfirmed ? 'text-emerald-400' : 'text-red-600'}>
            {isConfirmed ? 'Confirmado' : 'Não confirmado'}
          </span>
        </div>
      </div>
    </>
  )
}

