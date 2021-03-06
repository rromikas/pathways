import Logo from "components/Logo";
import ButtonBase from "@material-ui/core/ButtonBase";
import Input from "components/AuthInput";
import { ReactComponent as PasswordIcon } from "assets/input_password.svg";
import { ReactComponent as EmailIcon } from "assets/input_email.svg";
import { ReactComponent as GoogleIcon } from "assets/google.svg";
import { ReactComponent as FacebookIcon } from "assets/facebook.svg";
import { ReactComponent as TwitterIcon } from "assets/twitter.svg";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { useFormik } from "formik";
import { useNotify } from "notifications";
import Button from "components/Button";
import firebase from "firebaseApp";

const SignIn = ({ users, setUser }) => {
  const history = useHistory();
  const notify = useNotify();
  const [isSelectingProfile, setIsSelectingProfile] = useState(false);

  const { values, handleSubmit, handleChange, setValues } = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      const foundUser = Object.values(users).find(
        (x) => x.password === values.password && x.email === values.email
      );
      if (foundUser) {
        setUser(foundUser);
        history.push("/");
      } else {
        notify("User doesn't exist");
      }
    },
  });

  const handleSignin = (way) => {
    let provider;
    switch (way) {
      case "twitter":
        provider = new firebase.auth.TwitterAuthProvider();
        break;
      case "facebook":
        provider = new firebase.auth.FacebookAuthProvider();
        break;
      case "google":
        provider = new firebase.auth.GoogleAuthProvider();
        break;
      default:
        return;
    }

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        setUser(users[5]);
        history.push("/");
      })
      .catch((error) => {
        notify(error.message);
        console.log("Error", error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
  };

  return (
    <>
      <Modal open={isSelectingProfile}>
        <div
          className="w-full h-full flex overflow-auto bg-black bg-opacity-5"
          onClick={() => setIsSelectingProfile(false)}
        >
          <div
            className="max-w-6gd w-full bg-white rounded-xl p-7 sm:p-12 m-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-20px font-bold mb-5">Select pre-made profile</div>
            <div className="flex flex-wrap w-full">
              {Object.values(users).map((x, i) => (
                <div key={`user-${i}`} className="flex items-center md:w-1/2 w-full">
                  <div className="p-1.5 h-full w-full">
                    <div
                      onClick={() => {
                        setValues({ email: x.email, password: x.password });
                        setIsSelectingProfile(false);
                      }}
                      className="p-7 cursor-pointer hover:bg-gray-401 rounded-xl bg-gray-400 w-full h-full flex items-center"
                    >
                      <div
                        className="w-68px h-68px bg-center bg-cover mr-4 rounded-lg flex-shrink-0"
                        style={{ backgroundImage: `url(${x.image})` }}
                      ></div>
                      <div className="capitalize">
                        <div className="font-bold text-18px">{x.fullName}</div>
                        <div>{x.role}</div>
                        <div className="flex items-center">
                          <div className="mr-3">Profile</div>
                          {x.profileFilled ? (
                            <CheckIcon className="text-green"></CheckIcon>
                          ) : (
                            <CloseIcon className="text-red-400"></CloseIcon>
                          )}
                        </div>
                        <div className="flex items-center">
                          <div className="mr-3">Questionnaire</div>
                          {x.questionnaireFilled ? (
                            <CheckIcon className="text-green"></CheckIcon>
                          ) : (
                            <CloseIcon className="text-red-400"></CloseIcon>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
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
        <div className="col relative">
          <ButtonBase
            onClick={() => setIsSelectingProfile(true)}
            className="absolute top-7 right-7 px-5 text-white rounded h-40px outline-none text-center bg-orange-400 hover:bg-orange-500"
          >
            Select pre-made profile
          </ButtonBase>
          <div className="px-7 pt-144px pb-144px flex items-center justify-center h-full">
            <form className="w-full" onSubmit={handleSubmit} style={{ maxWidth: 356 }}>
              <div className="font-bold text-24px mb-48px text-center">Sign in to your account</div>
              <Input
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                name="email"
                className="mb-4"
                icon={<EmailIcon></EmailIcon>}
              ></Input>
              <Input
                value={values.password}
                onChange={handleChange}
                className="mb-40px"
                placeholder="Password"
                type="password"
                name="password"
                icon={<PasswordIcon></PasswordIcon>}
              ></Input>
              <Button type="submit" primary className="w-full text-18px mb-3">
                Sign in
              </Button>
              <Button
                className="w-full text-18px md:hidden"
                onClick={() => history.push("/sign-up")}
              >
                Create account
              </Button>
              <div className="border-b border-gray-550 py-3 relative mb-8 flex justify-end">
                <div className="absolute text-gray-700 font-medium left-0 right-0 w-72px text-center mx-auto p-1 bg-white h-32px -bottom-16px">
                  Or
                </div>
                <div
                  className="cursor-pointer hover:underline text-blue-400"
                  onClick={() => history.push("/forgot-password")}
                >
                  Forgot password?
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-7 text-gray-550">Login with-</div>
                <GoogleIcon
                  onClick={() => handleSignin("google")}
                  className="mr-7 cursor-pointer"
                ></GoogleIcon>
                <FacebookIcon
                  onClick={() => handleSignin("facebook")}
                  className="mr-7 cursor-pointer"
                ></FacebookIcon>
                <TwitterIcon
                  onClick={() => handleSignin("twitter")}
                  className="cursor-pointer"
                ></TwitterIcon>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
