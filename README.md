# **Angel's Bread Front-End (React.js)**

## Hello! This is a website for a startup bakery local to the Bay Area

### The website allows users to
* Access an extensive menu of all bakery items
* View artful images of products
* Find instructions on how to place orders
* Access links to all social media platforms

### Table of Contents
* Layout
* Navigation Bar
	* Buttons
* Home Page
	* Image Gallery
	* About Us
	* How to Order
* Menu
	* Menu Navigation
	* Menu Items
	* Menu Item Focus
* Contact
* Footer

### Layout
* The layout of the website consists of 3 main React child components: The Navigation bar, Main content, and the footer 
* All components are rendered through the driving App.js file
* The main content changes based on the React-Router-Dom switch, which is toggled by the Navigation Bar

### Navigation Bar
* The navgation bar consists of 3 buttons: The logo, the home page, and then 
* The logo and name are wrapped in a button that routes the main content to the home page
* The menu and contact button route the main content to the menu and contact information, respectively
* The navigation bar collapses when the width of the browser grows smaller than 768px for mobile optimization
* ![](https://github.com/JohannesMendoza/angels-bread/blob/master/demo_images/navbar.png)

### Home Page
* The home page's purpose is to welcome the users who have found the application through normal means
* Three different child components are featured in this component: Image gallery, About us, How to order
	* Image Gallery
		* The image gallery features premier images with photoshopped text welcoming the user
			* The gallery functionality is sourced from a node package called "react-image-gallery" found at https://www.npmjs.com/package/react-image-gallery
	* About Us/How to order
		* These sections are displayed with a row flex, where the company description is on the right of an accompanying image
* ![](https://github.com/JohannesMendoza/angels-bread/blob/master/demo_images/homepage.png)
### Menu
* The menu component allows users to view an extensive menu of the bakery products
* The component connects to the Angel's Bread Back-End API to fetch menu information
* Menu Navigation
	* There is a menu filter component on the left side that allows users to filter out menu items based on category
	* When a category is selected, the state of the Menu component is updated and items from the new category are fetched
		* This will be optimized in the future, where the items will be filtered locally on the browser instead of refetching the new content
* Menu Items are linked to their corresponding MenuFocus components, which provide more details on the product in question
* ![](https://github.com/JohannesMendoza/angels-bread/blob/master/demo_images/Menu%20Items.png)

### Contact
* The contact component is a component that simply contains links to all social media for the company

### Footer
* The footer component has all links to social media, as well as any copyright content necessary for the company

