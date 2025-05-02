
import Image from 'next/image';
import React from 'react';

const Musics = () => {
    return (
        <div className='containers'>
            <div className='flex  bg-[#282828] h-[420px] mb-[150px] mt-[50px] rounded-[10px]'>
            <div className=' pl-[60px] '>
            <Image src="/assets/icons/music.svg" className='w-[518px] h-[493px] cursor-pointer ' alt="alt" width={518} height={493} />
            </div>
            <div className='pl-[67px] pt-[97px] flex flex-col gap-[22px] cursor-pointer '>
                <h2 className='text-[32px] font-bold w-[438px] h-[114px] mb-[20px] text-[#FFFFFF]'>Musiqa zavqini his qilish uchun ko'p mablag' sarflash shart emas!</h2>
                <button className='h-[54px] cursor-pointer w-[160px] border bg-[#FFFFFF] rounded-[6px]'>Batafsil</button>
            </div>
            </div>
        </div>
    );
}

export default Musics;
