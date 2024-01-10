import {
  ADMIN,
  CANDIDATE,
  SUPERADMIN,
} from "@app/service/constants/roles.const";

export const Candidate = [
  { title: "Dashboard", path: "/dashboard" },
  { title: "Profile", path: "/profile" },
  { title: "Test Page", path: "/testpage" },
];
export const Admin = [
  { title: "Dashboard", path: "/dashboard" },
  { title: "Profile", path: "/profile" },
  { title: "Test Page", path: "/testpage" },
  { title: "My Team", path: "/myteam" },
  { title: "Add Admin", path: "/myteam/addadmin" },
  { title: "Edit Admin", path: "/myteam/editadmin" },
  { title: "Candidates", path: "/candidates" },
  { title: "Candidates", path: "/candidates/candidateinfo/:id" },
  { title: "Candidates", path: "/candidates/candidatedetails/:id" },
];
export const SuperAdmin = [
  { title: "Dashboard", path: "/dashboard" },
  { title: "My Team", path: "/myteam" },
  { title: "Organisation", path: "/organisation" },
  { title: "Platforms", path: "" },
  { title: "Add Organisation", path: "/organisation/addorganisation" },
  { title: "Add Organisation", path: "/organisation/editorganisation" },
  { title: "Admin", path: "/myteam/admin" },
  { title: "Sub Admin", path: "/myteam/subadmin" },
  { title: "settings", path: "/dashboard/settings" },
  { title: "Add Admin", path: "/myteam/addadmin" },
  { title: "Add Admin", path: "/myteam/editadmin" },
  { title: "Assessment Platform", path: "/assessmentplatform" },
  { title: "Assessment insights", path: "/insights" },
  { title: "All Assessment", path: "/assessmentplatform/:type" },
  {
    title: "Assessment preview",
    path: "/assessmentplatform/:type/:assessment",
  },
];
export const roleData = {
  [SUPERADMIN]: SuperAdmin,
  [ADMIN]: Admin,
  [CANDIDATE]: Candidate,
};

export const routeCollection = [
  {
    componentId: "loginLayout",
    children: [{ componentId: "login", link: "/login", label: "Login" }],
  },
  // {
  //   componentId: "defaultLayout",
  //   children: [
  //     {
  //       componentId: "dashboard",
  //       link: "/dashboard",
  //       label: "Dashboard",
  //       props: { id: "dashbbbbb" },
  //     },
  //     {
  //       componentId: "myteam",
  //       link: "/myteam",
  //       label: "My Team",
  //       icon: "myTeam",
  //       props: { teamId: "teammmmmm" },
  //     },
  //   ],
  // },
  // {
  //   componentId: "contentLayout",
  //   children: [
  //     { componentId: "candidate", link: "/candidate", label: "Candidate" },
  //     {
  //       componentId: "testpage",
  //       link: "/testpage",
  //       label: "TestPage",
  //       props: { id: "test candidate" },
  //     },
  //     { componentId: "testpaawfge", link: "/tesawtpage", label: "TeseftPage" },
  //   ],
  // },
];
