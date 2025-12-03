# city-complaint-management-system

This project is about city complaints system for administration and end users to create their complaints and track it.

# Complaint Tracker System

A full-stack application where users can create and manage complaints and visualize them on a map. Admins can view all complaints and update their status.
kkk

## Features

### User Features

- Register and login
- Create a complaint
- Edit or delete own complaints
- View complaints in a list
- View complaints on a map

### Admin Features

- View all complaints (list + map)
- Update complaint status: Pending, In Progress, Completed

## Tech Stack

### Frontend

- React (TypeScript)
- Tailwind CSS
- React Router
- Apollo Client (GraphQL)
- React-Leaflet (Map)

### Backend

- Node.js
- Apollo Server (GraphQL)
- Prisma ORM

### Database

- PostgreSQL

## Pages / Routes

### Public

- `/login`
- `/register`

### User Dashboard

- `/dashboard`
  - Create complaint form
  - User complaint list
  - Map view of complaints

### Admin Dashboard

- `/admin`
  - All complaints list
  - Update complaint status
  - Map view of all complaints

## Project Structure
