import Logo from "components/Logo";
import ButtonBase from "@material-ui/core/ButtonBase";
import Input from "components/AuthInput";
import { ReactComponent as PasswordIcon } from "assets/input_password.svg";
import { ReactComponent as EmailIcon } from "assets/input_email.svg";
import { ReactComponent as GoogleIcon } from "assets/google.svg";
import { ReactComponent as FacebookIcon } from "assets/facebook.svg";
import { ReactComponent as TwitterIcon } from "assets/twitter.svg";
import { store } from "store";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const history = useHistory();
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-auto row no-gutters">
      <div className="absolute left-7 top-7 z-10">
        <Logo></Logo>
      </div>
      <div className="md:col-6 lg:col-5 hidden bg-blue-100 md:block">
        <div className="px-7 pt-144px pb-144px flex justify-center items-center h-full">
          <div className="text-blue-400 text-center" style={{ maxWidth: 336 }}>
            <div className="text-56px font-bold mb-9">Welcome!</div>
            <div className="text-20px mb-20">
              To keep connected with us please login with your personal info
            </div>
            <div className="px-4">
              <div className="mb-2">Don't have account?</div>
              <ButtonBase className="rounded-full w-full bg-blue-400 hover:bg-blue-300 transition outline-none text-white h-48px text-20px">
                Sign up
              </ButtonBase>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="px-7 pt-144px pb-144px flex items-center justify-center h-full">
          <div className="w-full" style={{ maxWidth: 356 }}>
            <div className="font-bold text-24px mb-48px text-center">Sign in to your account</div>
            <Input
              placeholder="Email"
              type="email"
              className="mb-4"
              icon={<EmailIcon></EmailIcon>}
            ></Input>
            <Input
              className="mb-40px"
              placeholder="Password"
              type="password"
              icon={<PasswordIcon></PasswordIcon>}
            ></Input>
            <ButtonBase
              onClick={() => {
                store.dispatch({ type: "SET_TEMPORARY_USER", payload: true });
                history.push("/");
              }}
              className="bg-orange-400 h-48px rounded text-20px hover:bg-orange-500 text-white outline-none w-full transition"
            >
              Sign in
            </ButtonBase>
            <div className="border-b border-gray-550 py-3 relative mb-8 flex justify-end">
              <div className="absolute text-gray-700 font-medium left-0 right-0 w-72px text-center mx-auto p-1 bg-white h-32px -bottom-16px">
                Or
              </div>
              <div className="cursor-pointer hover:underline text-blue-400">Forgot password?</div>
            </div>
            <div className="flex items-center">
              <div className="mr-7 text-gray-550">Login with-</div>
              <GoogleIcon className="mr-7 cursor-pointer"></GoogleIcon>
              <FacebookIcon className="mr-7 cursor-pointer"></FacebookIcon>
              <TwitterIcon className="cursor-pointer"></TwitterIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
