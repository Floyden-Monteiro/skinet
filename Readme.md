# Skinet

Skinet is an e-commerce web application built using ASP.NET Core and Entity Framework Core. The application provides a platform for users to browse and purchase products, while administrators can manage the product catalog. The project follows a clean architecture pattern, leveraging dependency injection, repository pattern, and specification pattern to ensure a maintainable and scalable codebase.

## Key Features

- **Product Catalog:** Users can browse a catalog of products, view product details, and filter products by brand and type.
- **Product Management:** Administrators can add, update, and delete products, brands, and types.
- **Error Handling:** Custom middleware for handling exceptions and returning appropriate error responses.
- **Swagger Integration:** API documentation and testing using Swagger UI.
- **CORS Support:** Configured CORS policy to allow cross-origin requests.
- **Static Files:** Serving static files such as images, CSS, and JavaScript.
- **Database Seeding:** Initial seeding of the database with sample data for products, brands, and types.

## Technologies Used

- **ASP.NET Core:** For building the web API.
- **Entity Framework Core:** For data access and database management.
- **AutoMapper:** For object-object mapping.
- **Swagger:** For API documentation and testing.
- **SQLite:** As the database provider.
- **Dependency Injection:** For managing dependencies and promoting loose coupling.
- **Repository Pattern:** For abstracting data access logic.
- **Specification Pattern:** For encapsulating query logic.

## Project Structure

- **API:** Contains the controllers, DTOs, and middleware.
- **Core:** Contains the domain entities, interfaces, and specifications.
- **Infrastructure:** Contains the data access logic, including the DbContext and repository implementations.

## Getting Started

### Prerequisites

- [.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)
- [SQLite](https://www.sqlite.org/download.html)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/skinet.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd skinet
   ```
3. **Install dependencies:**
   ```sh
   dotnet restore
   ```
4. **Apply database migrations:**
   ```sh
   dotnet ef database update
   ```
5. **Run the application:**
   ```sh
   dotnet run
   ```

### Usage

- Access the Swagger UI at `http://localhost:5000/swagger` to explore and test the API endpoints.
- Use the provided endpoints to manage products, brands, and types.

## Key Files

- **Program.cs:** Configures the application, services, and middleware.
- **StoreContext.cs:** The Entity Framework Core DbContext for the application.
- **ProductsController.cs:** The controller for managing products.
- **StoreContextSeed.cs:** Seeds the database with initial data.
- **SpecificationEvaluator.cs:** Applies specifications to queries.

## Commands

### Project Creation and Setup

- **Create a new Web API project:**
  ```sh
  dotnet new webapi -n MyProject --use-controllers
  ```

- **Add project to solution:**
  ```sh
  dotnet sln add MyProject
  ```

- **Check if project is added to solution:**
  ```sh
  dotnet sln list
  ```

- **Create class library projects:**
  ```sh
  dotnet new classlib -n MyProject.Core
  dotnet new classlib -n MyProject.Infrastructure
  ```

- **Add project references:**
  ```sh
  dotnet add reference ../MyProject
  ```

- **Restore project dependencies:**
  ```sh
  dotnet restore
  ```

### Entity Framework Commands

- **Add a migration:**
  ```sh
  dotnet ef migrations add InitialCreate -o Data/Migrations
  ```

- **Update the database:**
  ```sh
  dotnet ef database update
  ```

- **Drop the database:**
  ```sh
  dotnet ef database drop -p Infrastructure -s MyProject
  ```

- **Remove the last migration:**
  ```sh
  dotnet ef migrations remove -p Infrastructure -s MyProject
  ```

- **Add a new migration:**
  ```sh
  dotnet ef migrations add InitialCreate -p Infrastructure -s API -o Data/Migrations
  ```

### Development and Testing

- **Run the application with hot reload:**
  ```sh
  dotnet watch run
  ```

- **Create a .gitignore file:**
  ```sh
  dotnet new gitignore
  ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.


create agurlar project
ng new client 

creat a new component
ng g c shop

create a new module
ng g m shop
 ng g c --flat --skip-tests shop/shop  // --flat to not create a folder for the component

 you can use --dry-run to see what will be created without actually creating it.

 
create service
ng g s shop/shop


 ng g m core --dry-run