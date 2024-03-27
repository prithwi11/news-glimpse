
**Project Name**: News Glimpse

**Overview:**
The News Aggregator is a web application developed to provide users with categorized news articles fetched from the NewsAPI. It offers features such as browsing news by category, searching for specific news articles, and viewing detailed information about individual news articles.

**Features:**
1. Landing Page:
    Displays category-wise news cards with a main news article highlighted in a prominent card.
    Category Pages:

2. Separate pages for different categories where users can browse news articles specific to that category.
    Search Functionality:

3. Allows users to search for news articles using keywords.

4. News Details Page:
    Displays detailed information about individual news articles.
    Utilizes Redux to manage state, ensuring efficient storage and retrieval of news details when users interact with the application.

**Technologies Used:**
1. React.js: Frontend development framework for building user interfaces.
2. Redux: State management library for managing application state efficiently.
3. NewsAPI: External API used for fetching news articles.
4. Tailwind css: Markup and styling languages for designing and formatting web pages.

**How to Run:**
1. Clone the repository from Github : git clone [repository link](https://github.com/prithwi11/news-glimpse.git)
2. cd news-glimpse
3. Generate an API key from NewsAPI:
    Visit [NewsAPI](https://newsapi.org/) website and sign up for an account if you haven't already.
    Generate an API key from your account dashboard.
4. Create a .env file in the root directory of the project and add the following line:
    REACT_APP_API_KEY=your_api_key_here
5. npm install
6. npm start

**Usage:**
1. Upon launching the application, users will land on the homepage displaying category-wise news cards and a main news article.
2. Users can click on a specific category to view news articles related to that category.
3. The search functionality allows users to enter keywords and find relevant news articles.
4. Clicking on a news article will redirect users to a detailed view of that article, where they can read more information.

**Contributors:**
Prithwiraj Bhadra - [profile link](https://github.com/prithwi11)

**License:**
This project is licensed under the MIT License.
