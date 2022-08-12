import React from 'react';
import AxisLogo from './axis bank.png';
import DateTime from './DateTime';

const Header = () => {

  return (
    <div className='d-flex flex-row headdiv py-3 ps-2'>
        <div className='col-5 d-flex align-self-center'>
            <img src={AxisLogo} className='w-100'></img>
        </div>
        <div className='datediv col-7 d-flex justify-content-end pe-4'>
          <DateTime/>
        </div>
    </div>
  )
}

export default Header