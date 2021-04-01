import { SnackbarProvider, useSnackbar } from "notistack";

const NotificationsProvider = (props) => {
  return (
    <SnackbarProvider
      {...props}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      content={(key, message) => (
        <div id={key} className="bg-blue-400 text-white px-5 py-4 rounded-md w-256px shadow-md">
          {message}
        </div>
      )}
    ></SnackbarProvider>
  );
};

export default NotificationsProvider;

export const useNotify = () => {
  const { enqueueSnackbar } = useSnackbar();
  const notify = enqueueSnackbar;
  return notify;
};
