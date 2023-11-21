import React from 'react';
import logo from './images/logo.svg';
import menuIcon from './images/icon-menu.svg';
import mainImageMoile from './images/image-hero-mobile.png';
import mainImageDesktop from './images/image-hero-desktop.png'
import audiophile from './images/client-audiophile.svg';
import databiz from './images/client-databiz.svg';
import maker from './images/client-maker.svg';
import meet from './images/client-meet.svg';
import crossMark from './images/icon-close-menu.svg';
import downArrow from './images/icon-arrow-down.svg';
import upArrow from './images/icon-arrow-up.svg';
import todoIcon from './images/icon-todo.svg';
import calendar from './images/icon-calendar.svg';
import reminders from './images/icon-reminders.svg';
import planning from './images/icon-planning.svg';


function App() {

  //    React states

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isOption1Open, setIsOption1Open] = React.useState(false);
  const [isOption2Open, setIsOption2Open] = React.useState(false);

  // React functions

  const menuToggle = ()=>{
    setIsDrawerOpen(prev=>!prev);
  }

  const toggleOption1 = ()=>{
    setIsOption1Open(prev=>!prev);
    setIsOption2Open(false);
  }

  const toggleOption2 = ()=>{
    setIsOption2Open(prev=>!prev);
    setIsOption1Open(false);
  }

  // React components

  const DrawerContent = ()=>{
    return (
      <div className='bg-white w-2/3 pt-4 flex flex-col px-4 gap-8 text-m-grey text-lg lg:flex-row lg:w-full lg:items-center lg:justify-between lg:bg-inherit'>
        
        <div className='lg:hidden ml-auto'><img src={crossMark} alt='close menu' style={closeMenuStyling} onClick={menuToggle} /></div>
        <div className='flex flex-col gap-6 lg:flex-row'>
          
          <div className='flex flex-col gap-4 lg:relative '>
          <div className='flex gap-2 items-center hover:text-a-black cursor-pointer'  onClick={toggleOption1} >
              <span>Features</span>
              <img src={downArrow} alt='down arrow' onClick={toggleOption1} style={downArrow1Styling}/>
              <img src={upArrow} alt='up arrow' style={option1Styling} onClick={toggleOption1}/>
            </div>
            <div className='text-lg flex flex-col gap-2 px-8 lg:absolute lg:top-8 lg:py-6 lg:rounded-xl lg:px-6 lg:shadow-lg lg:right-0 lg:w-44 lg:bg-white ' style={option1Styling}>
              <div className='flex items-center gap-4'><img src={todoIcon} alt='todo icon'/><span>Todo Lists</span></div>
              <div className='flex items-center gap-4'><img src={calendar} alt='calendar icon'/><span>Calendar</span></div>
              <div className='flex items-center gap-4'><img src={reminders} alt='reminder icon'/><span>Reminders</span></div>
              <div className='flex items-center gap-4'><img src={planning} alt='planning icon'/><span>Planning</span></div>
            </div>
          </div>
         
          <div className='flex flex-col gap-4 lg:items-center lg:relative'>
            <div className='flex items-center gap-2 hover:text-a-black cursor-pointer'  onClick={toggleOption2}>
             <span>Company</span>
             <img src={downArrow} alt='down arrow' onClick={toggleOption2} style={downArrow2Styling}/>
             <img src={upArrow} alt='up arrow' onClick={toggleOption2} style={option2Styling}/>
            </div>
            <div className='flex-col gap-2 px-8 lg:absolute lg:top-8 lg:right-0 lg:w-fit lg:px-4 lg:bg-white lg:shadow-lg lg:rounded-xl lg:py-6 lg:w-32' style={option2Styling}>
              <span>History</span>
              <span>Our Team</span>
              <span>Blog</span>
            </div>    
          </div>
          
          <div>
            <span className='hover:text-a-black cursor-pointer'>Careers</span>
          </div>
          <div>
            <span className='hover:text-a-black cursor-pointer'>About</span>
         
         </div>
        </div>
        
        <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:h-full'>
          <button className='hover:text-a-black'>Login</button>
          <button className='border border-m-grey h-10 rounded-xl mx-4 lg:w-28 hover:border-a-black hover:text-a-black'>Register</button>
        
        </div>
      </div> 
    )
  }
  const Drawer = ()=>{
    return (
      <div className='lg:hidden absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] w-screen h-screen flex justify-end'>
        <DrawerContent></DrawerContent>
      </div>
    )
  }

  // styling

  const closeMenuStyling = isDrawerOpen ? {display: 'block'} : {display: 'none'};
  const menuIconStyling = isDrawerOpen ? {display: 'none'} : {display: 'block'};

  const option1Styling = isOption1Open ? {display: 'flex'} : {display: 'none'};
  const downArrow1Styling = isOption1Open ? {display: 'none'} : {display: 'block'};

  const option2Styling = isOption2Open ? {display: 'flex'} : {display: 'none'};
  const downArrow2Styling = isOption2Open? {display: 'none'} : {display: 'block'}

  return (
   <div>
    <nav className='flex justify-between pt-6 px-4 relative lg:justify-start items-center lg:gap-10'>
     
      <div className='mt-4'>
        <img src={logo} alt='snap logo'/>
        <div style={closeMenuStyling}>
          <Drawer></Drawer>
        </div>
      </div>
      
      <div className='lg:hidden'>
      <img src={menuIcon} alt='menu icon' style={menuIconStyling} onClick={menuToggle} />
      </div>
     
      <div className='hidden lg:flex w-full'>
        <DrawerContent></DrawerContent>
      </div>
    </nav>
    
    <div className='mt-10 flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:px-24 lg:gap-20 lg:max-h-[780px] lg:mt-36 xl:mx-24'>
      <div className='lg:hidden'><img src={mainImageMoile} alt='illustration'/></div>
      <div className='flex flex-col items-center lg:items-start gap-6'>
        <header className='text-4xl font-bold text-a-black lg:hidden'>
          Make remote work
        </header>
        <header className='hidden lg:block font-bold text-6xl text-a-black '>Make <br/> remote work</header>
        <p className='text-lg text-center lg:text-left text-m-grey px-6 lg:px-0'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <button className='bg-a-black text-a-white font-semibold rounded-xl w-36 h-12 hover:bg-inherit hover:border hover:border-a-black hover:text-a-black' >Learn More</button>
        <div className='flex items-center gap-6 mt-8'>
          <img src={databiz} alt='databiz logo' className='h-4'/>
          <img src={audiophile} alt='audiophile logo' className='h-[30px]' />
          <img src={meet} alt='meet logo' className='h-4'/>
          <img src={maker} alt='maker logo'  className='h-6'/>
        </div>
      </div>
      <div className='hidden lg:block'>
        <img src={mainImageDesktop} alt='illustrarion' className='max-h-[860px]'/>
      </div>
    </div>

   </div>
  );
}

export default App;
