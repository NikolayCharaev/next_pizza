'use client';
import React, { useState, ChangeEvent } from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';

import { Input, Skeleton } from '../ui/index';

type Item = FilterChecboxProps;

interface Props {
  className?: string;
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selected: Set<string>;
  name: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  className,
  title,
  items,
  defaultItems,
  limit = 5,
  loading,
  selected,
  searchInputPlaceholder = 'Поиск...',
  onClickCheckbox,
  defaultValue,
  name,
}) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>

        {new Array(limit).fill(null).map((_, index) => (
          <Skeleton key={index} className="mb-4 h-6 rounded-[8px]" />
        ))}
        <Skeleton className="w-28 h-6 rounded-[8px]" />
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
    : (defaultItems || items).slice(0, limit);

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={handleSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((elem, index) => (
          <FilterCheckbox
            key={index}
            text={elem.text}
            value={elem.value}
            onCheckedChange={() => onClickCheckbox?.(elem.value)}
            endAdornment={elem.endAdornment}
            checked={selected.has(elem.value)}
            name={name}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};
