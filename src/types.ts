export type APIAssessmentData = {
  project: {
    id?: number;
    name: string;
    description?: string;
  };
  devCompletion: {
    swaggerSchemaPublished: boolean;
    appServicesDeployed: boolean;
    postmanCollectionAvailable: boolean;
    unitTestCoverage: boolean;
    codeReviewDone: boolean;
    designDocDoneAndSaved: boolean;
    mockAvailable: boolean;
  };
  testCompletion: {
    functionalTesting: boolean;
    automatedTesting: boolean;
    interPerfTestWithMock: boolean;
    integratedPerfPLAB: boolean;
    testingRepresentativeCurProdVol: string;
    sloPublished: boolean;
    tunedForSLO: boolean;
  };
  operationallyReady: {
    telemetry: boolean;
    logging: boolean;
    rto: boolean;
    rpo: boolean;
  };
  secure: {
    compliance: boolean;
    rbacAsRequired: boolean;
    abacAsRequired: boolean;
    dataEncryptionDone: boolean;
    popToken: boolean;
    apiSecurityReviewDone: boolean;
    securityTestingCompleted: boolean;
  };
};

export const blankAssessmentData: APIAssessmentData = Object.freeze({
  project: {
    name: "",
  },
  devCompletion: {
    swaggerSchemaPublished: false,
    appServicesDeployed: false,
    postmanCollectionAvailable: false,
    unitTestCoverage: false,
    codeReviewDone: false,
    designDocDoneAndSaved: false,
    mockAvailable: false,
  },
  testCompletion: {
    functionalTesting: false,
    automatedTesting: false,
    interPerfTestWithMock: false,
    integratedPerfPLAB: false,
    testingRepresentativeCurProdVol: "",
    sloPublished: false,
    tunedForSLO: false,
  },
  operationallyReady: {
    telemetry: false,
    logging: false,
    rto: false,
    rpo: false,
  },
  secure: {
    compliance: false,
    rbacAsRequired: false,
    abacAsRequired: false,
    dataEncryptionDone: false,
    popToken: false,
    apiSecurityReviewDone: false,
    securityTestingCompleted: false,
  },
});
