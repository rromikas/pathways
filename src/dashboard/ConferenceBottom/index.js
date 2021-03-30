import AdminBottom from "./Admin";
import SpeakerBottom from "./Speaker";
import StudentBottom from "./Student";
import ModeratorBottom from "./Moderator";

const Bottom = ({ role, ...rest }) => {
  return role === "student" ? (
    <StudentBottom {...rest}></StudentBottom>
  ) : role === "speaker" ? (
    <SpeakerBottom {...rest}></SpeakerBottom>
  ) : role === "moderator" ? (
    <ModeratorBottom {...rest}></ModeratorBottom>
  ) : role === "admin" ? (
    <AdminBottom {...rest}></AdminBottom>
  ) : null;
};

export default Bottom;
