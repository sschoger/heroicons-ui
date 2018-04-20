# Ligatures via JS

The Javascript in this file is designed to allow an easier, more compact HTML experience using the wonderful SVGs in this project.

```html
<i class="hi hi-check-circle"></i>
```

## Usage

In order to use this feature, all you need to do is put this line at the end of your page's body:

```html
<script src="./heroicons.min.js"></script>
```

If you want your icons to match the color and text size of its context, here is some CSS that does this nicely. You can also use the `.hi` class to style icons.

```css
.hi svg {
    width:1em;
    height:1.5em;
    vertical-align:text-top;
    fill:currentColor;
}
```

Minified:

```css
.hi svg {width:1em;height:1.5em;vertical-align:text-top;fill:currentColor}
```

*Note: icons look best at their native 24px by 24px size.*

## Development Notes

Javascript formatted with [Prettier](https://prettier.io) and compressed with YUI Compressor.

### Performance Choices

Right now the package is averaging around 20 milliseconds on a page that tests every icon, all 114 of them. We would be thrilled to be proven wrong on these points with new contributions. Nobody wants an icon/font flash.

- Icons handled in order from top to bottom.
- Classes in each element are checked from last, which is slightly faster and heuristically better for the expected syntax.
- SVGs are concatinated to reduce filesize, since this is likely the biggest bottleneck. Concatination is done with string adding since it is nearly as performant as template literals with complete browser support.
- SVGs are inserted via innerHTML because it is faster than using a replaceChild method and it allows for easier styling.
