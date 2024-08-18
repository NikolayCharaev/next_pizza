'use client';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Title } from './index';

import { Input, RangeSlider } from '../ui/index';
import { FilterCheckbox } from './index';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngridients } from '@/hooks/useFilterIngridients';
import { useSet } from 'react-use';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingridients, loading, onAddId, selectedIngridients } = useFilterIngridients();
  const [prices, setRange] = useState<PriceProps>({ priceFrom: 0, priceTo: 1000 });

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]));

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
    console.log({sizes, pizzaTypes, selectedIngridients, prices});
  }, [sizes, pizzaTypes, selectedIngridients, prices]);

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
          value={[prices.priceFrom, prices.priceTo]}
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
