import PropTypes from "prop-types";
import moment from "moment";
import SimpleBar from "simplebar-react";
import { useEffect, useRef, useState } from "react";

const Message = ({ message }) => {
  return (
    <div className="flex mb-4 shadow-custom-sm p-4 rounded-lg">
      <div
        className="w-48px h-48px rounded-full bg-center bg-cover mr-3"
        style={{ backgroundImage: `url(${message.user.image})` }}
      ></div>
      <div>
        <div className="flex items-end mb-1">
          <div className="mr-5 text-blue-400 leading-none">
            {message.user.fullName.split(" ")[0]}
          </div>
          <div className="text-12px text-gray-700 leading-none">
            {moment(new Date(message.createdAt)).fromNow()}
          </div>
        </div>
        <div className="text-14px">{message.text}</div>
      </div>
    </div>
  );
};

const Chat = ({ messages, activeView }) => {
  const container = useRef(null);
  const timeout = useRef(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (container.current) {
      container.current.getScrollElement().scrollTop = 10000000;
    }
  }, [messages]);

  useEffect(() => {
    timeout.current = setTimeout(() => {
      setReload((prev) => !prev);
    }, 10000);

    return () => clearTimeout(timeout.current);
  }, [reload]);

  return (
    <div
      className={`${
        activeView !== "Chat" ? "hidden" : "block w-full"
      } overflow-hidden relative xl:w-372px flex-shrink-0 xl:block`}
      style={{ minHeight: 370 }}
    >
      <SimpleBar ref={container} className="absolute top-0 left-0 w-full h-full pr-3">
        {messages.map((x, i) => (
          <Message message={x} key={`message-${i}`}></Message>
        ))}
      </SimpleBar>
    </div>
  );
};

export default Chat;

Chat.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.shape({ name: PropTypes.string, image: PropTypes.string }),
      text: PropTypes.string,
      createdAt: PropTypes.number,
    })
  ).isRequired,
};
