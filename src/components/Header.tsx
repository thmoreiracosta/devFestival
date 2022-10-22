import logo from '../assets/logo.png';
import tema from '../assets/darkmode.png';

export function Header() {
  return (
    <header className='flex gap-4 bg-black text-center items-center justify-center space-x-96 text-white'>      
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className='flex gap-8 justify-between text-center items-center'>
          <span className='uppercase gap-4'>sobre</span>
          <button
          className='bg-gray-800 rounded-[255px] w-[254px] h-[45px] gap-10'>          
            Quero meu ingresso!
            </button>
          <button>
            <img src={tema} alt="" />
          </button>
        </div>      
    </header>
  )
}