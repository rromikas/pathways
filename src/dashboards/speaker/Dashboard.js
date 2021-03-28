import Questionnaire from "components/Questionnaire";
import { questions } from "data";
import { store } from "store";
import EventsList from "components/EventsList";
import { events } from "data";
import Button from "components/Button";

const Dashboard = ({ user }) => {
  const saveAnswers = (ans) => {
    store.dispatch({
      type: "UPDATE_USER",
      payload: {
        ...user,
        answers: ans,
        questionnaireFilled: ans.filter((x) => x).length === ans.length,
      },
    });
  };

  return user.questionnaireFilled ? (
    <EventsList events={events} user={user}></EventsList>
  ) : (
    <Questionnaire
      questions={questions}
      questionsPerStep={4}
      initialAnswers={user.answers}
      onSave={saveAnswers}
    ></Questionnaire>
  );
};

export default Dashboard;
