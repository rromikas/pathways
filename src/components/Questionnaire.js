import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Textarea from "components/Textarea";
import Button from "components/Button";
import { useNotify } from "notifications";

const StatusBar = ({ numberOfSteps, step }) => {
  const percentageCompleted = (step / numberOfSteps) * 100;
  return (
    <div className="pt-32px mb-12">
      <div className="bg-gray-500 rounded-full">
        <div
          className="bg-blue-400 rounded-full relative h-8px transition-all"
          style={{ width: `${percentageCompleted}%` }}
        >
          <div className="absolute -right-36px bottom-full pb-4px w-80px flex justify-center">
            <div>
              <div className="text-center text-blue-400">{Math.ceil(percentageCompleted)}%</div>
              <div className="arrow-down mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Questionnaire = ({ questions, questionsPerStep, onSave, initialAnswers }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const notify = useNotify();

  useEffect(() => {
    if (!answers.length) {
      setAnswers(questions.map((x) => ""));
    }
  }, [questions]);

  useEffect(() => {
    if (initialAnswers) {
      setAnswers(initialAnswers);
      let firstNotAnsweredIndex = (() => {
        let ind = 0;
        while (ind < initialAnswers.length - 1) {
          if (!initialAnswers[ind]) {
            return ind;
          }
          ind++;
        }
      })();
      console.log(firstNotAnsweredIndex);
      setStep(Math.max(Math.ceil((firstNotAnsweredIndex + 1) / questionsPerStep) - 1, 0));
    }
  }, [initialAnswers]);

  const renderArray = answers.slice(
    step * questionsPerStep,
    step * questionsPerStep + questionsPerStep
  );

  return (
    <div>
      <div className="mb-7 text-18px">Survey questionnaire</div>
      <StatusBar
        numberOfSteps={Math.ceil(questions.length / questionsPerStep)}
        step={step + 1}
      ></StatusBar>
      {renderArray.map((q, i) => {
        const itemIndex = step * questionsPerStep + i;
        return (
          <div key={`questions-${i}`} className="flex mb-7 text-blue-400">
            <div className="whitespace-nowrap text-18px pr-3">Q{itemIndex + 1}.</div>
            <div>
              <div className="mb-5">{questions[step * questionsPerStep + i]}</div>
              <Textarea
                className="w-full"
                value={q}
                onChange={(e) =>
                  setAnswers((prev) => {
                    let arr = [...prev];
                    arr[itemIndex] = e.target.value;
                    return arr;
                  })
                }
              ></Textarea>
            </div>
          </div>
        );
      })}
      <div className="flex flex-wrap items-center justify-center pt-5">
        {step > 0 ? (
          <Button
            onClick={() => setStep((prev) => prev - 1)}
            primary
            className="mx-2 rounded-lg my-1"
          >
            Previous
          </Button>
        ) : null}
        {step * questionsPerStep + questionsPerStep < questions.length - 1 ? (
          <Button
            onClick={() => {
              if (renderArray.filter((x) => x).length === questionsPerStep) {
                setStep((prev) => prev + 1);
              } else {
                notify("Write all answers");
              }
            }}
            primary
            className="mx-2 rounded-lg my-2"
          >
            Next
          </Button>
        ) : null}
        <Button
          className="mx-2 rounded-lg my-2"
          onClick={() => {
            onSave(answers);
            notify("Saved");
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default Questionnaire;

Questionnaire.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.string).isRequired,
  questionsPerStep: PropTypes.number.isRequired,
  onSave: PropTypes.func.isRequired,
  initialAnswers: PropTypes.arrayOf(PropTypes.string),
};
