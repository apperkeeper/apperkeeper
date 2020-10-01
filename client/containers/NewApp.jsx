import React, { useContext, useRef } from 'react';
import DrgDrpContext from '../provider/DragDropProvider';

const NewApp = ({ columnId }) => {
  const { addData, endEditing } = useContext(DrgDrpContext);
  let newCompany = useRef(null);
  let newPosition = useRef(null);
  let newContact = useRef(null);
  let newNotes = useRef(null);
  let newDate = useRef(null);

  const handleAddClick = () => {
    endEditing(columnId);
    addData(
      columnId,
      newCompany.value,
      newPosition.value,
      newContact.value,
      newNotes.value,
      newDate.value
    );
  };

  return (
    <div>
      <form>
        <div className="form">
          <label className="company">Company</label>
          <input
            type="text"
            id="company"
            placeholder="Google"
            ref={(value) => (newCompany = value)}
          />
        </div>
        <div className="form">
          <label className="position">Position</label>
          <input
            type="text"
            id="position"
            placeholder="Software Engineer"
            ref={(value) => (newPosition = value)}
          />
        </div>
        <div className="form">
          <label className="contact">Contact</label>
          <input
            type="text"
            id="contact"
            placeholder="Burak"
            ref={(value) => (newContact = value)}
          />
        </div>
        <div className="form">
          <label className="notes">Notes</label>
          <textarea
            id="notes"
            placeholder="Passed phone interview"
            ref={(value) => (newNotes = value)}
          />
        </div>
        <div className="form">
          <label className="applied-at">Date Applied</label>
          <input
            type="text"
            id="applied_at"
            placeholder="10/01/20"
            ref={(value) => (newDate = value)}
          />
        </div>
      </form>
      <button type="button" onClick={handleAddClick}>
        Add App
      </button>
    </div>
  );
};

export default NewApp;
