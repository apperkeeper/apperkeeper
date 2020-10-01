// Stores state for the app
const initialData = {
  apps: {},
  columns: {
    wishlist: {
      id: 'wishlist',
      title: 'Wishlist',
      appsOrder: [],
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
