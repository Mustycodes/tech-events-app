import { Event } from "./shared/types/types";

export const eventData:Event[] = [
  {
    id: 1,
    name: "DevFest Lagos",
    date: new Date("04/20/2021"),
    time: "10:00 am",
    price: 2000,
    imageUrl: require("./assets/images/DevFest2019.png").default,
    location: {
      address: "The Events House Lekki",
      city: "Lagos",
      country: "Nigeria",
    },
    sessions: [
      {
        id: 1,
        name: "Contributing to Open Source",
        presenter: "Prosper Otemuyiwa",
        duration: 1,
        level: "beginner",
        abstract:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facilis quibusdam magnam impedit. Nihil mollitia in ducimus recusandae hic, illo cum quam veritatis officiis laudantium ipsum consectetur numquam, neque voluptatibus.",
        voters: ["John", "Tobi"]
      },
    ]
  },
  {
    id: 2,
    name: "Concatenate Conf",
    date: new Date("07/06/2022"),
    time: "2:00 pm",
    price: 2000,
    imageUrl: require("./assets/images/image2.jpg").default,
    location: {
      address: "The Events House Lekki",
      city: "Lagos",
      country: "Nigeria",
    },
    sessions: [
      {
        id: 2,
        name: "Contributing to Open Source",
        presenter: "Prosper Otemuyiwa",
        duration: 1,
        level: "beginner",
        abstract:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facilis quibusdam magnam impedit. Nihil mollitia in ducimus recusandae hic, illo cum quam veritatis officiis laudantium ipsum consectetur numquam, neque voluptatibus.",
        voters: ["John", "Tobi"]
      },
    ]
  },
  {
    id: 3,
    name: "OSCA Lagos",
    date: new Date("04/20/2021"),
    time: "08:30 am",
    price: 2000,
    imageUrl: require("./assets/images/DevFest2.png").default,
    onlineUrl: "https://www.osca.com",
    sessions: [
      {
        id: 3,
        name: "Contributing to Open Source",
        presenter: "Prosper Otemuyiwa",
        duration: 1,
        level: "beginner",
        abstract:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facilis quibusdam magnam impedit. Nihil mollitia in ducimus recusandae hic, illo cum quam veritatis officiis laudantium ipsum consectetur numquam, neque voluptatibus.",
        voters: ["John", "Tobi"]
      },
    ]
  },
];
