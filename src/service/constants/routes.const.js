import { lazy } from "react";
import { SUPERADMIN, ADMIN, RECRUITER, CANDIDATE } from "./roles.const";
import DefaultLayout from "@app/components/Layouts/DefaultLayout";
import LoginLayout from "@app/components/Layouts/LoginLayout";
import ContentLayout from "@app/components/Layouts/ContentLayout";
import DashboardIcon from "@app/assets/icons/dashboard-icon.svg";
import Ap from "@app/assets/icons/Ap.svg";
import OrganisationIcon from "@app/assets/icons/OrganisationIcon.svg";
import MyTeamIcon from "@app/assets/icons/myteam-icon.svg";
const AdminDashboard = lazy(() =>
  import("@app/modules/Dashboard/AdminDashboard/AdminDashboard")
);
const Dashboard = lazy(() => import("@app/modules/Dashboard/Dashboard"));
const CandidateDashboard = lazy(() =>
  import("@app/modules/Dashboard/CandidateDashboard")
);
const AddOrganisationForm = lazy(() =>
  import("@app/components/OrganisationForm/AddOrganisationForm")
);
const EditOrganisationForm = lazy(() =>
  import("@app/components/OrganisationForm/OrganisationForm")
);
const Candidates = lazy(() =>
  import("../../modules/Candidates/Admin/Candidates")
);
const CandidateInfo = lazy(() =>
  import("../../modules/Candidates/Admin/CandidateInfo")
);
const CandidateDetails = lazy(() =>
  import("../../modules/Candidates/Admin/CandidateDetails")
);
const EditAdminForm = lazy(() => import("@app/components/AdminForm/AdminForm"));
const AddAdmin = lazy(() => import("@app/components/AdminForm/AddAdmin"));
const TestPage = lazy(() => import("@app/modules/TestPage/TestPage"));
const MyTeam = lazy(() => import("@app/modules/MyTeam/SuperAdmin/MyTeam"));
const AdminMyTeam = lazy(() => import("@app/modules/MyTeam/Admin/MyTeam"));
const AddMember = lazy(() =>
  import("@app/modules/MyTeam/Admin/MyTeamAddAdmin")
);
const EditMember = lazy(() =>
  import("@app/modules/MyTeam/Admin/MyTeamEditAdmin")
);
const AssessmentPlatform = lazy(() =>
  import("@app/modules/AssessmentPlatform/AssessmentPlatform")
);
const AssessmentPlatformInsights = lazy(() =>
  import("@app/modules/AssessmentPlatform/AssessmentPlatformInsights")
);
const AllAssessments = lazy(() =>
  import("@app/modules/AssessmentPlatform/AllAssessments")
);
const AssessmentPreview = lazy(() =>
  import("@app/modules/AssessmentPlatform/AssessmentPreview")
);
const Organisation = lazy(() =>
  import("@app/modules/Organisation/Organisation")
);
const TeamAdmin = lazy(() =>
  import("@app/modules/MyTeam/SuperAdmin/AdminForm")
);
const SubAdminForm = lazy(() =>
  import("@app/modules/MyTeam/SuperAdmin/SubAdminForm")
);
const Settings = lazy(() => import("@app/modules/MyTeam/SuperAdmin/Settings"));
const Profile = lazy(() => import("@app/modules/Profile"));

const Login = lazy(() => import("@app/modules/Login/Login"));

