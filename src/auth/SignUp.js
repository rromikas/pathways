import Logo from "components/Logo";
import ButtonBase from "@material-ui/core/ButtonBase";
import Input from "components/AuthInput";
import { ReactComponent as PasswordIcon } from "assets/input_password.svg";
import { ReactComponent as EmailIcon } from "assets/input_email.svg";
import { ReactComponent as ProfileIcon } from "assets/input_profile.svg";
import { ReactComponent as GoogleIcon } from "assets/google.svg";
import { ReactComponent as FacebookIcon } from "assets/facebook.svg";
import { ReactComponent as TwitterIcon } from "assets/twitter.svg";
import { useHistory } from "react-router-dom";
import Button from "components/Button";
import firebase from "firebaseApp";
import { useState } from "react";
import { useNotify } from "notifications";

const SignUp = ({ setUser }) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = useNotify();

  const handleSignup = (way) => {
    if (way !== "email-password") {
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
          setUser();
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
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          setUser();
          history.push("/");
        })
        .catch((error) => {
          notify(error.message);
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    }
  };

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
              <ButtonBase
                onClick={() => history.push("/sign-in")}
                className="rounded-full w-full bg-blue-400 hover:bg-blue-300 transition outline-none text-white h-48px text-20px"
              >
                Sign in
              </ButtonBase>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="px-7 pt-144px pb-144px flex items-center justify-center h-full">
          <div className="w-full" style={{ maxWidth: 356 }}>
            <div className="font-bold text-24px mb-48px text-center">Create an account</div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSignup("email-password");
              }}
            >
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name"
                type="text"
                className="mb-4"
                icon={<ProfileIcon></ProfileIcon>}
              ></Input>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                type="email"
                className="mb-4"
                icon={<EmailIcon></EmailIcon>}
              ></Input>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mb-40px"
                placeholder="Password"
                type="password"
                icon={<PasswordIcon></PasswordIcon>}
              ></Input>
              <Button type="submit" primary className="w-full text-18px mb-3">
                Sign up
              </Button>
            </form>
            <Button
              onClick={() => {
                history.push("/sign-in");
              }}
              className="w-full text-18px md:hidden"
            >
              Sign in
            </Button>

            <div className="border-b border-gray-55 h-48px relative mb-8 flex justify-end">
              <div className="absolute text-gray-700 font-medium left-0 right-0 w-72px text-center mx-auto p-1 bg-white h-32px -bottom-16px">
                Or
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-7 text-gray-550">Login with-</div>
              <GoogleIcon
                onClick={() => handleSignup("google")}
                className="mr-7 cursor-pointer"
              ></GoogleIcon>
              <FacebookIcon
                onClick={() => handleSignup("facebook")}
                className="mr-7 cursor-pointer"
              ></FacebookIcon>
              <TwitterIcon
                onClick={() => handleSignup("twitter")}
                className="cursor-pointer"
              ></TwitterIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
