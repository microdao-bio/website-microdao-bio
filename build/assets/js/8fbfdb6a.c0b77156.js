'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [3324],
  {
    91856: (e, s, a) => {
      a.r(s),
        a.d(s, {
          assets: () => h,
          contentTitle: () => d,
          default: () => u,
          frontMatter: () => i,
          metadata: () => t,
          toc: () => l,
        })
      const t = JSON.parse(
        '{"id":"persistence-dashboard","title":"Persistence Chaos Dashboard","description":"This document describes how to make Chaos Dashboard persistence.","source":"@site/versioned_docs/version-2.5.2/persistence-dashboard.md","sourceDirName":".","slug":"/persistence-dashboard","permalink":"/docs/2.5.2/persistence-dashboard","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.5.2/persistence-dashboard.md","tags":[],"version":"2.5.2","frontMatter":{"title":"Persistence Chaos Dashboard"},"sidebar":"docs","previous":{"title":"Install Chaos Mesh Offline","permalink":"/docs/2.5.2/offline-installation"},"next":{"title":"Uninstall Chaos Mesh","permalink":"/docs/2.5.2/uninstallation"}}'
      )
      var o = a(74848),
        n = a(28453),
        r = a(13137)
      const i = { title: 'Persistence Chaos Dashboard' },
        d = void 0,
        h = {},
        l = [
          { value: 'SQLite (default)', id: 'sqlite-default', level: 2 },
          { value: 'MySQL', id: 'mysql', level: 2 },
          { value: 'PostgreSQL', id: 'postgresql', level: 2 },
          {
            value: 'Set TTL (Time To Live) for Chaos Dashboard data',
            id: 'set-ttl-time-to-live-for-chaos-dashboard-data',
            level: 2,
          },
        ]
      function c(e) {
        const s = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          p: 'p',
          pre: 'pre',
          ...(0, n.R)(),
          ...e.components,
        }
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(s.p, { children: 'This document describes how to make Chaos Dashboard persistence.' }),
            '\n',
            (0, o.jsxs)(s.p, {
              children: [
                'Chaos Dashboard support ',
                (0, o.jsx)(s.code, { children: 'SQLite' }),
                ', ',
                (0, o.jsx)(s.code, { children: 'MySQL' }),
                ' and ',
                (0, o.jsx)(s.code, { children: 'PostgreSQL' }),
                ' as database backends for persistence.',
              ],
            }),
            '\n',
            (0, o.jsx)(s.h2, { id: 'sqlite-default', children: 'SQLite (default)' }),
            '\n',
            (0, o.jsxs)(s.p, {
              children: [
                'Chaos Dashboard uses ',
                (0, o.jsx)(s.code, { children: 'SQLite' }),
                ' as the default database engine, and it is recommended to enable ',
                (0, o.jsx)(s.a, {
                  href: 'https://kubernetes.io/docs/concepts/storage/persistent-volumes/',
                  children: 'PV (Persistent Volumes)',
                }),
                '. To enable PV, set ',
                (0, o.jsx)(s.code, { children: 'dashboard.persistentVolume.enabled' }),
                ' to ',
                (0, o.jsx)(s.code, { children: 'true' }),
                '. You can find related configurations on ',
                (0, o.jsx)(s.a, {
                  href: 'https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml#L255-L282',
                  children: (0, o.jsx)(s.code, { children: 'value.yaml' }),
                }),
                ' as follows:',
              ],
            }),
            '\n',
            (0, o.jsx)(s.pre, {
              children: (0, o.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  'dashboard:\n  ...\n  persistentVolume:\n    # If you are using SQLite as your DB for Chaos Dashboard, it is recommended to enable persistence.\n    # If enable, the chart will create a PersistenceVolumeClaim to store its state in. If you are\n    # using a DB other than SQLite, set this to false to avoid allocating unused storage.\n    # If set to false, Chaos Mesh will use an emptyDir instead, which is ephemeral.\n    enabled: true\n\n    # If you\'d like to bring your own PVC for persisting chaos event, pass the name of the\n    # created + ready PVC here. If set, this Chart will not create the default PVC.\n    # Requires server.persistentVolume.enabled: true\n    existingClaim: ""\n\n    # Chaos Dashboard data Persistent Volume size.\n    size: 8Gi\n\n    # Chaos Dashboard data Persistent Volume Storage Class.\n    # If defined, storageClassName: <storageClass>\n    storageClassName: standard\n\n    # Chaos Dashboard data Persistent Volume mount root path\n    mountPath: /data\n\n    # Subdirectory of Chaos Dashboard data Persistent Volume to mount\n    # Useful if the volume\'s root directory is not empty\n    subPath: ""\n',
              }),
            }),
            '\n',
            (0, o.jsx)(s.admonition, {
              type: 'warning',
              children: (0, o.jsx)(s.p, {
                children:
                  "If Chaos Dashboard component restarts without PV, the data of Chaos Dashboard will be lost and can't be retrieved.",
              }),
            }),
            '\n',
            (0, o.jsx)(s.h2, { id: 'mysql', children: 'MySQL' }),
            '\n',
            (0, o.jsxs)(s.p, {
              children: [
                'Chaos Dashboard supports MySQL 5.6 and higher versions as the database engine. The below example demonstrates MySQL database configuration. For details about connection string configuration, refer to the ',
                (0, o.jsx)(s.a, {
                  href: 'https://github.com/go-sql-driver/mysql#dsn-data-source-name',
                  children: 'MySQL-Driver for Go',
                }),
                '.',
              ],
            }),
            '\n',
            (0, o.jsx)(r.A, {
              children:
                'helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version latest --set dashboard.env.DATABASE_DRIVER=mysql --set dashboard.env.DATABASE_DATASOURCE=root:password@tcp(1.2.3.4:3306)/chaos-mesh?parseTime=true',
            }),
            '\n',
            (0, o.jsx)(s.h2, { id: 'postgresql', children: 'PostgreSQL' }),
            '\n',
            (0, o.jsxs)(s.p, {
              children: [
                'Chaos Dashboard supports PostgreSQL 9.6 and higher versions as the database engine. The below example demonstrates PostgreSQL database configuration. For details about connection string configuration, refer to ',
                (0, o.jsx)(s.a, {
                  href: 'https://www.postgresql.org/docs/current/static/libpq-connect.html#LIBPQ-CONNSTRING',
                  children: 'libpq connect',
                }),
                '.',
              ],
            }),
            '\n',
            (0, o.jsx)(r.A, {
              children:
                'helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version latest --set dashboard.env.DATABASE_DRIVER=postgres --set dashboard.env.DATABASE_DATASOURCE=postgres://root:password@1.2.3.4:5432/postgres?sslmode=disable',
            }),
            '\n',
            (0, o.jsx)(s.h2, {
              id: 'set-ttl-time-to-live-for-chaos-dashboard-data',
              children: 'Set TTL (Time To Live) for Chaos Dashboard data',
            }),
            '\n',
            (0, o.jsxs)(s.p, {
              children: [
                'Chaos Dashboard supports setting the expiration time of Chaos Dashboard data. The default ',
                (0, o.jsx)(s.code, { children: 'Event' }),
                ' related data expires by ',
                (0, o.jsx)(s.code, { children: '168h' }),
                ', and the ',
                (0, o.jsx)(s.code, { children: 'Experiment' }),
                ' related data defaults to ',
                (0, o.jsx)(s.code, { children: '336h' }),
                '. If you need to modify it, you can set ',
                (0, o.jsx)(s.code, { children: 'dashboard.env.TTL_EVENT' }),
                ' and ',
                (0, o.jsx)(s.code, { children: 'dashboard.env.TTL_EXPERIMENT' }),
                ' parameters, like:',
              ],
            }),
            '\n',
            (0, o.jsx)(r.A, {
              children:
                'helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version latest --set dashboard.env.TTL_EVENT=168h --set dashboard.env.TTL_EXPERIMENT=336h',
            }),
          ],
        })
      }
      function u(e = {}) {
        const { wrapper: s } = { ...(0, n.R)(), ...e.components }
        return s ? (0, o.jsx)(s, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e)
      }
    },
    13137: (e, s, a) => {
      a.d(s, { A: () => c })
      var t = a(78478),
        o = a(44586),
        n = a(66588),
        r = a(21432),
        i = a(99589),
        d = a.n(i),
        h = a(34661),
        l = a(74848)
      const c = (e) => {
        let { children: s, className: a = 'language-bash' } = e
        const { siteConfig: i } = (0, o.A)(),
          { versions: c } = (0, n.P_)('docusaurus-plugin-content-docs')
        return (0, l.jsx)(t.A, {
          children: () => {
            const e = (0, h.t)(i, c),
              t =
                'latest' === e
                  ? ''
                  : `--version ${((e) => {
                      if (d().satisfies(e, '>=2.0.3')) return e
                      const s = e.slice(0, 3)
                      return 'v' + (parseFloat(s) - 0.7).toFixed(1) + e.slice(3)
                    })(e)}`
            return (0, l.jsx)(r.A, { className: a, children: s.replace('--version latest', t).trim() })
          },
        })
      }
    },
    34661: (e, s, a) => {
      a.d(s, { A: () => h, t: () => d })
      var t = a(78478),
        o = a(44586),
        n = a(66588),
        r = a(21432),
        i = a(74848)
      const d = (e, s) => {
        const a = window.location.pathname
        let t = window.localStorage.getItem('docs-preferred-version-default')
        if (a === e.baseUrl && t) return 'current' === t ? 'latest' : t
        if (a.includes('/docs/next')) return 'latest'
        const o = s.find((e) => e.isLast),
          n = s.find((e) => a.includes(e.name))
        return n ? n.name : o.name
      }
      const h = (e) => {
        let { children: s, replaced: a = 'latest', isArchive: h = !1, className: l = 'language-bash' } = e
        const { siteConfig: c } = (0, o.A)(),
          { versions: u } = (0, n.P_)('docusaurus-plugin-content-docs')
        return (0, i.jsx)(t.A, {
          children: () => {
            const e = d(c, u),
              t = h
                ? s.replace(
                    a,
                    (function (e) {
                      return 'latest' === e ? 'refs/heads/master' : `refs/tags/v${e}`
                    })(e)
                  )
                : 'latest' === e
                ? s
                : s.replace(a, 'v' + e)
            return (0, i.jsx)(r.A, { className: l, children: t })
          },
        })
      }
    },
  },
])
