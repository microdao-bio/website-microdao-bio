'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [1870],
  {
    62015: (e, s, t) => {
      t.r(s),
        t.d(s, {
          assets: () => h,
          contentTitle: () => a,
          default: () => d,
          frontMatter: () => r,
          metadata: () => o,
          toc: () => c,
        })
      const o = JSON.parse(
        '{"id":"overview","title":"Chaos Mesh Overview","description":"This document describes the concepts, use cases, core strengths, and the architecture of Chaos Mesh.","source":"@site/versioned_docs/version-2.5.2/overview.md","sourceDirName":".","slug":"/","permalink":"/docs/2.5.2/","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.5.2/overview.md","tags":[],"version":"2.5.2","frontMatter":{"slug":"/","title":"Chaos Mesh Overview"},"sidebar":"docs","next":{"title":"Basic Features","permalink":"/docs/2.5.2/basic-features"}}'
      )
      var n = t(74848),
        i = t(28453)
      const r = { slug: '/', title: 'Chaos Mesh Overview' },
        a = void 0,
        h = {},
        c = [
          { value: 'Chaos Mesh Overview', id: 'chaos-mesh-overview', level: 2 },
          { value: 'Core strengths', id: 'core-strengths', level: 2 },
          { value: 'Architecture overview', id: 'architecture-overview', level: 2 },
        ]
      function l(e) {
        const s = {
          a: 'a',
          h2: 'h2',
          img: 'img',
          li: 'li',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, i.R)(),
          ...e.components,
        }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(s.p, {
              children:
                'This document describes the concepts, use cases, core strengths, and the architecture of Chaos Mesh.',
            }),
            '\n',
            (0, n.jsx)(s.h2, { id: 'chaos-mesh-overview', children: 'Chaos Mesh Overview' }),
            '\n',
            (0, n.jsx)(s.p, {
              children:
                'Chaos Mesh is an open source cloud-native Chaos Engineering platform. It offers various types of fault simulation and has an enormous capability to orchestrate fault scenarios. Using Chaos Mesh, you can conveniently simulate various abnormalities that might occur in reality during the development, testing, and production environments and find potential problems in the system. To lower the threshold for a Chaos Engineering project, Chaos Mesh provides you with a visualization operation. You can easily design your Chaos scenarios on the Web UI and monitor the status of Chaos experiments.',
            }),
            '\n',
            (0, n.jsx)(s.h2, { id: 'core-strengths', children: 'Core strengths' }),
            '\n',
            (0, n.jsx)(s.p, {
              children:
                "As the industry's leading Chaos testing platform, Chaos Mesh has the following core strengths:",
            }),
            '\n',
            (0, n.jsxs)(s.ul, {
              children: [
                '\n',
                (0, n.jsxs)(s.li, {
                  children: [
                    'Stable core capabilities: Chaos Mesh originated from the core testing platform of ',
                    (0, n.jsx)(s.a, { href: 'https://github.com/pingcap/tidb', children: 'TiDB' }),
                    ", and inherited a lot of TiDB's existing test experience from its initial release.",
                  ],
                }),
                '\n',
                (0, n.jsx)(s.li, {
                  children:
                    'Fully authenticated: Chaos Mesh is used in numerous companies and organizations, such as Tencent and Meituan; It is also used in the testing systems of many well-known distributed systems, such as Apache APISIX and RabbitMQ.',
                }),
                '\n',
                (0, n.jsx)(s.li, {
                  children:
                    'An easy-to-use system: Chaos Mesh makes full use of automation with graphical operations and Kubernetes-based usage.',
                }),
                '\n',
                (0, n.jsx)(s.li, {
                  children:
                    'Cloud Native: Chaos Mesh supports Kubernetes environment with its powerful automation ability.',
                }),
                '\n',
                (0, n.jsx)(s.li, {
                  children:
                    'Various fault simulation scenarios: Chaos Mesh covers most of the scenarios of basic fault simulation in the distributed testing system.',
                }),
                '\n',
                (0, n.jsx)(s.li, {
                  children:
                    'Flexible experiment orchestration capabilities: You can design your own Chaos experiment scenarios on the platform, including multiple mixing experiments and application status checks.',
                }),
                '\n',
                (0, n.jsx)(s.li, {
                  children:
                    'High security: Chaos Mesh is designed with multiple layers of security control and provides high security.',
                }),
                '\n',
                (0, n.jsxs)(s.li, {
                  children: [
                    'An active community: Chaos Mesh is an incubating project hosted by CNCF. It has a growing number of ',
                    (0, n.jsx)(s.a, {
                      href: 'https://github.com/chaos-mesh/chaos-mesh/graphs/contributors',
                      children: 'contributors',
                    }),
                    ' and ',
                    (0, n.jsx)(s.a, {
                      href: 'https://github.com/chaos-mesh/chaos-mesh/blob/master/ADOPTERS.md',
                      children: 'adopters',
                    }),
                    ' all over the world.',
                  ],
                }),
                '\n',
                (0, n.jsx)(s.li, {
                  children: "Easily scalable: It's easy to add new fault test types and functions to Chaos Mesh.",
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(s.h2, { id: 'architecture-overview', children: 'Architecture overview' }),
            '\n',
            (0, n.jsx)(s.p, {
              children:
                'Chaos Mesh is built on Kubernetes CRD (Custom Resource Definition). To manage different Chaos experiments, Chaos Mesh defines multiple CRD types based on different fault types and implements separate Controllers for different CRD objects. Chaos Mesh primarily contains three components:',
            }),
            '\n',
            (0, n.jsxs)(s.ul, {
              children: [
                '\n',
                (0, n.jsxs)(s.li, {
                  children: [
                    (0, n.jsx)(s.strong, { children: 'Chaos Dashboard' }),
                    ': The visualization component of Chaos Mesh. Chaos Dashboard offers a set of user-friendly web interfaces through which users can manipulate and observe Chaos experiments. At the same time, Chaos Dashboard also provides an RBAC permission management mechanism.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(s.li, {
                  children: [
                    (0, n.jsx)(s.strong, { children: 'Chaos Controller Manager' }),
                    ': The core logical component of Chaos Mesh. Chaos Controller Manager is primarily responsible for the scheduling and management of Chaos experiments. This component contains several CRD Controllers, such as Workflow Controller, Scheduler Controller, and Controllers of various fault types.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(s.li, {
                  children: [
                    (0, n.jsx)(s.strong, { children: 'Chaos Daemon' }),
                    ': The main executive component. Chaos Daemon runs in the ',
                    (0, n.jsx)(s.a, {
                      href: 'https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/',
                      children: 'DaemonSet',
                    }),
                    ' mode and has the Privileged permission by default (which can be disabled). This component mainly interferes with specific network devices, file systems, kernels by hacking into the target Pod Namespace.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(s.p, {
              children: (0, n.jsx)(s.img, { alt: 'Architecture', src: t(10675).A + '', width: '751', height: '922' }),
            }),
            '\n',
            (0, n.jsx)(s.p, {
              children:
                'As shown in the above image, the overall architecture of Chaos Mesh can be divided into three parts from top to bottom:',
            }),
            '\n',
            (0, n.jsxs)(s.ul, {
              children: [
                '\n',
                (0, n.jsx)(s.li, {
                  children:
                    'User input and observation: User input reaches the Kubernetes API Server starting with a user operation (User). Users do not directly interact with the Chaos Controller Manager. All user operations are eventually reflected as a Chaos resource change (such as the change of NetworkChaos resource).',
                }),
                '\n',
                (0, n.jsx)(s.li, {
                  children:
                    'Monitor resource changes, schedule Workflow, and carry out Chaos experiments: The Chaos Controller Manager only accepts events from the Kubernetes API Server. These events describe the changes of a certain Chaos resource, such as a new Workflow object or the creation of a Chaos object.',
                }),
                '\n',
                (0, n.jsx)(s.li, {
                  children:
                    "Injection of a specific node fault: The Chaos Daemon component is primarily responsible for accepting commands from the Chaos Controller Manager component, hacking into the target Pod's Namespace, and performing specific fault injections. For example, setting TC network rules, starting the stress-ng process to preempt CPU or memory resource.",
                }),
                '\n',
              ],
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: s } = { ...(0, i.R)(), ...e.components }
        return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(l, { ...e }) }) : l(e)
      }
    },
    10675: (e, s, t) => {
      t.d(s, { A: () => o })
      const o = t.p + 'assets/images/architecture-76301820de324f79d79db310b11b9246.png'
    },
    28453: (e, s, t) => {
      t.d(s, { R: () => r, x: () => a })
      var o = t(96540)
      const n = {},
        i = o.createContext(n)
      function r(e) {
        const s = o.useContext(i)
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function a(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : r(e.components)),
          o.createElement(i.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
