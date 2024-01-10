import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assessmentPlatform: [],
  apTopicsData: [],
};
const assesmentSlice = createSlice({
  name: "assessmentplatform",
  initialState,
  reducers: {
    fetchAssessmentData: (state, { payload }) => {
      state.assessmentPlatform = payload;
    },
    fetchApTopicsData: (state, { payload }) => {
      state.apTopicsData = payload;
    },
    addTopicsData: (state, { payload }) => {
      state.apTopicsData = [...state.apTopicsData, payload];
    },
    deleteTopicData: (state, { payload }) => {
      state.apTopicsData = state.apTopicsData.filter(
        (item) => item.id !== payload.id
      );
    },
    editTopicData: (state, { payload }) => {
      state.apTopicsData = state.apTopicsData.map((item) =>
        item.id === payload.id ? payload : item
      );
    },
  },
});

export const {
  fetchAssessmentData,
  fetchApTopicsData,
  addTopicsData,
  deleteTopicData,
  editTopicData,
} = assesmentSlice.actions;
export const getAssessmentData = (state) =>
  state.assessmentCardData.assessmentPlatform;
export const getApTopicsData = (state) => state.assessmentCardData.apTopicsData;
export default assesmentSlice.reducer;
