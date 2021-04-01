import Questionnaire from "components/Questionnaire";
import { questions } from "data";
import { store } from "store";
import EventsList from "components/EventsList";
import { events } from "data";
import EventMainButton from "./EventMainButton";
import EventSecondaryButtons from "./EventSecondaryButtons";

const Dashboard = ({ user, scrollToTop, events, goToEventPage }) => {
  const saveAnswers = (ans) => {
    store.dispatch({
      type: "UPDATE_USER",
      payload: {
        ...user,
        answers: ans,
        questionnaireFilled: ans.filter((x) => x).length === ans.length,
      },
    });

    store.dispatch({
      type: "SET_USER",
      payload: { ...user, questionnaireFilled: ans.filter((x) => x).length === ans.length },
    });
  };

  return user.questionnaireFilled || user.role === "admin" ? (
    <EventsList
      goToEventPage={goToEventPage}
      scrollToTop={scrollToTop}
      events={events}
      user={user}
      MainButton={EventMainButton}
      SecondaryButtons={EventSecondaryButtons}
    ></EventsList>
  ) : (
    <Questionnaire
      scrollToTop={scrollToTop}
      questions={questions}
      questionsPerStep={4}
      initialAnswers={user.answers}
      onSave={saveAnswers}
    ></Questionnaire>
  );
};

export default Dashboard;
