'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [6061],
  {
    67973: (e, t, a) => {
      a.r(t), a.d(t, { default: () => g })
      a(96540)
      var s = a(34164),
        r = a(1003),
        i = a(17559),
        n = a(10781),
        l = a(72857),
        d = a(68e3),
        o = a(86896),
        c = a(12153)
      const p = { mdxPageWrapper: 'mdxPageWrapper_j9I6' }
      var m = a(74848)
      function g(e) {
        const { content: t } = e,
          { metadata: a, assets: g } = t,
          { title: h, editUrl: x, description: j, frontMatter: u, lastUpdatedBy: _, lastUpdatedAt: A } = a,
          { keywords: v, wrapperClassName: w, hide_table_of_contents: b } = u,
          f = g.image ?? u.image,
          k = !!(x || A || _)
        return (0, m.jsx)(r.e3, {
          className: (0, s.A)(w ?? i.G.wrapper.mdxPages, i.G.page.mdxPage),
          children: (0, m.jsxs)(n.A, {
            children: [
              (0, m.jsx)(r.be, { title: h, description: j, keywords: v, image: f }),
              (0, m.jsx)('main', {
                className: 'container container--fluid margin-vert--lg',
                children: (0, m.jsxs)('div', {
                  className: (0, s.A)('row', p.mdxPageWrapper),
                  children: [
                    (0, m.jsxs)('div', {
                      className: (0, s.A)('col', !b && 'col--8'),
                      children: [
                        (0, m.jsx)(o.A, { metadata: a }),
                        (0, m.jsx)('article', { children: (0, m.jsx)(l.A, { children: (0, m.jsx)(t, {}) }) }),
                        k &&
                          (0, m.jsx)(c.A, {
                            className: (0, s.A)('margin-top--sm', i.G.pages.pageFooterEditMetaRow),
                            editUrl: x,
                            lastUpdatedAt: A,
                            lastUpdatedBy: _,
                          }),
                      ],
                    }),
                    !b &&
                      t.toc.length > 0 &&
                      (0, m.jsx)('div', {
                        className: 'col col--2',
                        children: (0, m.jsx)(d.A, {
                          toc: t.toc,
                          minHeadingLevel: u.toc_min_heading_level,
                          maxHeadingLevel: u.toc_max_heading_level,
                        }),
                      }),
                  ],
                }),
              }),
            ],
          }),
        })
      }
    },
    68e3: (e, t, a) => {
      a.d(t, { A: () => l })
      var s = a(78478),
        r = a(50155),
        i = a(67763),
        n = a(74848)
      function l(e) {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(s.A, {
              children: () => {
                if (!window.location.pathname.startsWith('/docs')) return null
                const { metadata: e } = (0, r.useDoc)(),
                  { editUrl: t } = e
                return (0, n.jsx)('a', {
                  style: { display: 'block', marginBottom: '1rem' },
                  href: `https://gitpod.io/#${t.replace('edit', 'blob')}`,
                  target: '_blank',
                  rel: 'noreferrer noopener',
                  children: (0, n.jsx)('img', {
                    src: 'https://gitpod.io/button/open-in-gitpod.svg',
                    alt: 'Open in Gitpod',
                  }),
                })
              },
            }),
            (0, n.jsx)(i.A, { ...e }),
          ],
        })
      }
    },
  },
])
