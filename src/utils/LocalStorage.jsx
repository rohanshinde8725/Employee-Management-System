const employees = [
  {
    id: 1,
    firstname: "Amit",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Design homepage",
        description: "Create a responsive homepage layout",
        date: "2025-05-10",
        category: "Design",
        active: true,
        new_task: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix login bug",
        description: "Resolve authentication issue in login form",
        date: "2025-05-11",
        category: "Bug Fix",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      },
      {
        title: "Update user profile page",
        description: "Redesign the user profile interface",
        date: "2025-05-12",
        category: "Frontend",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      new_task: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    firstname: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Database backup",
        description: "Schedule and test daily backups",
        date: "2025-05-09",
        category: "Database",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      },
      {
        title: "Implement dark mode",
        description: "Add theme switcher to UI",
        date: "2025-05-13",
        category: "UI/UX",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      },
      {
        title: "Performance optimization",
        description: "Optimize loading time on dashboard",
        date: "2025-05-14",
        category: "Performance",
        active: true,
        new_task: false,
        completed: false,
        failed: false
      },
      {
        title: "Failed login alert",
        description: "Trigger alert after 3 failed login attempts",
        date: "2025-05-08",
        category: "Security",
        active: false,
        new_task: false,
        completed: false,
        failed: true
      }
    ],
    taskCounts: {
      active: 2,
      new_task: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstname: "Rahul",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Write test cases",
        description: "Add unit tests for API routes",
        date: "2025-05-12",
        category: "Testing",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix session timeout",
        description: "Ensure users are logged out after inactivity",
        date: "2025-05-07",
        category: "Backend",
        active: false,
        new_task: false,
        completed: false,
        failed: true
      },
      {
        title: "Create documentation",
        description: "Write onboarding docs for new developers",
        date: "2025-05-14",
        category: "Documentation",
        active: true,
        new_task: false,
        completed: false,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      new_task: 1,
      completed: 0,
      failed: 1
    }
  },
  {
    id: 4,
    firstname: "Sneha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Build signup form",
        description: "Add validation and connect to backend",
        date: "2025-05-10",
        category: "Frontend",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      },
      {
        title: "Add analytics",
        description: "Integrate Google Analytics to dashboard",
        date: "2025-05-09",
        category: "Analytics",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      },
      {
        title: "Refactor dashboard code",
        description: "Simplify and optimize code structure",
        date: "2025-05-13",
        category: "Refactoring",
        active: true,
        new_task: false,
        completed: false,
        failed: false
      },
    ],
    taskCounts: {
      active: 3,
      new_task: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 5,
    firstname: "Karan",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Redesign logo",
        description: "Create a modern and minimal logo",
        date: "2025-05-11",
        category: "Branding",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      },
      {
        title: "Team meeting summary",
        description: "Write summary of weekly team meeting",
        date: "2025-05-10",
        category: "Management",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix 404 error",
        description: "Resolve broken link on contact page",
        date: "2025-05-08",
        category: "Bug Fix",
        active: false,
        new_task: false,
        completed: false,
        failed: true
      },
      {
        title: "Add support chat",
        description: "Integrate live support widget",
        date: "2025-05-13",
        category: "Support",
        active: true,
        new_task: false,
        completed: false,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      new_task: 1,
      completed: 1,
      failed: 1
    }
  }
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123",
  }
]

export const setLocalStorage = ()=> {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = ()=> {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees, admin}
}