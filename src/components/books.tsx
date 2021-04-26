import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { BookService } from '../shared/services/bookService'
import { Book } from '../shared/types/book'

const bookService = new BookService()

export function Books() {
  const [books, setBooks] = useState<Book[]>()

  useEffect(() => {
    ;(async () => {
      let obtainedBooks = await bookService.getAll()
      setBooks(obtainedBooks)
    })()
  }, [])

  return (
    <>
      <Table<Book> dataSource={books}>
        <Table.Column<Book> title="ID" dataIndex="id" />
        <Table.Column<Book> title="Name" dataIndex="name" />
        <Table.Column<Book> title="Category ID" dataIndex="categoryId" />
        <Table.Column<Book> title="Category" dataIndex="category" />
        <Table.Column<Book> title="Authors" dataIndex="authors" />
        <Table.Column<Book> title="Description" dataIndex="description" />
      </Table>
    </>
  )
}
