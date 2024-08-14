'use client';
import React, { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const ref = useRef(null);
  const [focused, setFocused] = useState<boolean>(false);

  useClickAway(ref, () => {
    setFocused(false);
  });
  return (
    <>
      {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}
      <div
        ref={ref}
        className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)}>
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          onFocus={() => setFocused(true)}
          className="rounded-2xl outline-none w-full bg-gray-50 pl-11"
          type="text"
          placeholder="Найти пиццу..."
        />
        <div
          className={cn(
            'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
            focused && 'visible opacity-100 top-12',
          )}>
          <Link className='px-3 py-2 hover:bg-primary/10 flex justify-between items-center flex-row-reverse' href={'/'}>
            <img className='rounded-sm' src="https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp" width={32} height={32} alt="pizza-1" />
            <span className=" ">пиццп 1</span>
          </Link>
        </div>
      </div>
    </>
  );
};
