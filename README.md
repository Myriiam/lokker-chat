# Lokker Room - Chat Application

## About
This is a chat application.  
-User can register (as member) and login in the application by entering right credentials.   
-Once a user is added into a lobby (conversation) by the admin, the user can chat with other users from the same lobby.   
-User can see all the members from their lobby. - User is allowed to update or delete their messages only.  
-Admin can create a lobby and add an user in a lobby.  
-Admin can have access to all lobbies and update or delete all messages.

## Technologies
-This application (FrontEnd) is build with **ReactJs** and **ViteJs**[ plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md).   
-[React-icons](https://react-icons.github.io/react-icons/) for all the icons.

## Installation (in a local env)
```
npm install 
npm run dev or start (depending on your package.json)

```

## :+1: Functional features 
*  login/logout and register (for user and admin) and token retrieving
*  Access to the chat room 
*  Retrieve (see) all users from the same lobby (as the connected user)  
-Chat :
* Retrieve (see) all messages from our lobby
* Send message(s) to our lobby

## :dizzy_face: Features to add 
* Create a lobby
* Add a user into a lobby
* Update or delete a message (for the user and the admin)
* Responsiveness

## :confused: Features that need some adjustments
* Structure the displaying of messages (by date)
* Adjust the rendering of sent messages (The CSS doesn't apply directly because of the user id of the message that is missing but there once the page is loaded)
* Remove the choice of the role (status) in the register form so in the backend

## Author
Myriam K.

## License
This project is open-sourced software licensed under the [MIT](https://opensource.org/license/MIT).
