Drag and drop functionality in JavaScript allows users to click on an element, drag it to a different location, and drop it there. This feature is commonly used in web applications for tasks like rearranging items in a list, moving files, and interactive games. Let's break down the process step by step.


## Basic Steps for Drag and Drop

1. Make an Element Draggable
2. Define Drag Events
3. Define Drop Events



### 1. Make an Element Draggable

To make an element draggable, you need to set its draggable attribute to true.

```html

<div id="dragItem" draggable="true">Drag me!</div>

```

### 2. Define Drag Events

You need to handle the following events for the draggable element:

- dragstart : Fired when the dragging starts.
- drag : Fired continuously while the element is being dragged.
- dragend : Fired when the dragging ends.

At the dragend position it leaves the text instance
```javascript

//take the element to drag
const dragItem = document.getElementById('dragItem');

//handle the element when graging start
dragItem.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', event.target.id);
  event.target.style.opacity = 0.5;
});

dragItem.addEventListener('dragend', (event) => {
  event.target.style.opacity = 1;
});

```

- The dragstart event is fired when the user starts dragging the element.when this event happen target this function or run this function
- Inside function "event" object passed in it contain the detail about event.
-  The dataTransfer property is an object associated with the drag event. It holds the data being dragged and provides methods to manipulate that data.
-  setData('text/plain', ...): This method sets the data to be dragged. The first argument, 'text/plain', is the data type. Here, it specifies that we're transferring plain text.
-  event.target.id :- target the id of the element that we are dragging.
-  Essentially, this line ensures that the ID of the dragged element is stored in the dataTransfer object. This ID can later be retrieved during the drop event to identify which element was dragged.
-  Decrease the opacity of the element when dragstart event is trigered.
-  Drag at the same place ---- with full opacity






# Next chapter

















