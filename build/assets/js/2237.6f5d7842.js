'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [2237],
  {
    23363: (e, t, s) => {
      s.d(t, { A: () => h })
      s(96540)
      var i = s(34164),
        n = s(21312),
        o = s(51107),
        a = s(74848)
      function h(e) {
        let { className: t } = e
        return (0, a.jsx)('main', {
          className: (0, i.A)('container margin-vert--xl', t),
          children: (0, a.jsx)('div', {
            className: 'row',
            children: (0, a.jsxs)('div', {
              className: 'col col--6 col--offset-3',
              children: [
                (0, a.jsx)(o.A, {
                  as: 'h1',
                  className: 'hero__title',
                  children: (0, a.jsx)(n.A, {
                    id: 'theme.NotFound.title',
                    description: 'The title of the 404 page',
                    children: 'Page Not Found',
                  }),
                }),
                (0, a.jsx)('p', {
                  children: (0, a.jsx)(n.A, {
                    id: 'theme.NotFound.p1',
                    description: 'The first paragraph of the 404 page',
                    children: 'We could not find what you were looking for.',
                  }),
                }),
                (0, a.jsx)('p', {
                  children: (0, a.jsx)(n.A, {
                    id: 'theme.NotFound.p2',
                    description: 'The 2nd paragraph of the 404 page',
                    children:
                      'Please contact the owner of the site that linked you to the original URL and let them know their link is broken.',
                  }),
                }),
              ],
            }),
          }),
        })
      }
    },
    82237: (e, t, s) => {
      s.r(t), s.d(t, { default: () => r })
      s(96540)
      var i = s(21312),
        n = s(1003),
        o = s(10781),
        a = s(23363),
        h = s(74848)
      function r() {
        const e = (0, i.T)({ id: 'theme.NotFound.title', message: 'Page Not Found' })
        return (0, h.jsxs)(h.Fragment, {
          children: [(0, h.jsx)(n.be, { title: e }), (0, h.jsx)(o.A, { children: (0, h.jsx)(a.A, {}) })],
        })
      }
    },
  },
])
