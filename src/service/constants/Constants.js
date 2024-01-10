export const ROUTERPATH = {
  LOGIN: "/login",
  ADMIN_LOGIN: "/adminLogin",
  DASHBOARD: "/dashboard",
  MY_TEAM: "/myteam",
  AIMS: "/aims",
  ASSESSMENT_PLATFORM: "/assessmentplatform",
  LMS: "/lms",
  LXP: "/lxp",
  HRMS: "/hrms",
  EP: "/ep",
  CMS: "/cms",
  IT_MANAGEMENT: "/itmanagement",
  REWARDS: "/rewards",
  ORGANISATIONS: "/organisations",
  CANDIDATE_DASHBOARD: "/candidate",
  TEST_PAGE: "/testpage",
};
export const NAV_VALUES = [
  { label: "Dashboard", icon: "dashboard", link: ROUTERPATH.DASHBOARD },
  { label: "My Team", icon: "myTeam", link: ROUTERPATH.MY_TEAM },
  { label: "AIMS", icon: "aims", link: ROUTERPATH.AIMS },
  {
    label: "Assessment Platform",
    icon: "assessment",
    link: ROUTERPATH.ASSESSMENT_PLATFORM,
  },
  { label: "LMS", icon: "lms", link: ROUTERPATH.LMS },
  { label: "LXP", icon: "lxp", link: ROUTERPATH.LXP },
  { label: "HRMS", icon: "hrms", link: ROUTERPATH.HRMS },
  { label: "EP", icon: "ep", link: ROUTERPATH.EP },
  { label: "CMS", icon: "cms", link: ROUTERPATH.CMS },
  {
    label: "IT Management",
    icon: "itManagement",
    link: ROUTERPATH.IT_MANAGEMENT,
  },
  { label: "Rewards", icon: "rewards", link: ROUTERPATH.REWARDS },
  {
    label: "Organisations",
    icon: "organisations",
    link: ROUTERPATH.ORGANISATIONS,
  },
];

export const SERVICE_OPTIONS = [
  { title: "AIMS", value: "AIMS" },
  { title: "AP", value: "AP" },
  { title: "LMS", value: "LMS" },
  { title: "HRMS", value: "HRMS" },
  { title: "EP", value: "EP" },
  { title: "CMS", value: "CMS" },
  { title: "LXP", value: "LXP" },
];
export const FORM_ITEM_MODE = {
  SIDE : "side-label",
  TOP  : "top-label"
}
export const AREA_CHART_CONFIG = {
  xAxis: {
    range: [0, 1],
    label: {
      formatter: (text) => (text.length > 5 ? text.slice(0, 3) : text),
    },
  },
  className: "area-chart",
  areaStyle: () => {
    return {
      fill: "l(270) 0:#ffffff 0.5:#0076BF 1:#0076BF",
      cursor: "pointer",
    };
  },
  yAxis: {
    label: {
      formatter: (text) => `${text}k`,
    },
    grid: {
      line: {
        style: {
          lineDash: [6, 7],
          cursor: "pointer",
        },
      },
    },
  },
  
  line: {
    color: "transparent",
  },
  smooth: true,
}

export const COLUMN_CHART_CONFIG = {
  columnStyle: {
    fill: "#0076BF",
    fontSize: 280,
    r:"200px"
  },
  columnWidthRatio: 0.8,
  label: {
    position: "middle",
    style: {
      fill: "#FFFFF",
      fontSize: 0,
      opacity: 0.6,
    },
  },
  xAxis: {
    range: [0, 1],
    label: {
      autoHide: false,
      autoRotate: false,
    },
  },
};
