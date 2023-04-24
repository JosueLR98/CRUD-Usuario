import React from 'react'

const Header = ({setIsShowForm}) => {
   const handleClickShowModal=(e)=>{
setIsShowForm((isShowForm)=>!isShowForm)
}
  return (
    <header className='flex justify-between text-4xl pb-9 px-6'>
<h2 className=' font-extrabold '>Usuarios</h2>
<button onClick={handleClickShowModal} className=" bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm"><i className='bx bx-plus'></i> Crear nuevo usuario</button>

    </header>
  )
}

export default Header