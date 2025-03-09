
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

## Frontend Output

![Frontend](https://github.com/user-attachments/assets/a93ebf2d-d4a7-4376-8d75-a7614ca61a08)
## BP Module
![BP module](https://github.com/user-attachments/assets/8cc23ef2-b246-4fa9-8fc3-6072628c4f82)
## Checkup Module
![Checkup module](https://github.com/user-attachments/assets/6d0818c9-22a1-4f8b-a12b-0bdb646bcdd2)
## Adding A new Module
![Add Module Page](https://github.com/user-attachments/assets/9dc5630d-f143-4946-b2f3-afd0982a2726)
![Add Module Page - 2](https://github.com/user-attachments/assets/0dc0e6db-8518-4bc1-bc80-7b498567c6b3)
## JSON Format For adding a new Address Module
![JSON format](https://github.com/user-attachments/assets/5eede26e-eb64-4860-bef2-3e1c41a59b7f)
## Address Module Added
![Address module added](https://github.com/user-attachments/assets/68511fea-684b-4238-a54c-0c022daa0132)
![Address Module](https://github.com/user-attachments/assets/67ceb7db-0e02-463d-8b98-25c00cad7b52)
## Address fields added Automatically into the BP Module  
![Dynamically field added for address](https://github.com/user-attachments/assets/06ec0095-e575-4a14-825b-ff325d2c97b5)

## Backend Database 

## Module Master
![Module Master](https://github.com/user-attachments/assets/e4d1110f-6008-4dde-95ff-a0515a4de918)

## Fields Data 
![Fields Data](https://github.com/user-attachments/assets/6f373351-34fa-408e-9ed8-be8c9bcb3b09)






