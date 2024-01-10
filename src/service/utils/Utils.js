
export const sortArray = (array, sortByText) => {
  if (sortByText.includes("dcnd")) {
    const sortText = sortByText.split(" ")[0];
    return array.sort((a, b) => b[sortText].localeCompare(a[sortText]));
  }
  return array.sort((a, b) => a[sortByText].localeCompare(b[sortByText]));
};
