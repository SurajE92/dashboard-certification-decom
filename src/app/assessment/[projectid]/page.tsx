import { getProjectDetails, ProjectDetailsType } from "@/app/actions/projects";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { APIAssessmentData, blankAssessmentData } from "@/types";
import AssessmentForm from "./AssessmentForm";

type Props = { params: Promise<{ projectid: string }> };

const APIAssessmentPage = async ({ params }: Props) => {
  const projectid = (await params).projectid;
  const projectData =
    projectid === "new"
      ? { ...blankAssessmentData }
      : mapProjectDetailsToFormData(await getProjectDetails(Number(projectid)));

  return (
    <SidebarLayout className="p-8">
      <h2 className="text-3xl font-medium tracking-wide">
        {projectid === "new" ? "New Record" : projectData.project.name}
      </h2>
      <AssessmentForm defaultFormdata={projectData} />
    </SidebarLayout>
  );
};

export default APIAssessmentPage;

const mapProjectDetailsToFormData = (
  param: ProjectDetailsType
): APIAssessmentData => {
  const {
    projects,
    devCompletion,
    testCompletion,
    securityCompletion,
    operationallyReady,
  } = param;
  return {
    project: {
      id: projects.id,
      name: projects.name,
      description: projects.description ?? "",
    },
    devCompletion: {
      swaggerSchemaPublished: devCompletion.swaggerSchemaPublished || false,
      appServicesDeployed: devCompletion.appServicesDeployed || false,
      postmanCollectionAvailable:
        devCompletion.postmanCollectionAvailable || false,
      unitTestCoverage: devCompletion.unitTestCoverage || false,
      codeReviewDone: devCompletion.codeReviewDone || false,
      designDocDoneAndSaved: devCompletion.designDocDoneAndSaved || false,
      mockAvailable: devCompletion.mockAvailable || false,
    },
    testCompletion: {
      functionalTesting: testCompletion.functionalTesting || false,
      automatedTesting: testCompletion.automatedTesting || false,
      interPerfTestWithMock: testCompletion.interPerfTestWithMock || false,
      integratedPerfPLAB: testCompletion.integratedPerfPLAB || false,
      testingRepresentativeCurProdVol:
        testCompletion.testingRepresentativeCurProdVol || "",
      sloPublished: testCompletion.sloPublished || false,
      tunedForSLO: testCompletion.tunedForSLO || false,
    },
    operationallyReady: {
      telemetry: operationallyReady.telemetry || false,
      logging: operationallyReady.logging || false,
      rto: operationallyReady.rto || false,
      rpo: operationallyReady.rpo || false,
    },
    secure: {
      compliance: securityCompletion.compliance || false,
      rbacAsRequired: securityCompletion.rbacAsRequired || false,
      abacAsRequired: securityCompletion.abacAsRequired || false,
      dataEncryptionDone: securityCompletion.dataEncryptionDone || false,
      popToken: securityCompletion.popToken || false,
      apiSecurityReviewDone: securityCompletion.apiSecurityReviewDone || false,
      securityTestingCompleted:
        securityCompletion.securityTestingCompleted || false,
    },
  };
};
