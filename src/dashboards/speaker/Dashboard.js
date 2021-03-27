import Questionnaire from "components/Questionnaire";
import { questions } from "data";
import { store } from "store";

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
    <div></div>
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
