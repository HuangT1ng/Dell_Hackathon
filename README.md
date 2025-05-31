# OncoSense Prototype

A prototype demo for the OncoSense cancer detection platform developed for the Dell Hackathon.

## Project Overview

OncoSense is an integrated cancer screening and early detection platform that combines AI technology with accessible screening tools. The platform includes:

- Mobile application for personalized risk assessment
- SenseSpot pods for guided self-testing
- Corporate wellness integration
- Privacy-focused AI learning through federated learning

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router for navigation
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons
- Zustand for state management
- Recharts for data visualization

## Setup Instructions

### Prerequisites

- Node.js (v14.0 or higher)
- npm (v7.0 or higher)

### Installation

1. Clone the repository:
   ```
   git clone <https://github.com/HuangT1ng/Dell_Hackathon.git>
   cd Dell_hackathon_bolt
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173/
   ```

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality

## Application Structure

- `/src` - Source code directory
  - `/components` - Reusable UI components
  - `/pages` - Page components for each route
  - `/assets` - Static assets like images
  - `App.tsx` - Main application component with routing
  - `main.tsx` - Entry point

## Routes

- `/` - Home page
- `/mobile` - Mobile app information
- `/sensespot` - SenseSpot pod information
- `/corporateDashboard` - Corporate dashboard
- `/ai` - AI learning and technology information

## Known Issues

- Placeholder files with "(Content shown in Project Files)" need to be updated
- Some routes may need additional content

## Future Enhancements

- Complete implementation of all pages
- Add authentication
- Integrate with backend services
- Implement complete federated learning demo
