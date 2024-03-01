export async function load() {
  const data = {
    title: 'Testimonies',
    items: [
      {
        content:
          'Todd is a single dad, veteran and hard-worker. He found himself homeless about 5 years ago because of a fire and was referred to Christian Neighbors by a friend. We were able to help him find an affordable apartment for him and his children and paid the security deposit. We supported him with food assistance and occasional emergency financial assistance throughout the years. He relied on us to help him decipher updating paperwork for his subsidized housing and state benefits. He has worked his way into a higher-paying position at work and rarely needs to visit Christian Neighbors for assistance these days. He does occasionally call or stop by and check in with us though, because he and his children are so thankful for the long-standing care and assistance he has received from us.',
        img: '/images/testimony2.jpg',
      },
      {
        content:
          'Our family was already struggling to make ends meet because of medical bills for my cancer treatment. Then the virus hit and my husband was laid off. We tried for weeks to get approval through unemployment and help from state agencies. We kept hitting road blocks and weren’t receiving any calls back……meanwhile the electric bill kept growing and the cupboards were getting bare. I reached out to Christian Neighbors and within an hour they had our electric bill paid and we were able to get much needed food. The community is lucky to have a local organization like Christian Neighbors to help those of us who find ourselves in need.',
        img: '/images/testimony3.jpg',
      },
      {
        content:
          'Mary is one of many senior citizens who lives on a low fixed income. She receives food monthly from Christian Neighbors and often tells us that she would have to skip meals or ration food if it weren’t for this help. When an unexpected bill comes up, such as a car repair or medical expense, she has to decide which bill to skip that month – rent or utilities. Christian Neighbors has given her emergency financial assistance with these skipped bills to help her through the crisis and to prevent her from becoming homeless or having her heat turned off.',
        img: '/images/testimony4.jpg',
      },
      {
        content:
          'Christian Neighbors helped to secure June a place to live along with food and other essentials so that she could regain her independence.',
        video: 'https://vimeo.com/574492668',
      },
    ],
  };

  return { data };
}
