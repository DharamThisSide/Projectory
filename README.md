# Projectory - The Project Management App

A simple project management app that helps you organize tasks within multiple projects. This app allows you to create, view, and manage projects, as well as add and delete tasks for each project.

## Features

- **Add Projects**: Easily create new projects.
- **Select Projects**: View details of a selected project.
- **Delete Projects**: Remove projects when they're no longer needed.
- **Add Tasks**: Add tasks to a selected project to keep track of what needs to be done.
- **Delete Tasks**: Remove tasks that are completed or no longer relevant.
- **Error Modal**: A dialog box with error is shown if Invalid value added.
- **Dynamic Interface**: The content changes based on whether a project is selected or not.

## How It Works

1. **Projects Sidebar**: Displays all the projects you've created. You can select a project or add a new one.
2. **Project View**: When a project is selected, you can view its tasks, add new tasks, or delete the project.
3. **Add New Project**: If no project is selected, you'll see an option to create a new project.

## How to Run

1. Clone this repository.
2. Install the required dependencies using `npm install`.
3. Run the app using `npm run dev`.
4. Open the app in your browser.

## Components Overview

- `ProjectsSidebar`: Shows all projects and allows project selection or creation.
- `NoProjectSelected`: Displays when no project is selected, prompting you to add a new one.
- `SelectedProject`: Shows tasks for the selected project and allows task management.
- `NewProject`: Lets you create a new project with a form.
- `NewTask`: Lets you create a new task within a project.
- `Modal`: Displays error dialog box on Invalid inputs

