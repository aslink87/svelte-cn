export async function load() {
  const pantry = [
    {
      title: 'Residents of Otsego and Plainwell School Districts',
      content:
        'Clients are able to shop the food pantry once per calendar month and receive enough food for three meals each day for five days. When available, diapers, personal hygiene products, cleaning supplies, paper supplies and over the counter medications can also be selected.',
    },
    {
      title: 'How do I get food?',
      content:
        'Bring the following items during the hours listed below, arrive at least 1/2 hour before closing, and in most cases you will be able to shop in our pantry the day that you come. If you lack any of the following items, please call ahead to find out what might serve as a temporary substitute: Photo ID showing your current address proof of income for each person in the home who has income (including pay stubs, social security award letters, unemployment benefits, child support, etc) social security cards for each person in the home and birth dates for each person in the home.',
    },
    {
      title: 'What if I’m living with other people who are not my immediate family?',
      content:
        'We serve everyone in the home as one household, despite the fact that you may cook and keep your food separately. Please decide whose name the file will be listed under and that person can bring the required information for everyone in the home. In subsequent months, as long as the file is complete (all requested information has been provided), another adult in the home could shop for the household as long as we have a picture ID on file for that person. (If you are outside of our food service area please review the Allegan County Food Pantry Collaborative Brochure, fund services under the additional resources tab) OR Call 2-1-1 as they may be able to help you.',
    },
  ];

  const financial = [
    {
      title: 'Residents of Plainwell, Otsego and Martin School Districts',
      subtitle: 'We assist clients financially with critical temporary needs in the areas of:',
      list: [
        'Rental assistance (first month’s rent, security deposit, back rent, eviction)',
        'Utility shut-offs or payments (preventing loss of utilities or loss of winter protection plan, fuel oil or propane)',
        'Medical payment assistance (doctor visits, vision, dental, some prescriptions)',
        'Prescription Costs (no pain, narcotic or controlled substances, no exceptions)',
        'Landlord/Utility Vendor Mediation',
        'Referral service to other human services agencies in Allegan County',
      ],
      content: '',
    },
    {
      title: 'How do I get help?',
      subtitle: '',
      list: [],
      content:
        'When you first contact Christian Neighbors, you will come to our offices and talk to a case manager who will ask some questions about how many people there are in your family, how much money you make and what your current expenses are. You will be asked about any special circumstances that you are going through. We will talk to you about what things you have already tried to do to help yourself and find out what assistance you might be receiving from other sources.',
    },
    {
      title:
        'Bring the following items during the hours listed below, arrive at least 1/2 hour before closing:',
      subtitle: '',
      list: [
        'Photo id showing your current address',
        'Proof of income for each person in the home who has income (pay stubs, social security award letters, unemployment benefits, child support. etc)',
        'Social security cards for each person in the home (or a legal document with social security numbers on it)',
        'Birth dates for each person in the home',
        'Depending on what you need help with, bring your shut off notice, DHS decision notice, letter from your landlord, eviction notice, etc.',
      ],
      content: '',
    },
    {
      title: 'State Emergency Relief Forms (SER)',
      subtitle: '',
      list: [],
      content:
        'DHHS requires the use of the MI Bridges web site for requesting state emergency relief (SER). Christian Neighbors is a Community Navigation partner with DHHS. We can help you complete the SER application and we can fax any supporting documentation to DHHS for you. Always follow-up with your DHHS case worker to make sure they received all necessary items. Have questions? Call 269-685-4166 ext. 102',
    },
  ];

  const community = {
    title: 'Call 2-1-1 for additional resources.',
    list: [
      {
        link: 'http://communityactionallegan.org/',
        caption: 'Community Action of Allegan',
        content:
          'Pantry, commodities distribution, utility assistance, senior services, weatherization, and early education programs',
      },
      {
        link: 'http://159.89.50.252/wp-content/uploads/2014/01/Food-Pantry-Brochure.pdf',
        caption: 'Allegan County Food Pantry Brochure – PDF',
        content: '2 page document listing food pantries in Allegan County',
      },
      {
        link: 'http://www.allegancounty.org/Government/LAC/Index.asp?pt=',
        caption: 'Allegan County Legal Assistance Center',
        content:
          'Assistance with the legal process to residents of Allegan County who cannot afford an attorney',
      },
      {
        link: 'http://www.acuw.org/',
        caption: 'Allegan County United Way',
        content: 'For many resources in our community',
      },
      {
        link: 'https://www.mibridges.michigan.gov/access/',
        caption: 'DHHS – MI Bridges',
        content:
          'Check for eligibility, apply for benefits, check your benefits and print documents when needed for proof of assistance',
      },
      {
        link: 'http://imaginationlibrary.com/',
        caption: 'Imagination Library',
        content: 'Reading program for Allegan County children 0-5. Provides a free book each month',
      },
      {
        link: 'https://www.intercare.org/locations/pullman/',
        caption: 'Intercare Pullman – Dental',
        content: 'Provides low cost dental to the underserved. Serves 6 counties including Allegan',
      },
      {
        link: 'https://www.intercare.org/',
        caption: 'Intercare Pullman – Medical',
        content:
          'Provides low cost medical care to the underserved. Serves 6 counties including Allegan',
      },
      {
        link: 'https://kzoodc.org/',
        caption: 'Kalamazoo Deacons Conference',
        content:
          'Provides clothing, furniture, household items, and financial assistance to Southwest Michigan',
      },
      {
        link: 'http://www.loveincnwa.org/',
        caption: 'Love INC',
        content:
          'Serves parts of Allegan, Hamilton & Pullman. Partipation in L.I.F.E. Skills Program provides various services, including a food pantry',
      },
      {
        link: 'http://www.manpower.com/',
        caption: 'Manpower',
        content: 'Locate employment opportunities in our community',
      },
      {
        link: 'http://www.martinresource.org/',
        caption: 'Martin Area Resource Center',
        content:
          'Food pantry, clothing bank, household goods, Christmas assistance, school supplies and backpacks',
      },
      {
        link: 'http://www.medicare.gov/',
        caption: 'Medicare',
        content: 'Official Medicare site',
      },
      {
        link: 'http://michiganlegalhelp.org/',
        caption: 'Michigan Legal Help',
        content: 'Provides legal referrals, legal help, and free legal information',
      },
      {
        link: 'https://www.westmiworks.org/',
        caption: 'Michigan Works – Allegan & Kent County',
        content: 'Provides employment and skill building opportunities',
      },
      {
        link: 'http://www.onstaffusa.com/',
        caption: 'OnStaff',
        content: 'Employment opportunities',
      },
      {
        link: 'http://www.otsegolibrary.org/',
        caption: 'Otsego District Public Library',
        content: 'Provides educational resources, classes, and connection opportunities',
      },
      {
        link: 'http://www.assurancewireless.com/',
        caption: 'Phone – Assurance Wireless',
        content: 'Free Virgin Mobile phone & unlimited text and monthly talk minutes',
      },
      {
        link: 'http://www.att.com/gen/general?pid=10273',
        caption: 'Phone – Discount on AT&T Landline and internet',
        content:
          'Makes basic phone service more affordable for qualified customers and offers high-speed internet for $10 a month. MUST be receiving EBT benefits to qualify',
      },
      {
        link: 'http://projecthopedorr.blogspot.com/',
        caption: 'Project Hope',
        content:
          'Financial assistance, household items, and thrift store for the Martin, Dorr and Wayland Area',
      },
      {
        link: 'http://www.ransomlibrary.org/',
        caption: 'Ransom District Library',
        content: 'Educational resources and children’s activities',
      },
      {
        link: 'http://www.otsegosda.org/',
        caption: 'Seventh Day Adventist Community Service Center',
        content: 'Provides clothing and furniture to families in Allegan County',
      },
      {
        link: 'http://ssa.gov/',
        caption: 'Social Security Administration',
        content:
          'Instructions for replacing a Social Security Card, apply online for retirement benefits, disability benefits, SSI, Medicare and more',
      },
      {
        link: 'https://stvincentdepaulministry.org/',
        caption: 'St. Vincent de Paul',
        content: 'Utility and rental assistance to Allegan County families in need',
      },
      {
        link: 'http://www.sylviasplace.com/',
        caption: 'Sylvia’s Place',
        content: 'Shelter for women who are fleeing domestic violence',
      },
      {
        link: 'https://onlineservices.michigan.gov/ExpressSOS/CustomerManagement/EligibilityRequirements',
        caption: 'Update Driver’s License Address',
        content: 'Update your address without making a trip to the Secretary of State',
      },
      {
        link: 'http://michiganfreetaxhelp.org/free-tax-prep-locations/',
        caption: 'Volunteer Income Tax Assistance',
        content:
          'Free tax return preparation and e-filing for low-moderate income Allegan County individuals and families with combined incomes of $50,000 or less',
      },
      {
        link: 'http://www.fns.usda.gov/wic/women-infants-and-children-wic',
        caption: 'WIC (Women, Infants, and Children)',
        content:
          'Provides supplemental foods, health care referrals, and nutrition education for low-income pregnant and postpartum women, and to infants and children up to age five',
      },
      {
        link: 'http://www.wingsofhopehospice.com/',
        caption: 'Wings of Hope Hospice',
        content: 'Providing end of life care in Allegan County, regardless of ability to pay',
      },
    ],
  };
  const data = [
    {
      title: 'template data title',
      content: 'template data content',
    },
  ];

  return { pantry, financial, community, data };
}
