import React, { useContext } from "react";
import Notes from "./Notes";
import { IoIosAddCircle } from "react-icons/io";
import DrgDrpContext from "../provider/DragDropProvider";

const AddJob = ({ columnId, isEditing }) => {
  const { handleEditing } = useContext(DrgDrpContext);
  if (isEditing) {
    return <Notes columnId={columnId} />;
  } else {
    return (
      <div className="has-text-right">
        <IoIosAddCircle
          onClick={() => handleEditing(columnId)}
          style={{ fontSize: "30px", marginRight: "10px" }}
        />
      </div>
    );
  }
};

export default AddJob;
