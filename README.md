# 🔗 Cypress Broken Link Checker

A Cypress-powered test script designed to find broken links on any webpage. The script scans all anchor (`<a>`) tags and checks their HTTP status, identifying links that are active, broken, or empty.

## 📖 Table of Contents
- [About the Project](#about-the-project)
- [Why This Matters](#why-this-matters)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Sample Output](#sample-output)
- [Contributing](#contributing)
- [License](#license)

## 📌 About the Project

This project automates the process of checking broken links on a webpage using Cypress. It performs the following actions:
- Detects **Active** links (those returning a valid HTTP response).
- Flags **Broken** links (those returning error codes like 404 or 500).
- Highlights **Empty** links (those missing an `href` attribute or with empty values).

## ❓ Why This Matters

Manually checking links on a webpage can be tedious and error-prone. With this automated solution, developers can quickly and easily identify which links on their site need attention, ensuring a smooth and error-free user experience.

## 🛠️ Features
- Automatically checks all links on a page for validity.
- Categorizes links into Active, Broken, or Empty.
- Supports both **Interactive Mode** (GUI) and **Headless Mode** (CLI).
- Provides a detailed report for easy analysis.

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js**: [Install Node.js](https://nodejs.org/).

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/buildwithnav/cypress-broken-link-checker.git
2. Navigate to the project directory:
   ```bash
   cd cypress-broken-link-checker
3. Install the necessary dependencies:
   ```bash
   npm install
   ```

## 🧪 Usage
### Edit the Test File
Open the `findBrokenLinks.cy.js` file in the `cypress/e2e/` directory and modify the `cy.visit()` command to point to the URL you want to test:
  ```javascript
   cy.visit('https://example.com')
  ```

### Running the Tests

- **Interactive Mode**: Run the tests with the Cypress Test Runner:

   ```bash
   npx cypress open

   
- **Headless Mode**: Run the tests in the terminal without opening the Cypress GUI:

  ```bash
  npx cypress run --spec "cypress/e2e/findBrokenLinks.cy.js"

## ⚙️ How It Works
The script performs the following steps:​

  1. **Visit the Specified Webpage​**: Navigates to the URL provided in the `cy.visit()` command.

  2. **Identify All Anchor Tags​**: Selects all `<a>` elements on the page.

  3. **Evaluate Each Link:**

- **Empty Links**: If an anchor tag lacks an href attribute or has an empty value, it's classified as an empty link.​

- **Valid Links**: For anchor tags with a valid href, the script sends an HTTP request to the URL:

  - **Active**: If the response status code is less than 400, the link is considered active.

  - **Broken**: If the response status code is 400 or higher, the link is deemed broken.

4. **Logging**: After evaluating all links, the script logs the total number of links, along with counts for active, broken, and empty links.​

## 📊 Sample Output
  ```bash
    Total Number of Links: 10
    Active Links: 7
    Broken Links: 2
    Empty Links: 1
  ```

Each link's status is also logged individually during the test execution.

## 🤝 Contributing
Contributions are welcome! If you have suggestions for improvements or new features, feel free to fork the repository and submit a pull request.
