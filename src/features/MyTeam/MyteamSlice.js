import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myteam: [],
};

export const myTeamSlice = createSlice({
  name: "myteam",
  initialState,
  reducers: {
    fetchMyTeamCard: (state, { payload }) => {
      state.myteam = payload;
    },
  },
});

export const { fetchMyTeamCard } = myTeamSlice.actions;
export const getMyTeamCardData = (state) => state.myteam.myteam;
export default myTeamSlice.reducer;
