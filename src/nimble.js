(function() {
    // Define the Nimble object and its methods
    var Nimble = {};

    // Define the render function that takes in the data object and the template string
    Nimble.render = function(data, template, item, options) {
        // Use a regular expression to search for all instances of {{...}} and replace them with the corresponding value from the data object
        var renderedTemplate = template.replace(/\{\{([^}]+)\}\}/g, function(match, key) {
            return typeof data[key] !== 'undefined' ? data[key] : match;
        });


        // If the `loadTemplate` option is true, load the template from the specified URL
        if (options && options.loadTemplate) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', options.loadTemplate);
            xhr.onload = function() {
                renderedTemplate = renderedTemplate.replace(/\{\{\s*template\s*\}\}/g, xhr.responseText);
            };
            xhr.send();
        }

        // Set the innerHTML of the specified item or the default container
        try{if (item || (item.innerHTML === undefined || item.innerHTML === "")) {
            item.innerHTML = renderedTemplate;
        }} catch {
            console.error("No render template found");
        }

        // Return the rendered template if no item was specified
        if (!item) {
            return renderedTemplate;
        }

    };

    Nimble.grab = function(element) {
        if (typeof element === 'string') {
            return document.getElementById(element);
        }

        var result = {};

        for (var key in element) {
            if (element.hasOwnProperty(key)) {
                result[key] = document.getElementById(element[key]);
            }
        }

        return result;
    };

    Nimble.apply = function(parent, elements) {
        var parentEl = typeof parent === 'string' ? document.getElementById(parent) : parent;
        var newElements = {};
    
        for (var key in elements) {
            var el = elements[key];
            var targetEl = typeof el === 'string' ? document.getElementById(el) : el;
    
            if (targetEl) {
                var newEl = targetEl.cloneNode(true);
                if (!parentEl.querySelector('#' + newEl.id)) {
                    parentEl.appendChild(newEl);
                }
                newElements[key] = newEl;
            } else {
                var newEl = document.createElement('div');
                newEl.id = key;
                if (!parentEl.querySelector('#' + key)) {
                    parentEl.appendChild(newEl);
                }
                newElements[key] = newEl;
            }
        }
    
        Object.assign(elements, newElements);
    };
    


    // eventize

    Nimble.event = function(element) {
        var element = Nimble.grab(element)
        element.renderOnClick = function(data, template, target) {
            var listener = function() {
                Nimble.render(data, template, target);
            };
            element.addEventListener("click", listener);
        };
        return element;
    };

    // main event

    Nimble.renderOnClick = function(data, template, element, target) {
        listener = function() {
            Nimble.render(data, template, target);
        };
        if (element) {
            element.addEventListener("click", listener);
        }
    };

    // Define the export method to make the Nimble object available to other scripts
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = Nimble;
    } else {
        window.Nimble = Nimble;
    }
})();