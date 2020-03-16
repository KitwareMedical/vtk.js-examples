# VTK.js examples

This repository contains VTK.js examples used in the VTK.js+OHIF tutorials. A
link will be provided to the final slides (to be inserted).
 
## Examples overview

There are a few examples in this repo. They are listed below:
- `standalone.html`: A self-contained example that renders a cone. Useful as a playground and prototyping.
- `src/cone.js`: Same result as `standalone.html`, but using a webpack build approach. Good base for
  further application development.
- `src/cone-filter.js`: Example that demonstrates VTK.js filters.
- `src/volume.js`: Example that demonstrates basic volume rendering without transfer functions. Refer to
  the transfer function volume example for a complete rendering example.
- `src/volume-transfer.js`: Example that demonstrates basic volume rendering with transfer functions.
- `src/image-slicing.js`: Example that demonstrates volume slicing and interaction.
- `src/widgets.js`: Example that demonstrates a volume cropping widget.

## Building the examples

For `standalone.html`, no build instructions are required. Just load it up in your browser!

For the rest of the examples, you first must install the npm packages by running the following:
```
npm install
```

Once you've run that, you can now run one of the example projects:
- `npm run dev:cone`
- `npm run dev:cone-filter`
- `npm run dev:volume`
- `npm run dev:volume-transfer`
- `npm run dev:image-slicing`
- `npm run dev:widgets`

Running the above commands will use the webpack-dev-server, which will watch
the transpiled files and reload the page whenever changes occur. Once run, you can see
the results at http://localhost:8080/.
