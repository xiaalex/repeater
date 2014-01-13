## Repeater

A simple jQuery repeater plugin to create the functionality like repeater control in WebForm.

## Usage

First include jQuery theme.

```html
<link type="text/css" href="lib/jquery-ui-themes-1.10.3/themes/smoothness/jquery-ui.css" rel="stylesheet" />
<link type="text/css" href="lib/jquery-ui-portlet/themes/base/jquery.ui.repeater.css" rel="stylesheet" />
```

Include jQuery script.

```html
<script type="text/javascript" src="lib/jquery-1.10.2/jquery-1.10.2.js"></script>
<script type="text/javascript" src="lib/jquery-ui-1.10.3/ui/jquery-ui.js"></script>
<script type="text/javascript" src="lib/jquery-ui-portlet/ui/jquery.ui.repeater.js"></script>
```

Add following to create the repeater.

```javascript
$("#repeater").repeater();
```

Add following for a sample repeater content.

```html
<div id="repeater">
  <div>Content Header</div>
  <div>Feeds</div>
  <div>News</div>
  <div>Shopping</div>
  <div>Links</div>
  <div>Images</div>
</div>
```

The first element is the header for the repeater. Any missing libraries can be found in Portlet repository.

That's it. Enjoy.

## Authors

[Alex Xia](https://github.com/xiaalex)

