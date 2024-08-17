'use client';
import { FC, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Title, ProductCard } from './index';
import { useIntersection } from 'react-use';

import { useCategory } from '@/store/category';
interface Props {
  className?: string;
  title: string;
  items: any[];
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: FC<Props> = ({
  className,
  title,
  items,
  listClassName,
  categoryId,
}) => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  const { setActiveId, activeId } = useCategory((state) => state);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveId(categoryId);
    }

  }, [intersection?.isIntersecting,activeId]);

  return (
    <div className={cn(className)} ref={intersectionRef} id={title}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            id={String(categoryId)}
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
