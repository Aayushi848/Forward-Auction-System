// TableWithSearch.jsx
import React from "react";
import { DocumentIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  Input,
  Checkbox,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  { head: "Select", icon: <Checkbox /> },
  { head: "Invoice No" },
  { head: "Customer" },
  { head: "Amount" },
  { head: "Issued" },
  { head: "Payment Date" },
  { head: "Status" },
  { head: "Remarks" },
  { head: "Actions" },
];

const TABLE_ROWS = [
  {
    number: "#MS-415646",
    customer: "Viking Burrito",
    amount: "$14,000",
    issued: "31 Jan 2024",
    date: "31 Feb 2024",
    status: "Paid",
    remarks: "Payment on time",
  },
  {
    number: "#RV-126749",
    customer: "Stone Tech Zone",
    amount: "$3,000",
    issued: "24 Jan 2024",
    date: "24 Feb 2024",
    status: "Pending",
    remarks: "Awaiting approval",
  },
  {
    number: "#QW-103578",
    customer: "Fiber Notion",
    amount: "$20,000",
    issued: "12 Jan 2024",
    date: "12 Feb 2024",
    status: "Paid",
    remarks: "No issues",
  },
  {
    number: "#MS-415688",
    customer: "Blue Bird",
    amount: "$5,600",
    issued: "10 Jan 2024",
    date: "10 Feb 2024",
    status: "Failed",
    remarks: "Insufficient funds",
  },
];

export function TableWithSearch() {
  return (
    <Card className="w-full overflow-x-auto">
      <CardHeader
        floated={false}
        shadow={false}
        className="mb-2 rounded-none p-2"
      >
        <div className="w-full md:w-96">
          <Input
            label="Search Invoice"
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          />
        </div>
      </CardHeader>

      <table className="min-w-[900px] w-full table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map(({ head, icon }) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <div className="flex items-center gap-1">
                  {icon}
                  <Typography
                    color="blue-gray"
                    variant="small"
                    className="font-bold leading-none opacity-90"
                  >
                    {head}
                  </Typography>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((row, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={row.number}>
                <td className={classes}>
                  <Checkbox />
                </td>
                <td className={classes}>
                  <Typography variant="small" className="font-bold">
                    {row.number}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" className="text-gray-600">
                    {row.customer}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" className="text-gray-600">
                    {row.amount}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" className="text-gray-600">
                    {row.issued}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" className="text-gray-600">
                    {row.date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" className="text-gray-600">
                    {row.status}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" className="text-gray-600">
                    {row.remarks}
                  </Typography>
                </td>
                <td className={classes}>
                  <div className="flex items-center gap-2">
                    <IconButton variant="text" size="sm">
                      <DocumentIcon className="h-4 w-4 text-gray-900" />
                    </IconButton>
                    <IconButton variant="text" size="sm">
                      <ArrowDownTrayIcon className="h-4 w-4 text-gray-900" />
                    </IconButton>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
