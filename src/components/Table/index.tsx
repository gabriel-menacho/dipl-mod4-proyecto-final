'use client'

import clsx from 'clsx'
import styles, { tableClasses } from './styles'
import { ITableProps } from './types'
import {
  styled,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
  Tooltip,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteProduct } from '@/app/(api)/api'
import ConfirmationDialog from '../ConfirmationDialog'
import { useState } from 'react'
import ProductModal from '../ProductModal'
import { IProduct } from '../Main/types'
import { useRouter } from 'next/navigation'

const testId = 'table'

const TableCmp = styled(Box)(styles.table)

export default function ({ className, data = [], editable }: ITableProps) {
  const classProps = clsx(className, tableClasses.root)
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState<
    number | undefined
  >()
  const [selectedProduct, setSelectedProduct] = useState<IProduct | undefined>()
  const [editModalOpen, setEditModalOpen] = useState(false)
  const router = useRouter()

  const handleEdit = (data: IProduct) => {
    setSelectedProductId(data.id)
    setSelectedProduct(data)
    setEditModalOpen(true)
  }

  const handleDelete = (id: number) => {
    setSelectedProductId(id)
    setIsConfirmationOpen(true)
  }

  return (
    <>
      <TableCmp className={classProps} data-testid={testId}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                {editable && <TableCell>Actions</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  {editable && (
                    <TableCell>
                      <Tooltip title="Edit">
                        <IconButton
                          data-testid="edit-button"
                          onClick={() => handleEdit(row)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip data-testid="delete-button" title="Delete">
                        <IconButton onClick={() => handleDelete(row.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableCmp>
      <ConfirmationDialog
        open={isConfirmationOpen}
        onClose={() => {
          setSelectedProductId(undefined)
          setIsConfirmationOpen(false)
        }}
        onConfirm={() => {
          if (selectedProductId) {
            deleteProduct(selectedProductId).then(() => {
              setSelectedProductId(undefined)
              setIsConfirmationOpen(false)
              router.refresh()
            })
          }
        }}
      />
      {editModalOpen && (
        <ProductModal
          open={editModalOpen}
          data={selectedProduct}
          onClose={() => {
            setSelectedProductId(undefined)
            setSelectedProduct(undefined)
            router.refresh()
            setEditModalOpen(false)
          }}
        />
      )}
    </>
  )
}

export type { ITableProps }
export { tableClasses }
export { testId as TableTestId }
