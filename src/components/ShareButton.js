import { ReactComponent as FacebookIcon } from "assets/share_facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/share_instagram.svg";
import { ReactComponent as WhatsappIcon } from "assets/share_whatsapp.svg";
import { ReactComponent as TwitterIcon } from "assets/share_twitter.svg";
import { ReactComponent as LinkedinIcon } from "assets/share_linkedin.svg";
import { ReactComponent as ShareIcon } from "assets/share.svg";
import { Tooltip } from "react-tippy";
import { useState } from "react";
import Button from "components/Button";
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

console.log(window.location.origin);

const ShareButton = ({ className = "", event }) => {
  const [open, setOpen] = useState(false);

  const socNetworks = [
    {
      button: FacebookShareButton,
      icon: FacebookIcon,
      props: {
        quote: "Event starts soon. Come here.",
        url: `${window.location.origin}/${event.id}`,
      },
    },
    { button: InstapaperShareButton, icon: InstagramIcon },
    { button: WhatsappShareButton, icon: WhatsappIcon },
    { button: TwitterShareButton, icon: TwitterIcon },
    { button: LinkedinShareButton, icon: LinkedinIcon },
    ,
    ,
  ];

  return (
    <div>
      <Tooltip
        open={open}
        position="right"
        html={
          <div className="flex bg-white rounded-md p-4 shadow-custom m-3">
            {socNetworks.map((x, i) => {
              const Icon = x.icon;
              const SocialButton = x.button;
              return (
                <SocialButton key={`socNetwork-icon-${i}`} {...x.props} className="h-48px w-48px">
                  <Icon className="transform hover:scale-110 transition"></Icon>
                </SocialButton>
              );
            })}
          </div>
        }
      >
        <Button
          floating
          onClick={() => setOpen((prev) => !prev)}
          className={"outline-none self-start text-orange-400 w-48px " + className}
        >
          <ShareIcon className="fill-current"></ShareIcon>
        </Button>
      </Tooltip>
    </div>
  );
};

export default ShareButton;
