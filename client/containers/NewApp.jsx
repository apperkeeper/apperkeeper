import React, { useContext, useRef } from 'react';
import DrgDrpContext from '../provider/DragDropProvider';

const NewApp = ({ columnId }) => {
  const { addData, endEditing } = useContext(DrgDrpContext);
  let newTask = useRef(null);

  const handleAddClick = () => {
    endEditing(columnId);
    addData(columnId, newTask.value);
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
            ref={(value) => (newTask = value)}
          />
        </div>
        <div className="form">
          <label className="position">Position</label>
          <input type="text" id="position" placeholder="Software Engineer" />
        </div>
        <div className="form">
          <label className="contact">Contact</label>
          <input type="text" id="contact" placeholder="Burak" />
        </div>
        <div className="form">
          <label className="notes">Notes</label>
          <textarea id="notes" placeholder="Passed phone interview" />
        </div>
        <div className="form">
          <label className="status">Status</label>
          <select>
            <option>Wishlist</option>
            <option>Applied</option>
            <option>Phone Interview</option>
            <option>Onsite</option>
          </select>
        </div>
        <div className="form">
          <label className="applied-at">Date Applied</label>
          <input type="date" id="applied_at" />
        </div>
      </form>
      <button type="button" onClick={handleAddClick}>
        Add App
      </button>
    </div>
  );
};

export default NewApp;
