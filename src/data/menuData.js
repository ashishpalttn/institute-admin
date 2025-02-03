export const menuData = [
    {
      title: 'Dashboard',
      icon: 'FaHome',
      submenus: [
        { title: 'Overview', path: '/dashboard/overview' },
        { title: 'Stats', path: '/dashboard/stats' }
      ]
    },
    {
      title: 'Events',
      icon: 'FaCalendarAlt',
      submenus: [
        { title: 'Register Events', path: '/events/register' },
        { title: 'Live Events', path: '/live-events' },
        { title: 'Past Events', path: '/events/past' }
      ]
    },
    {
      title: 'Students',
      icon: 'FaUserGraduate',
      submenus: [
        { title: 'Admissions', path: '/students/admissions' },
        { title: 'Student List', path: '/students/list' }
      ]
    },
    {
      title: 'Teachers',
      icon: 'FaChalkboardTeacher',
      submenus: [
        { title: 'Teacher List', path: '/teachers/list' },
        { title: 'Schedule', path: '/teachers/schedule' }
      ]
    }
  ];
  