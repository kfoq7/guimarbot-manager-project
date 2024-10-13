import { ColumnDef } from '@tanstack/react-table'

export type TableOptions<T> = {
  data: T[]
  columns: ColumnDef<T>[]
}

export type TableStackOptions = {
  serachInput?: boolean
  isLoding?: true
}

export type TableStackProps<T> = TableOptions<T> & TableStackOptions
