import logo from '../assets/logo.png';
import tema from '../assets/darkmode.png';

export function Header() {
  return (
    <header className='flex gap-4 bg-black text-center items-center justify-center space-x-96 text-white h-24'>
      <div className='mt-2 w-[150px] h-[70px] justify-center items-center text-center cursor-pointer'>
        <a href="https://www.kenzie.com.br" target='_black'>

          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className='flex gap-8 justify-between text-center items-center'>
        <a href="#aboult">

          <span className='uppercase gap-4 cursor-pointer'>sobre</span>
        </a>
        <button
          className='text-violet-100 hover:bg-yellow-400 hover:text-slate-800 border-solid border-2 border-violet-100 rounded-[255px] w-[254px] h-[45px] gap-10'>
          Quero meu ingresso!
        </button>
        <button>
          <img src={tema} alt="" />
        </button>
      </div>
    </header>
  )
}