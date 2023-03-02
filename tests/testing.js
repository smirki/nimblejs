// Define test data and template
var testData = {
    name: 'John',
    age: 25
};

var testTemplate = '<div>{{name}} is {{age}} years old.</div>';

// Test render method
var testRender = function() {
    var container = document.createElement('div');
    Nimble.render(testData, testTemplate, container);
    var expectedHTML = '<div>John is 25 years old.</div>';
    if (container.innerHTML === expectedHTML) {
        console.log('Render test passed!');
    } else {
        console.error('Render test failed:', container.innerHTML);
    }
};

// Test grab method
var testGrab = function() {
    var element = document.createElement('div');
    element.id = 'testElement';
    document.body.appendChild(element);
    var result = Nimble.grab('testElement');
    if (result === element) {
        console.log('Grab test passed!');
    } else {
        console.error('Grab test failed:', result);
    }
};

// Test apply method
var testApply = function() {
    var parent = document.createElement('div');
    parent.id = 'testParent';
    document.body.appendChild(parent);
    var elements = {
        testElement1: 'testElement1',
        testElement2: 'testElement2'
    };
    Nimble.apply(parent, elements);
    var expectedHTML = '<div id="testElement1"></div><div id="testElement2"></div>';
    if (parent.innerHTML === expectedHTML) {
        console.log('Apply test passed!');
    } else {
        console.error('Apply test failed:', parent.innerHTML);
    }
};

// Test event method
var testEvent = function() {
    var container = document.createElement('div');
    var button = document.createElement('button');
    button.id = 'testButton';
    container.appendChild(button);
    document.body.appendChild(container);
    Nimble.event('testButton').renderOnClick(testData, testTemplate, container);
    button.click();
    var expectedHTML = '<div>John is 25 years old.</div>';
    if (container.innerHTML === expectedHTML) {
        console.log('Event test passed!');
    } else {
        console.error('Event test failed:', container.innerHTML);
    }
};

// Test renderOnClick method
var testRenderOnClick = function() {
    var container = document.createElement('div');
    var button = document.createElement('button');
    button.id = 'testButton2';
    container.appendChild(button);
    document.body.appendChild(container);
    Nimble.renderOnClick(testData, testTemplate, button, container);
    button.click();
    var expectedHTML = '<div>John is 25 years old.</div>';
    if (container.innerHTML === expectedHTML) {
        console.log('RenderOnClick test passed!');
    } else {
        console.error('RenderOnClick test failed:', container.innerHTML);
    }
};

// Run tests
testRender();
testGrab();
testApply();
testEvent();
testRenderOnClick();
