export async function load() {
  const missionData = {
    title: 'Mission and Oversight',
    subtitle:
      'Our mission it to provide local families in need with Food, Emergency Financial Assistance and skill building Education to create self-sufficiency.',
    list1: [
      'Christian Neighbors has been serving our community since 1983.',
      'Christian Neighbors is a community agency serving individuals and families in Plainwell, Otsego and Martin school districts.',
      'We are blessed to have at least 50 Volunteers serve on a weekly basis.',
      'Christian Neighbors is governed by an all-volunteer board and teams who are carefully selected and diversified in their makeup.',
    ],
    list2: [
      'Our finances are monitored by a Finance Team made up of our board president, treasurer, bookkeeper, CPA, and local business owners.',
      'Our finances are raised and monitored by the Resource Development Team.',
      'Our Facilities Director and team cares for the building and ground with which the ministry has been greatly blessed.',
      'The Education Resource team oversees our classes and programs to strengthen individuals and community.',
    ],
  };

  const fiveCs = {
    title: 'Our Five C’s',
    items: [
      {
        title: 'Being Christian Neighbors',
        content:
          'Christian Neighbors was founded in 1983 by the local churches to respond to people in need in our community. This allows the churches to minister cooperatively in ways they could not do alone. It is important to keep that long standing connection between the local Churches and Christian Neighbors. Most area churches support Christian Neighbors through their church budget, food donations and community soup suppers. Christian Neighbors stands ready to work with churches and church leaders as they refer people in need.',
      },
      {
        title: 'Being Community Neighbors',
        content:
          'Christian Neighbors has become a community agency that is supported not only by Churches, but also by individuals and businesses throughout the community who realize that we must take care of others in need. The downturn in the Michigan economy has made an agency like Christian Neighbors essential and it has built a reputation throughout our community as a place where you will be helped when you are in need.',
      },
      {
        title: 'Being Cooperative Neighbors',
        content:
          'Christian Neighbors has built cooperative relationships with Religious, Private, and Governmental Agencies committed to helping those in need. The Christian Neighbor’s Director and staff serve on and lead various task forces throughout our county dealing with hunger, poverty, and homelessness. They have built resources and developed referrals that address all of those concerns, as people come to them with varied needs. When you look at the yearly reports of Christian Neighbors, it is amazing the amount of help they provide, both food and financially.',
      },
      {
        title: 'Being Caring Neighbors',
        content:
          'Christian Neighbors has demonstrated that our community cares about those in need. Christian Neighbors has also demonstrated that as a community works together, it can meet the needs that exist. People who go to Christian Neighbors for assistance are treated with caring, kindness and respect.',
      },
      {
        title: 'Being Continuous Neighbors',
        content:
          'Christian Neighbors has been working to meet the needs in the Otsego, Alamo, Plainwell, Cooper, and Martin areas since 1983. Having a facility located in the heart of this service area, Christian Neighbors is positioned to continue to meet the needs of this area for many years to come.',
      },
    ],
  };

  const leadership = {
    board: [
      { title: 'Board President', name: 'Art Hartman' },
      { title: 'Vice President', name: 'Edith Reitkerk' },
      { title: 'Secretary', name: 'Jane Adams' },
      { title: 'Treasurer', name: 'Timothy Powers' },
      { title: 'Facilities Manager', name: 'Larry Hill' },
      { title: 'Education / Resources', name: 'Donna Doctor' },
      { title: 'Pastoral Advisor', name: 'Joe Shaler' },
      { title: 'Plainwell School Rep', name: 'Matt Montange' },
      { title: 'Otsego School Rep', name: 'Jeff Hasse' },
      { title: 'Business Support', name: 'Karen Darby' },
      { title: 'Business Support', name: 'Aaron Mitchell' },
      { title: 'Executive Director', name: 'Terri Shaler' },
    ],
    financeTeam: [
      { name: 'Dorothy Cool' },
      { name: 'Donna Doctor' },
      { name: 'Art Hartman' },
      { name: 'Larry Wilson' },
      { name: 'Todd Harrell' },
    ],
  };

  const staff = [
    {
      img: '/images/staff/terri.jpg',
      name: 'Terri Shaler',
      title: 'Executive Director',
      content:
        'Over 20yrs of service at Christian Neighbors, Terri is happy to assist with business questions.',
      email: 'tshaler@christianneighbors.org',
      ext: 101,
    },
    {
      img: '/images/staff/eric.png',
      name: 'Eric Hoffman',
      title: 'Development Coordinator',
      content: 'Contact to have someone speak at your group or for an online donation.',
      email: 'ehoffman@christianneighbors.org',
      ext: 100,
    },
    {
      img: '/images/staff/kim.jpg',
      name: 'Kim Shafer',
      title: 'Housing Program Director',
      content: 'Kim oversees our housing and homeless program.',
      email: 'kshafer@christianneighbors.org',
      ext: 102,
    },
    {
      img: '/images/staff/shannon.jpg',
      name: 'Shannon Zabaldo',
      title: 'Housing Specialist',
      content: 'Shannon can be contacted for food and financial assistance.',
      email: 'szabaldo@christianneighbors.org',
      ext: 106,
    },
    {
      img: '/images/staff/amy.jpg',
      name: 'Amy VanPutten',
      title: 'Food Progam Director',
      content: 'Contact Amy for food pantry drop-offs.',
      email: 'avanputten@christianneighbors.org',
      ext: 103,
    },
    {
      img: '/images/staff/debbie.png',
      name: 'Debbi Woodstock',
      title: 'Pantry Assistant',
      content: 'Debbie maintains the food pantry',
    },
    {
      img: '/images/staff/ralph.jpg',
      name: 'Ralph Woodstock',
      title: 'Building and Grounds Trustee',
      content: 'Ralph maintains and improves CN buildings and grounds',
    },
    {
      img: '/images/staff/adam.png',
      name: 'Adam Slinkman',
      title: 'IT Manager',
      content: 'Adam manages the technology infrastructure and develops internal software.',
      email: 'adam@slinkman.net',
      ext: 109,
    },
  ];

  return { missionData, fiveCs, leadership, staff };
}
