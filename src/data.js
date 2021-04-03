import Person1 from "assets/person1.png";
import Person2 from "assets/person2.png";
import Person3 from "assets/person3.png";
import Person4 from "assets/person4.png";
import Person5 from "assets/person5.png";
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
    questionnaireFilled: false,
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
};

export const participants = new Array(30).fill(0).map((_) => ({
  role: ["student", "admin", "speaker", "moderator"][+(Math.random() * 3).toFixed(0)],
  muted: [true, false][+(Math.random() * 2).toFixed(0)],
  image: [Person1, Person2, Person3, Person4, Person5][+(Math.random() * 4).toFixed(0)],
  fullName: ["Farah Faraclas", "Harry Kane", "Michaell Harrington", "Bryan Cranston", "John Smith"][
    +(Math.random() * 4).toFixed(0)
  ],
}));

export const me = { image: Person2 };

export const speaker = { image: Person1 };

console.log(+(Math.random() * 3).toFixed(0));
export const messages = new Array(20).fill(0).map((x) => ({
  author: {
    image: [Person1, Person2, Person3, Person4][+(Math.random() * 3).toFixed(0)],
    name: ["Jonathan", "Kevin", "Nataly", "Julia"][+(Math.random() * 3).toFixed(0)],
  },
  text: titleLorem,
  createdAt: Date.now() - 1000,
}));
