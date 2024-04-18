"use client";
import { transactions } from "@/apiLayer/dashboard";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    transactions().then((res) => {
      console.log(res, "Transactions res");
      if (res?.status === 200) {
        setData(res?.data?.data);
      }
    });
  }, []);

  console.log(data);
  return (
    <div
      className=" bg-white rounded-2xl p-5 shadow-2xl overflow-hidden overflow-y-scroll no-scrollbar relative"
      style={{
        height: "calc(100vh - 100px)",
      }}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px] text-blue-700">
              Sender Full Name
            </TableHead>
            <TableHead className="text-blue-700 ">Send Country</TableHead>
            <TableHead className="text-blue-700 ">Receive Country</TableHead>
            <TableHead className="text-blue-700 ">Receiver Full Name</TableHead>
            <TableHead className="text-right text-blue-700">
              Send Amount
            </TableHead>
            <TableHead className="text-right text-blue-700">
              Receive Amount
            </TableHead>
            <TableHead className="text-blue-700 fw-bold">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.length > 0 ? (
            data?.map((item) => {
              return (
                <TableRow key={item?.id}>
                  <TableCell className="font-medium">
                    {item?.["Sender Full Name"]}
                  </TableCell>
                  <TableCell>{item?.["Send Country"]}</TableCell>
                  <TableCell>{item?.["Receive Country"]}</TableCell>
                  <TableCell>{item?.["Receiver Full Name"]}</TableCell>
                  <TableCell className="text-right">
                    {item?.["Send Amount"]}
                  </TableCell>
                  <TableCell className="text-right">
                    {item?.["Receive Amount"]}
                  </TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        "text-white p-2 rounded-xl",
                        item?.["Current Status"] === "Parking" &&
                          " bg-orange-300",
                        item?.["Current Status"] === "Authorized" &&
                          " bg-blue-300",
                        item?.["Current Status"] === "Completed" &&
                          " bg-green-300"
                      )}
                    >
                      {item?.["Current Status"]}
                    </span>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow className="text-center w-full">No transactions</TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default Dashboard;
