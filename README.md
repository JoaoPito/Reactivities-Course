# Reactivities - Tutorial
A React and ASP.NET based web app made during the course Complete guide to building an app with .Net Core and React by Neil Cummings

It's a social network that users can see what current activities are happening right now, as well as adding their own.

This is **not** a production-ready app and it's only used for learning purposes.

[Course Repository](https://github.com/TryCatchLearn/Reactivities/)

## Setting-up Development Environment
- Install .NET 7 (7.0.5 is used in this project)
- [Install Node.js](https://joachim8675309.medium.com/installing-node-js-with-nvm-4dc469c977d9) - node.js version v20.2.0 
- Postman
- VS Code Extensions:
    - Microsoft C#
    - C# Extensions
    - NuGet Gallery
    - SQLite

## Starting up
### Start up API server:
on the directory ./API run the command: *dotnet watch --no-hot-reload*

### Start up React server:
on the directory ./client-app: *npm start*

Server starts listening at port 3000

## Technologies
**Back-end:**
- EF Core
- ASP.Net Web app
- MediatR

**Front-End:**
- React with TypeScript
- MobX
- React Router
- Axios