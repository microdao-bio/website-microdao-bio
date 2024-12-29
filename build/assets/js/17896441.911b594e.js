'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [8401],
  {
    26795: (e, t, n) => {
      n.r(t), n.d(t, { default: () => le })
      var s = n(96540),
        a = n(1003),
        i = n(89532),
        o = n(74848)
      const l = s.createContext(null)
      function r(e) {
        let { children: t, content: n } = e
        const a = (function (e) {
          return (0, s.useMemo)(
            () => ({
              metadata: e.metadata,
              frontMatter: e.frontMatter,
              assets: e.assets,
              contentTitle: e.contentTitle,
              toc: e.toc,
            }),
            [e]
          )
        })(n)
        return (0, o.jsx)(l.Provider, { value: a, children: t })
      }
      function c() {
        const e = (0, s.useContext)(l)
        if (null === e) throw new i.dV('DocProvider')
        return e
      }
      function d() {
        const { metadata: e, frontMatter: t, assets: n } = c()
        return (0, o.jsx)(a.be, {
          title: e.title,
          description: e.description,
          keywords: t.keywords,
          image: n.image ?? t.image,
        })
      }
      var m = n(34164),
        u = n(24581),
        h = n(21312),
        b = n(28774)
      function p(e) {
        const { permalink: t, title: n, subLabel: s, isNext: a } = e
        return (0, o.jsxs)(b.A, {
          className: (0, m.A)('pagination-nav__link', a ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'),
          to: t,
          children: [
            s && (0, o.jsx)('div', { className: 'pagination-nav__sublabel', children: s }),
            (0, o.jsx)('div', { className: 'pagination-nav__label', children: n }),
          ],
        })
      }
      function x(e) {
        const { previous: t, next: n } = e
        return (0, o.jsxs)('nav', {
          className: 'pagination-nav docusaurus-mt-lg',
          'aria-label': (0, h.T)({
            id: 'theme.docs.paginator.navAriaLabel',
            message: 'Docs pages',
            description: 'The ARIA label for the docs pagination',
          }),
          children: [
            t &&
              (0, o.jsx)(p, {
                ...t,
                subLabel: (0, o.jsx)(h.A, {
                  id: 'theme.docs.paginator.previous',
                  description: 'The label used to navigate to the previous doc',
                  children: 'Previous',
                }),
              }),
            n &&
              (0, o.jsx)(p, {
                ...n,
                subLabel: (0, o.jsx)(h.A, {
                  id: 'theme.docs.paginator.next',
                  description: 'The label used to navigate to the next doc',
                  children: 'Next',
                }),
                isNext: !0,
              }),
          ],
        })
      }
      function g() {
        const { metadata: e } = c()
        return (0, o.jsx)(x, { previous: e.previous, next: e.next })
      }
      var v = n(44586),
        j = n(48295),
        f = n(17559),
        _ = n(53886),
        A = n(23025)
      const N = {
        unreleased: function (e) {
          let { siteTitle: t, versionMetadata: n } = e
          return (0, o.jsx)(h.A, {
            id: 'theme.docs.versions.unreleasedVersionLabel',
            description: "The label used to tell the user that he's browsing an unreleased doc version",
            values: { siteTitle: t, versionLabel: (0, o.jsx)('b', { children: n.label }) },
            children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.',
          })
        },
        unmaintained: function (e) {
          let { siteTitle: t, versionMetadata: n } = e
          return (0, o.jsx)(h.A, {
            id: 'theme.docs.versions.unmaintainedVersionLabel',
            description: "The label used to tell the user that he's browsing an unmaintained doc version",
            values: { siteTitle: t, versionLabel: (0, o.jsx)('b', { children: n.label }) },
            children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.',
          })
        },
      }
      function C(e) {
        const t = N[e.versionMetadata.banner]
        return (0, o.jsx)(t, { ...e })
      }
      function L(e) {
        let { versionLabel: t, to: n, onClick: s } = e
        return (0, o.jsx)(h.A, {
          id: 'theme.docs.versions.latestVersionSuggestionLabel',
          description: 'The label used to tell the user to check the latest version',
          values: {
            versionLabel: t,
            latestVersionLink: (0, o.jsx)('b', {
              children: (0, o.jsx)(b.A, {
                to: n,
                onClick: s,
                children: (0, o.jsx)(h.A, {
                  id: 'theme.docs.versions.latestVersionLinkLabel',
                  description: 'The label used for the latest version suggestion link label',
                  children: 'latest version',
                }),
              }),
            }),
          },
          children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).',
        })
      }
      function T(e) {
        let { className: t, versionMetadata: n } = e
        const {
            siteConfig: { title: s },
          } = (0, v.A)(),
          { pluginId: a } = (0, j.vT)({ failfast: !0 }),
          { savePreferredVersionName: i } = (0, _.g1)(a),
          { latestDocSuggestion: l, latestVersionSuggestion: r } = (0, j.HW)(a),
          c = l ?? (d = r).docs.find((e) => e.id === d.mainDocId)
        var d
        return (0, o.jsxs)('div', {
          className: (0, m.A)(t, f.G.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'),
          role: 'alert',
          children: [
            (0, o.jsx)('div', { children: (0, o.jsx)(C, { siteTitle: s, versionMetadata: n }) }),
            (0, o.jsx)('div', {
              className: 'margin-top--md',
              children: (0, o.jsx)(L, { versionLabel: r.label, to: c.path, onClick: () => i(r.name) }),
            }),
          ],
        })
      }
      function k(e) {
        let { className: t } = e
        const n = (0, A.r)()
        return n.banner ? (0, o.jsx)(T, { className: t, versionMetadata: n }) : null
      }
      function M(e) {
        let { className: t } = e
        const n = (0, A.r)()
        return n.badge
          ? (0, o.jsx)('span', {
              className: (0, m.A)(t, f.G.docs.docVersionBadge, 'badge badge--secondary'),
              children: (0, o.jsx)(h.A, {
                id: 'theme.docs.versionBadge.label',
                values: { versionLabel: n.label },
                children: 'Version: {versionLabel}',
              }),
            })
          : null
      }
      const w = { tag: 'tag_zVej', tagRegular: 'tagRegular_sFm0', tagWithCount: 'tagWithCount_h2kH' }
      function B(e) {
        let { permalink: t, label: n, count: s, description: a } = e
        return (0, o.jsxs)(b.A, {
          href: t,
          title: a,
          className: (0, m.A)(w.tag, s ? w.tagWithCount : w.tagRegular),
          children: [n, s && (0, o.jsx)('span', { children: s })],
        })
      }
      const y = { tags: 'tags_jXut', tag: 'tag_QGVx' }
      function I(e) {
        let { tags: t } = e
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)('b', {
              children: (0, o.jsx)(h.A, {
                id: 'theme.tags.tagsListLabel',
                description: 'The label alongside a tag list',
                children: 'Tags:',
              }),
            }),
            (0, o.jsx)('ul', {
              className: (0, m.A)(y.tags, 'padding--none', 'margin-left--sm'),
              children: t.map((e) =>
                (0, o.jsx)('li', { className: y.tag, children: (0, o.jsx)(B, { ...e }) }, e.permalink)
              ),
            }),
          ],
        })
      }
      var V = n(12153)
      function H() {
        const { metadata: e } = c(),
          { editUrl: t, lastUpdatedAt: n, lastUpdatedBy: s, tags: a } = e,
          i = a.length > 0,
          l = !!(t || n || s)
        return i || l
          ? (0, o.jsxs)('footer', {
              className: (0, m.A)(f.G.docs.docFooter, 'docusaurus-mt-lg'),
              children: [
                i &&
                  (0, o.jsx)('div', {
                    className: (0, m.A)('row margin-top--sm', f.G.docs.docFooterTagsRow),
                    children: (0, o.jsx)('div', { className: 'col', children: (0, o.jsx)(I, { tags: a }) }),
                  }),
                l &&
                  (0, o.jsx)(V.A, {
                    className: (0, m.A)('margin-top--sm', f.G.docs.docFooterEditMetaRow),
                    editUrl: t,
                    lastUpdatedAt: n,
                    lastUpdatedBy: s,
                  }),
              ],
            })
          : null
      }
      var G = n(41422),
        E = n(65195)
      const P = {
        tocCollapsibleButton: 'tocCollapsibleButton_TO0P',
        tocCollapsibleButtonExpanded: 'tocCollapsibleButtonExpanded_MG3E',
      }
      function F(e) {
        let { collapsed: t, ...n } = e
        return (0, o.jsx)('button', {
          type: 'button',
          ...n,
          className: (0, m.A)('clean-btn', P.tocCollapsibleButton, !t && P.tocCollapsibleButtonExpanded, n.className),
          children: (0, o.jsx)(h.A, {
            id: 'theme.TOCCollapsible.toggleButtonLabel',
            description: 'The label used by the button on the collapsible TOC component',
            children: 'On this page',
          }),
        })
      }
      const D = {
        tocCollapsible: 'tocCollapsible_ETCw',
        tocCollapsibleContent: 'tocCollapsibleContent_vkbj',
        tocCollapsibleExpanded: 'tocCollapsibleExpanded_sAul',
      }
      function R(e) {
        let { toc: t, className: n, minHeadingLevel: s, maxHeadingLevel: a } = e
        const { collapsed: i, toggleCollapsed: l } = (0, G.u)({ initialState: !0 })
        return (0, o.jsxs)('div', {
          className: (0, m.A)(D.tocCollapsible, !i && D.tocCollapsibleExpanded, n),
          children: [
            (0, o.jsx)(F, { collapsed: i, onClick: l }),
            (0, o.jsx)(G.N, {
              lazy: !0,
              className: D.tocCollapsibleContent,
              collapsed: i,
              children: (0, o.jsx)(E.A, { toc: t, minHeadingLevel: s, maxHeadingLevel: a }),
            }),
          ],
        })
      }
      const U = { tocMobile: 'tocMobile_ITEo' }
      function O() {
        const { toc: e, frontMatter: t } = c()
        return (0, o.jsx)(R, {
          toc: e,
          minHeadingLevel: t.toc_min_heading_level,
          maxHeadingLevel: t.toc_max_heading_level,
          className: (0, m.A)(f.G.docs.docTocMobile, U.tocMobile),
        })
      }
      var S = n(68e3)
      function W() {
        const { toc: e, frontMatter: t } = c()
        return (0, o.jsx)(S.A, {
          toc: e,
          minHeadingLevel: t.toc_min_heading_level,
          maxHeadingLevel: t.toc_max_heading_level,
          className: f.G.docs.docTocDesktop,
        })
      }
      var z = n(51107),
        $ = n(72857)
      function Q(e) {
        let { children: t } = e
        const n = (function () {
          const { metadata: e, frontMatter: t, contentTitle: n } = c()
          return t.hide_title || void 0 !== n ? null : e.title
        })()
        return (0, o.jsxs)('div', {
          className: (0, m.A)(f.G.docs.docMarkdown, 'markdown'),
          children: [
            n && (0, o.jsx)('header', { children: (0, o.jsx)(z.A, { as: 'h1', children: n }) }),
            (0, o.jsx)($.A, { children: t }),
          ],
        })
      }
      var X = n(26972),
        Y = n(99169),
        Z = n(86025)
      function q(e) {
        return (0, o.jsx)('svg', {
          viewBox: '0 0 24 24',
          ...e,
          children: (0, o.jsx)('path', {
            d: 'M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z',
            fill: 'currentColor',
          }),
        })
      }
      const J = { breadcrumbHomeIcon: 'breadcrumbHomeIcon_YNFT' }
      function K() {
        const e = (0, Z.Ay)('/')
        return (0, o.jsx)('li', {
          className: 'breadcrumbs__item',
          children: (0, o.jsx)(b.A, {
            'aria-label': (0, h.T)({
              id: 'theme.docs.breadcrumbs.home',
              message: 'Home page',
              description: 'The ARIA label for the home page in the breadcrumbs',
            }),
            className: 'breadcrumbs__link',
            href: e,
            children: (0, o.jsx)(q, { className: J.breadcrumbHomeIcon }),
          }),
        })
      }
      const ee = { breadcrumbsContainer: 'breadcrumbsContainer_Z_bl' }
      function te(e) {
        let { children: t, href: n, isLast: s } = e
        const a = 'breadcrumbs__link'
        return s
          ? (0, o.jsx)('span', { className: a, itemProp: 'name', children: t })
          : n
          ? (0, o.jsx)(b.A, {
              className: a,
              href: n,
              itemProp: 'item',
              children: (0, o.jsx)('span', { itemProp: 'name', children: t }),
            })
          : (0, o.jsx)('span', { className: a, children: t })
      }
      function ne(e) {
        let { children: t, active: n, index: s, addMicrodata: a } = e
        return (0, o.jsxs)('li', {
          ...(a && { itemScope: !0, itemProp: 'itemListElement', itemType: 'https://schema.org/ListItem' }),
          className: (0, m.A)('breadcrumbs__item', { 'breadcrumbs__item--active': n }),
          children: [t, (0, o.jsx)('meta', { itemProp: 'position', content: String(s + 1) })],
        })
      }
      function se() {
        const e = (0, X.OF)(),
          t = (0, Y.Dt)()
        return e
          ? (0, o.jsx)('nav', {
              className: (0, m.A)(f.G.docs.docBreadcrumbs, ee.breadcrumbsContainer),
              'aria-label': (0, h.T)({
                id: 'theme.docs.breadcrumbs.navAriaLabel',
                message: 'Breadcrumbs',
                description: 'The ARIA label for the breadcrumbs',
              }),
              children: (0, o.jsxs)('ul', {
                className: 'breadcrumbs',
                itemScope: !0,
                itemType: 'https://schema.org/BreadcrumbList',
                children: [
                  t && (0, o.jsx)(K, {}),
                  e.map((t, n) => {
                    const s = n === e.length - 1,
                      a = 'category' === t.type && t.linkUnlisted ? void 0 : t.href
                    return (0, o.jsx)(
                      ne,
                      {
                        active: s,
                        index: n,
                        addMicrodata: !!a,
                        children: (0, o.jsx)(te, { href: a, isLast: s, children: t.label }),
                      },
                      n
                    )
                  }),
                ],
              }),
            })
          : null
      }
      var ae = n(86896)
      const ie = { docItemContainer: 'docItemContainer_Djhp', docItemCol: 'docItemCol_VOVn' }
      function oe(e) {
        let { children: t } = e
        const n = (function () {
            const { frontMatter: e, toc: t } = c(),
              n = (0, u.l)(),
              s = e.hide_table_of_contents,
              a = !s && t.length > 0
            return {
              hidden: s,
              mobile: a ? (0, o.jsx)(O, {}) : void 0,
              desktop: !a || ('desktop' !== n && 'ssr' !== n) ? void 0 : (0, o.jsx)(W, {}),
            }
          })(),
          { metadata: s } = c()
        return (0, o.jsxs)('div', {
          className: 'row',
          children: [
            (0, o.jsxs)('div', {
              className: (0, m.A)('col', !n.hidden && ie.docItemCol),
              children: [
                (0, o.jsx)(ae.A, { metadata: s }),
                (0, o.jsx)(k, {}),
                (0, o.jsxs)('div', {
                  className: ie.docItemContainer,
                  children: [
                    (0, o.jsxs)('article', {
                      children: [
                        (0, o.jsx)(se, {}),
                        (0, o.jsx)(M, {}),
                        n.mobile,
                        (0, o.jsx)(Q, { children: t }),
                        (0, o.jsx)(H, {}),
                      ],
                    }),
                    (0, o.jsx)(g, {}),
                  ],
                }),
              ],
            }),
            n.desktop && (0, o.jsx)('div', { className: 'col col--3', children: n.desktop }),
          ],
        })
      }
      function le(e) {
        const t = `docs-doc-id-${e.content.metadata.id}`,
          n = e.content
        return (0, o.jsx)(r, {
          content: e.content,
          children: (0, o.jsxs)(a.e3, {
            className: t,
            children: [(0, o.jsx)(d, {}), (0, o.jsx)(oe, { children: (0, o.jsx)(n, {}) })],
          }),
        })
      }
    },
    68e3: (e, t, n) => {
      n.d(t, { A: () => l })
      var s = n(78478),
        a = n(50155),
        i = n(67763),
        o = n(74848)
      function l(e) {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(s.A, {
              children: () => {
                if (!window.location.pathname.startsWith('/docs')) return null
                const { metadata: e } = (0, a.useDoc)(),
                  { editUrl: t } = e
                return (0, o.jsx)('a', {
                  style: { display: 'block', marginBottom: '1rem' },
                  href: `https://gitpod.io/#${t.replace('edit', 'blob')}`,
                  target: '_blank',
                  rel: 'noreferrer noopener',
                  children: (0, o.jsx)('img', {
                    src: 'https://gitpod.io/button/open-in-gitpod.svg',
                    alt: 'Open in Gitpod',
                  }),
                })
              },
            }),
            (0, o.jsx)(i.A, { ...e }),
          ],
        })
      }
    },
  },
])
