'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  return (
    <div className="h-screen relative bg-[#F3F3F3]">
      <div className="bg-[#196B69] min-h-[300px]">
        <Header />
      </div>
      <div className="absolute w-full top-32 p-4">
        <div className="bg-white mx-auto border shadow-sm rounded-lg py-7">
          <p className="pl-5 mb-1 font-semibold text-lg">Log in to your account</p>
          <p className="pl-5 text-sm">Enter your details below to log in.</p>
          <div className="mt-3">{error && <p className="text-base text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>

          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6 p-5">
              <div className="flex flex-col gap-3">
                <label htmlFor="Username" className="font-semibold text-sm">
                  Email/Username
                </label>
                <input type="text" value={username} className="p-4 py-3 rounded text-[#5c5c5c] bg-transparent border border-gray-300 outline-none" onChange={e => setUsername(e.target.value)} />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="password" className="font-semibold text-sm">
                  Password
                </label>
                <input type="password" value={password} className="p-4 py-3 rounded text-[#5c5c5c] bg-transparent border border-gray-300 outline-none" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col w-full items-center justify-between gap-2 mt-6">
                <button type="submit" className="p-5 py-3 bg-[#196B69] w-full text-white font-semibold rounded-md">
                  Log in
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="p-5 mt-5 shadow bg-white border">
          <h1 className="font-semibold text-sm mb-1">How we work</h1>
          <p>
            My Community Finance connects you with two credit unions: My Community Bank & Castle Community Bank. The credit unions provide fairly priced and ethical financial products which can be
            accessed 24/7 through the My Community Finance portal.
          </p>

          <div className="flex gap-2 mt-5 pb-10">
            <Image src="https://i.imgur.com/hlCPlCn.png" width={45} height={27} className="w-[45px] h-[27px]" alt="logo" />
            <div className="">
              <h1 className="font-semibold text-xs mb-1">My Community Bank</h1>
              <p className="text-xs">Registered trading name of Brent Shrine Credit Union, with FRN 213245</p>
            </div>
          </div>
          <div className="flex">
            <Image src="https://i.imgur.com/NJv2Ebr.png" width={22} height={26} className="w-[22px] h-[26px]" alt="logo" />
            <div className="ml-4">
              <h1 className="font-semibold text-xs mb-1">Castle Community Bank</h1>
              <p className="text-xs">Registered trading name of North Edinburgh and Castle Credit Union, with FRN 213877</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
