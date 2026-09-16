# Matt Martori — GitHub Pages

The root serves the built personal site from the sibling `matt-martori-site` project. The previous root gravity simulation is at `/interactive-grav/`. Other project directories retain their existing URLs.

To refresh the root from the source project (Node 20+):

```sh
cd ../matt-martori-site
SITE_URL=https://matttt.github.io npm run check
rsync -av dist/ ../matttt.github.io/
```

Do not use `rsync --delete`: this repository also hosts independent projects. Remove obsolete generated routes explicitly when needed. Review, commit, and push this repository to publish updates.

The root `.nojekyll` makes the build directly servable by GitHub Pages. Only generated public files are copied here; editable content and build scripts remain in `matt-martori-site`.
