import { createContext, useState, useEffect, ReactNode, useContext } from 'react'

import { api } from '../services/api'

interface ITransaction {
  id: number,
  title: string,
  amount: number,
  type: 'deposit' | 'withdraw',
  category: string,
  createdAt: string
}

type ITransactionInput = Omit<ITransaction, 'id' | 'createdAt'>

interface ITransactionProviderProps {
  children: ReactNode
}

interface TransactionContextData {
  transactions: ITransaction[],
  createTransaction: (transaction: ITransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionsProvider({ children }: ITransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: ITransactionInput) {
    const response = await api.post('/transactions', transactionInput)

    const { transaction } = response.data

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}
