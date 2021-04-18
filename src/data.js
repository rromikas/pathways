import Person1 from "assets/person1.png";
import Person2 from "assets/person2.png";
import Person3 from "assets/person3.png";
import Person4 from "assets/person4.png";
import Person5 from "assets/person5.png";
import Person6 from "assets/person6.png";
import EventPoster from "assets/event_poster.png";
import moment from "moment";

export const schoolTypes = ["School", "Colledge", "University"];

export const jobTitles = ["Teacher", "Lecturer", "Researcher", "Administrator"];

const loremIpsum =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

const questionLorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat?";

export const questions = new Array(40).fill(questionLorem);

const titleLorem = "Lorem ipsum dolor sit amet, consetetur";

const eventsLists = {
  letInEvents: [2, 6, 9, 11, 14],
  invitedEvents: [1, 4, 5],
  requestedEvents: [2, 3, 6, 9, 11, 14, 15, 18],
};

export const settings = [
  { title: "Lorem ipsum dolor sit", enabled: false },
  { title: "Lorem ipsum dolor sit", enabled: false },
  { title: "Lorem ipsum dolor sit", enabled: false },
  { title: "Lorem ipsum dolor sit", enabled: false },
  { title: "Lorem ipsum dolor sit", enabled: false },
];

export const events = new Array(20)
  .fill({
    title: titleLorem,
    description: loremIpsum,
    date: new Date(),
    time: moment().add(1, "minutes").toDate(),
    image: EventPoster,
    details: [
      { time: new Date(), topic: "Introduction", description: "" },
      {
        time: new Date(),
        topic: "Speaker",
        description: "Jonathan Doe\nJonathanDoe\nJonathanDoe\n",
      },
      {
        time: new Date(),
        topic: "Speaker",
        description: "Jonathan Doe\nJonathanDoe\nJonathanDoe\n",
      },
      {
        time: new Date(),
        topic: "Speaker",
        description: "Jonathan Doe\nJonathanDoe\nJonathanDoe\n",
      },
      {
        time: new Date(),
        topic: "Speaker",
        description: "Jonathan Doe\nJonathanDoe\nJonathanDoe\n",
      },
    ],
  })
  .map((x, i) => ({ ...x, id: i + 1 }));

export const users = {
  1: {
    id: 1,
    profileFilled: true,
    questionnaireFilled: true,
    selectedSpeaker: null,
    fullName: "Silva Mayer",
    school: "San Francisco School",
    schoolType: "School",
    jobTitle: "Teacher",
    image: Person1,
    about: loremIpsum,
    role: "speaker",
    email: "speaker@gmail.com",
    password: "speaker",
    answers: null,
    ...eventsLists,
  },
  2: {
    id: 2,
    profileFilled: true,
    questionnaireFilled: true,
    selectedSpeaker: null,
    fullName: "Maria Doe",
    school: "St. Thomas Preparatory School",
    schoolType: null,
    jobTitle: null,
    image: Person2,
    about: loremIpsum,
    role: "student",
    email: "student@gmail.com",
    password: "student",
    answers: null,
    ...eventsLists,
  },
  3: {
    id: 3,
    role: "admin",
    image: Person5,
    selectedSpeaker: null,
    fullName: "Mister Josh",
    email: "admin@gmail.com",
    password: "admin",
    answers: null,
    ...eventsLists,
  },
  4: {
    id: 4,
    profileFilled: false,
    questionnaireFilled: false,
    selectedSpeaker: null,
    fullName: "John Mayer",
    school: "Michigan University",
    schoolType: "University",
    jobTitle: "Lecturer",
    image: Person4,
    about: loremIpsum,
    role: "moderator",
    email: "moderator@gmail.com",
    password: "moderator",
    answers: null,
    ...eventsLists,
  },
  5: {
    id: 5,
    profileFilled: false,
    questionnaireFilled: false,
    selectedSpeaker: null,
    fullName: "Created User",
    school: "",
    schoolType: "",
    jobTitle: "",
    image: Person6,
    about: loremIpsum,
    role: "student",
    email: "newUser@gmail.com",
    password: "newUser",
    answers: null,
    ...eventsLists,
  },
};

export const analyticsData = new Array(9).fill(0).map((_, i) => ({
  label: `0${i + 1}`.slice(-2),
  a: +(Math.random() * 250).toFixed(0),
  b: +(Math.random() * 200).toFixed(0),
}));

export const participants = new Array(30).fill(0).map((_, i) => ({
  id: i + 1,
  role: ["student", "admin", "speaker", "moderator"][+(Math.random() * 3).toFixed(0)],
  muted: [true, false][+(Math.random() * 2).toFixed(0)],
  image: [Person1, Person2, Person3, Person4, Person5, Person6][+(Math.random() * 5).toFixed(0)],
  fullName: ["Farah Faraclas", "Harry Kane", "Michaell Harrington", "Bryan Cranston", "John Smith"][
    +(Math.random() * 4).toFixed(0)
  ],
  school: "St. Thomas Preparatory School",
  job: "Lecturer",
}));

export const me = { image: Person2 };

export const speaker = { image: Person1 };

export const messages = new Array(20).fill(0).map((x) => ({
  user: {
    image: [Person1, Person2, Person3, Person4][+(Math.random() * 3).toFixed(0)],
    fullName: ["Jonathan Arshavin", "Kevin Dupunk", "Nataly Katler", "Julia Silver"][
      +(Math.random() * 3).toFixed(0)
    ],
  },
  text: titleLorem,
  createdAt: Date.now() - 1000,
}));
