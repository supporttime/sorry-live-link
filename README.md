sorry-live-link
===============

This is a small and basic draft for a jQuery dependant JS snippet which turns a static status page link in to something dynamic which displays a message based on the real status of the taget page.

To use this simple drop the lib in to your chosen project and add a class of **live-status** to your status page link, and ensure that the **href** points to the currect URL for your page.

```html
<a href="http://{{your-subdomain}}.sorryapp.com/" class="live-status">View Our Service Status</a>
```