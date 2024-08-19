'use client';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Title } from './index';

import { Input, RangeSlider } from '../ui/index';
import { FilterCheckbox } from './index';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngridients } from '@/hooks/useFilterIngridients';
import { useSet } from 'react-use';

import qs from 'qs';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingridients: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter(); // для вшивания в url строки с фильтрами
  const params = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

  const { ingridients, loading, onAddId, selectedIngridients } = useFilterIngridients(
    params.get('ingridients')?.split(','),
  );
  const [prices, setRange] = useState<PriceProps>({
    priceFrom: Number(params.get('priceFrom')) || undefined,
    priceTo: Number(params.get('priceTo')) || undefined,
  });

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(params.has('sizes') ? params.get('sizes')?.split(',') : []),
  );
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(params.has('pizzaTypes') ? params.get('pizzaTypes')?.split(',') : []),
  );

  const updatedPrice = (name: keyof PriceProps, value: number) => {
    setRange({
      ...prices,
      [name]: value,
    });
  };

  const items = ingridients.map((ingridient) => ({
    value: String(ingridient.id),
    text: ingridient.name,
  }));

  useEffect(() => {
    const filters = {
      ...prices,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingridients: Array.from(selectedIngridients),
    };

    const query = qs.stringify(filters, {
      arrayFormat: 'comma',
    });

    router.push(`?${query}`, { scroll: false });
  }, [sizes, pizzaTypes, selectedIngridients, prices]);

  console.log(params, 12312);
  return (
    <div className={cn('', className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Выбор категории */}
      {/* <div className="flex flex-col gap-5">
        <FilterCheckbox name="asd" text="Можно собирать" value="2" />
        <FilterCheckbox name="asdasd" text="Новинки" value="1" />
      </div> */}

      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={togglePizzaTypes}
        selected={pizzaTypes}
        items={[
          { text: 'Тонкое', value: '1' },
          { text: 'Традиционное', value: '2' },
        ]}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={toggleSizes}
        selected={sizes}
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
      />

      {/* Ползунок цены и инпуты с ценой */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            placeholder="0"
            type="number"
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={(e) => updatedPrice('priceFrom', Number(e.target.value))}
          />
          <Input
            placeholder="1000"
            type="number"
            min={100}
            max={1000}
            value={String(prices.priceTo)}
            onChange={(e) => updatedPrice('priceTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom || 0, prices.priceTo || 1000]}
          onValueChange={([from, to]) => {
            setRange({ priceFrom: from, priceTo: to });
          }}
        />
      </div>

      <CheckboxFiltersGroup
        title="Ингридиенты:"
        className="mt-5"
        loading={loading}
        onClickCheckbox={onAddId}
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        selected={selectedIngridients}
        name="ingridients"
      />
    </div>
  );
};
