import festival_dev from '../assets/festival_dev.png';
import pato from '../assets/pato.png';

export function Main() {
  return (
    <div className='flex gap-60 mt-20 justify-center'>
      <div className=''>
        <img
          className='max-h-12 mb-4'
          src={pato}
          alt=""
        />
        <h1 className="text-6xl text-blue-100 font-bold p-2"
        >
          &lt;Dev/&gt;
        </h1>
        <h2 className='text-6xl text-black font-bold p-3 mb-4'>
          Festival
        </h2>
        <button className="bg-blue-100 text-white text-lg rounded-[255px] w-[274px] h-[61px]">
          Quero meu ingresso!
        </button>
      </div>

      <div>
        <img
          className='w-[415px] h-[590px]'
          src={festival_dev}
          alt=""
        />
      </div>      
    </div>
    
  )
}