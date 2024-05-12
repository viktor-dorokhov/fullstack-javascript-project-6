// @ts-check

export default {
  translation: {
    appName: 'Task manager',
    sourceCode: 'Source code',
    flash: {
      session: {
        create: {
          success: 'You are logged in',
          error: 'Wrong email or password',
        },
        delete: {
          success: 'You are logged out',
        },
      },
      users: {
        create: {
          success: 'User registered successfully',
          error: 'Failed to register',
        },
        update: {
          success: 'User updated successfully',
          error: 'Failed to update user',
        },
        delete: {
          success: 'User deleted successfully',
          error: 'Failed to delete user',
        },
        onlyOwnerAccess: 'You cannot update or delete another user',
      },
      statuses: {
        create: {
          success: 'Status created successfully',
          error: 'Failed to create',
        },
        update: {
          success: 'Status updated successfully',
          error: 'Failed to update status',
        },
        delete: {
          success: 'Status deleted successfully',
          error: 'Failed to delete status',
        },
      },
      authError: 'Access denied! Please login',
    },
    layouts: {
      application: {
        users: 'Users',
        statuses: 'Statuses',
        signIn: 'Login',
        signUp: 'Register',
        signOut: 'Logout',
      },
    },
    views: {
      session: {
        email: 'Email',
        password: 'Password',
        new: {
          signIn: 'Login',
          submit: 'Login',
        },
      },
      users: {
        users: 'Users',
        id: 'ID',
        firstName: 'First name',
        lastName: 'Last name',
        fullName: 'Full name',
        email: 'Email',
        password: 'Password',
        actions: 'Actions',
        updateAction: 'Update',
        deleteAction: 'Delete',
        createdAt: 'Created at',
        new: {
          submit: 'Register',
          signUp: 'Register',
        },
        update: {
          title: 'Update user',
          submit: 'Save',
        },
      },
      statuses: {
        statuses: 'Statuses',
        createAction: 'Create status',
        id: 'ID',
        name: 'Name',
        updateAction: 'Update',
        deleteAction: 'Delete',
        createdAt: 'Created at',
        new: {
          title: 'Create status',
          submit: 'Create',
        },
        update: {
          title: 'Update status',
          submit: 'Save',
        },
      },
      welcome: {
        index: {
          hello: 'Hello from Hexlet!',
          description: 'Online programming school',
          more: 'Learn more',
        },
      },
    },
  },
};
