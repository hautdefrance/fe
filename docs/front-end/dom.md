# _DOM_

## Element

### Element.offsetTop

> The HTMLElement.offsetTop read-only property returns the distance of the current element relative to the top of the offsetParent node.

### Element.clientTop

> The width of the top border of an element in pixels. It is a read-only, integer property of element.

### Window's height

``` js
// jQuery
$(window).height()

// Native
window.innerHeight
```

## Offset

``` js
// jQuery
$el.offset();

// Native
function getOffset (el) {
  const box = el.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset - document.documentElement.clientTop,
    left: box.left + window.pageXOffset - document.documentElement.clientLeft
  };
}
```



