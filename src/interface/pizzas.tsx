// Importe o necessário e defina a interface
export interface PizzaOption {
  id: number;
  nome: string;
  valor: number;
}

export interface PizzaList {
  pizzas: PizzaOption[];
}

export interface StateType {
  pizza: number;
}

export const pizzasData = [
  { id: 1, nome: 'Calabresa', valor: 35.90 },
  { id: 2, nome: 'Mussarela', valor: 30.91 },
  { id: 3, nome: 'Portuguesa', valor: 45.10 },
  { id: 4, nome: 'Quatro Queijos', valor: 52.14 },
];