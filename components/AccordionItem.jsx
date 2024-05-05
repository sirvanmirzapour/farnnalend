import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const AccordionItem = ({ open, toggle, title, description }) => {
  return (
    <div className="container flex flex-col mx-auto p-2 m-2 rounded-2xl bg-purple-100 shadow-md">
      <div
        className="p-4 flex justify-between items-center cursor-pointer "
        onClick={toggle}
      >
        <p className="text-sm text-purple-950">{title}</p>
        <div className="text-xs">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-purple-100 text-purple-900 text-sm py-4 px-4">
          {description}
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
