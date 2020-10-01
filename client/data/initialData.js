// Stores state for the app
const initialData = {
  apps: {
    'app-1': {
      id: 'app-1',
      company: 'Google',
      position: 'Software Engineer',
      contact: 'Burak',
      notes: '$200,000',
      status: 'Interested',
      date: '10/01/20',
    },
  },
  columns: {
    interested: {
      id: 'interested',
      title: 'Interested',
      appsOrder: ['app-1'],
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
  columnsOrder: ['interested', 'applied', 'phone', 'onsite'],
};

export default initialData;
