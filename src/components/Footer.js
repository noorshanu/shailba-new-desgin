import React from 'react'
import {FaTwitter,FaTelegramPlane} from 'react-icons/fa'
function Footer() {
  return (
    <section>
        <div className='footer container px-44 pb-6 pt-14'>
            <div className='text-center m-auto flex justify-center'>
                <img src="/assets/logos/footer-logo.svg" alt=''/>

            </div>
            <div className='flex justify-center gap-8 text-white font-orbitron font-[600] text-sm mt-10'>
                <a href='/'>About Us</a>
                <a href='/'>Tokenomics</a>
                <a href='/'>Roadmap</a>

            </div>

            <div className='m-auto text-center mt-9'>
            <img src="/assets/line.svg" alt=''/>
            </div>
            <div className='flex justify-between text-white font-orbitron mt-7 '>
                <div className='flex  text-sm gap-3'>
                    <a className='' href='/'>
                        <FaTwitter/>

                    </a>
                    <a className='' href='/'>
                        <FaTelegramPlane/>

                    </a>

                </div>

                <div className='flex text-[#CCD2E9] gap-4 text-sm ml-[140px] '>
                    <a href='#token'>Terms & Conditions</a>
                    <a href='#token'> Privacy Policy</a>

                </div>
                <p className='text-[#CCD2E9] text-sm'>2023 All right reserved</p>

            </div>
        </div>
    </section>
  )
}

export default Footer