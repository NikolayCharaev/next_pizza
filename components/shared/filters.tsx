'use client'
import { cn } from '@/lib/utils';
import { Title } from './index';

import { Checkbox, Input, RangeSlider } from '../ui/index';
import { FilterCheckbox } from './index';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngridients } from '@/hooks/useFilterIngridients';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const {ingridients, loading} = useFilterIngridients()

  const items = ingridients.map(ingridient => ({value: String(ingridient.id), text : ingridient.name}))

  console.log(items)
  return (
    <div className={cn('', className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Выбор категории */}
      <div className="flex flex-col gap-5">
        <FilterCheckbox text="Можно собирать" value="2" />
        <FilterCheckbox text="Новинки" value="1" />
      </div>

      {/* Ползунок цены и инпуты с ценой */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input placeholder="0" type="number" min={0} max={1000} defaultValue={0} />
          <Input placeholder="1000" type="number" min={100} max={1000} />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

     
      <CheckboxFiltersGroup
        title="Ингридиенты:"
        className="mt-5"
        loading={loading}
        
        limit={6}
        defaultItems={items.slice(0,6)}
        items={items}
      />
    </div>
  );
};
