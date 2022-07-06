
const NavBar = () =>{
    return(
        <header className=' text-white bg-[#8d3ef6] w-full p-2 flex items-center'>
            <a  href="http://localhost:3000/">
                <img
                    className="w-16 h-16"
                    src="/images/logo_corelab.jpg"
                    alt="Logo Empresa"
                />
            </a>
           
            <a href="http://localhost:3000/" className='font-bold text-2xl italic hover:text-gray-300'>
              Corelab Challenge
            </a>
        </header>
    )
}

export default NavBar;