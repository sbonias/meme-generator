# react-meme-generator

# User Story

An application where users can generate a visual meme (image with text on them), images from common memes on the internet will be used, user will be able to select an image, then add text to said image, save to local storage, that can be accessed later.

-Library of images (that user can choose from)
-Users to choose 1 image from the library
-Users can add text to image

# Features

-What is our MVP (Minimum Viable Product)?
-User can add text to an image
-White text w/ black shadow (generic meme font)

-Users can save their memes
-MVP = Local Storage
-Long Term = API w/ database (not sure if we will get there)

-Bonus Features?
-Users can select:
-Text colors
-Text fonts
-Text accents

# Structure

-At least 2 pages
-page 1 of 2 = Meme creation
-page 2 of 2 = Meme details
-page maybe 3 = Meme edit page
-page maybe 4 = Meme saved library

# Components via wire-framing

- Meme Creation Page
  -Navbar at top with App Name (Memerator) and page links to the right
  -View library of images (for selection)
  -Strip of images in sidebar on right hand side where users can pick the images they want
  -Middle of page will display the meme being edited (below navbar)
  -Below this will be the text input field to allow user to enter text
  -2 inputs
  -1 for top of meme text
  -2 for bottom of meme text
  -optionally add color controls to the right of the input fields(for text color selections)
  -Will like require a save button at the top of the gallery

Open questions (decision time)
-once selected will they be able to reselect another image and overlay the existing image?
-once selected should I make the gallery of images unclickable until a button is selected to reactivate it?
-can't change the location of the text (in our iteration of this app due to time constraints)

- Meme Details Page
- Navbar
- Meme being viewed
- Create Date
- Bakcground Image
- Meta Info

# Major components based on wire-framing

- Meme Creation Page component
  - Nav
  - Meme Current
  - Meme Image Gallery
  - Meme Form
  - Image
- Meme Details Page components
  - Nav (already exists)
  - Meme Current (already exists)
  - Meta

-Meme Edit Page (if needed)
-Meme Library (if needed)

# Building the app

- create images folder under public folder
  -add in the images.jpg files Dave provided

- create data folder under src folder
  -add memes.json file

- delete stuff we don't need
  -all test related files
  -logo
  -update app.js by removing the logo imported code
  -as well as everything inside the div withing the app (keep the div)
  -service worker
  -update index.js by removing the service worker related code

* you don't have to but if you're not going to use it, get rid of it

# Scaffold out your app

- build out folder structure for components

- add components folder in src directory

- add pages folder in src directory

  - Meme Creation
    -MemeCreation.js
  - Meme Details

- add components
  -ImageGallery.js
  -Meme.js
  -MemeForm.js
  -MemeImage.js
  -MemeMeta.js
  -MemeMeta.js
  -Nav.js

