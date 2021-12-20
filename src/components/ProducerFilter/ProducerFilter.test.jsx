import React from 'react';
import { render, screen } from '@testing-library/react';
import ProducerFilter from './index';

const producers = [{
  isoPais: 'US',
  produtoraMaeId: 'a0aa746d-5202-44a9-9a2f-c51dc7769a21',
  produtorasFilhas: [],
  jogosProduzidos: [
    '5d94a34c-f6b3-44c8-bd8b-df8642301142',
  ],
  id: '464d9546-a9b1-47db-9327-1935d1246e0e',
  nome: 'Bluepoint',
},
{
  isoPais: 'JP',
  produtoraMaeId: '00000000-0000-0000-0000-000000000000',
  produtorasFilhas: [],
  jogosProduzidos: [
    'e7d11d89-e2f1-4b3e-a6a5-10525f58f18e',
  ],
  id: 'f5cebf58-3c33-4b73-9e1c-30a01f45d699',
  nome: 'FromSoftware',
}];

test('should render producers', () => {
  render(<ProducerFilter producers={producers} />);

  const producer1 = screen.getByText(/Bluepoint/i);
  const producer2 = screen.getByText(/FromSoftware/i);

  expect(producer1).toBeInTheDocument();
  expect(producer2).toBeInTheDocument();
});
