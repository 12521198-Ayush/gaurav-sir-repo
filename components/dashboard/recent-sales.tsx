"use client"

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/custom/data-table"

const data: Sales[] = [
  {
    id: "1",
    product: "Laptop Dell",
    quantity: 2,
    amount: 55000,
    status: "success",
  },
  {
    id: "2",
    product: "Playstation",
    quantity: 5,
    amount: 35000,
    status: "pending",
  },
  {
    id: "3",
    product: "Mobile Samsung Galaxy S3",
    quantity: 2,
    amount: 75000,
    status: "success",
  },
  {
    id: "4",
    product: "Gaming PC",
    quantity: 2,
    amount: 155000,
    status: "success",
  },
  {
    id: "5",
    product: "Mac",
    quantity: 2,
    amount: 55000,
    status: "failed",
  },
  {
    id: "1",
    product: "Laptop Dell",
    quantity: 2,
    amount: 55000,
    status: "success",
  },
  {
    id: "2",
    product: "Playstation",
    quantity: 5,
    amount: 35000,
    status: "pending",
  },
  {
    id: "3",
    product: "Mobile Samsung Galaxy S3",
    quantity: 2,
    amount: 75000,
    status: "success",
  },
  {
    id: "4",
    product: "Gaming PC",
    quantity: 2,
    amount: 155000,
    status: "success",
  },
  {
    id: "5",
    product: "Mac",
    quantity: 2,
    amount: 55000,
    status: "failed",
  },
  {
    id: "1",
    product: "Laptop Dell",
    quantity: 2,
    amount: 55000,
    status: "success",
  },
  {
    id: "2",
    product: "Playstation",
    quantity: 5,
    amount: 35000,
    status: "pending",
  },
  {
    id: "3",
    product: "Mobile Samsung Galaxy S3",
    quantity: 2,
    amount: 75000,
    status: "success",
  },
  {
    id: "4",
    product: "Gaming PC",
    quantity: 2,
    amount: 155000,
    status: "success",
  },
  {
    id: "5",
    product: "Mac",
    quantity: 2,
    amount: 55000,
    status: "failed",
  },
]

export type Sales = {
  id: string
  product:string
  amount: number
  quantity:number
  status: "pending" | "processing" | "success" | "failed"
}

export const columns: ColumnDef<Sales>[] = [
    {
        accessorKey: "product",
        header: "Product"
    },
    {
        accessorKey: "amount",
        header: "Amount"
    },
    {
        accessorKey: "quantity",
        header: "Quantity"
    },
    {
        accessorKey: "status",
        header: "Status"
    },
]

export function RecentSales() {
  return (
    <div className="w-full">
        <DataTable data={data} columns={columns}/>
    </div>
  )
}