export const ROUTES_MAP = [
  {
    routeName: "/login",
    allowedRoles: [SUPERADMIN, ADMIN, RECRUITER, CANDIDATE],
    routeComponent: Login,
    routeLayout: LoginLayout,
    addDataProps: false,
    addHistoryProps: true,
    props: null,
  },
  {
    routeName: "/profile",
    allowedRoles: [CANDIDATE],
    routeComponent: Profile,
    routeLayout: "",
    addDataProps: false,
    addHistoryProps: false,
    props: null,
  },
  {
    routeName: "/dashboard",
    allowedRoles: [SUPERADMIN],
    routeComponent: Dashboard,
    routeLayout: DefaultLayout,
    addDataProps: true,
    addHistoryProps: false,
    icon: DashboardIcon,
    props: {
      test: 123,
    },
  },
  {
    routeName: "/dashboard",
    allowedRoles: [ADMIN],
    routeComponent: AdminDashboard,
    routeLayout: DefaultLayout,
    addDataProps: true,
    addHistoryProps: false,
    icon: DashboardIcon,
    props: {
      test: 123,
    },
  },
  {
    routeName: "/dashboard",
    allowedRoles: [CANDIDATE],
    routeComponent: CandidateDashboard,
    routeLayout: ContentLayout,
    addDataProps: false,
    icon: DashboardIcon,
    addHistoryProps: false,
    props: null,
  },
  {
    routeName: "/testpage",
    allowedRoles: [CANDIDATE, SUPERADMIN],
    routeComponent: TestPage,
    routeLayout: "",
    addDataProps: false,
    addHistoryProps: false,
    props: null,
  },
  {
    routeName: "/myteam",
    allowedRoles: [CANDIDATE, SUPERADMIN],
    routeComponent: MyTeam,
    routeLayout: DefaultLayout,
    addDataProps: false,
    icon: MyTeamIcon,
    addHistoryProps: false,
    props: null,
  },
  {
    routeName: "/myteam",
    allowedRoles: [ADMIN],
    routeComponent: AdminMyTeam,
    routeLayout: DefaultLayout,
    addDataProps: false,
    icon: MyTeamIcon,
    addHistoryProps: false,
    props: null,
  },
  {
    routeName: "/candidates",
    allowedRoles: [ADMIN],
    routeComponent: Candidates,
    routeLayout: DefaultLayout,
    addDataProps: true,
    addHistoryProps: false,
    icon: DashboardIcon,
    props: null,
  },
  {
    routeName: "/candidates/candidateinfo/:id",
    allowedRoles: [ADMIN],
    routeComponent: CandidateInfo,
    routeLayout: DefaultLayout,
    addDataProps: true,
    addHistoryProps: false,
    icon: DashboardIcon,
    isMenu: false,
    props: null,
  },
  {
    routeName: "/candidates/candidatedetails/:id",
    allowedRoles: [ADMIN],
    routeComponent: CandidateDetails,
    routeLayout: DefaultLayout,
    addDataProps: true,
    addHistoryProps: false,
    icon: DashboardIcon,
    isMenu: false,
    props: null,
  },
  {
    routeName: "",
    allowedRoles: [SUPERADMIN, ADMIN, RECRUITER, CANDIDATE],
    routeLayout: DefaultLayout,
  },
  {
    routeName: "/organisation",
    allowedRoles: [CANDIDATE, SUPERADMIN],
    routeComponent: Organisation,
    routeLayout: DefaultLayout,
    addDataProps: false,
    icon: OrganisationIcon,
    addHistoryProps: false,
    props: null,
  },
  {
    routeName: "/assessmentplatform",
    allowedRoles: [CANDIDATE, SUPERADMIN],
    routeComponent: AssessmentPlatform,
    routeLayout: DefaultLayout,
    addDataProps: false,
    icon: Ap,
    addHistoryProps: false,
    props: null,
  },
  {
    routeName: "/insights",
    allowedRoles: [CANDIDATE, SUPERADMIN],
    routeComponent: AssessmentPlatformInsights,
    routeLayout: DefaultLayout,
    addDataProps: false,
    icon: Ap,
    addHistoryProps: false,
    props: null,
    isMenu: false,
  },
  {
    routeName: "/assessmentplatform/:type",
    allowedRoles: [CANDIDATE, SUPERADMIN],
    routeComponent: AllAssessments,
    routeLayout: DefaultLayout,
    addDataProps: false,
    icon: Ap,
    addHistoryProps: false,
    props: null,
    isMenu: false,
  },
  {
    routeName: "/assessmentplatform/:type/:assessment",
    allowedRoles: [CANDIDATE, SUPERADMIN],
    routeComponent: AssessmentPreview,
    routeLayout: DefaultLayout,
    addDataProps: false,
    icon: Ap,
    addHistoryProps: false,
    props: null,
    isMenu: false,
  },
  {
    routeName: "/organisation/addorganisation",
    allowedRoles: [CANDIDATE, SUPERADMIN],
    routeComponent: AddOrganisationForm,
    routeLayout: DefaultLayout,
    addDataProps: false,
    icon: MyTeamIcon,
    addHistoryProps: false,
    props: null,
    isMenu: false,
  },
  {
    routeName: "/organisation/editorganisation",
    allowedRoles: [CANDIDATE, SUPERADMIN],
    routeComponent: EditOrganisationForm,
    routeLayout: DefaultLayout,
    addDataProps: false,
    icon: MyTeamIcon,
    addHistoryProps: false,
    props: null,
    isMenu: false,
  },
  {
    routeName: "/myteam/addadmin",
    allowedRoles: [CANDIDATE, SUPERADMIN],
    routeComponent: AddAdmin,
    routeLayout: DefaultLayout,
    addDataProps: false,
    icon: MyTeamIcon,
    addHistoryProps: false,
    props: null,
    isMenu: false,
  },
  {
    routeName: "/myteam/addadmin",
    allowedRoles: [ADMIN],
    routeComponent: AddMember,
    routeLayout: DefaultLayout,
    addDataProps: false,
    icon: MyTeamIcon,
    addHistoryProps: false,
    props: null,
    isMenu: false,
  },
  {
    routeName: "/myteam/editadmin",
    allowedRoles: [ADMIN],
    routeComponent: EditMember,
    routeLayout: DefaultLayout,
    addDataProps: false,
    icon: MyTeamIcon,
    addHistoryProps: false,
    props: null,
    isMenu: false,
  },
  {
    routeName: "/myteam/editadmin",
    allowedRoles: [CANDIDATE, SUPERADMIN],
    routeComponent: EditAdminForm,
    routeLayout: DefaultLayout,
    addDataProps: false,
    icon: MyTeamIcon,
    addHistoryProps: false,
    props: null,
    isMenu: false,
  },
  {
    routeName: "/myteam/admin",
    allowedRoles: [CANDIDATE, SUPERADMIN],
    routeComponent: TeamAdmin,
    routeLayout: "",
    addDataProps: false,
    icon: MyTeamIcon,
    addHistoryProps: false,
    props: null,
    isMenu: false,
  },
  {
    routeName: "/myteam/subadmin",
    allowedRoles: [CANDIDATE, SUPERADMIN],
    routeComponent: SubAdminForm,
    routeLayout: DefaultLayout,
    addDataProps: false,
    icon: MyTeamIcon,
    addHistoryProps: false,
    props: null,
    isMenu: false,
  },
  {
    routeName: "/dashboard/settings",
    allowedRoles: [CANDIDATE, SUPERADMIN],
    routeComponent: Settings,
    routeLayout: DefaultLayout,
    addDataProps: false,
    icon: MyTeamIcon,
    addHistoryProps: false,
    props: null,
    isMenu: false,
  },
];
