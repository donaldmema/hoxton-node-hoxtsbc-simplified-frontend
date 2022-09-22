export type User = {
  id: number;
  email: string;
  password: string;
  name: string;
  transactions: Transaction[];
};

export type Transaction = {
  id: number;
  amount: number;
  recipient: string;
  createdAt: Date;
  user: User;
  userId: number;
};
