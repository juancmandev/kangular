require('zone.js/dist/zone-node');
require('reflect-metadata');

const { join } = require('path');
const { enableProdMode } = require('@angular/core');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');
const { renderModuleFactory } = require('@angular/platform-server');

const {
    AppServerModuleNgFactory,
    LAZY_MODULE_MAP
} = require(`./dist/server/main`);

const fs = require('fs-extra');

const ROUTES = [
    '/', 
    '/customers',
    '/customers/KT3Vt26g7tO7mFvwgIQ4',
    '/kanban',
    '/login',
];

(async function() {
    enableProdMode();

    const views = 'dist/browser';
    const index = await fs.readFile(join(views, 'index.html'), 'utf8');
  
    for (const route of ROUTES) {
      const pageDir = join(views, route);
      await fs.ensureDir(pageDir);
  
      const html = await renderModuleFactory(AppServerModuleNgFactory, {
        document: index,
        url: route,
        extraProviders: [provideModuleMap(LAZY_MODULE_MAP)]
      });
  
      await fs.writeFile(join(pageDir, 'index.html'), html);
    }
  
    process.exit();
  })();
