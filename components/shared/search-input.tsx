'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useClickAway, useDebounce } from 'react-use';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';
interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const ref = useRef(null);
  const [focused, setFocused] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        Api.products.search(searchQuery).then((data) => {
          setProducts(data);
        });
      } catch (err) {
        console.log(err);
      }
    },
    300,
    [searchQuery],
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery('');
    setProducts([]);
  };


  return (
    <>
      {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}
      <div
        ref={ref}
        className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)}>
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          onFocus={() => setFocused(true)}
          className="rounded-2xl outline-none w-full bg-gray-50 pl-11"
          type="text"
          placeholder="Найти пиццу..."
        />

        {products.length > 0 && (
          <div
            className={cn(
              'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
              focused && 'visible opacity-100 top-12',
            )}>
            {products?.map((product) => (
              <Link
                onClick={onClickItem}
                key={product?.id}
                className="px-3 py-2 hover:bg-primary/10 flex justify-between items-center flex-row-reverse"
                href={`/product/${product.id}`}>
                <img
                  className="rounded-sm"
                  src={product.imageUrl}
                  width={32}
                  height={32}
                  alt="pizza"
                />
                <span className=" ">{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
