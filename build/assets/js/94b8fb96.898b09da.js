'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [9999],
  {
    56042: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => r,
          contentTitle: () => c,
          default: () => d,
          frontMatter: () => a,
          metadata: () => o,
          toc: () => h,
        })
      const o = JSON.parse(
        '{"id":"gcp-authentication","title":"GCP OAuth Authentication","description":"When Chaos Mesh is deployed on the Google Cloud Platform, you can log in to Chaos Dashboard through Google OAuth. This document describes how to enable and configure this function.","source":"@site/versioned_docs/version-2.4.3/gcp-authentication.md","sourceDirName":".","slug":"/gcp-authentication","permalink":"/docs/2.4.3/gcp-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.4.3/gcp-authentication.md","tags":[],"version":"2.4.3","frontMatter":{"title":"GCP OAuth Authentication"},"sidebar":"docs","previous":{"title":"Search and Recover Experiments of Chaosd","permalink":"/docs/2.4.3/chaosd-search-recover"},"next":{"title":"Integrate Chaos Mesh to GitHub Actions","permalink":"/docs/2.4.3/integrate-chaos-mesh-into-github-actions"}}'
      )
      var s = n(74848),
        i = n(28453)
      const a = { title: 'GCP OAuth Authentication' },
        c = void 0,
        r = {},
        h = [
          { value: 'Create OAuth Client', id: 'create-oauth-client', level: 2 },
          { value: 'Configure and start Chaos Mesh', id: 'configure-and-start-chaos-mesh', level: 2 },
          { value: 'Use the function', id: 'use-the-function', level: 2 },
        ]
      function l(e) {
        const t = {
          a: 'a',
          code: 'code',
          h2: 'h2',
          img: 'img',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          ...(0, i.R)(),
          ...e.components,
        }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(t.p, {
              children:
                'When Chaos Mesh is deployed on the Google Cloud Platform, you can log in to Chaos Dashboard through Google OAuth. This document describes how to enable and configure this function.',
            }),
            '\n',
            (0, s.jsx)(t.h2, { id: 'create-oauth-client', children: 'Create OAuth Client' }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'Create GCP OAuth client and get the Client ID and Client Secret according to ',
                (0, s.jsx)(t.a, {
                  href: 'https://support.google.com/cloud/answer/6158849?hl=en',
                  children: 'Setting up OAuth 2.0',
                }),
                '.',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Go to the ',
                    (0, s.jsx)(t.a, {
                      href: 'https://console.cloud.google.com/',
                      children: 'Google Cloud Platform Console',
                    }),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsx)(t.li, { children: 'From the projects list, select a project or create a new one.' }),
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'If the APIs & services page was not loaded automatically, open the console left side menu and select "APIs & services" manually.',
                }),
                '\n',
                (0, s.jsx)(t.li, { children: 'Click "Credentials" on the left.' }),
                '\n',
                (0, s.jsx)(t.li, { children: 'Click "New Credentials", then select "OAuth client ID".' }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Select "Web Application" as the application type, and enter additional information and the redirect URL of Chaos dashboard, which is ',
                    (0, s.jsx)(t.code, { children: 'ROOT_URL/api/auth/gcp/callback' }),
                    '. In this part, ',
                    (0, s.jsx)(t.code, { children: 'ROOT_URL' }),
                    ' is the root URL of Chaos dashboard, like "',
                    (0, s.jsx)(t.a, { href: 'http://localhost:2333', children: 'http://localhost:2333' }),
                    '". This URL can be set through the configuration item ',
                    (0, s.jsx)(t.code, { children: 'dashboard.rootUrl' }),
                    ' by',
                    (0, s.jsx)(t.code, { children: 'helm' }),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsx)(t.li, { children: 'Click "Create Client ID".' }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'After creating the client, remember to save the Client ID and Client Secret for the following steps.',
            }),
            '\n',
            (0, s.jsx)(t.h2, { id: 'configure-and-start-chaos-mesh', children: 'Configure and start Chaos Mesh' }),
            '\n',
            (0, s.jsx)(t.p, {
              children: 'To enable the function, you need to set the configuration items in helm charts as follows:',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Set ',
                    (0, s.jsx)(t.code, { children: 'dashboard.gcpSecurityMode' }),
                    ' to ',
                    (0, s.jsx)(t.code, { children: 'true' }),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Set ',
                    (0, s.jsx)(t.code, { children: 'dashboard.gcpClientId' }),
                    ' to the Client ID from the former section.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Set ',
                    (0, s.jsx)(t.code, { children: 'dashboard.gcpClientSecret' }),
                    ' to the Client Secret from the former section.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Set ',
                    (0, s.jsx)(t.code, { children: 'dashboard.rootUrl' }),
                    ' to the root address of Chaos Dashboard.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'If Chaos Mesh has been installed, you can update the configuration items through ',
                (0, s.jsx)(t.code, { children: 'helm upgrade' }),
                '. If not, you can install Chaos Mesh through ',
                (0, s.jsx)(t.code, { children: 'helm install' }),
                '.',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, { id: 'use-the-function', children: 'Use the function' }),
            '\n',
            (0, s.jsx)(t.p, {
              children: 'Open Chaos Dashboard, and click the google icon under the authentication window.',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children: (0, s.jsx)(t.img, { alt: 'img', src: n(6696).A + '', width: '640', height: '855' }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'After logging in to the Google account and being granted permission to OAuth Client, the page automatically redirects to Chaos Dashboard with logged-in status. At this time, you have the same permissions as the google account in this cluster. If you need to add other permissions, you can edit the permission through the RBAC (Role-based access control). For example:',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-yaml',
                children:
                  "kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: chaos-mesh-cluster-manager\nrules:\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs: ['get', 'list', 'watch', 'create', 'delete', 'patch', 'update']\n---\nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: cluster-manager-binding\n  namespace: chaos-mesh\nsubjects:\n  - kind: User\n    name: example@gmail.com\nroleRef:\n  kind: ClusterRole\n  name: chaos-mesh-cluster-manager\n  apiGroup: rbac.authorization.k8s.io\n",
              }),
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'By setting this configuration, the user ',
                (0, s.jsx)(t.code, { children: 'example@gmail.com' }),
                ' is enabled to see or create any chaos experiments.',
              ],
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: t } = { ...(0, i.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e)
      }
    },
    6696: (e, t, n) => {
      n.d(t, { A: () => o })
      const o = n.p + 'assets/images/google-auth-44ea9b662b5a11c6e148a1f5f6983c69.png'
    },
    28453: (e, t, n) => {
      n.d(t, { R: () => a, x: () => c })
      var o = n(96540)
      const s = {},
        i = o.createContext(s)
      function a(e) {
        const t = o.useContext(i)
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function c(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : a(e.components)),
          o.createElement(i.Provider, { value: t }, e.children)
        )
      }
    },
  },
])