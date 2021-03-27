import Person1 from "assets/person1.png";
import Person2 from "assets/person2.png";
import Person3 from "assets/person3.png";
import Person4 from "assets/person4.png";
import Person5 from "assets/person5.png";

export const schoolTypes = ["School", "Colledge", "University"];

export const jobTitles = ["Teacher", "Lecturer", "Researcher", "Administrator"];

const loremIpsum =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

const questionLorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat?";

export const questions = new Array(40).fill(questionLorem);

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
  },
  3: {
    id: 3,
    role: "admin",
    image: Person5,
    fullName: "Mister Josh",
    email: "admin@gmail.com",
    password: "admin",
    answers: null,
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
  },
};

export const participants = [
  { muted: false, photo: Person1 },
  { muted: true, photo: Person4 },
  { muted: false, photo: Person3 },
  { muted: true, photo: Person1 },
  { muted: true, photo: Person4 },
  { muted: true, photo: Person4 },
  { muted: true, photo: Person3 },
  { muted: false, photo: Person1 },
  { muted: false, photo: Person3 },
  { muted: true, photo: Person4 },
  { muted: true, photo: Person4 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person1 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person4 },
  { muted: false, photo: Person4 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person1 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person1 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person4 },
  { muted: false, photo: Person4 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person1 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person1 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person4 },
  { muted: false, photo: Person4 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person1 },
  { muted: false, photo: Person3 },
];

export const me = { photo: Person2 };

export const speaker = { photo: Person1 };
