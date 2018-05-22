import React from "react";
const AppId = "8b28a350"; //create the AppID into a variable as its re-used

//function for variable charity ID (using template literals which are string literals to allow embedded expressions eg. `string text` or `&{expression}`)
export const getCharityById = charityId => {
  return fetch(`https://api.justgiving.com/${AppId}/v1/charity/${charityId}`, {
    // the headers were required as the api was xml: so if its not json then make it json.
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};

//function for variable charity Donation ID
export const getCharityDonationsById = charityId => {
  return fetch(
    // the headers were required as the api was xml: so if its not json then make it json.
    `https://api.justgiving.com/${AppId}/v1/charity/${charityId}/donations`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  );
};
