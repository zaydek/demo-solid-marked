import { Step1, Step2, Step3, Step4 } from "./Steps"

# How to create the perfect button

Let’s say we wanted to create a button component. How would we start?

<Step1 />

```js
console.log("hello, world!")
```

What about a hover state?

<Step2 />

Try hovering the button to see the new background-color. Also note that the cursor becomes a pointer on hover.

Now there’s one more state we’re missing which is otherwise known as the `:active` state.

## The `:active` state

The `:active` state is responsible for rendering custom styles when a user is clicking or tapping on an element. We’re actually going to take things one step further by using the compound pseudo selector `:hover:active`.

There is a subtle difference between `:active` and `:hover:active`. When you use `:hover:active`, the `:active` styles are dependent on the presence of `:hover` as well. This means that we only want to enable these styles if we are hovering and pressing down on an element. An example of why you would want this is because if you click and hold an element and start to move the cursor off the element but don’t release the cursor, the element will still draw `:active` styles. `:hover:active` gets around this which is what we want.

<Step3 />

Now what about sizing. How can we describe a button for different sizes?

<Step4 />
