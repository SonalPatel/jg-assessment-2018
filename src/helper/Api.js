import React from "react";
const AppId = "8b28a350"; //create the AppID into a variable as its re-used

export const getCharityById = charityId => {
  return fetch(`https://api.justgiving.com/${AppId}/v1/charity/${charityId}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};

export const getCharityDonationsById = donationId => {
  return fetch(
    `https://api.justgiving.com/${AppId}/v1/charity/${donationId}/donations`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  );
};
