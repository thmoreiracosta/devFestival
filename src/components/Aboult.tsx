import aboult from '../assets/aboult_dev.png';


export function Aboult() {
  return (
    <div className='flex mt-20 mb-20 gap-20 justify-center items-center '>
      <div>
        <img
          className='w-[415px] h-[590px]'
          src={aboult}
          alt=""
        />
      </div>

      <div id="aboult" className='w-[400px] justify-center border '>
        <h1 className="text-5xl text-black font-bold p-2 border w-[400px]"
        >
          Sobre <br />o festival
        </h1>
        <div className='text-justify text-base mt-4'>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius deleniti mollitia eligendi odio commodi vel! Amet, dicta.
            Impedit, veritatis ipsa ratione sint qui inventore consectetur non, reprehenderit ex molestiae consequuntur!
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam doloremque eos sit praesentium necessitatibus nobis quam molestiae in iusto voluptatem, velit reiciendis at quia?
            Cum eum ipsam dolorum aut nam.
          </p>
        </div>
      </div>
    </div>
  )
}