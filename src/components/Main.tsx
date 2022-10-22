import festival_dev from '../assets/festival_dev.png';
import pato from '../assets/pato.png';

export function Main() {
  return (
    <main className='flex gap-40 max-h-8 w-full mt-20 justify-center'>
      <div className=''>
        <img src={pato} alt="" />
        <h1 className="text-4xl text-blue-100 font-bold "
        >
          &lt;Dev/&gt;
        </h1>
        <h2 className='text-4xl text-black font-bold'>
          Festival
        </h2>
        <button className="bg-blue-100 text-white rounded-[255px] w-[274px] h-[61px]">
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
    </main>
  )
}