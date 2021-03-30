import { useState } from "react";
import Switch from "components/Switch";
import Button from "components/Button";

const Settings = () => {
  const [settings, setSettings] = useState([
    { title: "Lorem ipsum dolor sit", enabled: false },
    { title: "Lorem ipsum dolor sit", enabled: false },
    { title: "Lorem ipsum dolor sit", enabled: false },
    { title: "Lorem ipsum dolor sit", enabled: false },
    { title: "Lorem ipsum dolor sit", enabled: false },
  ]);

  return (
    <div className="w-full h-full flex">
      <div className="m-auto shadow-custom max-w-512px w-full p-8 rounded-lg">
        <div className="text-center font-bold text-20px mb-9">Settings</div>
        <div>
          {settings.map((x, i) => (
            <div className="flex justify-between items-center mb-3">
              <div>{x.title}</div>
              <Switch
                enabled={x.enabled}
                setEnabled={(val) =>
                  setSettings((prev) => {
                    let arr = [...prev];
                    arr[i].enabled = val;
                    return arr;
                  })
                }
              ></Switch>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button primary className="w-400px text-20px mt-14">
            Save settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
