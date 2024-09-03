# Habit Tracker

## Overview

Habit Tracker is a web application designed to help users track their daily habits. Users can add new habits, and mark them as done, not done, or none for each day. The application provides a view of the current status of each habit and allows users to review their habit history for the past 7 days. The app is built using React, Redux, and React Router.

## Features

- **Add Habits**: Add new habits to track, such as reading a book or going to the gym.
- **Daily Tracking**: Mark each habit as "Done", "Not Done", or "None" for each day.
- **Habit Overview**: View all current habits with an option to add new ones.
- **7-Day View**: Display and manage the status of each habit for today and the previous 6 days.
- **Status Management**: Toggle between the three statuses ("Done", "Not Done", "None") for any day.
- **History Adjustment**: Update the status of a habit for any of the past 6 days.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **React Router**: For routing and navigation.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/habit-tracker.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd habit-tracker
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

   or if you prefer Yarn:

   ```bash
   yarn install
   ```

## Usage

1. **Start the Development Server**

   ```bash
   npm start
   ```

   or with Yarn:

   ```bash
   yarn start
   ```

2. **Access the Application**

   Open your web browser and navigate to `http://localhost:3000` to view the application.

## Usage Instructions

- **Adding a Habit**: Navigate to the "Habits Overview" page and click the "Add" button to add a new habit.
- **Tracking Habits**: On the "7-Day View" page, you can mark today's habit as "Done", "Not Done", or "None". You can also adjust the status for any of the previous 6 days.
- **Viewing Habit Status**: Check the current status of all your habits and their history on the respective pages.

## Project Structure

- `src/` - Contains the source code of the application.
  - `components/` - Reusable components for the UI.
  - `features/` - Redux slice files for managing state.
  - `pages/` - Components representing different pages in the application.
  - `routes/` - Defines the routing configuration using React Router.
  - `store.js` - Configures the Redux store.
