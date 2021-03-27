import { usePagination } from "@material-ui/lab/Pagination";
import ButtonBase from "@material-ui/core/ButtonBase";

const Pagination = ({ count }) => {
  const { items } = usePagination({
    count,
    onChange: (a) => {
      console.log("a", a);
    },
  });

  return (
    <div className="">
      {items.map(({ page, type, selected, ...item }, index) => {
        let children = null;

        if (type === "start-ellipsis" || type === "end-ellipsis") {
          children = "…";
        } else if (type === "page") {
          children = (
            <ButtonBase
              className={`outline-none transition rounded-md ${
                selected
                  ? "bg-white border-1 border-blue-400 hover:bg-blue-400"
                  : "bg-gray-400 hover:bg-gray-401"
              }`}
              {...item}
            >
              {page}
            </ButtonBase>
          );
        } else {
          children = (
            <ButtonBase
              className="tranistion outline-none bg-orange-400 hover:bg-orange-500 rounded-md"
              {...item}
            >
              {type}
            </ButtonBase>
          );
        }

        return <li key={index}>{children}</li>;
      })}
    </div>
  );
};

export default Pagination;
