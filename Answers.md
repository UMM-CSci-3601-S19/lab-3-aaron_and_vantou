# Answers

question 1: Notice anything new in our .gitignore? There are actually multiple .gitignore files in this project. Where are they? Why might we have more than one, and how do they interact?

Answer: There are gitignore files for both client side and backend. ignores plugin files and other files that could be used in the project but are not intended to be used. 

question 2: Note also that there are now multiple build.gradle files as well! Why is this?

Answer: There are multiple build.gradle files because we need gradle to work for both ends of the project(client and server) and the third file for telling them to communicate to each other

question 3: How does the navigation menu (with Home and Users) work in this project? Compare Server.java and app.routes.ts. Both do a kind of routing; what does each accomplish and how?

Answer: Server.java deals with connecting a route to the API which leads to the data/json. The app.routes sets up the paths to the home and users. 

question 4: What does the user-list.service.ts do? Why is it not just done in the user-list.component.ts?

Answer: user.list.service.ts deals with the html client constructing the url. It's not done in the user-list.component.ts because the component deals with filtering the users which deals with the data.
