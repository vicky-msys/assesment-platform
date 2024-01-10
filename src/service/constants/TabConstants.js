import { lazy } from "react";

const OrganisationForm = lazy(() =>
  import("@app/components/OrganisationForm/OrganisationForm")
);
const ListContainer = lazy(() =>
  import("@app/components/ListContainer/ListContainer")
);
const AssessmentSettings = lazy(() =>
  import("@app/components/AssessmentSettings/AssessmentSettings")
);
const GridView = lazy(() => import("@app/components/GridView/GridView"));
const AdminForm = lazy(() => import("@app/components/AdminForm/AdminForm"));
const Email = lazy(() => import("@app/components/AssessmentSettings/Email"));
const BasicDetails = lazy(() =>
  import("@app/components/CandidateDetails/BasicDetails")
);
const EmploymentDetails = lazy(() =>
  import("@app/components/CandidateDetails/EmploymentDetails")
);
const EducationDetails = lazy(() =>
  import("@app/components/CandidateDetails/EducationDetails")
);

export const TABDATA = [
  {
    tabName: "organisation",
    component: OrganisationForm,
  },
  {
    tabName: "listcontainer",
    component: ListContainer,
  },
  { tabName: "gridview", component: GridView },
  { tabName: "assesmentsettings", component: AssessmentSettings },
  { tabName: "adminform", component: AdminForm },
  { tabName: "email", component: Email },
  { tabName: "basicdetails", component: BasicDetails },
  { tabName: "employmentdetails", component: EmploymentDetails },
  { tabName: "educationdetails", component: EducationDetails },
];
