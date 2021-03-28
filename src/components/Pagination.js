import { usePagination } from "@material-ui/lab/Pagination";
import ButtonBase from "@material-ui/core/ButtonBase";

const Pagination = ({ count, setPage }) => {
  const { items } = usePagination({
    count,
    onChange: (e, page) => {
      setPage(page);
    },
  });

  return (
    <div className="flex">
      {items.map(({ page, type, selected, ...item }, index) => {
        let children = null;

        if (type === "start-ellipsis" || type === "end-ellipsis") {
          children = "…";
        } else if (type === "page") {
          children = (
            <ButtonBase
              classes={{ root: "border-r" }}
              className={`outline-none mr-2 w-48px h-48px transition rounded-md ${
                selected ? "bg-gray-500 hover:bg-gray-600" : "hover:bg-gray-400"
              }`}
              {...item}
            >
              {page}
            </ButtonBase>
          );
        } else {
          children = (
            <ButtonBase
              className={`${
                type === "previous" ? "mr-2" : ""
              } capitalize transition outline-none bg-blue-400 hover:bg-blue-300 rounded-md text-white h-48px px-7`}
              {...item}
            >
              {type}
            </ButtonBase>
          );
        }

        return <div key={index}>{children}</div>;
      })}
    </div>
  );
};

export default Pagination;
