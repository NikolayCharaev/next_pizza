import { useState, useEffect } from 'react';
import { Ingridient } from '@prisma/client';
import { Api } from '@/services/api-client';

interface ReturnProps {
  ingridients: Ingridient[];
  loading: boolean;
}

export const useFilterIngridients = (): ReturnProps => {
  const [ingridients, setIngridients] = useState<Ingridient[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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

  return { ingridients, loading };
};
