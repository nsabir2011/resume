import { defineConfig } from 'astro/config';

const githubOwner = process.env.GITHUB_REPOSITORY_OWNER;
const githubRepository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isRootPagesRepository =
  githubOwner && githubRepository === `${githubOwner}.github.io`;

const site =
  process.env.SITE_URL ??
  (githubOwner ? `https://${githubOwner}.github.io` : undefined);

const base =
  process.env.BASE_PATH ??
  (githubRepository && !isRootPagesRepository ? `/${githubRepository}` : '/');

export default defineConfig({
  output: 'static',
  site,
  base,
  trailingSlash: 'always',
});
