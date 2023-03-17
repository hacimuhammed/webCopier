To use it, simply type the following into the console:

```ruby
(function () {
    var url = "https://gozel.me/webCopier.js";
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url;
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();

```
