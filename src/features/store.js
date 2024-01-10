import { configureStore } from "@reduxjs/toolkit";
import AssessmentPlatformSlice from "./AssessmentPlatform/AssessmentPlatformSlice";
import dashboardSettings from "./Dashboard/SettingsSlice";
import myTeamSlice from "./MyTeam/MyteamSlice";
import orgSlice from "./Organisation/OrganisationSlice";

export const store = configureStore({
  reducer: {
    myteam: myTeamSlice,
    organisation: orgSlice,
    assessmentCardData: AssessmentPlatformSlice,
    dashboardSetting : dashboardSettings,
  },
});
