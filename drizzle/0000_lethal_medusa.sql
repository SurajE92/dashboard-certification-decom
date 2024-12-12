CREATE TABLE `apcmtrx_devCompletion` (
	`projectId` int NOT NULL,
	`swaggerSchemaPublished` boolean DEFAULT false,
	`appServicesDeployed` boolean DEFAULT false,
	`postmanCollectionAvailable` boolean DEFAULT false,
	`unitTestCoverage` boolean DEFAULT false,
	`codeReviewDone` boolean DEFAULT false,
	`designDocDoneAndSaved` boolean DEFAULT false,
	`mockAvailable` boolean DEFAULT false,
	CONSTRAINT `apcmtrx_devCompletion_projectId` PRIMARY KEY(`projectId`)
);
--> statement-breakpoint
CREATE TABLE `apcmtrx_operationallyReady` (
	`projectId` int NOT NULL,
	`telemetry` boolean DEFAULT false,
	`logging` boolean DEFAULT false,
	`rto` boolean DEFAULT false,
	`rpo` boolean DEFAULT false,
	CONSTRAINT `apcmtrx_operationallyReady_projectId` PRIMARY KEY(`projectId`)
);
--> statement-breakpoint
CREATE TABLE `apcmtrx_projects` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` varchar(2048),
	CONSTRAINT `apcmtrx_projects_id` PRIMARY KEY(`id`),
	CONSTRAINT `apcmtrx_projects_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `apcmtrx_securityCompletion` (
	`projectId` int NOT NULL,
	`compliance` boolean DEFAULT false,
	`rbacAsRequired` boolean DEFAULT false,
	`abacAsRequired` boolean DEFAULT false,
	`dataEncryptionDone` boolean DEFAULT false,
	`popToken` boolean DEFAULT false,
	`apiSecurityReviewDone` boolean DEFAULT false,
	`securityTestingCompleted` boolean DEFAULT false,
	CONSTRAINT `apcmtrx_securityCompletion_projectId` PRIMARY KEY(`projectId`)
);
--> statement-breakpoint
CREATE TABLE `apcmtrx_testCompletion` (
	`projectId` int NOT NULL,
	`functionalTesting` boolean DEFAULT false,
	`automatedTesting` boolean DEFAULT false,
	`interPerfTestWithMock` boolean DEFAULT false,
	`integratedPerfPLAB` boolean DEFAULT false,
	`testingRepresentativeCurProdVol` varchar(255),
	`sloPublished` boolean DEFAULT false,
	`tunedForSLO` boolean DEFAULT false,
	CONSTRAINT `apcmtrx_testCompletion_projectId` PRIMARY KEY(`projectId`)
);
--> statement-breakpoint
ALTER TABLE `apcmtrx_devCompletion` ADD CONSTRAINT `apcmtrx_devCompletion_projectId_apcmtrx_projects_id_fk` FOREIGN KEY (`projectId`) REFERENCES `apcmtrx_projects`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `apcmtrx_operationallyReady` ADD CONSTRAINT `apcmtrx_operationallyReady_projectId_apcmtrx_projects_id_fk` FOREIGN KEY (`projectId`) REFERENCES `apcmtrx_projects`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `apcmtrx_securityCompletion` ADD CONSTRAINT `apcmtrx_securityCompletion_projectId_apcmtrx_projects_id_fk` FOREIGN KEY (`projectId`) REFERENCES `apcmtrx_projects`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `apcmtrx_testCompletion` ADD CONSTRAINT `apcmtrx_testCompletion_projectId_apcmtrx_projects_id_fk` FOREIGN KEY (`projectId`) REFERENCES `apcmtrx_projects`(`id`) ON DELETE no action ON UPDATE no action;