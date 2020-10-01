// Stores state for the app
const initialData = {
  tasks: {
    'task-1': {
      id: 'task-1',
      content: 'Google',
    },
  },
  columns: {
    wishlist: {
      id: 'wishlist',
      title: 'Wishlist',
      appsOrder: ['task-1'],
      isEditing: false,
    },
    applied: {
      id: 'applied',
      title: 'Applied',
      appsOrder: [],
      isEditing: false,
    },
    phone: {
      id: 'phone',
      title: 'Phone Interview',
      appsOrder: [],
      isEditing: false,
    },
    onsite: {
      id: 'onsite',
      title: 'Onsite',
      appsOrder: [],
      isEditing: false,
    },
  },
  columnsOrder: ['wishlist', 'applied', 'phone', 'onsite'],
};

export default initialData;
