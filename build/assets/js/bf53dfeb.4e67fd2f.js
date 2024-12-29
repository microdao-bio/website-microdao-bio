'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [6620],
  {
    7833: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => c,
          contentTitle: () => r,
          default: () => d,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => h,
        })
      const o = JSON.parse(
        '{"id":"common/quick-run","title":"quick-run","description":"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.","source":"@site/versioned_docs/version-2.4.3/common/quick-run.md","sourceDirName":"common","slug":"/common/quick-run","permalink":"/docs/2.4.3/common/quick-run","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.4.3/common/quick-run.md","tags":[],"version":"2.4.3","frontMatter":{}}'
      )
      var a = n(74848),
        t = n(28453)
      const i = {},
        r = void 0,
        c = {},
        h = []
      function l(e) {
        const s = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components }
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(s.p, {
              children:
                'After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.',
            }),
            '\n',
            (0, a.jsxs)(s.p, {
              children: [
                'For the method to run the experiment, it is recommended to refer to ',
                (0, a.jsx)(s.a, { href: '/docs/2.4.3/run-a-chaos-experiment', children: 'Run a Chaos experiment' }),
                '. After successfully creating the experiment, you can observe the running status of the experiment on the Chaos Dashboard.',
              ],
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: s } = { ...(0, t.R)(), ...e.components }
        return s ? (0, a.jsx)(s, { ...e, children: (0, a.jsx)(l, { ...e }) }) : l(e)
      }
    },
    79818: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => c,
          contentTitle: () => r,
          default: () => d,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => h,
        })
      const o = JSON.parse(
        '{"id":"common/verify-installation","title":"verify-installation","description":"To check the running status of Chaos Mesh, execute the following command:","source":"@site/versioned_docs/version-2.4.3/common/verify-installation.md","sourceDirName":"common","slug":"/common/verify-installation","permalink":"/docs/2.4.3/common/verify-installation","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.4.3/common/verify-installation.md","tags":[],"version":"2.4.3","frontMatter":{}}'
      )
      var a = n(74848),
        t = n(28453)
      const i = {},
        r = void 0,
        c = {},
        h = []
      function l(e) {
        const s = { admonition: 'admonition', code: 'code', p: 'p', pre: 'pre', ...(0, t.R)(), ...e.components }
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(s.p, { children: 'To check the running status of Chaos Mesh, execute the following command:' }),
            '\n',
            (0, a.jsx)(s.pre, {
              children: (0, a.jsx)(s.code, { className: 'language-sh', children: 'kubectl get po -n chaos-mesh\n' }),
            }),
            '\n',
            (0, a.jsx)(s.p, { children: 'The expected output is as follows:' }),
            '\n',
            (0, a.jsx)(s.pre, {
              children: (0, a.jsx)(s.code, {
                className: 'language-sh',
                children:
                  'NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n',
              }),
            }),
            '\n',
            (0, a.jsxs)(s.p, {
              children: [
                'If your actual output is similar to the expected output with ',
                (0, a.jsx)(s.code, { children: 'NAME' }),
                ', ',
                (0, a.jsx)(s.code, { children: 'READY' }),
                ', ',
                (0, a.jsx)(s.code, { children: 'STATUS' }),
                ', ',
                (0, a.jsx)(s.code, { children: 'RESTARTS' }),
                ', and ',
                (0, a.jsx)(s.code, { children: 'AGE' }),
                ', it means that Helm is installed successfully.',
              ],
            }),
            '\n',
            (0, a.jsxs)(s.admonition, {
              type: 'note',
              children: [
                (0, a.jsxs)(s.p, {
                  children: [
                    'If the ',
                    (0, a.jsx)(s.code, { children: 'STATUS' }),
                    ' of your actual output is not ',
                    (0, a.jsx)(s.code, { children: 'Running' }),
                    ', then execute the following command to check the Pod details, and troubleshoot issues according to the error information.',
                  ],
                }),
                (0, a.jsx)(s.pre, {
                  children: (0, a.jsx)(s.code, {
                    className: 'language-sh',
                    children:
                      '# Take the chaos-controller as an example\nkubectl describe po -n chaos-mesh chaos-controller-manager-69fd5c46c8-xlqpc\n',
                  }),
                }),
              ],
            }),
            '\n',
            (0, a.jsxs)(s.admonition, {
              type: 'note',
              children: [
                (0, a.jsxs)(s.p, {
                  children: [
                    'If ',
                    (0, a.jsx)(s.code, { children: 'leader-election' }),
                    ' feature is turned off manually, ',
                    (0, a.jsx)(s.code, { children: 'chaos-controller-manager' }),
                    ' should only have 1 replication.',
                  ],
                }),
                (0, a.jsx)(s.pre, {
                  children: (0, a.jsx)(s.code, {
                    className: 'language-sh',
                    children:
                      'NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n',
                  }),
                }),
              ],
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: s } = { ...(0, t.R)(), ...e.components }
        return s ? (0, a.jsx)(s, { ...e, children: (0, a.jsx)(l, { ...e }) }) : l(e)
      }
    },
    59128: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => d,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => h,
          metadata: () => o,
          toc: () => m,
        })
      const o = JSON.parse(
        '{"id":"offline-installation","title":"Install Chaos Mesh Offline","description":"This document describes how to install Chaos Mesh offline.","source":"@site/versioned_docs/version-2.4.3/offline-installation.md","sourceDirName":".","slug":"/offline-installation","permalink":"/docs/2.4.3/offline-installation","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.4.3/offline-installation.md","tags":[],"version":"2.4.3","frontMatter":{"title":"Install Chaos Mesh Offline"},"sidebar":"docs","previous":{"title":"Install Chaos Mesh using Helm","permalink":"/docs/2.4.3/production-installation-using-helm"},"next":{"title":"Persistence Chaos Dashboard","permalink":"/docs/2.4.3/persistence-dashboard"}}'
      )
      var a = n(74848),
        t = n(28453),
        i = n(34661),
        r = (n(13137), n(79818)),
        c = n(7833)
      const h = { title: 'Install Chaos Mesh Offline' },
        l = void 0,
        d = {},
        m = [
          { value: 'Prerequisites', id: 'prerequisites', level: 2 },
          { value: 'Prepare installation files', id: 'prepare-installation-files', level: 2 },
          { value: 'Specify version number', id: 'specify-version-number', level: 3 },
          { value: 'Download Chaos Mesh images', id: 'download-chaos-mesh-images', level: 3 },
          {
            value: 'Download the repository compression package of Chaos Mesh',
            id: 'download-the-repository-compression-package-of-chaos-mesh',
            level: 3,
          },
          { value: 'Copy files', id: 'copy-files', level: 3 },
          { value: 'Install Chaos Mesh', id: 'install-chaos-mesh', level: 2 },
          { value: 'Step 1. Load Chaos Mesh images', id: 'step-1-load-chaos-mesh-images', level: 3 },
          { value: 'Step 2. Push images to Registry', id: 'step-2-push-images-to-registry', level: 3 },
          { value: 'Step 3. Install Chaos Mesh using Helm', id: 'step-3-install-chaos-mesh-using-helm', level: 3 },
          { value: 'Verify the installation', id: 'verify-the-installation', level: 2 },
          ...r.toc,
          { value: 'Run Chaos experiments', id: 'run-chaos-experiments', level: 2 },
          ...c.toc,
        ]
      function p(e) {
        const s = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          p: 'p',
          pre: 'pre',
          ul: 'ul',
          ...(0, t.R)(),
          ...e.components,
        }
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(s.p, { children: 'This document describes how to install Chaos Mesh offline.' }),
            '\n',
            (0, a.jsx)(s.h2, { id: 'prerequisites', children: 'Prerequisites' }),
            '\n',
            (0, a.jsx)(s.p, {
              children:
                'Before installing Chaos Mesh, make sure that Docker is installed and the Kubernetes cluster is deployed in the offline environment. If the environment is not prepared, refer to the following documents to install Docker and deploy the Kubernetes cluster:',
            }),
            '\n',
            (0, a.jsxs)(s.ul, {
              children: [
                '\n',
                (0, a.jsx)(s.li, {
                  children: (0, a.jsx)(s.a, { href: 'https://www.docker.com/get-started', children: 'Docker' }),
                }),
                '\n',
                (0, a.jsx)(s.li, {
                  children: (0, a.jsx)(s.a, { href: 'https://kubernetes.io/docs/setup/', children: 'Kubernetes' }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, a.jsx)(s.h2, { id: 'prepare-installation-files', children: 'Prepare installation files' }),
            '\n',
            (0, a.jsx)(s.p, {
              children:
                'Before you install Chaos Mesh offline, you need to download all Chaos Mesh images and repository compression packages from the machines with external network connection, and then copy the downloaded files into your offline environment.',
            }),
            '\n',
            (0, a.jsx)(s.h3, { id: 'specify-version-number', children: 'Specify version number' }),
            '\n',
            (0, a.jsx)(s.p, {
              children:
                'Set the version number of Chaos Mesh as the environment variable on the machine with external network connection:',
            }),
            '\n',
            (0, a.jsx)(i.A, { children: 'export CHAOS_MESH_VERSION=latest' }),
            '\n',
            (0, a.jsx)(s.h3, { id: 'download-chaos-mesh-images', children: 'Download Chaos Mesh images' }),
            '\n',
            (0, a.jsx)(s.p, {
              children:
                'On the machine connected to external network, pull images using the version number that has been set:',
            }),
            '\n',
            (0, a.jsx)(s.pre, {
              children: (0, a.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'docker pull ghcr.io/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION}\ndocker pull ghcr.io/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION}\ndocker pull ghcr.io/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION}\n',
              }),
            }),
            '\n',
            (0, a.jsx)(s.p, { children: 'Save images as the tar packages:' }),
            '\n',
            (0, a.jsx)(s.pre, {
              children: (0, a.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'docker save ghcr.io/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION} > image-chaos-mesh.tar\ndocker save ghcr.io/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION} > image-chaos-daemon.tar\ndocker save ghcr.io/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION} > image-chaos-dashboard.tar\n',
              }),
            }),
            '\n',
            (0, a.jsx)(s.admonition, {
              type: 'note',
              children: (0, a.jsxs)(s.p, {
                children: [
                  'To simulate a DNS fault (for example, make the DNS responses return a random wrong IP address), you need to pull the additional ',
                  (0, a.jsx)(s.a, {
                    href: 'https://hub.docker.com/r/pingcap/coredns',
                    children: (0, a.jsx)(s.code, { children: 'pingcap/coredns' }),
                  }),
                  ' images.',
                ],
              }),
            }),
            '\n',
            (0, a.jsx)(s.h3, {
              id: 'download-the-repository-compression-package-of-chaos-mesh',
              children: 'Download the repository compression package of Chaos Mesh',
            }),
            '\n',
            (0, a.jsx)(s.p, {
              children: 'On the machine connected to the external network, download the zip package of Chaos Mesh:',
            }),
            '\n',
            (0, a.jsx)(i.A, {
              children:
                'curl -fsSL -o chaos-mesh.zip https://github.com/chaos-mesh/chaos-mesh/archive/refs/heads/master.zip',
            }),
            '\n',
            (0, a.jsx)(s.h3, { id: 'copy-files', children: 'Copy files' }),
            '\n',
            (0, a.jsx)(s.p, {
              children:
                'After downloading all the files required for installation, you need to copy these files to the offline environment:',
            }),
            '\n',
            (0, a.jsxs)(s.ul, {
              children: [
                '\n',
                (0, a.jsx)(s.li, { children: (0, a.jsx)(s.code, { children: 'image-chaos-mesh.tar' }) }),
                '\n',
                (0, a.jsx)(s.li, { children: (0, a.jsx)(s.code, { children: 'image-chaos-daemon.tar' }) }),
                '\n',
                (0, a.jsx)(s.li, { children: (0, a.jsx)(s.code, { children: 'image-chaos-dashboard.tar' }) }),
                '\n',
                (0, a.jsx)(s.li, { children: (0, a.jsx)(s.code, { children: 'chaos-mesh.zip' }) }),
                '\n',
              ],
            }),
            '\n',
            (0, a.jsx)(s.h2, { id: 'install-chaos-mesh', children: 'Install Chaos Mesh' }),
            '\n',
            (0, a.jsx)(s.p, {
              children:
                'After copying the tar package of the Chaos Mesh images and the zip package of the repository to the offline environment, take the following steps to install Chaos Mesh.',
            }),
            '\n',
            (0, a.jsx)(s.h3, { id: 'step-1-load-chaos-mesh-images', children: 'Step 1. Load Chaos Mesh images' }),
            '\n',
            (0, a.jsx)(s.p, { children: 'Load images from the tar package:' }),
            '\n',
            (0, a.jsx)(s.pre, {
              children: (0, a.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'docker load < image-chaos-mesh.tar\ndocker load < image-chaos-daemon.tar\ndocker load < image-chaos-dashboard.tar\n',
              }),
            }),
            '\n',
            (0, a.jsx)(s.h3, { id: 'step-2-push-images-to-registry', children: 'Step 2. Push images to Registry' }),
            '\n',
            (0, a.jsx)(s.admonition, {
              type: 'note',
              children: (0, a.jsxs)(s.p, {
                children: [
                  'Before pushing images to Registry, make sure that Registry has been deployed in the offline environment. If Registry is not deployed, refer to ',
                  (0, a.jsx)(s.a, { href: 'https://docs.docker.com/registry/', children: 'Docker Registry' }),
                  ' for the deployment method.',
                ],
              }),
            }),
            '\n',
            (0, a.jsx)(s.p, {
              children: 'Set the Chaos Mesh version and the Registry address as the environment variable:',
            }),
            '\n',
            (0, a.jsx)(i.A, { children: 'export CHAOS_MESH_VERSION=latest; export DOCKER_REGISTRY=localhost:5000' }),
            '\n',
            (0, a.jsx)(s.p, { children: 'Mark the images so that the images point to the Registry:' }),
            '\n',
            (0, a.jsx)(s.pre, {
              children: (0, a.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'export CHAOS_MESH_IMAGE=$DOCKER_REGISTRY/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION}\nexport CHAOS_DAEMON_IMAGE=$DOCKER_REGISTRY/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION}\nexport CHAOS_DASHBOARD_IMAGE=$DOCKER_REGISTRY/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION}\ndocker image tag ghcr.io/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION} $CHAOS_MESH_IMAGE\ndocker image tag ghcr.io/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION} $CHAOS_DAEMON_IMAGE\ndocker image tag ghcr.io/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION} $CHAOS_DASHBOARD_IMAGE\n',
              }),
            }),
            '\n',
            (0, a.jsx)(s.p, { children: 'Push images to Registry:' }),
            '\n',
            (0, a.jsx)(s.pre, {
              children: (0, a.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'docker push $CHAOS_MESH_IMAGE\ndocker push $CHAOS_DAEMON_IMAGE\ndocker push $CHAOS_DASHBOARD_IMAGE\n',
              }),
            }),
            '\n',
            (0, a.jsx)(s.h3, {
              id: 'step-3-install-chaos-mesh-using-helm',
              children: 'Step 3. Install Chaos Mesh using Helm',
            }),
            '\n',
            (0, a.jsx)(s.p, { children: 'Unpack the zip package of Chaos Mesh:' }),
            '\n',
            (0, a.jsx)(s.pre, {
              children: (0, a.jsx)(s.code, {
                className: 'language-bash',
                children: 'unzip chaos-mesh.zip -d chaos-mesh && cd chaos-mesh\n',
              }),
            }),
            '\n',
            (0, a.jsx)(s.admonition, {
              type: 'note',
              children: (0, a.jsxs)(s.p, {
                children: [
                  'When installing Chaos Mesh on Kubernetes v1.15(or an earlier version), you need to manually install CRD first by using ',
                  (0, a.jsx)(s.code, { children: 'kubectl create -f manifests/crd-v1beta1.yaml' }),
                  '. For more information, see ',
                  (0, a.jsx)(s.a, {
                    href: '/docs/2.4.3/faqs#failed-to-install-chaos-mesh-with-the-message-no-matches-for-kind-customresourcedefinition-in-version-apiextensionsk8siov1',
                    children: 'FAQ',
                  }),
                  '.',
                ],
              }),
            }),
            '\n',
            (0, a.jsx)(s.p, { children: 'Create the namespace:' }),
            '\n',
            (0, a.jsx)(s.pre, {
              children: (0, a.jsx)(s.code, { className: 'language-bash', children: 'kubectl create ns chaos-mesh\n' }),
            }),
            '\n',
            (0, a.jsx)(s.p, {
              children:
                'Execute the installation command. When executing the installation command, you need to specify the namespace of Chaos Mesh and the image value of each component:',
            }),
            '\n',
            (0, a.jsx)(s.pre, {
              children: (0, a.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'helm install chaos-mesh helm/chaos-mesh -n=chaos-mesh --set images.registry=$DOCKER_REGISTRY\n',
              }),
            }),
            '\n',
            (0, a.jsx)(s.h2, { id: 'verify-the-installation', children: 'Verify the installation' }),
            '\n',
            (0, a.jsx)(r.default, {}),
            '\n',
            (0, a.jsx)(s.h2, { id: 'run-chaos-experiments', children: 'Run Chaos experiments' }),
            '\n',
            (0, a.jsx)(c.default, {}),
          ],
        })
      }
      function u(e = {}) {
        const { wrapper: s } = { ...(0, t.R)(), ...e.components }
        return s ? (0, a.jsx)(s, { ...e, children: (0, a.jsx)(p, { ...e }) }) : p(e)
      }
    },
    13137: (e, s, n) => {
      n.d(s, { A: () => d })
      var o = n(78478),
        a = n(44586),
        t = n(66588),
        i = n(21432),
        r = n(99589),
        c = n.n(r),
        h = n(34661),
        l = n(74848)
      const d = (e) => {
        let { children: s, className: n = 'language-bash' } = e
        const { siteConfig: r } = (0, a.A)(),
          { versions: d } = (0, t.P_)('docusaurus-plugin-content-docs')
        return (0, l.jsx)(o.A, {
          children: () => {
            const e = (0, h.t)(r, d),
              o =
                'latest' === e
                  ? ''
                  : `--version ${((e) => {
                      if (c().satisfies(e, '>=2.0.3')) return e
                      const s = e.slice(0, 3)
                      return 'v' + (parseFloat(s) - 0.7).toFixed(1) + e.slice(3)
                    })(e)}`
            return (0, l.jsx)(i.A, { className: n, children: s.replace('--version latest', o).trim() })
          },
        })
      }
    },
    34661: (e, s, n) => {
      n.d(s, { A: () => h, t: () => c })
      var o = n(78478),
        a = n(44586),
        t = n(66588),
        i = n(21432),
        r = n(74848)
      const c = (e, s) => {
        const n = window.location.pathname
        let o = window.localStorage.getItem('docs-preferred-version-default')
        if (n === e.baseUrl && o) return 'current' === o ? 'latest' : o
        if (n.includes('/docs/next')) return 'latest'
        const a = s.find((e) => e.isLast),
          t = s.find((e) => n.includes(e.name))
        return t ? t.name : a.name
      }
      const h = (e) => {
        let { children: s, replaced: n = 'latest', isArchive: h = !1, className: l = 'language-bash' } = e
        const { siteConfig: d } = (0, a.A)(),
          { versions: m } = (0, t.P_)('docusaurus-plugin-content-docs')
        return (0, r.jsx)(o.A, {
          children: () => {
            const e = c(d, m),
              o = h
                ? s.replace(
                    n,
                    (function (e) {
                      return 'latest' === e ? 'refs/heads/master' : `refs/tags/v${e}`
                    })(e)
                  )
                : 'latest' === e
                ? s
                : s.replace(n, 'v' + e)
            return (0, r.jsx)(i.A, { className: l, children: o })
          },
        })
      }
    },
  },
])