const MOCK_NOTIFICATIONS = [
  { id: 1, text: 'TCS is hiring 2025 batch — Apply before 20th May' },
  { id: 2, text: 'Infosys drive results are out — Check now' },
  { id: 3, text: 'Wipro interview process updated — Read before attending' },
]

const MOCK_DRIVES = [
  {
    id: 1,
    company_name: 'TCS',
    company_logo_url: null,
    job_type: 'Full-Time',
    status: 'OPEN',
    apply_deadline: '2026-05-20',
    package: '3.5 LPA',
    location: 'Pan India',
    eligible_branches: 'CSE,IT,ECE',
    branches_list: ['CSE', 'IT', 'ECE'],
    is_urgent: true,
    apply_link: '#',
    notice_link: '#',
    interview_process_link: '#',
    result_link: '#',
  },
  {
    id: 2,
    company_name: 'Infosys',
    company_logo_url: null,
    job_type: 'Full-Time',
    status: 'RESULT',
    apply_deadline: null,
    package: '4.0 LPA',
    location: 'Bangalore',
    eligible_branches: 'CSE,IT',
    branches_list: ['CSE', 'IT'],
    is_urgent: false,
    apply_link: '#',
    notice_link: '#',
    interview_process_link: '#',
    result_link: '#',
  },
  {
    id: 3,
    company_name: 'Wipro',
    company_logo_url: null,
    job_type: 'Full-Time',
    status: 'INTERVIEW',
    apply_deadline: '2026-05-25',
    package: '3.5 LPA',
    location: 'Hyderabad',
    eligible_branches: 'CSE,IT,ECE,ME',
    branches_list: ['CSE', 'IT', 'ECE', 'ME'],
    is_urgent: true,
    apply_link: '#',
    notice_link: '#',
    interview_process_link: '#',
    result_link: '#',
  },
  {
    id: 4,
    company_name: 'Cognizant',
    company_logo_url: null,
    job_type: 'Full-Time',
    status: 'OPEN',
    apply_deadline: '2026-06-01',
    package: '4.5 LPA',
    location: 'Chennai',
    eligible_branches: 'CSE,IT',
    branches_list: ['CSE', 'IT'],
    is_urgent: false,
    apply_link: '#',
    notice_link: '#',
    interview_process_link: '#',
    result_link: '#',
  },
  {
    id: 5,
    company_name: 'Accenture',
    company_logo_url: null,
    job_type: 'Full-Time',
    status: 'CLOSED',
    apply_deadline: null,
    package: '4.0 LPA',
    location: 'Mumbai',
    eligible_branches: 'CSE,IT,ECE',
    branches_list: ['CSE', 'IT', 'ECE'],
    is_urgent: false,
    apply_link: '#',
    notice_link: '#',
    interview_process_link: '#',
    result_link: '#',
  },
  {
    id: 6,
    company_name: 'HCL Technologies',
    company_logo_url: null,
    job_type: 'Internship',
    status: 'OPEN',
    apply_deadline: '2026-05-30',
    package: '2.5 LPA',
    location: 'Noida',
    eligible_branches: 'CSE,IT,ECE,EE',
    branches_list: ['CSE', 'IT', 'ECE', 'EE'],
    is_urgent: false,
    apply_link: '#',
    notice_link: '#',
    interview_process_link: '#',
    result_link: '#',
  },
]

export function getDrives(params = {}) {
  return new Promise(resolve => {
    setTimeout(() => {
      let result = [...MOCK_DRIVES]
      if (params.status)    result = result.filter(d => d.status === params.status)
      if (params.job_type)  result = result.filter(d => d.job_type === params.job_type)
      if (params.is_urgent) result = result.filter(d => d.is_urgent === true)
      if (params.search)    result = result.filter(d =>
        d.company_name.toLowerCase().includes(params.search.toLowerCase()) ||
        d.eligible_branches.toLowerCase().includes(params.search.toLowerCase())
      )
      resolve({ data: result })
    }, 300)
  })
}

export function getNotifications() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ data: MOCK_NOTIFICATIONS }), 200)
  })
}