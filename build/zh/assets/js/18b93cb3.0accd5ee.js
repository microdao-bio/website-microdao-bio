'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [4828],
  {
    50079: (e, s, t) => {
      t.r(s), t.d(s, { default: () => d })
      var o = t(28774),
        n = t(10781),
        i = t(34164)
      const r = [
          { version: '2.6.2', date: '2023.08.23' },
          { version: '2.5.2', date: '2023.04.13' },
          { version: '2.4.3', date: '2022.11.20' },
        ],
        a = ['2.3.3', '2.2.3', '2.1.8', '2.0.7', '1.2.4', '1.1.4', '1.0.3', '0.9.1'],
        c = { viewNextDoc: 'viewNextDoc_Jode', cardCol: 'cardCol_oK8h' }
      var l = t(74848)
      const h = 'All Versions of Chaos Mesh'
      function d() {
        return (0, l.jsx)(n.A, {
          title: 'Versions',
          description: h,
          children: (0, l.jsx)('div', {
            className: 'hero',
            children: (0, l.jsxs)('div', {
              className: 'container',
              children: [
                (0, l.jsx)('h1', { children: h }),
                (0, l.jsx)('p', {
                  children:
                    'Each version of Chaos Mesh will have its fixed support cycle. As we continue to develop and iterate, some versions will be phased out over time. We will keep the last three stable and development versions in the official documentation, and the rest will be archived.',
                }),
                (0, l.jsxs)('p', {
                  children: [
                    'You can learn more about our version support via ',
                    (0, l.jsx)(o.A, { to: '/supported-releases', children: 'Supported Releases' }),
                    '.',
                  ],
                }),
                (0, l.jsx)('h2', { children: 'Development version' }),
                (0, l.jsxs)('p', {
                  children: [
                    'The development version is the latest version of Chaos Mesh. It is under active development and may be unstable. ',
                    (0, l.jsx)('strong', { children: 'It is not recommended to use it in production' }),
                    '.',
                  ],
                }),
                (0, l.jsx)(o.A, {
                  to: '/docs/next',
                  className: (0, i.$)('button button--outline button--primary margin-right--sm', c.viewNextDoc),
                  children: 'View Documentation',
                }),
                (0, l.jsx)(o.A, {
                  to: 'https://github.com/chaos-mesh/chaos-mesh/commits/master',
                  className: 'button button--outline button--primary',
                  children: 'Recent Commits',
                }),
                (0, l.jsx)('h2', { className: 'margin-top--lg', children: 'Stable versions' }),
                (0, l.jsx)('p', {
                  children:
                    'The stable versions are the latest three versions of Chaos Mesh. They are stable and recommended to use in production.',
                }),
                (0, l.jsx)('div', {
                  className: 'row',
                  children: r.map((e, s) =>
                    (0, l.jsx)(
                      'div',
                      {
                        className: (0, i.$)('col col--4', c.cardCol),
                        children: (0, l.jsxs)('div', {
                          className: 'card shadow--md',
                          children: [
                            (0, l.jsx)('div', {
                              className: 'card__header',
                              children: (0, l.jsxs)('h3', {
                                children: ['v', e.version, s === r.length - 1 && ' (Unsupported)'],
                              }),
                            }),
                            (0, l.jsx)('div', {
                              className: 'card__body',
                              children: (0, l.jsxs)('p', {
                                children: ['Release Date: ', (0, l.jsx)('b', { children: e.date }), '.'],
                              }),
                            }),
                            (0, l.jsx)('div', {
                              className: 'card__footer',
                              children: (0, l.jsxs)('div', {
                                className: 'button-group',
                                children: [
                                  (0, l.jsx)(o.A, {
                                    to: '/docs' + (0 === s ? '' : '/' + e.version),
                                    className: 'button button--outline button--primary',
                                    children: 'Documentation',
                                  }),
                                  (0, l.jsx)(o.A, {
                                    to: `https://github.com/chaos-mesh/chaos-mesh/releases/tag/v${e.version}`,
                                    className: 'button button--outline button--primary',
                                    children: 'Release Notes',
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      },
                      e.version
                    )
                  ),
                }),
                (0, l.jsx)('h2', { className: 'margin-top--lg', children: 'Archived versions' }),
                (0, l.jsxs)('p', {
                  children: [
                    'The archived versions are the versions of Chaos Mesh that are no longer supported.',
                    ' ',
                    (0, l.jsx)('strong', {
                      children: 'We recommand you to upgrade to the latest stable version if possible',
                    }),
                    '.',
                  ],
                }),
                (0, l.jsx)('table', {
                  children: (0, l.jsx)('tbody', {
                    children: a.map((e, s) =>
                      (0, l.jsxs)(
                        'tr',
                        {
                          children: [
                            (0, l.jsxs)('th', { scope: 'row', children: ['v', e] }),
                            (0, l.jsx)('td', {
                              children: (0, l.jsx)(o.A, {
                                to: 'https://chaos-mesh-website-archived.netlify.app/docs' + (0 === s ? '' : '/' + e),
                                className: 'button button--outline button--primary',
                                children: 'Documentation',
                              }),
                            }),
                            (0, l.jsx)('td', {
                              children: (0, l.jsx)(o.A, {
                                to: `https://github.com/chaos-mesh/chaos-mesh/releases/tag/v${e}`,
                                className: 'button button--outline button--primary',
                                children: 'Release Notes',
                              }),
                            }),
                          ],
                        },
                        e
                      )
                    ),
                  }),
                }),
              ],
            }),
          }),
        })
      }
    },
  },
])
