// Default CRM leads for offline / client demo mode
export const defaultLeads = [
  {
    id: 'lead-001',
    _id: 'lead-001',
    name: 'Pune District Central Co-op Bank',
    type: 'Cooperative Bank',
    contactPerson: 'Mr. Ramesh Patil',
    email: 'ramesh.patil@pdccbank.co.in',
    phone: '9823012345',
    location: 'Pune, Maharashtra',
    stage: 'Demo Scheduled',
    notes: 'Very interested in digital payment collections and email/SMS notification integration.',
    requiredModules: ['Customer Onboarding, KYC & Mobile Banking', 'Payments, Money Movement & Gateway Infra'],
    assignedTo: 'bde-sales-executive-01',
    assignedToName: 'Sales Executive (BDE)',
    activities: [
      { id: 'act-1', type: 'Call', content: 'Introductory call. Discussed Fivopay integration.', date: '2026-08-01', user: 'Admin Manager' },
      { id: 'act-2', type: 'System', content: 'Lead assigned to Sales Executive (BDE)', date: '2026-08-02', user: 'Admin Manager' },
      { id: 'act-3', type: 'Demo', content: 'Scheduled demo for next Monday with Board members.', date: '2026-08-04', user: 'Sales Executive (BDE)' }
    ],
    reminders: [
      { id: 'rem-1', task: 'Send demo meeting link & credentials', dueDate: '2026-08-06', completed: false }
    ]
  },
  {
    id: 'lead-002',
    _id: 'lead-002',
    name: 'Shree Balaji Co-op Credit Society',
    type: 'Cooperative Society',
    contactPerson: 'Mrs. Sunita Deshmukh',
    email: 'contact@balajicredit.in',
    phone: '9123456789',
    location: 'Kolhapur, Maharashtra',
    stage: 'Contacted',
    notes: 'Expressed concern about onboarding times. Needs native Marathi speaker support.',
    requiredModules: ['Field Operations, Doorstep Banking & Outreach', 'Executive Governance, Accounting & Analytics'],
    assignedTo: 'bde-sales-executive-01',
    assignedToName: 'Sales Executive (BDE)',
    activities: [
      { id: 'act-4', type: 'Call', content: 'Cold call made by Sales BDE. Sunita requested details over WhatsApp/Email.', date: '2026-08-03', user: 'Sales Executive (BDE)' }
    ],
    reminders: [
      { id: 'rem-2', task: 'Follow up via call regarding brochure delivery', dueDate: '2026-08-07', completed: false }
    ]
  },
  {
    id: 'lead-003',
    _id: 'lead-003',
    name: 'K. P. Shinde & Associates (CA & Auditors)',
    type: 'CA Firm / Auditor',
    contactPerson: 'CA Kishor Shinde',
    email: 'kishor@shindeca.com',
    phone: '9422098765',
    location: 'Mumbai, Maharashtra',
    stage: 'Proposal Sent',
    notes: 'Handles audits for over 45 housing societies. Wants partner commission structure details.',
    requiredModules: ['Executive Governance, Accounting & Analytics', 'Loan & Credit Lifecycle Engine'],
    assignedTo: 'bde-sales-executive-01',
    assignedToName: 'Sales Executive (BDE)',
    activities: [
      { id: 'act-5', type: 'Call', content: 'Initial discussion on reseller/channel partner model.', date: '2026-07-28', user: 'Sales Executive (BDE)' },
      { id: 'act-6', type: 'Demo', content: 'Showed live demo of auditor dashboard.', date: '2026-07-30', user: 'Sales Executive (BDE)' },
      { id: 'act-7', type: 'Email', content: 'Sent custom channel partner proposal.', date: '2026-08-02', user: 'Sales Executive (BDE)' }
    ],
    reminders: [
      { id: 'rem-3', task: 'Call to review proposal feedback', dueDate: '2026-08-05', completed: true }
    ]
  },
  {
    id: 'lead-004',
    _id: 'lead-004',
    name: 'Saraswat Cooperative Bank Ltd',
    type: 'Cooperative Bank',
    contactPerson: 'Mr. Arvind Joshi',
    email: 'arvind.joshi@saraswatbank.com',
    phone: '9822112200',
    location: 'Mumbai, Maharashtra',
    stage: 'New',
    notes: 'Identified via lead scraping. Shared pool lead available for BDE assignment.',
    requiredModules: ['Customer Onboarding, KYC & Mobile Banking', 'Auto-Sweep Smart Savings'],
    assignedTo: null,
    assignedToName: 'Unassigned',
    activities: [],
    reminders: [
      { id: 'rem-4', task: 'Admin to assign BDE for introductory call', dueDate: '2026-08-10', completed: false }
    ]
  },
  {
    id: 'lead-005',
    _id: 'lead-005',
    name: 'Mahagenco Co-op Housing Society',
    type: 'Cooperative Society',
    contactPerson: 'Mr. Vilas Mane',
    email: 'secretary@mahagencochs.org',
    phone: '9921554321',
    location: 'Nagpur, Maharashtra',
    stage: 'Interested',
    notes: 'Looking for society billing app integration. Requested demo.',
    requiredModules: ['Payments, Money Movement & Gateway Infra', 'AI Advisor & Intelligent Automation'],
    assignedTo: null,
    assignedToName: 'Unassigned',
    activities: [
      { id: 'act-8', type: 'Email', content: 'Inbound query from website. Replied with introductory video.', date: '2026-08-04', user: 'Admin' }
    ],
    reminders: []
  }
];
