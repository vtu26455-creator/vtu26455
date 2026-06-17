const mockNotifications = [
  {
    ID: '1111-1111-1111-1111',
    Type: 'Placement',
    Message: 'Amazon hiring drive scheduled for campus',
    Timestamp: '2026-06-15 10:00:00'
  },
  {
    ID: '2222-2222-2222-2222',
    Type: 'Result',
    Message: 'Semester 2 results released',
    Timestamp: '2026-06-14 18:30:00'
  },
  {
    ID: '3333-3333-3333-3333',
    Type: 'Event',
    Message: 'Tech talk on AI and machine learning',
    Timestamp: '2026-06-20 14:00:00'
  },
  {
    ID: '4444-4444-4444-4444',
    Type: 'Placement',
    Message: 'Campus interview with Microsoft',
    Timestamp: '2026-06-17 09:45:00'
  },
  {
    ID: '5555-5555-5555-5555',
    Type: 'Result',
    Message: 'Internship assessment results available',
    Timestamp: '2026-06-16 12:15:00'
  },
  {
    ID: '6666-6666-6666-6666',
    Type: 'Event',
    Message: 'Annual cultural fest registration open',
    Timestamp: '2026-06-18 16:00:00'
  },
  {
    ID: '7777-7777-7777-7777',
    Type: 'Placement',
    Message: 'Infosys shortlisted student list',
    Timestamp: '2026-06-13 11:30:00'
  },
  {
    ID: '8888-8888-8888-8888',
    Type: 'Event',
    Message: 'Workshop: Effective resume building',
    Timestamp: '2026-06-12 15:00:00'
  },
  {
    ID: '9999-9999-9999-9999',
    Type: 'Placement',
    Message: 'Google campus recruitment round 1 results',
    Timestamp: '2026-06-19 14:30:00'
  },
  {
    ID: 'aaaa-aaaa-aaaa-aaaa',
    Type: 'Result',
    Message: 'Lab assignment 3 grades published',
    Timestamp: '2026-06-17 11:00:00'
  },
  {
    ID: 'bbbb-bbbb-bbbb-bbbb',
    Type: 'Event',
    Message: 'Career fair with 25+ company participants',
    Timestamp: '2026-06-21 09:00:00'
  },
  {
    ID: 'cccc-cccc-cccc-cccc',
    Type: 'Placement',
    Message: 'TCS pre-placement talk and registration open',
    Timestamp: '2026-06-11 16:45:00'
  },
  {
    ID: 'dddd-dddd-dddd-dddd',
    Type: 'Event',
    Message: 'Networking mixer for final year students',
    Timestamp: '2026-06-22 18:00:00'
  },
  {
    ID: 'eeee-eeee-eeee-eeee',
    Type: 'Result',
    Message: 'Mid semester exam schedule released',
    Timestamp: '2026-06-10 10:00:00'
  },
  {
    ID: 'ffff-ffff-ffff-ffff',
    Type: 'Placement',
    Message: 'Accenture coding round invitations sent',
    Timestamp: '2026-06-17 08:30:00'
  },
  {
    ID: 'gggg-gggg-gggg-gggg',
    Type: 'Event',
    Message: 'Hackathon 2026 - 48 hour challenge begins',
    Timestamp: '2026-06-23 12:00:00'
  },
  {
    ID: 'hhhh-hhhh-hhhh-hhhh',
    Type: 'Result',
    Message: 'Data structures and algorithms quiz results',
    Timestamp: '2026-06-16 15:45:00'
  },
  {
    ID: 'iiii-iiii-iiii-iiii',
    Type: 'Placement',
    Message: 'Wipro campus drive dates announced',
    Timestamp: '2026-06-15 14:20:00'
  },
  {
    ID: 'jjjj-jjjj-jjjj-jjjj',
    Type: 'Event',
    Message: 'Leadership development program registration open',
    Timestamp: '2026-06-19 10:00:00'
  },
  {
    ID: 'kkkk-kkkk-kkkk-kkkk',
    Type: 'Result',
    Message: 'Project submission 2 evaluation scores released',
    Timestamp: '2026-06-14 09:30:00'
  },
  {
    ID: 'llll-llll-llll-llll',
    Type: 'Placement',
    Message: 'HCL selected students for interviews',
    Timestamp: '2026-06-13 17:00:00'
  },
  {
    ID: 'mmmm-mmmm-mmmm-mmmm',
    Type: 'Event',
    Message: 'Industry expert session: Cloud computing trends',
    Timestamp: '2026-06-20 11:00:00'
  },
  {
    ID: 'nnnn-nnnn-nnnn-nnnn',
    Type: 'Placement',
    Message: 'Morgan Stanley final round scheduled',
    Timestamp: '2026-06-24 09:00:00'
  },
  {
    ID: 'oooo-oooo-oooo-oooo',
    Type: 'Result',
    Message: 'Web development project grades available',
    Timestamp: '2026-06-17 13:15:00'
  },
  {
    ID: 'pppp-pppp-pppp-pppp',
    Type: 'Event',
    Message: 'Mentor-mentee pairing session scheduled',
    Timestamp: '2026-06-25 15:30:00'
  },
  {
    ID: 'qqqq-qqqq-qqqq-qqqq',
    Type: 'Placement',
    Message: 'Deloitte aptitude test results declared',
    Timestamp: '2026-06-12 16:00:00'
  },
  {
    ID: 'rrrr-rrrr-rrrr-rrrr',
    Type: 'Result',
    Message: 'Capstone project documentation review feedback',
    Timestamp: '2026-06-15 11:45:00'
  },
  {
    ID: 'ssss-ssss-ssss-ssss',
    Type: 'Event',
    Message: 'Alumni meet and greet event',
    Timestamp: '2026-06-26 18:30:00'
  },
  {
    ID: 'tttt-tttt-tttt-tttt',
    Type: 'Placement',
    Message: 'Capgemini group discussion invitations',
    Timestamp: '2026-06-18 12:45:00'
  },
  {
    ID: 'uuuu-uuuu-uuuu-uuuu',
    Type: 'Event',
    Message: 'Cybersecurity awareness training session',
    Timestamp: '2026-06-21 14:00:00'
  },
  {
    ID: 'vvvv-vvvv-vvvv-vvvv',
    Type: 'Result',
    Message: 'Final semester results announcement date confirmed',
    Timestamp: '2026-06-19 10:30:00'
  },
  {
    ID: 'wwww-wwww-wwww-wwww',
    Type: 'Placement',
    Message: 'EY campus interview schedule released',
    Timestamp: '2026-06-11 14:00:00'
  },
  {
    ID: 'xxxx-xxxx-xxxx-xxxx',
    Type: 'Event',
    Message: 'Student council elections nominations open',
    Timestamp: '2026-06-22 09:00:00'
  },
  {
    ID: 'yyyy-yyyy-yyyy-yyyy',
    Type: 'Placement',
    Message: 'Cognizant engineering role offer round',
    Timestamp: '2026-06-20 16:20:00'
  },
  {
    ID: 'zzzz-zzzz-zzzz-zzzz',
    Type: 'Result',
    Message: 'Advanced algorithms assignment submission deadline',
    Timestamp: '2026-06-18 15:00:00'
  }
];

export default mockNotifications;
