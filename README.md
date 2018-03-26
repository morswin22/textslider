# textslider
A text slider object (using jQuery)

## How to use
`createSlider` method returns a new text slider object from given jQuery selector or false when an error had occurred.

```js
// example
let slider = createSlider($('#mySlider'));
if (slider) {
  // code using slider
}
```

Text slider object comes with two functions:
* `dir` - which takes LEFT or RIGHT constant as an argument
* `animate` - which starts the animation

```js
// example
let slider = createSlider($('#mySlider'));
if (slider) {
  slider.dir(RIGHT);
  slider.animate();
}
```
