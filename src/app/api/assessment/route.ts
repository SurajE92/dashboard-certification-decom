import { db } from "@/db";
import {
  devCompletionSchema,
  projectSchema,
  operationallyReadySchema,
  securityCompletionSchema,
  testCompletionSchema,
} from "@/db/schema";
import { APIAssessmentData } from "@/types";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const data = (await request.json()) as unknown as APIAssessmentData;
  if (data.project.id) {
    const response = await updateAssessment(data);
    return Response.json(response);
  }
  const response = await createAssessment(data);
  return Response.json(response);
}

async function createAssessment(data: APIAssessmentData) {
  const count = await db.$count(
    projectSchema,
    eq(projectSchema.name, data.project.name)
  );
  if (count !== 0) {
    return {
      success: false,
      message: "A project with same name already exists",
    };
  }

  await db.transaction(async (tx) => {
    const project = await tx
      .insert(projectSchema)
      .values({
        name: data.project.name,
        description: data.project.description,
      })
      .$returningId();
    await tx
      .insert(devCompletionSchema)
      .values({ ...data.devCompletion, projectId: project[0].id });
    await tx
      .insert(testCompletionSchema)
      .values({ ...data.testCompletion, projectId: project[0].id });
    await tx
      .insert(operationallyReadySchema)
      .values({ ...data.operationallyReady, projectId: project[0].id });
    await tx
      .insert(securityCompletionSchema)
      .values({ ...data.secure, projectId: project[0].id });
  });
  revalidatePath(`/assessment/${data.project.id}`);
  return { success: true };
}

async function updateAssessment(data: APIAssessmentData) {
  if (!data.project.id) {
    return {
      success: false,
      message: "Unable to find API to save",
    };
  }
  const count = await db.$count(
    projectSchema,
    eq(projectSchema.id, data.project.id)
  );
  if (count === 0) {
    return {
      success: false,
      message: "Unable to find API to save",
    };
  }
  await db.transaction(async (tx) => {
    await tx
      .update(projectSchema)
      .set({
        name: data.project.name,
        description: data.project.description,
      })
      .where(eq(projectSchema.id, data.project.id!));
    await tx
      .update(devCompletionSchema)
      .set({ ...data.devCompletion })
      .where(eq(devCompletionSchema.projectId, data.project.id!));
    await tx
      .update(testCompletionSchema)
      .set({ ...data.testCompletion })
      .where(eq(testCompletionSchema.projectId, data.project.id!));
    await tx
      .update(operationallyReadySchema)
      .set({ ...data.operationallyReady })
      .where(eq(operationallyReadySchema.projectId, data.project.id!));
    await tx
      .update(securityCompletionSchema)
      .set({ ...data.secure })
      .where(eq(securityCompletionSchema.projectId, data.project.id!));
  });
  revalidatePath(`/assessment/${data.project.id}`);
  return { success: true };
}
