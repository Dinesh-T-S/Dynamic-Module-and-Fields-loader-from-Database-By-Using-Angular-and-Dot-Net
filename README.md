
# Dynamic Module and Fields Loader from Database Using Angular and .NET

## 📌 Overview
This project demonstrates how to dynamically load modules and fields from a database using Angular (frontend) and .NET Core (backend). The application fetches module configurations from a database and dynamically renders the required form fields based on the selected module.

## 🚀 Technologies Used

- **Frontend:**  
  Angular, TypeScript, RxJS, Bootstrap  

- **Backend:**  
  .NET Core (Web API), Entity Framework Core  

- **Database:**  
  PostgreSQL / SQL Server  

- **Others:**  
  AutoMapper, Dependency Injection, CORS  

## 🔹 Features  

- ✅ Fetch module and fields dynamically from the database  

- ✅ Render form fields based on the selected module  

- ✅ Handle different field types (text, number, date, select, radio, checkbox)  

- ✅ Store form data back to the database  

- ✅ Clean and modular code structure  


# 📁 Project Structure  

## Backend (.NET Core)  

- **Models/** - Contains database models for `DynamicModule` and `DynamicField`  

- **DTOs/** - Data Transfer Objects for API responses  

- **Services/** - Business logic for handling module/field operations  

- **Controllers/** - API endpoints to fetch dynamic module data  

## Frontend (Angular)  

- **services/module.service.ts** - Fetches module data from API  

- **components/dynamic-form/** - Dynamically renders fields  

- **interfaces/module.interface.ts** - Defines data structures  

- **pages/home.component.ts** - Handles module selection and form display  


# 🎯 How It Works  

## 1️⃣ Backend  

- The database contains `DynamicModule` and `DynamicField` tables.  
- The API retrieves module details and corresponding fields dynamically.  

## 2️⃣ Frontend  

- The user selects a module.  
- Angular fetches field details and generates a dynamic form.  
- The user submits the form, and data is saved to the database.  

# 🛠️ Setup Instructions  

## Backend (.NET Core)  

1. Clone the repository.  
2. Configure the database connection in `appsettings.json`.  
3. Run migrations:  
  add-migration InitialMigration.
4. Database Creation:  
  update-database.
5. Start the backend:  
  dotnet run. 

## Frontend (Angular)  

1. Navigate to the frontend folder.  
2. Install dependencies:  
   npm install
3. Start the development server:  
  ng serve
