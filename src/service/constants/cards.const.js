import AdminCard from "@app/components/AdminCard/AdminCard";
import OrganisationCard from "@app/components/OrganisationCard/OrganisationCard";
import ProgressCard from "@app/components/ProgressCard/ProgressCard";
import RecentActivityCard from "@app/components/RecentActivityCard/RecentActivityCard";

export const CARDTYPE = [
  { name: "card", component: AdminCard },
  { name: "organisationstatuscard", component: OrganisationCard },
  { name: "progresscard", component: ProgressCard },
  { name: "recentactivity", component: RecentActivityCard },
];
