export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectFilter = (state) => state.filters.name;

import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalized = filter.toLowerCase();
    return contacts.filter((c) => c.name.toLowerCase().includes(normalized));
  },
);
