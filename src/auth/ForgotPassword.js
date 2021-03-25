import Logo from "components/Logo";
import ButtonBase from "@material-ui/core/ButtonBase";
import Input from "components/AuthInput";
import { ReactComponent as EmailIcon } from "assets/input_email.svg";
import { store } from "store";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const ForgotPassword = () => {
  const history = useHistory();
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");

  const SendMail = async (e) => {
    e.preventDefault();
    let res = await fetch("/api/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
    setEmailSent(true);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-auto row no-gutters">
      <div className="absolute left-7 top-7 z-10">
        <Logo></Logo>
      </div>
      <div className="md:col-6 lg:col-5 hidden bg-blue-100 md:block">
        <div className="px-7 pt-144px pb-144px flex justify-center items-center h-full">
          <div className="text-blue-400 text-center" style={{ maxWidth: 336 }}>
            <div className="text-48px font-bold mb-9">Welcome!</div>
            <div className="text-20px mb-20">
              To keep connected with us please login with your personal info
            </div>
            <div className="px-4">
              <div className="mb-2">Don't have account?</div>
              <ButtonBase
                onClick={() => history.push("/sign-up")}
                className="rounded-full w-full bg-blue-400 hover:bg-blue-300 transition outline-none text-white h-48px text-20px"
              >
                Sign up
              </ButtonBase>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="px-7 pt-144px pb-144px flex items-center justify-center h-full">
          {!emailSent ? (
            <form className="w-full" onSubmit={SendMail} style={{ maxWidth: 356 }}>
              <div className="font-bold text-24px mb-48px text-center">Reset your password</div>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-40px"
                placeholder="Email"
                required
                type="email"
                icon={<EmailIcon></EmailIcon>}
              ></Input>
              <ButtonBase
                type="submit"
                className="bg-orange-400 h-48px rounded text-20px hover:bg-orange-500 text-white outline-none w-full transition"
              >
                Send mail
              </ButtonBase>
            </form>
          ) : (
            <div style={{ maxWidth: 872 }} className="p-8 bg-gray-400 rounded-lg w-full">
              <div className="mb-6 mx-auto text-center text-20px text-blue-400 max-w-512px">
                A confirmation email has been sent to your mail. Please check that and complete your
                registrations.
              </div>
              <div className="flex justify-center">
                <ButtonBase
                  type="submit"
                  className="bg-blue-400 max-w-372px h-48px rounded-lg text-20px hover:bg-blue-300 text-white outline-none w-full transition"
                >
                  Resend mail
                </ButtonBase>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
