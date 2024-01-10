import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [],
};

export const dashboardSettings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    fetchRoles: (state, { payload }) => {
      state.roles = payload;
    },
  },
});

export const { fetchRoles } = dashboardSettings.actions;
export const getRoles = (state) => state.dashboardSetting.roles;
export default dashboardSettings.reducer;
