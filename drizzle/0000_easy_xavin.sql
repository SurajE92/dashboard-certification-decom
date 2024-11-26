CREATE TABLE `devCompletion` (
	`projectId` int NOT NULL,
	`swaggerSchemaPublished` boolean DEFAULT false,
	`appServicesDeployed` boolean DEFAULT false,
	`postmanCollectionAvailable` boolean DEFAULT false,
	`unitTestCoverage` boolean DEFAULT false,
	`codeReviewDone` boolean DEFAULT false,
	`designDocDoneAndSaved` boolean DEFAULT false,
	`mockAvailable` boolean DEFAULT false,
	CONSTRAINT `devCompletion_projectId` PRIMARY KEY(`projectId`)
);
--> statement-breakpoint
CREATE TABLE `operationallyReady` (
	`projectId` int NOT NULL,
	`telemetry` boolean DEFAULT false,
	`logging` boolean DEFAULT false,
	`rto` boolean DEFAULT false,
	`rpo` boolean DEFAULT false,
	CONSTRAINT `operationallyReady_projectId` PRIMARY KEY(`projectId`)
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` varchar(2048),
	CONSTRAINT `projects_id` PRIMARY KEY(`id`),
	CONSTRAINT `projects_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `securityCompletion` (
	`projectId` int NOT NULL,
	`compliance` boolean DEFAULT false,
	`rbacAsRequired` boolean DEFAULT false,
	`abacAsRequired` boolean DEFAULT false,
	`dataEncryptionDone` boolean DEFAULT false,
	`popToken` boolean DEFAULT false,
	`apiSecurityReviewDone` boolean DEFAULT false,
	`securityTestingCompleted` boolean DEFAULT false,
	CONSTRAINT `securityCompletion_projectId` PRIMARY KEY(`projectId`)
);
--> statement-breakpoint
CREATE TABLE `testCompletion` (
	`projectId` int NOT NULL,
	`functionalTesting` boolean DEFAULT false,
	`automatedTesting` boolean DEFAULT false,
	`interPerfTestWithMock` boolean DEFAULT false,
	`integratedPerfPLAB` boolean DEFAULT false,
	`testingRepresentativeCurProdVol` varchar(255),
	`sloPublished` boolean DEFAULT false,
	`tunedForSLO` boolean DEFAULT false,
	CONSTRAINT `testCompletion_projectId` PRIMARY KEY(`projectId`)
);
--> statement-breakpoint
ALTER TABLE `devCompletion` ADD CONSTRAINT `devCompletion_projectId_projects_id_fk` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `operationallyReady` ADD CONSTRAINT `operationallyReady_projectId_projects_id_fk` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `securityCompletion` ADD CONSTRAINT `securityCompletion_projectId_projects_id_fk` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `testCompletion` ADD CONSTRAINT `testCompletion_projectId_projects_id_fk` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE no action ON UPDATE no action;