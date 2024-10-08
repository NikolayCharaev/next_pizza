import { Ingridient } from '@prisma/client';
import { axiosInstance } from './instance';

import { ApiRoutes } from './constants';


export const getAll = async (): Promise<Ingridient[]> => {
  return (await axiosInstance.get<Ingridient[]>(ApiRoutes.INGRIDIENTS ))
    .data;
};