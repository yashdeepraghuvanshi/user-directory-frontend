# User Directory Application

A clean and responsive user directory app built with React, JavaScript, and Tailwind CSS. Browse users, search through the list, view detailed information, and add new users with full form validation.

<img width="1898" height="831" alt="image" src="https://github.com/user-attachments/assets/4e93962e-3178-471d-ba26-8207134e4a14" />
<img width="1631" height="854" alt="image" src="https://github.com/user-attachments/assets/178e4adc-c9a0-402c-b2e5-d6c0cb3e9524" />
<img width="769" height="684" alt="image" src="https://github.com/user-attachments/assets/00c869b7-c059-43f0-a6a4-e99e7358f982" />



## Features

- **User List Display** - Fetches and displays users from JSONPlaceholder API with name, email, and phone
- **Real-time Search** - Filter users instantly by name or email as you type
- **User Details Modal** - Click any user card to see complete information including address, company, and website
- **Add New Users** - Comprehensive form to add users with all fields (name, username, email, phone, website, address, company details)
- **Form Validation** - Required field checks and email format validation
- **Sort Users** - Toggle between A-Z and Z-A alphabetical sorting by name
- **LocalStorage Persistence** - New users are saved locally and persist across page refreshes
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Loading & Error States** - User-friendly feedback for API calls

## Tech Stack

- React 19 (with hooks)
- JavaScript (ES6+)
- Tailwind CSS
- Next.js App Router
- JSONPlaceholder API

## Setup Instructions

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd user-directory-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

That's it! The app will fetch users from the API and you're ready to go.

## How It Works

### Data Flow
- On page load, the app fetches 10 users from `https://jsonplaceholder.typicode.com/users`
- Users are displayed in a responsive grid layout
- Any users you add are stored in localStorage and merged with API users
- Custom users get IDs starting from 101 to avoid conflicts

### Adding Users
When you click "Add User", a form opens where you can enter:
- Basic info (name, username)
- Contact details (email, phone, website)
- Address (street, suite, city, zipcode)
- Company info (name, catch phrase, business strategy)

Only name, email, and phone are required. Everything else is optional.

### Search & Sort
- Search works in real-time and filters by both name and email
- Sort button toggles between alphabetical (A-Z) and reverse (Z-A) order
- Both search and sort work together seamlessly

### User Details
Click any user card to open a modal with complete information including address details, company info, and clickable website links.

## Project Structure

```
├── app/
│   ├── page.jsx           # Main page with state management
│   ├── layout.jsx         # Root layout component
│   ├── globals.css        # Tailwind CSS styles
│   └── loading.jsx        # Loading state component
├── components/
│   ├── user-list.jsx           # User cards grid
│   ├── search-bar.jsx          # Search input component
│   ├── add-user-form.jsx       # Add user form with validation
│   ├── user-details-modal.jsx  # User details popup
│   ├── loading-spinner.jsx     # Loading indicator
│   └── error-message.jsx       # Error display component
└── README.md
```

## Assumptions Made

1. **User IDs** - API users have IDs 1-10. New users start at ID 101 to avoid conflicts.

2. **Required Fields** - Only name, email, and phone are required when adding users. This gives flexibility while ensuring essential contact info.

3. **LocalStorage** - Using localStorage is acceptable for this demo. In production, you'd want a real database.

4. **API Reliability** - Assumes the JSONPlaceholder API is available. If it fails, an error message is shown.

5. **Email Validation** - Basic email format check (contains @ and .). More robust validation could be added.

6. **Mobile Experience** - Optimized for mobile by hiding unnecessary text in the header and making buttons icon-only on small screens.

7. **No Authentication** - This is a public directory. No user authentication or authorization is implemented.

8. **Client-Side Only** - All logic runs in the browser. No backend server needed beyond the Next.js dev server.

## Known Limitations

- New users are only stored locally (not sent to API)
- No edit or delete functionality (could be added easily)
- Search is case-insensitive and matches partial strings
- No pagination (shows all users at once)

## Future Enhancements

If I had more time, I'd add:
- Edit existing user functionality
- Delete user with confirmation
- Pagination for large user lists
- Advanced filters (by city, company, etc.)
- Export users to CSV
- Dark mode toggle
- Unit tests with Jest/React Testing Library

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Free to use for learning and portfolio purposes.

---

**Made by Yashdeep** © 2025
