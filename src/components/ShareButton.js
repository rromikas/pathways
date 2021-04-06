import { ReactComponent as FacebookIcon } from "assets/share_facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/share_instagram.svg";
import { ReactComponent as WhatsappIcon } from "assets/share_whatsapp.svg";
import { ReactComponent as TwitterIcon } from "assets/share_twitter.svg";
import { ReactComponent as LinkedinIcon } from "assets/share_linkedin.svg";
import { ReactComponent as ShareIcon } from "assets/share.svg";
import { Tooltip } from "react-tippy";
import { useState } from "react";
import Button from "components/Button";

const socNetworks = [FacebookIcon, InstagramIcon, WhatsappIcon, TwitterIcon, LinkedinIcon];
const ShareButton = ({ className = "" }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Tooltip
        open={open}
        position="right"
        html={
          <div className="flex bg-white rounded-md p-4 shadow-custom m-3">
            {socNetworks.map((x, i) => {
              const Icon = x;
              return (
                <Icon
                  className="transform hover:scale-110 transition mr-3 cursor-pointer"
                  key={`socNetwork-icon-${i}`}
                ></Icon>
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
