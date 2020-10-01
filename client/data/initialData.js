// Stores state for the app
const initialData = {
  apps: {
    'task-1': {
      id: 'task-1',
      company: 'Google',
      position: 'Software Engineer',
      contact: 'Burak',
      notes: '$200,000',
      date: '10/01/20',
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
