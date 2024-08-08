import { Container, Title, TopBar, Filters } from '@/components/shared';
import { ProductCard, ProductsGroupList } from '@/components/shared/index';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductCard
                name="Жульен"
                price={500}
                imageUrl="https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif"
              /> */}

              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 7,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={1}
              />


<ProductsGroupList
                title="Комбо"
                
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 7,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={2}
              />



<ProductsGroupList
                title="Роллы"
                
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 7,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={3}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
