import Questionnaire from "components/Questionnaire";
import { questions } from "data";
import EventsList from "components/EventsList";
import EventMainButton from "./EventMainButton";
import EventSecondaryButtons from "./EventSecondaryButtons";
import { Flipper, Flipped } from "react-flip-toolkit";
import moment from "moment";
import { useState } from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import Select from "components/Select";

const getDate = (date, time) => {
  return moment(moment(date).format("YYYY-MM-DD") + " " + moment(time).format("HH:mm:ss")).toDate();
};

const Dashboard = ({
  user,
  scrollToTop,
  events,
  sendEventRequest,
  onSaveQuestionnaireAnswers,
  acceptInvitation,
}) => {
  const [filterIndex, setFilterIndex] = useState(0);
  const [sort, setSort] = useState("Time Ascending");

  const sorts = {
    "Time Ascending": (a, b) => {
      const ad = getDate(a.date, a.time);
      const bd = getDate(b.date, b.time);
      return ad > bd ? 1 : ad < bd ? -1 : 0;
    },
    "Time Descending": (a, b) => {
      const ad = getDate(a.date, a.time);
      const bd = getDate(b.date, b.time);
      return ad > bd ? -1 : ad < bd ? 1 : 0;
    },
  };

  const filterOptions = [
    { title: "Upcoming Events", fn: (x) => getDate(x.date, x.time) >= new Date() },
    { title: "Registered Events", fn: (x) => user.requestedEvents.includes(x.id) },
    { title: "Past Events", fn: (x) => getDate(x.date, x.time) < new Date() },
  ];

  const filter = filterOptions[filterIndex];

  return user.questionnaireFilled || user.role === "admin" ? (
    <>
      {user.role === "student" ? (
        <div className="flex flex-wrap xl:flex-nowrap justify-between">
          <Flipper className="w-full flex flex-wrap md:flex-nowrap mr-4 py-4" flipKey={filterIndex}>
            {filterOptions.map((x, i) => (
              <div className="relative h-48px md:w-192px w-full">
                <div className="border-b-2 hidden md:block border-gray-500 h-full absolute left-0 top-0 w-full"></div>
                {filterIndex === i ? (
                  <Flipped key={`filter-opt-${i}`} flipId={"active"}>
                    <div
                      className={`hidden md:block border-b-2 border-orange-400 h-full absolute z-10 w-full`}
                    ></div>
                  </Flipped>
                ) : null}

                <ButtonBase
                  onClick={() => setFilterIndex(i)}
                  className={`absolute left-0 bottom-0 h-full w-full outline-none ${
                    filterIndex === i ? "text-orange-400 md:text-black" : ""
                  }`}
                >
                  {x.title}
                </ButtonBase>
              </div>
            ))}
          </Flipper>
          <div className="flex items-center justify-end w-full xl:w-auto xl:justify-start py-4">
            <div className="mr-3 whitespace-nowrap">Sort as</div>
            <div className="w-180px">
              <Select
                outlined
                small
                dark
                items={Object.keys(sorts)}
                value={sort}
                setValue={setSort}
              ></Select>
            </div>
          </div>
        </div>
      ) : null}
      <EventsList
        acceptInvitation={acceptInvitation}
        filterFunction={
          user.role === "student"
            ? filter.fn
            : (ev) => user.role === "admin" || !user.letInEvents.includes(ev.id)
        }
        sortFunction={user.role === "student" ? sorts[sort] : undefined}
        scrollToTop={scrollToTop}
        events={events}
        user={user}
        MainButton={EventMainButton}
        SecondaryButtons={EventSecondaryButtons}
        sendEventRequest={sendEventRequest}
      ></EventsList>
    </>
  ) : (
    <Questionnaire
      scrollToTop={scrollToTop}
      questions={questions}
      questionsPerStep={4}
      initialAnswers={user.answers}
      onSave={onSaveQuestionnaireAnswers}
    ></Questionnaire>
  );
};

export default Dashboard;
