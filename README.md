# Angular Worker Management Form (CRUD)

This project is a simple Worker Management Form built with Angular 16 and Angular Material. It implements full CRUD (Create, Read, Update, Delete) functionality using json-server as a mock backend.

## Features

- Add new workers via a modal form
- Display a searchable and sortable worker table
- Edit worker details using a modal form Delete workers with a click
- Pagination & filtering support with Angular Material
- Mobile-friendly UI 

## Installation & Setup

### Clone the Repository

git clone https://github.com/asl1n/Angular-CRUD.git

cd Angular-CRUD

### Install Dependencies

npm install

### Setup JSON Server

npm install -g json-server

### Start the JSON Server

json-server --watch db.json --port 3000

### Start the Angular App

ng serve --open
