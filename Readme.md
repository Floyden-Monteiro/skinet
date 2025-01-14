 file Sturcture:
    API - request and response
    Infrastructure - Database, query
    Core - Business logic

Create Project 
   dotnet new webapi -n MyProject --use-controllers

Add Project to Solution
    dotnet sln add MyProject

Check Porject is added to Solution
    dotnet sln list

Migration
    dotnet ef migrations add InitialCreate -o Data/Migrations


create Project
    dotnet new classlib -n MyProject.Core
    dotnet new classlib -n MyProject.Infrastructure


Update Database
    dotnet ef database update

Reference of Project
    dotnet add reference ../MyProject   
    
Add Project to Solution
    dotnet restore 

hot reload
    dotnet watch run

git ignore
    dotnet new gitignore

drop database
    dotnet ef database drop -p Infrastructure -s MyProject

remove migration
    dotnet ef migrations remove -p Infrastructure -s MyProject

add migration
    dotnet ef migrations add InitialCreate -p Infrastructure -s API -o Data/Migrations

