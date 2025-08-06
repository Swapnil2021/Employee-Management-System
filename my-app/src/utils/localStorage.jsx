
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Login Page",
        description: "Design and implement the login UI in React.",
        date: "2025-08-01",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Bug Fix - Navbar",
        description: "Fix issue with mobile navbar collapse.",
        date: "2025-07-30",
        category: "Bugfix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Database Setup",
        description: "Setup PostgreSQL database with schema.",
        date: "2025-07-25",
        category: "Database"
      }
    ]
  },
  {
    id: 2,
    firstName: "Ishita",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "JWT Implementation",
        description: "Add JWT authentication to the backend.",
        date: "2025-08-02",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write API Documentation",
        description: "Document all REST API endpoints using Swagger.",
        date: "2025-07-28",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Add Email Verification",
        description: "Send verification emails to users on sign-up.",
        date: "2025-07-26",
        category: "Auth"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Dark Mode Toggle",
        description: "Add light/dark theme switcher to navbar.",
        date: "2025-08-05",
        category: "Frontend"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Admin Dashboard",
        description: "Design and build admin dashboard layout.",
        date: "2025-08-01",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Payment Gateway",
        description: "Integrate Razorpay for online transactions.",
        date: "2025-07-29",
        category: "Integration"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Reusable Modal",
        description: "Build a generic modal component for reuse.",
        date: "2025-07-31",
        category: "Component"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Refactor Codebase",
        description: "Improve readability and structure of services.",
        date: "2025-08-06",
        category: "Code Quality"
      }
    ]
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Notification System",
        description: "Set up toast notifications for success/error.",
        date: "2025-08-03",
        category: "UX"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "OAuth Integration",
        description: "Add Google login using OAuth2.",
        date: "2025-07-30",
        category: "Authentication"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "SEO Optimization",
        description: "Add meta tags and sitemap.xml.",
        date: "2025-08-01",
        category: "SEO"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Table Sorting",
        description: "Add sorting feature to employee table.",
        date: "2025-08-05",
        category: "Feature"
      }
    ]
  },
  {
    id: 5,
    firstName: "Siddharth",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Generate PDF Reports",
        description: "Use jsPDF to export data reports.",
        date: "2025-08-02",
        category: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Unit Testing",
        description: "Write unit tests for reducer functions.",
        date: "2025-07-27",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Deploy to Vercel",
        description: "Deploy final build to Vercel with CI/CD.",
        date: "2025-07-31",
        category: "Deployment"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Image Compression",
        description: "Compress and optimize uploaded images.",
        date: "2025-07-28",
        category: "Optimization"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Accessibility Audit",
        description: "Ensure WCAG 2.1 compliance for UI components.",
        date: "2025-08-06",
        category: "Compliance"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Kiran",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};
