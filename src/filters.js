const filters = {
  searchText: ""
};

const getFilters = () => filters;

const updateFilter = update => {
  if (typeof update.searchText === "string") {
    filters.searchText = update.searchText;
  }
};

export { getFilters, updateFilter };
