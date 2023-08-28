# JavaScript Mini-Project Practice

## A repo of small projects for improving plain JS skills

Based on John Smilga's repo for source code in conjunction with FreeCodeCamp's video tutorials found [here](https://www.youtube.com/watch?v=3PHXvlpOkf4&t=467s&ab_channel=freeCodeCamp.org).

His repo can be found [here](https://github.com/john-smilga/javascript-basic-projects/tree/master)

## Projects

- **Color Flipper 🌈** : randomly generates a background colour either from a predefined list or randomly generates on the fly a hex code combination. Learn about DOM manipulation.
- **Counter App 🧮**: increase, decrease, reset features. Learn about state management.
- **Reviews Dialog Slider 🌠**: slider buttons to move the dialog forward and reverse. Randomiser button. State management.
- **Responsive Navbar🧭**: most of this is css controlled responsive design. It contains a hamburger icon on mobile which toggles the mobile menu.
- **Sidebar toggle 📤 📥**: similar to before, toggling some markup on and off canvas by switching a classname on and off.
- **Basic Modal 💬**: similar to before, toggling some styles in a classname on and off using button event listeners. Added bg-image switch.
- **Basic Accordion 🪗**: learned to use some event properties I hadn't used before in order to traverse the DOM and trigger the accordion open section when the + icon is clicked.
- **Menu **: Couldn't complete this one in the first attempt and wasn't sure whether using innerHTML is a valid solution to inject a load of content to filter options. Will revisit this to see if there is a more manageable/maintainable solution in the future.
- **Video Custom Player 🎥**: This was good practice with the video web api. I learned that you can create your own video controls to manipulate the existing HTML5 default controls (give it more functionality). The app also shows a basic implementation of a loader screen which shows before the whole content is loaded. Useful if the page contains heavy processing such as a video.
- **Scroll Links, scroll-to-top 📜**: Good project to refresh on using JS to activate elements when user scrolls.
- **Tabs 🗂️**: an important app to demonstrate connecting interactivity of two independent markup: button group and tab content. Use of event target object to reference the element that was clicked.
- **Countdown Timer ⏰**: updating textContent for a countdown. Re-watch video for more in-depth manipulation of the new Date() constructor obj. In hindsight, it would have been more maintainable for the code, to compare a future date of choice set in the appropriate format and subtract the current date from it. Run setInterval on this calculation every second.
- **Lorem Generator 📝**: learned that the input number field value returned from a form event object, is a string value so needs to be converted to number type for manipulation. I removed the need for handling negative numbers by just adding min attr to the input field. For input value greater than the array of lorem data, the limited feature will just output all items in the array.
- **To Do App 🗒️**: I did not do the grocery bud application as I previously have completed a to-do-list project utilising JS's localstorage API.
- **Image Slider / Carousel 🎠**: Couldn't work this one out independently. Glad I didn't spend more than half hour trying to figure it out because looking at John's clever solution, which used a nifty forEach() with two parameters and use of a flag variable, I wouldn't have come to this conclusion on my own. He also included functionality to deal with movement outside the range of image list items and some show/hide feature of the buttons when you get to the end or start of the carousel slider.
