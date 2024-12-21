"use client"

import { useState, useMemo } from "react"
import { Chip, Pagination, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User } from "@nextui-org/react"

interface DApp {
  id: number
  name: string
  description: string
  logo: string
  website: string
  categories: string[]
}

interface DataTableProps {
  columns: string[]
  data: DApp[]
}

export function DataTable(props: DataTableProps) {
  const { columns, data } = props

  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(data.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data.slice(start, end);
  }, [page, rowsPerPage, data])

  return (
    <Table
      selectionMode="single"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
    >
      <TableHeader>
        {columns.map((col) => <TableColumn key={col}>{col}</TableColumn>)}
      </TableHeader>
      <TableBody items={items}>
        {(item: DApp) => (
          <TableRow key={item.id} onClick={() => {
            window.open(item.website, "_blank");
          }} className="cursor-pointer">
            <TableCell>{item.id}</TableCell>
            <TableCell>
              <User name={item.name} avatarProps={{
                src: item.logo,
                radius: "lg",
              }} />
            </TableCell>
            <TableCell>
              {item.categories.map((category) => (
                <Chip key={category} className="capitalize mx-1" color="warning" variant="flat" size="sm">
                  {category}
                </Chip>
              ))}
            </TableCell>
            <TableCell>{item.description}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}