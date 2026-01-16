import { randomValueFromArray } from "./array";

export function randomCountry() {
   const country = ["United States of America (the)", "Virgin Islands (U.S.)", "Venezuela (Bolivarian Republic of)"];
   return randomValueFromArray(country);
}
