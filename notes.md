# TODO:

<!--toc:start-->

- [TODO:](#todo)
  - [Auth Flow](#auth-flow) - [Onboarding](#onboarding)
  <!--toc:end-->

## Auth Flow

### Onboarding

- Currently, Google auth is creating a new user if a user logs in and doesn't have an existing account in the DB.
- AUth.js user object is extended, to include an 'approved' parameter so that users can be approved manually
- A user with admin rights must launch prisma studio from the remote vm to update the new user's rights

PDF: using google docs to display pdf. use this as src for iFrame:

- src="https://docs.google.com/gview?url=https://christianneighbors.org/assets/newsletters/a635e2f0-e4ab-4955-be6e-ed3ef95e532e.pdf&embedded=true"
