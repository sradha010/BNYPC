const MOCK_STORIES = [
  {
    id: 1,
    student_name: 'Rahul Kumar',
    branch: 'CSE',
    batch_year: 2024,
    company_placed: 'TCS',
    package: '3.5 LPA',
    video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    created_at: '2024-05-01',
  },
  {
    id: 2,
    student_name: 'Priya Singh',
    branch: 'IT',
    batch_year: 2024,
    company_placed: 'Infosys',
    package: '4.0 LPA',
    video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    created_at: '2024-05-05',
  },
  {
    id: 3,
    student_name: 'Amit Sharma',
    branch: 'ECE',
    batch_year: 2024,
    company_placed: 'Wipro',
    package: '3.5 LPA',
    video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    created_at: '2024-05-10',
  },
]

export function getStories() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ data: MOCK_STORIES }), 300)
  })
}