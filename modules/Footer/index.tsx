import { AppStoreIcon, CommitIcon, FacebookIcon, GooglePlayIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from '@/assets/icons';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='containers  '>
            <div className='flex justify-between'>
                <div className='w-[400px]'>
            <div className='mt-[60px]' >
                <h2 className='mt-[71px] text-[#000000B2] text-[20px] font-bold pb-[25px]'>Bizning ijtimoiy tarmoqlarda</h2>
                <div className='flex gap-[10px] items-center '>
                    <span className=' py-[10px] px-[12px] flex items-center justify-center  bg-[#EBEFF3] rounded-[7px] '><FacebookIcon/> </span>  
                    <span className=' py-[14px] px-[12px] flex items-center justify-center  bg-[#EBEFF3] rounded-[7px]'><YoutubeIcon/>  </span>
                    <span className=' py-[10px] px-[12px] flex items-center justify-center  bg-[#EBEFF3] rounded-[7px] '><TelegramIcon/> </span>
                    <span className=' py-[12px] px-[12px] flex items-center justify-center   bg-[#EBEFF3] rounded-[7px]'><TwitterIcon/>  </span>
                    <span className=' py-[10px] px-[12px] flex items-center justify-center   bg-[#EBEFF3] rounded-[7px]'><Image src="/assets/icons/instagram.svg" alt="alt" width={20} height={20} /></span>
                </div>
            </div> 
            <div className='pt-[40px] cursor-pointer'>
                <h2 className='pb-[12px] text-[#000000B2] text-[20px] font-bold'>Mobil ilovani yuklab oling</h2>
                <div className='flex gap-[15px]  mb-[57px] cursor-pointer'>
                    <button className='flex items-center justify-center gap-[15px] bg-[#EBEFF3]  py-[16px] rounded-[10px] cursor-pointer'> <span className='pl-[30px]'> <AppStoreIcon/> </span> <span className='pr-[30px] text-[16px] font-bold'>App Store </span></button>
                    <button className='flex items-center justify-center gap-[15px] bg-[#EBEFF3] py-[16px] rounded-[10px] '> <span className='pl-[30px]'> <GooglePlayIcon /></span> <span className='pr-[30px] text-[16px] font-bold'>Google Play </span></button>
                </div>
             <span className='pb-[69px] text-[#00000066] text-[12px] font-400'>© 2022 Ashyo ro’hatdan otgan litsenzalangan bu brend. </span>
            </div>
                </div>
            <div className='mt-[60px] w-[236px] '>
                <h2 className=' text-[#000000B2] text-[20px] font-bold mb-[18px]'>Menyu</h2>
                <ul className='flex flex-col gap-[12px] text-[#000000B2]'>
                    <li>
                        <a href="">Ashyo haqida</a>
                    </li>
                    <li>
                        <a href="">Foydalanish shartlari</a>
                    </li>
                    <li>
                        <a href="">Maxfiylik va hafsizlik siyosati</a>
                    </li>
                    <li>
                        <a href="">Mahsulotlarni va tovarlarni qaytarish siyosati</a>
                    </li>
                    <li>
                        <a href="">Biz bilan aloqa</a>
                    </li>
                </ul>
            </div>
            <div className='mt-[60px] w-[350px]'>
              <h2 className='text-[20px]  font-bold '>Aloqa</h2>
              <p className='text-[24px] pt-[13px] font-bold'>+998 (71) 123-45-67</p>
              <p className='pt-[37px] pb-[21px] text-[16px] text-#000000B2]'>Savolingiz bormi?</p>
              <div className='flex relative '>
              <input type="text" className='rounded-[6px]  w-[350px] h-[54px] outline-none pl-[11px] bg-[#EBEFF3]'  placeholder=' O’zingiz qiziqtirgan savollarni bering'  />
               <span className='absolute right-[8px] top-[17px] '><CommitIcon/></span>
              </div>  
            </div>
            </div>
        </div>
    );
}

export default Footer;
