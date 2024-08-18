import { useState, useEffect } from 'react';
import { Ingridient } from '@prisma/client';
import { Api } from '@/services/api-client';
import { useSet } from 'react-use';

interface ReturnProps {
  ingridients: Ingridient[];
  loading: boolean;
  selectedIngridients: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngridients = (): ReturnProps => {
  const [ingridients, setIngridients] = useState<Ingridient[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [selectedIngridients, { toggle }] = useSet(new Set<string>([]));

  useEffect(() => {
    async function fetchIngridients() {
      try {
        setLoading(true);
        const ingridients = await Api.ingridients.getAll();

        setIngridients(ingridients);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchIngridients();
  }, []);

  return { ingridients, loading, onAddId: toggle, selectedIngridients };
};
