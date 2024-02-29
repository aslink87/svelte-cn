import prismaClient from '$lib/db.server';

export async function load() {
  const pantry = [
    {
      title: 'Your food donations help us feed our community',
      content:
        'Eighty five percent of all of the food that goes inside our food boxes come from the generous support of our community. Thank you for your faithful help. Non-perishable food items can be dropped off any time in our food donation box located on the West side of the building. This box is checked several times each day. Someone is here for perishable items or if you need help on Mondays 9-6, Tuesdays 9-4, Thursdays 9-5 and Friday 9-noon. Please ring the buzzer on the West side of the building for help.',
    },
    {
      title: 'Extra Produce?',
      content:
        'We love receiving your fresh garden produce. We also have a health and beauty products shelf where we give out personal hygiene products, Perrigo products, laundry soaps and toilet paper.',
    },
    {
      title: 'Have a Food Drive!',
      content:
        'If your group or organization would like to organize a food drive. Or, if you are having a special party (birthday, anniversary, or Christmas) and don’t need gifts your guest may love to celebrate you by bringing food donations in your honor. Email avanputten@christianneighbors.org for tools and information.',
    },
    {
      title: 'Items We Always Need Are',
      content:
        'Please no opened or damaged products. Call before you shop if you want to know our immediate need: 269-685-4166 Your food donations may be tax deductible just save your receipts and ask your tax advisor if you can use them. Our Tax ID# is 38-3451688.',
    },
  ];

  const legacy = [
    'Bequests: Through a bequest you can make a provision in your will or living trust for a specific dollar amount, a specific asset or a percentage of your estate.',
    'Gifts by beneficiary designation: When you give a gift for Christian Neighbors from your retirement plan, insurance plan or other assets, you ensure that the basic needs of our neighbors are cared for. It’s as simple as contacting the firm that holds your assets and asking for a beneficiary form to fill out',
    'Stocks, bonds and mutual funds: For questions or to transfer contact Debbie Clark at Clearwater Financial, 269-685-1170.',
    'Life insurance: If you have a life insurance policy that has outlasted its original purpose, you can use it to fund a legacy gift while also enjoying tax savings during your lifetime. Talk to your tax adviser about the various ways this option can benefit you today. Your unneeded insurance policy can impact another life forever.',
    'Retirement Accounts: (401k. Simple IRA, IRA, 403b, etc.) The IRA Charitable Rollover, as of 2016, has been made permanent. If you are 70 1/2 years or older and want to make a gift without federal tax liability this is a great way to give. Your gift is tax free up to $100,000 per year.',
    'Real Estate',
    '“In Trust” Accounts: Any bank account or stock account in your name can be set up “In trust for Wings of Hope Hospice.” You retain exclusive control of the account during your lifetime. Upon your death, the account passes to Hospice without probate or tax',
    'Your unneeded insurance policy can impact another life forever.',
  ];

  const needs = await prismaClient.needs.findFirst();
  if (!needs) {
    return null;
  }

  return { pantry, legacy, needs };
}
