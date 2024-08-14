import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';
import Image from 'next/image';
import { User, ShoppingCart, MoveRight } from 'lucide-react';
import { Button } from '../ui';
import { SearchInput } from './index';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" width={35} height={35} alt="logo" />
          <div className="">
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
          </div>
        </div>


        <div className="mx-10 flex-1">
          <SearchInput/>
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button className="flex items-center gap-1" variant={'outline'}>
            <User size={16} />
            Войти
          </Button>

          <div className="">
            <Button className="group relative">
              <b>520p</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className=" relative" strokeWidth={3} />
                <b>3</b>
              </div>
              <MoveRight 
              size={20}
                className=" absolute right-5 transition duration-300 -translate-x-2  opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                strokeWidth={3}
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
