# Wongfengchen Developer Portfolio

A static developer portfolio based on the [official Astro Blog starter](https://astro.build/themes/details/blog/). It brings personal projects, writing, and contact information together in one place. All projects appear together in the Selected Work section, with creator credits where applicable.

## Run locally

```sh
npm install
npm run dev
```

Run `npm run build` to create a production build in `dist/`.

## Add articles and projects

Administrator login is temporarily disabled: `/admin/index.html` displays an
unavailability notice and does not load Decap CMS. To re-enable it, remove the
notice and uncomment the CMS script in `public/admin/index.html`. While it is
disabled, edit the Markdown content files directly.

The following editor instructions apply after login is re-enabled.

The **Editor** link in the footer opens `/admin/index.html`. The editor has separate **Articles** and **Projects** collections. Choose **New Article** or **New Project**, fill in the fields, and save.

For local editing, keep two terminals running from the project directory:

```sh
npm run dev
npm run cms
```

Then open `http://localhost:4321/admin/index.html`. The local CMS writes content files to this Git repository. Changes appear on the site when Astro refreshes. Commit the new files when you are ready to publish.

On a deployed site, the editor requires a GitHub repository and an OAuth authentication provider. Before deploying, update `backend.repo` in `public/admin/config.yml` to the actual `owner/repository`, and configure a GitHub OAuth provider for Decap CMS. Only GitHub accounts with write access can publish. Until that connection is configured, use the local editor.

Articles are stored in `src/content/blog/`; projects are stored in `src/content/projects/`.
The current project list contains MU Origin, King Fish Dragon, Sniper Revenge,
and Robot AI Lab. Previous project entries are preserved in `archive/projects/`,
outside the content loader, and are no longer listed on the site. Existing blog
articles remain available.

Robot AI Lab is presented as a project outline using Unity, Robot, ROS 2, and
Codex. Its original AI-generated concept image is `public/uploads/robot-ai-lab.png`;
it is not a screenshot of an implemented system. The project card links to
`/blog/robot-ai-lab/` for its direction and proposed milestones.

## Add images

In the editor, open an article and use **Cover image** to upload an image for the top of the article. To place images inside the article, use the image button in the **Article** Markdown editor. For a project, use **Project image**. All uploads are stored in `public/uploads/` and served from `/uploads/`.

If you edit files manually, put an image in `public/uploads/` and use `coverImage: /uploads/file.jpg` in an article, `image: /uploads/file.jpg` in a project, or `![Description](/uploads/file.jpg)` in article Markdown.

## Publish an article manually

Add a Markdown file to `src/content/blog/`. Its filename becomes the post URL.

```md
---
title: 'Your post title'
description: 'A short summary'
pubDate: 2026-10-23
---

Write your article here.
```

Commit and push the file to trigger a deployment on your connected hosting service. This project does not include a web editor.

## Update contact details

- Name, email, and GitHub: Edit `src/consts.ts`.

## Deploy

The deployment target is `wfcgame/wfcgame.github.io`, served at
`https://wfcgame.github.io/`. The initial repository creation and Pages setup
must be completed using a GitHub account with access to that repository.

In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.
The workflow in `.github/workflows/deploy.yml` builds and deploys the site on
every push to `main`; it can also be started manually from the Actions tab.
It uses Node.js 24 and the committed npm lockfile.

After the repository is connected, publish changes with:

```sh
git add <changed-files>
git commit -m "Update portfolio"
git push
```

Saving a local file updates the local development server only. The public site
updates after the push and a successful deployment in GitHub Actions. A failed
build leaves the last successful deployment in place.

The default canonical URL, RSS URL, and sitemap use `https://wfcgame.github.io`.
Set `SITE_URL` if you later deploy to a different domain.

## Template credit

Based on the official Astro Blog starter, with a redesigned interface and new content.

## Game development experience

MU Origin, King Fish Dragon, and Sniper Revenge are listed as previous development
contributions, using the portfolio owner’s supplied project names. No specific
role, dates, technology, or ownership is claimed. These cards appear first.

Gameplay previews load YouTube’s privacy-enhanced player only after a click,
with a direct YouTube link available as a fallback. Thumbnail sources:

- MU Origin: https://www.youtube.com/watch?v=-Wc9VDGN1Nk — NEO GGWP (MU ORIGIN 2)
- King Fish Dragon: https://www.youtube.com/watch?v=uDbTvoPoqgA — Gamedemo (Dragon King Fishing)
- Sniper Revenge: https://www.youtube.com/watch?v=XHct1L9AREc — Mr Sniper (Sniper 3D Assassin, Revenge mission)

The linked video titles differ from the supplied project names; the cards retain
those original video titles in their source captions. Local thumbnails in
`public/uploads/` come from the corresponding YouTube video thumbnail endpoints.
