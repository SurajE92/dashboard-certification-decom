import SidebarLayout from "@/components/layout/SidebarLayout";
import { getAllProjects } from "./actions/projects";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Link from "next/link";

const Dashboardpage = async () => {
  const projects = await getAllProjects();
  return (
    <SidebarLayout className="p-8">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="overflow-x-auto mt-8">
        <Table hoverable>
          <TableHead>
            <TableHeadCell>API name</TableHeadCell>
            <TableHeadCell>Description</TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Edit</span>
            </TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            {projects.map((project) => (
              <TableRow
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={project.id}
              >
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <Link
                    href={`/assessment/${project.id}`}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    {project.name}
                  </Link>
                </TableCell>
                <TableCell> {project.description || "-"}</TableCell>
                <TableCell>
                  <Link
                    href={`/assessment/${project.id}`}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </SidebarLayout>
  );
};

export default Dashboardpage;
