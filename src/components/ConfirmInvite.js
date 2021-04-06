import { confirmable, createConfirmation } from "react-confirm";
import Button from "components/Button";
import { useState } from "react";
import Input from "components/AuthInput";
import { ReactComponent as EmailIcon } from "assets/input_email.svg";

const ConfirmInvite = ({ event, inviteWho, proceed, notify }) => {
  const [show, setShow] = useState(true); // for some reason after cancelling, popup closes with delay.
  const [email, setEmail] = useState("");
  const inviteTitle = "Lorem ipsum";
  const inviteDescription =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
  return show ? (
    <div
      onClick={() => {
        proceed(false);
        setShow(false);
      }}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        background: `rgba(0,0,0,0.4)`,
      }}
      className="flex overflow-auto p-7"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShow(false);
          proceed(true);
          notify("Invitation sent to " + email);
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{ maxWidth: 550, width: "100%", background: "white", borderRadius: 11 }}
        className="py-9 px-11 m-auto"
      >
        <div className="mb-7 text-center text-20px" style={{ fontSize: 18, fontWeight: 700 }}>
          Invite {inviteWho}
        </div>
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Add email"
          className="mb-7"
          icon={<EmailIcon></EmailIcon>}
        ></Input>
        <div className="text-center text-20px mb-7 font-bold">{inviteTitle}</div>
        <div className="line-clamp-6 mb-12">{inviteDescription}</div>
        <div className="flex justify-center">
          <Button type="submit" primary className="w-372px">
            Invite
          </Button>
        </div>
      </form>
    </div>
  ) : null;
};

export default createConfirmation(confirmable(ConfirmInvite));
