import React from 'react';
import { cn } from '@/lib/utils';
import { Title,ProductCard } from './index';

interface Props {
    className?: string;
    title : string;
    items: any[];
    listClassName? : string;
    categoryId : number
}

export const ProductsGroupList: React.FC<Props> = ({ className,title,items,listClassName,categoryId }) => {
  return (
    <div className={cn(className)}>
        <Title text={title} size='lg' className='font-extrabold mb-5'/>


        <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            id={product.id}
            key={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            count={i % 2}
          />
          ))}
        </div>
    </div>
  );
};