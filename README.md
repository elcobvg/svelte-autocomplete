# svelte-typeahead
Lightweight typeahead / autocomplete component made with [Svelte.js](https://svelte.technology/)

## Install

`npm install svelte-typeahead`

## Usage

Import the component directly in your Svelte project.

````javascript
import TypeAhead from 'svelte-typeahead'

export default {
  components: {
    TypeAhead,
	...
  }
}
````
And then use it like so:

````html
<TypeAhead name="fruits" items="{fruits}" minChar="2" />
````

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | Form input name
| items | Array | - | Array with items, can be a plain list or key, value pairs
| isAsync | String | - | API url for retrieving data asynchronously
| minChar | Number | 2 | Min. characters to type before popup shows
| maxItems | Number | 10 | Max. items to show in popup
| fromStart | Boolean | true | Match from the start or anywhere in the string

## Made with Svelte
It's made with [Svelte](https://svelte.technology/), which means you don't need any JS framework. Just use the `index.js` file in any Javascript project:

**include the bundle:** 

````html
<script src="svelte-typeahead/index.js"></script>
````
**create component like so:**

````javascript
const typeAhead = new Typeahead({
  target: document.querySelector('#app'),
  data: { 
    name: 'fruits',
    itemStart: 1,
    items: [...]
  }
})
````