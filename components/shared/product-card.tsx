import Link from 'next/link';
import React from 'react';
import { Title } from './index';
import { Button } from '../ui/index';
import { Plus } from 'lucide-react';

interface Props {
  name: string;np
  price: number;
  count: number;
  imageUrl: string;
  className?: string;
  id: string
}

export const ProductCard: React.FC<Props> = ({ name, price, imageUrl, className, id }) => {
  return (
    <div className={className} id={id} >
      <Link href="">
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button  variant={'secondary'} className='font-bold text-base'>

            <Plus size={20} className='mr-1'/>
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
