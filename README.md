# Origami: _A fancy [ghost](https://ghost.org) theme_

[![Ghost version](https://img.shields.io/badge/Ghost-0.11.x-yellow.svg?style=flat-square)](https://ghost.org/)
[![Ghost version](https://img.shields.io/badge/Ghost-1.0.x-yellow.svg?style=flat-square)](https://ghost.org/)
[![Github All Releases](https://img.shields.io/github/downloads/if-Team/origami/total.svg?style=flat-square)](https://github.com/if-Team/origami/releases)
[![Release Version](https://img.shields.io/github/release/if-Team/origami.svg?style=flat-square)](https://github.com/if-Team/origami/releases)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

<img src="/resources/origami-logo.png" width="200rem">

## Warning
 * To apply this theme, you should turn on public api setting in labs.

## Usage
### Use it by cloning
 ```
 $ git clone https://github.com/if-Team/origami.git
 $ git submodule init
 $ git submodule update --recursive
 $ npm install
 $ npm run build --production
 ```

### Use it by downloading from releases
1. [Download origami](https://github.com/if-Team/origami/releases)
2. Upload to server.
3. Unzip and restart ghost. (If you didn't upload via ghost settings.)
4. Activate origami

### Disqus Integration
```html
<script>
    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = '//EXAMPLE.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
```


#### Comment Count Integration

```html
<script id="dsq-count-scr" src="//EXAMPLE.disqus.com/count.js" async></script>
```

In code injection settings, please add these things and change EXAMPLE to your disqus site name.
You can get this code on admin tab of disqus, too!

### Changing font
```html
<style>
.site-footer, .pagination, .page-number,
h1, h2, h3, h4, h5, h6, button,
.main-nav a, .nav-title, .nav-link span,
.subscribe-button, .page-title {
    font-family: 'Title font here', sans-serif;
}

.gh-subscribe-rss,
body, textarea, select, input,
.nav-desc, .page-description,
.post-meta,
.author-profile .author-meta,
.read-next-story .post:before {
    font-family: 'Content font here', sans-serif;
}

code, tt, pre, kbd, samp {
    font-family: 'Code font here', monospace;
}
</style>
```
Add this code to code injection settings and change font-family into your desired font.

## [Preview](https://blog.khinenw.tk)
### Desktop
![Desktop Preview](/resources/origami-screenshot.png)
### Mobile  
![Mobile Preview](/resources/origami-screenshot-mobile.png)

## Copyright & License

Copyright (c) 2017 Ghost Foundation, if-Team - Released under the [MIT license](LICENSE).
