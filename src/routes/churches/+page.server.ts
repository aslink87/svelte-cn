import prismaClient from '$lib/db.server';

export async function load() {
  const calendar = await prismaClient.pantryCalendar.findFirst();
  if (!calendar) {
    return null;
  }

  const data = [
    {
      link: 'https://maps.google.com/maps?q=7925+N+6th+St,+Kalamazoo&hl=en&sll=37.0625,-95.677068&sspn=46.495626,63.984375&t=h&hnear=7925+N+6th+St,+Kalamazoo+Township,+Michigan+49009&z=16',
      caption: 'Alamo Community Church',
    },
    {
      link: 'https://maps.google.com/maps?q=605+w+allegan+st,+Otsego,+MI&hl=en&ll=42.460859,-85.710332&spn=0.010638,0.015621&sll=42.455108,-85.705636&sspn=0.010639,0.015621&t=h&hnear=605+W+Allegan+St,+Otsego,+Michigan+49078&z=16',
      caption: 'At The Master’s Feet Discipleship Ministry',
    },
    {
      link: 'http://www.facebook.com/pages/Cooper-Congregational-Church/113277475373523',
      caption: 'Cooper Congregational Church',
    },
    {
      link: 'https://www.dosterrc.com/',
      caption: 'Doster Community Reformed Church',
    },
    {
      link: 'http://www.eastmartincrc.org/',
      caption: 'East Martin Christian Reformed Church',
    },
    {
      link: 'http://www.fbcotsego.org/',
      caption: 'First Baptist Church of Otsego',
    },
    {
      link: 'http://www.fbcplainwell.org/',
      caption: 'First Baptist Church of Plainwell',
    },
    {
      link: 'https://www.otsegocongregational.org/',
      caption: 'First Congregational Church of Otsego',
    },
    {
      link: 'http://fpcplainwell.com/',
      caption: 'First Presbyterian Church of Plainwell',
    },
    {
      link: 'http://www.fumcplainwell.com/',
      caption: 'First United Methodist Church',
    },
    {
      link: 'http://www.friendshipwesleyan.org/',
      caption: 'Friendship Wesleyan Church',
    },
    {
      link: 'http://www.hopelc.org/',
      caption: 'Hope Lutheran Church',
    },
    {
      link: 'http://thelivingwellkzoo.org/',
      caption: 'The Living Well Church',
    },
    {
      link: 'https://www.martinreformed.org/',
      caption: 'Martin Reformed Church',
    },
    {
      link: 'http://www.martinumc.org/',
      caption: 'Martin United Methodist Church',
    },
    {
      link: 'https://www.northpointchurch.net/',
      caption: 'North Point Church',
    },
    {
      link: 'http://www.northbridge.cc/',
      caption: 'Northbridge Church',
    },
    {
      link: 'https://www.crcna.org/churches/5773',
      caption: 'Northern Heights Church',
    },
    {
      link: 'http://otsegochurch.com/',
      caption: 'Otsego Church of God',
    },
    {
      link: 'http://otsego22.adventistchurchconnect.org/',
      caption: 'Otsego Seventh Day Adventist Church',
    },
    {
      link: 'https://www.otsegomethodistchurch.org/',
      caption: 'Otsego United Methodist Church',
    },
    {
      link: 'http://www.peaceotsego.com/',
      caption: 'Peace Lutheran Church',
    },
    {
      link: 'https://www.encounterplainwell.com/',
      caption: 'Encounter Church Plainwell',
    },
    {
      link: 'http://www.martinumc.org/',
      caption: 'Shelbyville United Methodist Church',
    },
    {
      link: 'https://www.stmargaret-otsego.com/',
      caption: 'St. Margaret’s Catholic Church',
    },
    {
      link: 'http://www.facebook.com/pages/St-Stephens-Episcopal-Church/237986719564180',
      caption: 'St. Stephen’s Episcopal Church',
    },
    {
      link: 'https://www.facebook.com/Trowbridge-Community-Church-111568542798972/',
      caption: 'Trowbridge Community Church',
    },
  ];

  return { calendar, data };
}
