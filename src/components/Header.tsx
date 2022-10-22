import logo from '../assets/logo.png';
import tema from '../assets/darkmode.png';

export function Header() {
  return (
    <header className='flex bg-black text-center items-center justify-center space-x-96 text-white'>      
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <span>sobre</span>
          <input type="text" />
          <button>
            <img src={tema} alt="" />
          </button>
        </div>      
    </header>
  )
}