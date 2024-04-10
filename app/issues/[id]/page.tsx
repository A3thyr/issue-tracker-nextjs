import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const IssuesDetailPage = async ({ params }: Props) => {
  //   Concerned about usage of notFound in this case
  //   if (typeof params.id !== "number") notFound();

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) notFound();

  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
      <p>{issue.created_at.toDateString()}</p>
    </div>
  );
};

export default IssuesDetailPage;
