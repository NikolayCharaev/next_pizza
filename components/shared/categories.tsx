'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import { useCategory } from '@/store/category';

interface Props {
  className?: string;
}
const cats = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Роллы' },
  { id: 4, name: 'Коктейли' },
  { id: 5, name: 'Кофе' },
  { id: 6, name: 'Напитки' },
  { id: 7, name: 'Десерты' },
  { id: 8, name: 'Десерты' }
];


export const Categories: React.FC<Props> = ({ className }) => {
  const {activeId} = useCategory((state) => state);


  console.log(activeId)
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {cats.map((cat, i) => {
        return (
          <a
            className={cn(
              'flex items-center font-bold h-11 rounded-2xl px-5  ',
              activeId === cat.id && 'bg-white shadow-md shadow-gray-200 text-primary ',
            )}
            href={`#${cat.name}`}
            key={i}>
            <button>{cat.name}</button>
          </a>
        );
      })}
    </div>
  );
};
