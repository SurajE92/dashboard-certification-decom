import { mysqlTable, varchar, int, boolean } from "drizzle-orm/mysql-core";

export const projectSchema = mysqlTable("projects", {
  id: int().primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).unique().notNull(),
  description: varchar("description", { length: 2048 }),
});

export const devCompletionSchema = mysqlTable("devCompletion", {
  projectId: int()
    .primaryKey()
    .references(() => projectSchema.id),
  swaggerSchemaPublished: boolean().default(false),
  appServicesDeployed: boolean().default(false),
  postmanCollectionAvailable: boolean().default(false),
  unitTestCoverage: boolean().default(false),
  codeReviewDone: boolean().default(false),
  designDocDoneAndSaved: boolean().default(false),
  mockAvailable: boolean().default(false),
});

export const testCompletionSchema = mysqlTable("testCompletion", {
  projectId: int()
    .primaryKey()
    .references(() => projectSchema.id),
  functionalTesting: boolean().default(false),
  automatedTesting: boolean().default(false),
  interPerfTestWithMock: boolean().default(false),
  integratedPerfPLAB: boolean().default(false),
  testingRepresentativeCurProdVol: varchar({ length: 255 }),
  sloPublished: boolean().default(false),
  tunedForSLO: boolean().default(false),
});

export const operationallyReadySchema = mysqlTable("operationallyReady", {
  projectId: int()
    .primaryKey()
    .references(() => projectSchema.id),
  telemetry: boolean().default(false),
  logging: boolean().default(false),
  rto: boolean().default(false),
  rpo: boolean().default(false),
});

export const securityCompletionSchema = mysqlTable("securityCompletion", {
  projectId: int()
    .primaryKey()
    .references(() => projectSchema.id),
  compliance: boolean().default(false),
  rbacAsRequired: boolean().default(false),
  abacAsRequired: boolean().default(false),
  dataEncryptionDone: boolean().default(false),
  popToken: boolean().default(false),
  apiSecurityReviewDone: boolean().default(false),
  securityTestingCompleted: boolean().default(false),
});
