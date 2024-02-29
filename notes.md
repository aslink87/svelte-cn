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
