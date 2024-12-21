"use client"

import { DataTable } from "@/components/DataTable";
import dapps from "@/data/dapps.json"

const columns = [
  "#",
  "Name",
  "Categories",
  "Description",
]

export default function Home() {
  return (
    <>
      <main className="max-w-screen-xl mx-auto p-4 mt-24 mb-24">
        <div className="flex flex-col items-center justify-center mb-12 space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            XRPL Universe
          </h1>
          <p className="text-xl text-gray-400">
            Discover the Future of Decentralized Apps
          </p>
        </div>
        <DataTable columns={columns} data={dapps} />
      </main>
    </>
  );
}
