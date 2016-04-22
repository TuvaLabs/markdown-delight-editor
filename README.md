# markdown-delight-editor

[![Build Status](https://travis-ci.org/TuvaLabs/markdown-delight-editor.svg?branch=master)](https://travis-ci.org/TuvaLabs/markdown-delight-editor/)

A markdown editor (Polymer Component)

![markdown-delight-editor](https://raw.githubusercontent.com/TuvaLabs/markdown-delight-editor/master/static/markdown.png)

# Install:
Install the component using Bower:

```
bower install markdown-delight-editor
```

# Usage:

Import Web Components polyfill:

```
<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
```

Import Markdown Delight Editor Element:

```
<link rel="import" href="bower_components/markdown-delight-editor/markdown-delight-editor.html">
```

Use the component:

```
<markdown-delight-editor>
	<textarea name="makedtext">This is **marked** text</textarea>
</markdown-delight-editor>
```
