
🚀 Nimble.js
============

Nimble.js is a simple JavaScript templating library that allows you to dynamically inject content into HTML pages using a template string and a data object. With Nimble.js, you can create dynamic web pages and user interfaces that respond to user input without the need for a complicated framework.

💻 Usage
--------

Using Nimble.js is easy! Simply include the Nimble.js file in your HTML file and use the `Nimble.render()` method to render your templates. Here's an example:
    
    `// Define your data object
    var data = {
      name: "John Doe",
      age: 30
    };

    // Define your template string
    var template = "<h1>{{name}}</h1><p>{{age}} years old</p>";
    
    // Render the template with your data
    Nimble.render(data, template);`

This will replace the `{{name}}` and `{{age}}` placeholders in the template string with the corresponding values from the data object and inject the resulting HTML into the default container (i.e., the body of the HTML document).

You can also specify a target element where the rendered template should be injected by passing in the target element as a third parameter:

`var targetElement = document.getElementById("myTargetElement");
Nimble.render(data, template, targetElement);`

Nimble.js also provides a `Nimble.event()` method that allows you to set up click event listeners that render templates when triggered. Here's an example:


    var button = Nimble.event("myButton");
    button.renderOnClick(data, template, "myTargetElement");`

This will set up a click event listener on the button with ID "myButton" that renders the template with the specified data object to the element with ID "myTargetElement" when clicked.

🎉 Getting Started
------------------

To get started with Nimble.js, simply download the Nimble.js file from the repository and include it in your HTML file:

`<script src="path/to/nimble.js"></script>`

You can also install Nimble.js using npm:

`npm install nimblejs`

📚 Documentation
----------------

Check out the [official documentation](https://github.com/smirki/nimblejs/wiki) to learn more about Nimble.js and its API.

❤️ Contributing
---------------

Contributions are always welcome! If you have an idea for a new feature or find a bug, please open an issue or submit a pull request.

📝 License
----------

Nimble.js is licensed under the MIT License. See the [LICENSE](https://github.com/smirki/nimble-js/blob/main/LICENSE) file for more information.

Give Nimble.js a try and give us a ⭐️ if you find it helpful!