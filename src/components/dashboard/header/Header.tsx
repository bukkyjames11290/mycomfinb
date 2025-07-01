'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { RiLogoutCircleLine } from 'react-icons/ri';

export default function Header({ handleLogout, user }: any) {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full min-h-[70px] flex items-center justify-between bg-[#196B69] px-[15px]">
      <Image src="https://i.imgur.com/b4FQWrU.png" width={100} height={29} className="w-[100px] h-[29px]" alt="logo" />
      <div className="relative">
        {user.holder.profileImg ? (
          <Image src={user.holder.profileImg} width={40} height={40} className="w-[50px] h-[50px] rounded-full" alt="logo" onClick={toggleNav} />
        ) : (
          <RiLogoutCircleLine className="text-2xl text-white" onClick={toggleNav} />
        )}

        {open && (
          <div className="absolute mt-1 z-50 shadow bg-white border py-2 rounded-md right-0 flex flex-col justify-center gap-[5px]">
            <p className="text-[14px] px-[15px] py-[5px] whitespace-nowrap font-medium text-[#196B69]">
              {user.holder.fullName}&nbsp;{user.holder.lastName}
            </p>
            <p className="text-[14px] m-1 px-[15px] text-center rounded-md py-[5px] bg-[#196B69] border whitespace-nowrap text-white" onClick={handleLogout}>
              Sign out
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
