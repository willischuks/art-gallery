# Art Gallery Application

## Overview
The Art Gallery Application is a web-based platform that allows users to search for artworks from the Cleveland Museum of Art's collection. Users can enter search queries to retrieve and display artwork details, including titles, artists, and images.

## Features
- Search for artworks by title or artist.
- Display artwork details including title, artist name, medium, and images.
- Responsive design for a user-friendly experience.

## Technologies Used
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building the application.
- **Axios**: Promise-based HTTP client for making API requests.
- **EJS**: Templating engine for rendering HTML views.
- **CSS**: For styling the application.

## API
The application uses the Cleveland Museum of Art's Open Access API to fetch artwork data. The API provides access to a vast collection of artworks, including images and detailed descriptions.

### API Endpoints
- **Search Artworks**: `GET /search?q={query}`
  - Retrieves a list of artworks based on the search query.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/art-gallery.git
   cd art-gallery

###Usage
Enter a search term in the input field and click the "Search" button.
The application will display a list of artworks matching the search term.
Error Handling
The application handles errors gracefully, displaying a message when no artworks are found or if an error occurs during the API request.

##License
This project is licensed under the MIT License.

##Acknowledgments
Cleveland Museum of Art Open Access API
Express.js
Axios
EJS
