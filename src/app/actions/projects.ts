import { db } from "@/db";
import {
  devCompletionSchema,
  operationallyReadySchema,
  projectSchema,
  securityCompletionSchema,
  testCompletionSchema,
} from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getAllProjects() {
  const res = await db.select().from(projectSchema);
  return res;
}

export type ProjectDetailsType = Awaited<ReturnType<typeof getProjectDetails>>;
export async function getProjectDetails(projectId: number) {
  const res = await db
    .select()
    .from(projectSchema)
    .innerJoin(
      devCompletionSchema,
      eq(projectSchema.id, devCompletionSchema.projectId)
    )
    .innerJoin(
      testCompletionSchema,
      eq(projectSchema.id, testCompletionSchema.projectId)
    )
    .innerJoin(
      operationallyReadySchema,
      eq(projectSchema.id, operationallyReadySchema.projectId)
    )
    .innerJoin(
      securityCompletionSchema,
      eq(projectSchema.id, securityCompletionSchema.projectId)
    )
    .where(eq(projectSchema.id, projectId))
    .limit(1);
  return res[0];
}
