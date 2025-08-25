const Header = (props) => {

  const logOutUser = ()=> {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('');
    //window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl text-white font-semibold'>Hello <br /><span className='text-3xl font-semibold'>{props.data.firstname}👋</span></h1>

      <button onClick={logOutUser} className='text-white bg-red-600 rounded-sm px-5 py-2 text-lg font-medium cursor-pointer'>Log Out</button>
    </div>
  )
}

export default Header;