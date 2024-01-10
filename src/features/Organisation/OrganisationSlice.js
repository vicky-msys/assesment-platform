import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  organisation: [],
};

export const orgSlice = createSlice({
  name: "organisation",
  initialState,
  reducers: {
    fetchOrgCard: (state, { payload }) => {
      state.myteam = payload;
    },
  },
});

export const { fetchMyTeamCard } = orgSlice.actions;
export const getOrgCardData = (state) => state.organisation.organisation;
export default orgSlice.reducer;
