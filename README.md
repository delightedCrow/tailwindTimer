# SessionTimer

 ![Screenhot of SessionTimer](/src/img/screenshot.png)

A simple timer for keeping track of your Pomodoro (or other timed) sessions, built with TailwindCSS.

**[▶️ Play with the demo here.](https://timer.delightedcrow.dev)**

## Tips For Streaming The Timer Over Zoom Screen Sharing

### Sharing Sound

> WARNING - the share sound option will share *ALL* sounds played from your computer, not just the sounds from the timer. As of this writing, zoom doesn't let you isolate sound sharing to just one tab or app during screen share.

If you're streaming the timer over zoom and want to share the timer sounds too, make sure you check the `Share sound` box at the bottom left of the share menu:

![Screenhot of SessionTimer](/src/img/screen_share_with_zoom.png)

You can also turn sound sharing on and off during screen sharing from the `More` menu:

![Screenhot of SessionTimer](/src/img/screen_share_zoom_audio.png)

### Use an App Container Like FluidApp

Share your SessionTimer over zoom without showing all your bookmarks and open browser tabs by using an app container like [FluidApp](https://fluidapp.com/) (MacOS).

FluidApp works by encapsulating a web page in its own app window, so it behaves more like a native mac app. No more bulky browser UI, plus you can create a dock or desktop icon to launch it:

![Screenhot of SessionTimer](/src/img/screen_with_icon.png)

Never worry about people judging your messy browser bookmarks during a screen share again 😉.

## Acknowledgements & Credits

Thanks to the following projects that produced some of the cool assets used in this project:

- All timer sound effects used in this project are from [Mixkit Sound Effects](https://mixkit.co/free-sound-effects).
- The icons are from [Feather Icons](https://feathericons.com/).

## Development

This project uses:

- [NPM](https://www.npmjs.com/) for managing development dependencies
- [ViteJS](https://vitejs.dev/) to run the development server and build static assets
- [TailwindCSS](https://tailwindcss.com/) for CSS and styles

Basic commands for setting up the development environment are listed below.

### Install

To install all local dev dependencies:

```bash
npm install
```

### Developer Server

To run the Vite dev server:

```bash
npm run dev
```

### Build and Deploy

To run the build process (and get static assets for deployment):

```bash
npm run build
```
