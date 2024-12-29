'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [4801],
  {
    51415: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => l,
          contentTitle: () => c,
          default: () => u,
          frontMatter: () => r,
          metadata: () => t,
          toc: () => h,
        })
      const t = JSON.parse(
        '{"id":"manage-user-permissions","title":"Manage User Permissions","description":"This document describes how to manage user permissions in Chaos Mesh, including creating user accounts with different roles, binding permissions to user accounts, managing tokens, and enabling or disabling permission authentication.","source":"@site/docs/manage-user-permissions.md","sourceDirName":".","slug":"/manage-user-permissions","permalink":"/docs/next/manage-user-permissions","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/manage-user-permissions.md","tags":[],"version":"current","frontMatter":{"title":"Manage User Permissions"},"sidebar":"docs","previous":{"title":"Uninstall Chaos Mesh","permalink":"/docs/next/uninstallation"},"next":{"title":"Configure namespace for Chaos experiments","permalink":"/docs/next/configure-enabled-namespace"}}'
      )
      var o = s(74848),
        a = s(28453),
        i = s(13137)
      const r = { title: 'Manage User Permissions' },
        c = void 0,
        l = {},
        h = [
          {
            value: 'Create user accounts and bind permissions',
            id: 'create-user-accounts-and-bind-permissions',
            level: 2,
          },
          { value: 'Choose the scope of permissions', id: 'choose-the-scope-of-permissions', level: 3 },
          { value: 'Select the role of users', id: 'select-the-role-of-users', level: 3 },
          { value: 'Generate the permission', id: 'generate-the-permission', level: 3 },
          {
            value: 'Create the user account and bind permissions',
            id: 'create-the-user-account-and-bind-permissions',
            level: 3,
          },
          { value: 'Get the token', id: 'get-the-token', level: 3 },
          {
            value: 'Log in to Chaos Dashboard with the user account you have created',
            id: 'log-in-to-chaos-dashboard-with-the-user-account-you-have-created',
            level: 2,
          },
          { value: 'Log out of Chaos Dashboard', id: 'log-out-of-chaos-dashboard', level: 2 },
          { value: 'FAQ', id: 'faq', level: 2 },
          {
            value: 'Enable or disable permission authentication',
            id: 'enable-or-disable-permission-authentication',
            level: 3,
          },
        ]
      function d(e) {
        const n = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          img: 'img',
          li: 'li',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, a.R)(),
          ...e.components,
        }
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(n.p, {
              children:
                'This document describes how to manage user permissions in Chaos Mesh, including creating user accounts with different roles, binding permissions to user accounts, managing tokens, and enabling or disabling permission authentication.',
            }),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'Chaos Mesh uses ',
                (0, o.jsx)(n.a, {
                  href: 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/',
                  children: 'RBAC Authorization',
                }),
                ' to manage user permissions. To create, view and manage chaos experiments, users must have the appropriate permissions in the ',
                (0, o.jsx)(n.code, { children: 'apiGroups' }),
                ' of ',
                (0, o.jsx)(n.code, { children: 'chaos-mesh.org' }),
                ' to refer the resources of chaos experiments.',
              ],
            }),
            '\n',
            (0, o.jsxs)(n.admonition, {
              type: 'caution',
              children: [
                (0, o.jsxs)(n.p, {
                  children: [
                    'Chaos Mesh allows you to disable permission authentication, see ',
                    (0, o.jsx)(n.a, {
                      href: '#enable-or-disable-permission-authentication',
                      children: 'Enable or disable permission authentication',
                    }),
                    ' to learn how to disable it.',
                  ],
                }),
                (0, o.jsx)(n.p, {
                  children: (0, o.jsx)(n.strong, {
                    children:
                      'Note that we do not recommend disabling permission authentication in production environments.',
                  }),
                }),
              ],
            }),
            '\n',
            (0, o.jsx)(n.h2, {
              id: 'create-user-accounts-and-bind-permissions',
              children: 'Create user accounts and bind permissions',
            }),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'You can use the Chaos Dashboard to help you create user accounts and bind permissions. When you access the dashboard, a login window will appear. Click on the ',
                (0, o.jsx)(n.strong, { children: 'Click here to generate' }),
                ' link:',
              ],
            }),
            '\n',
            (0, o.jsx)(n.p, {
              children: (0, o.jsx)(n.img, {
                alt: 'Dashboard Token Login 1',
                src: s(18478).A + '',
                width: '1098',
                height: '1216',
              }),
            }),
            '\n',
            (0, o.jsx)(n.p, { children: 'When you click on the link, a Token Generator will appear, as follows:' }),
            '\n',
            (0, o.jsx)(n.p, {
              children: (0, o.jsx)(n.img, {
                alt: 'Dashboard Token Generator',
                src: s(23755).A + '',
                width: '1572',
                height: '1524',
              }),
            }),
            '\n',
            (0, o.jsx)(n.p, { children: 'The steps to create user accounts and bind permissions are as follows:' }),
            '\n',
            (0, o.jsx)(n.h3, { id: 'choose-the-scope-of-permissions', children: 'Choose the scope of permissions' }),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'If you want to give the account the appropriate permissions for all chaos experiments in the cluster, tick the ',
                (0, o.jsx)(n.strong, { children: 'Cluster scoped' }),
                ' checkbox. If you specify a namespace in the ',
                (0, o.jsx)(n.strong, { children: 'Namespace' }),
                ' dropdown, the account will only have permissions in the specified namespace.',
              ],
            }),
            '\n',
            (0, o.jsx)(n.p, { children: 'In summary, there are two options to choose from:' }),
            '\n',
            (0, o.jsxs)(n.ul, {
              children: [
                '\n',
                (0, o.jsxs)(n.li, {
                  children: [
                    (0, o.jsx)(n.code, { children: 'Cluster scoped' }),
                    ': the account has permissions for all chaos experiments in cluster.',
                  ],
                }),
                '\n',
                (0, o.jsxs)(n.li, {
                  children: [
                    (0, o.jsx)(n.code, { children: 'Namespace scoped' }),
                    ': the account has permissions for all chaos experiments in the specified namespace.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, o.jsx)(n.h3, { id: 'select-the-role-of-users', children: 'Select the role of users' }),
            '\n',
            (0, o.jsx)(n.p, { children: 'Currently, Chaos Mesh provides the following user roles' }),
            '\n',
            (0, o.jsxs)(n.ul, {
              children: [
                '\n',
                (0, o.jsxs)(n.li, {
                  children: [
                    (0, o.jsx)(n.code, { children: 'Manager' }),
                    ': who has all permissions to create, view, update and delete chaos experiments.',
                  ],
                }),
                '\n',
                (0, o.jsxs)(n.li, {
                  children: [
                    (0, o.jsx)(n.code, { children: 'Viewer' }),
                    ': who only has the right to view chaos experiments.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, o.jsx)(n.h3, { id: 'generate-the-permission', children: 'Generate the permission' }),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'Once the permission scope and user role have been defined, the Dashboard will display the corresponding RBAC configuration in the Token Generator. For example, the permission for a manager with the ',
                (0, o.jsx)(n.code, { children: 'default' }),
                ' namespace will look like this:',
              ],
            }),
            '\n',
            (0, o.jsx)(n.pre, {
              children: (0, o.jsx)(n.code, {
                className: 'language-yaml',
                children:
                  "kind: ServiceAccount\napiVersion: v1\nmetadata:\n  namespace: default\n  name: account-default-manager-vfmot\n\n---\nkind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  namespace: default\n  name: role-default-manager-vfmot\nrules:\n  - apiGroups: ['']\n    resources: ['pods', 'namespaces']\n    verbs: ['get', 'watch', 'list']\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs: ['get', 'list', 'watch', 'create', 'delete', 'patch', 'update']\n\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: bind-default-manager-vfmot\n  namespace: default\nsubjects:\n  - kind: ServiceAccount\n    name: account-default-manager-vfmot\n    namespace: default\nroleRef:\n  kind: Role\n  name: role-default-manager-vfmot\n  apiGroup: rbac.authorization.k8s.io\n",
              }),
            }),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'Click ',
                (0, o.jsx)(n.strong, { children: 'COPY' }),
                ' in the top right corner of the configuration section to copy the RBAC configuration and then save the contents locally as ',
                (0, o.jsx)(n.code, { children: 'rbac.yaml' }),
                '.',
              ],
            }),
            '\n',
            (0, o.jsx)(n.h3, {
              id: 'create-the-user-account-and-bind-permissions',
              children: 'Create the user account and bind permissions',
            }),
            '\n',
            (0, o.jsx)(n.p, { children: 'Run the following command in your terminal:' }),
            '\n',
            (0, o.jsx)(n.pre, {
              children: (0, o.jsx)(n.code, { className: 'language-bash', children: 'kubectl apply -f rbac.yaml\n' }),
            }),
            '\n',
            (0, o.jsx)(n.admonition, {
              type: 'note',
              children: (0, o.jsxs)(n.p, {
                children: [
                  'You need to ensure that the local user running ',
                  (0, o.jsx)(n.code, { children: 'kubectl' }),
                  ' has permissions to the cluster so that they can create user accounts, bind permissions for other users and generate tokens.',
                ],
              }),
            }),
            '\n',
            (0, o.jsx)(n.h3, { id: 'get-the-token', children: 'Get the token' }),
            '\n',
            (0, o.jsxs)(n.admonition, {
              type: 'info',
              children: [
                (0, o.jsx)(n.p, {
                  children:
                    'Versions of Kubernetes before v1.22 automatically created long term credentials for accessing the Kubernetes API. In recent versions of Kubernetes, you must manually create a service account token Secret.',
                }),
                (0, o.jsxs)(n.p, {
                  children: [
                    'For more details, see ',
                    (0, o.jsx)(n.a, {
                      href: 'https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#manually-create-an-api-token-for-a-serviceaccount',
                      children: 'Manually create an API token for a ServiceAccount',
                    }),
                    '.',
                  ],
                }),
              ],
            }),
            '\n',
            (0, o.jsx)(n.p, {
              children:
                'Copy the command shown in the third step to the Token Generator and run it in your terminal. The following is a sample command:',
            }),
            '\n',
            (0, o.jsx)(n.pre, {
              children: (0, o.jsx)(n.code, {
                className: 'language-bash',
                children: 'kubectl describe -n default secrets account-default-manager-vfmot\n',
              }),
            }),
            '\n',
            (0, o.jsx)(n.p, { children: 'The output is as follows:' }),
            '\n',
            (0, o.jsx)(n.pre, {
              children: (0, o.jsx)(n.code, {
                className: 'language-log',
                children:
                  'Name:         account-default-manager-vfmot-token-n4tg8\nNamespace:    default\nLabels:       <none>\nAnnotations:  kubernetes.io/service-account.name: account-default-manager-vfmot\n              kubernetes.io/service-account.uid: b71b3bf4-cd5e-4efb-8bf6-ff9a55fd7e07\n\nType:  kubernetes.io/service-account-token\n\nData\n====\nca.crt:     1111 bytes\nnamespace:  7 bytes\ntoken:      eyJhbG...\n',
              }),
            }),
            '\n',
            (0, o.jsx)(n.p, { children: 'Copy the token at the bottom and use it in the next step to login.' }),
            '\n',
            (0, o.jsx)(n.h2, {
              id: 'log-in-to-chaos-dashboard-with-the-user-account-you-have-created',
              children: 'Log in to Chaos Dashboard with the user account you have created',
            }),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                (0, o.jsx)(n.strong, { children: 'Close' }),
                ' the Token Generator. In the ',
                (0, o.jsx)(n.strong, { children: 'Token' }),
                ' field, enter the token you obtained in the previous step and in the ',
                (0, o.jsx)(n.strong, { children: 'Name' }),
                ' field, enter a meaningful name for the token. It is recommended that you use a name that is a combination of the permission scope and the user role, e.g. ',
                (0, o.jsx)(n.code, { children: 'default-manager' }),
                '. Once you have completed these two fields, click ',
                (0, o.jsx)(n.strong, { children: 'Submit' }),
                ' to log in:',
              ],
            }),
            '\n',
            (0, o.jsx)(n.p, {
              children: (0, o.jsx)(n.img, {
                alt: 'Dashboard Token Login 2',
                src: s(72485).A + '',
                width: '1096',
                height: '1214',
              }),
            }),
            '\n',
            (0, o.jsx)(n.admonition, {
              type: 'info',
              children: (0, o.jsxs)(n.p, {
                children: [
                  'If you have not deployed Chaos Dashboard, you can also generate RBAC configurations by yourself and then use ',
                  (0, o.jsx)(n.code, { children: 'kubectl' }),
                  ' to create user accounts and bind permissions.',
                ],
              }),
            }),
            '\n',
            (0, o.jsx)(n.h2, { id: 'log-out-of-chaos-dashboard', children: 'Log out of Chaos Dashboard' }),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'If you need to replace the token with another one, click the ',
                (0, o.jsx)(n.strong, { children: 'Settings' }),
                ' on the left side bar of the Dashboard:',
              ],
            }),
            '\n',
            (0, o.jsx)(n.p, {
              children: (0, o.jsx)(n.img, {
                alt: 'Dashboard Token Logout',
                src: s(76129).A + '',
                width: '1348',
                height: '346',
              }),
            }),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'At the top of the page you will see the ',
                (0, o.jsx)(n.strong, { children: 'Logout' }),
                ' button. Click it to log out the current account.',
              ],
            }),
            '\n',
            (0, o.jsx)(n.h2, { id: 'faq', children: 'FAQ' }),
            '\n',
            (0, o.jsx)(n.h3, {
              id: 'enable-or-disable-permission-authentication',
              children: 'Enable or disable permission authentication',
            }),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'When Chaos Mesh is installed using Helm, Permission Authentication is enabled by default. For production environments and other high security scenarios, it is recommended to leave permission authentication enabled. If you are just trying out Chaos Mesh and want to quickly create chaos experiments, you can set ',
                (0, o.jsx)(n.code, { children: '--set dashboard.securityMode=false' }),
                ' in a Helm command to disable authentication. The command looks like this:',
              ],
            }),
            '\n',
            (0, o.jsx)(i.A, {
              children:
                'helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-mesh --version latest --set dashboard.securityMode=false',
            }),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'If you want to enable the permission authentication again, then reset ',
                (0, o.jsx)(n.code, { children: '--set dashboard.securityMode=true' }),
                ' in a Helm command.',
              ],
            }),
          ],
        })
      }
      function u(e = {}) {
        const { wrapper: n } = { ...(0, a.R)(), ...e.components }
        return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e)
      }
    },
    13137: (e, n, s) => {
      s.d(n, { A: () => d })
      var t = s(78478),
        o = s(44586),
        a = s(66588),
        i = s(21432),
        r = s(99589),
        c = s.n(r),
        l = s(34661),
        h = s(74848)
      const d = (e) => {
        let { children: n, className: s = 'language-bash' } = e
        const { siteConfig: r } = (0, o.A)(),
          { versions: d } = (0, a.P_)('docusaurus-plugin-content-docs')
        return (0, h.jsx)(t.A, {
          children: () => {
            const e = (0, l.t)(r, d),
              t =
                'latest' === e
                  ? ''
                  : `--version ${((e) => {
                      if (c().satisfies(e, '>=2.0.3')) return e
                      const n = e.slice(0, 3)
                      return 'v' + (parseFloat(n) - 0.7).toFixed(1) + e.slice(3)
                    })(e)}`
            return (0, h.jsx)(i.A, { className: s, children: n.replace('--version latest', t).trim() })
          },
        })
      }
    },
    34661: (e, n, s) => {
      s.d(n, { A: () => l, t: () => c })
      var t = s(78478),
        o = s(44586),
        a = s(66588),
        i = s(21432),
        r = s(74848)
      const c = (e, n) => {
        const s = window.location.pathname
        let t = window.localStorage.getItem('docs-preferred-version-default')
        if (s === e.baseUrl && t) return 'current' === t ? 'latest' : t
        if (s.includes('/docs/next')) return 'latest'
        const o = n.find((e) => e.isLast),
          a = n.find((e) => s.includes(e.name))
        return a ? a.name : o.name
      }
      const l = (e) => {
        let { children: n, replaced: s = 'latest', isArchive: l = !1, className: h = 'language-bash' } = e
        const { siteConfig: d } = (0, o.A)(),
          { versions: u } = (0, a.P_)('docusaurus-plugin-content-docs')
        return (0, r.jsx)(t.A, {
          children: () => {
            const e = c(d, u),
              t = l
                ? n.replace(
                    s,
                    (function (e) {
                      return 'latest' === e ? 'refs/heads/master' : `refs/tags/v${e}`
                    })(e)
                  )
                : 'latest' === e
                ? n
                : n.replace(s, 'v' + e)
            return (0, r.jsx)(i.A, { className: h, children: t })
          },
        })
      }
    },
    18478: (e, n, s) => {
      s.d(n, { A: () => t })
      const t = s.p + 'assets/images/dashboard_login1-dfdb1c8e7065189206548133f4268ded.png'
    },
    72485: (e, n, s) => {
      s.d(n, { A: () => t })
      const t = s.p + 'assets/images/dashboard_login2-04fcd7cd8c409649d558011f74b3ea4c.png'
    },
    23755: (e, n, s) => {
      s.d(n, { A: () => t })
      const t = s.p + 'assets/images/token_helper-7295fb5793a10defbb506193f39df948.png'
    },
    76129: (e, n, s) => {
      s.d(n, { A: () => t })
      const t = s.p + 'assets/images/token_logout-e5c9c5cfca099f33e47ab979053d806f.png'
    },
  },
])
