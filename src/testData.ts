import { Thing } from "./types";

export const testThingData: Thing = {
  name: "A huge pile of money",
  description: "this is just a lot of money",
  tags: ["Money", "Lots"],
  url: new URL("https://www.money.pile/"),
  img: "https://www.money.pile/img",
};

export const testThingDataNoImg: Thing = {
  name: "A huge pile of money",
  description: "this is just a lot of money",
  tags: ["Money", "Lots"],
  url: new URL("https://www.money.pile/"),
};

export const testThingDataDisambiguation: Thing = {
  name: "A huge pile of money",
  description: "this is just a lot of money",
  tags: ["Money", "Lots", "disambiguation"],
  url: new URL("https://www.money.pile/"),
  img: "https://www.money.pile/img",
};
