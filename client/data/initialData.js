const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Facebook" },
    "task-2": { id: "task-2", content: "Google" },
    "task-3": { id: "task-3", content: "NetFlix" },
    "task-4": { id: "task-4", content: "Apple" },
    "task-5": { id: "task-5", content: "Amazon" },
    "task-6": { id: "task-6", content: "Bloomberg" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Wishlist",
      tasksOrder: ["task-1", "task-2", "task-3"],
      isEditing: false,
    },
    "column-2": {
      id: "column-2",
      title: "Applied",
      tasksOrder: ["task-4"],
      isEditing: false,
    },
    "column-3": {
      id: "column-3",
      title: "Phone Interview",
      tasksOrder: ["task-5", "task-6"],
      isEditing: false,
    },
    "column-4": {
      id: "column-4",
      title: "Onsite",
      tasksOrder: [],
      isEditing: false,
    },
  },
  columnsOrder: ["column-1", "column-2", "column-3", "column-4"],
};

export default initialData;
