# TODO:

<!--toc:start-->

- [TODO:](#todo)
  - [Auth Flow](#auth-flow) - [Onboarding](#onboarding)
  <!--toc:end-->

## Auth Flow

### Onboarding

- Currently, Google auth is creating a new user if a user logs in a doesn't have an existing account in the DB.
- I need to extend the auth.js user object, to include an 'approved' parameter so that I can approve users manually
- This will require a schema update as well
- Then, there needs to be protected routes such that unapproved users are routed separately from approved users
- It may be sufficient to allow unapproved users to enter a password that's checked against a DB entry to change to approved status
- See [onboarding video](https://www.youtube.com/watch?v=fUJJP3JBEBo) for more info
