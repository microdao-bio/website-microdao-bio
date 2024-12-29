'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [5117],
  {
    73439: (e, n, i) => {
      i.r(n),
        i.d(n, {
          assets: () => o,
          contentTitle: () => c,
          default: () => h,
          frontMatter: () => d,
          metadata: () => t,
          toc: () => l,
        })
      const t = JSON.parse(
        '{"id":"simulate-time-chaos-on-kubernetes","title":"Simulate Time Faults","description":"TimeChaos Introduction","source":"@site/versioned_docs/version-2.5.2/simulate-time-chaos-on-kubernetes.md","sourceDirName":".","slug":"/simulate-time-chaos-on-kubernetes","permalink":"/docs/2.5.2/simulate-time-chaos-on-kubernetes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.5.2/simulate-time-chaos-on-kubernetes.md","tags":[],"version":"2.5.2","frontMatter":{"title":"Simulate Time Faults"},"sidebar":"docs","previous":{"title":"Simulate DNS Faults","permalink":"/docs/2.5.2/simulate-dns-chaos-on-kubernetes"},"next":{"title":"Simulate JVM Application Faults","permalink":"/docs/2.5.2/simulate-jvm-application-chaos"}}'
      )
      var s = i(74848),
        r = i(28453)
      const d = { title: 'Simulate Time Faults' },
        c = void 0,
        o = {},
        l = [
          { value: 'TimeChaos Introduction', id: 'timechaos-introduction', level: 2 },
          {
            value: 'Create experiments using Chaos Dashboard',
            id: 'create-experiments-using-chaos-dashboard',
            level: 2,
          },
          { value: 'Create experiments using the YAML file', id: 'create-experiments-using-the-yaml-file', level: 2 },
        ]
      function a(e) {
        const n = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          img: 'img',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ...(0, r.R)(),
          ...e.components,
        }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.h2, { id: 'timechaos-introduction', children: 'TimeChaos Introduction' }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Chaos Mesh provides the TimeChaos experiment type. You can use this experiment type to simulate a time offset scenario. This document describes how to create a TimeChaos experiment and its associated configuration file.',
            }),
            '\n',
            (0, s.jsx)(n.admonition, {
              type: 'note',
              children: (0, s.jsxs)(n.p, {
                children: [
                  'TimeChaos only affects the PID ',
                  (0, s.jsx)(n.code, { children: '1' }),
                  ' process in the PID namespace of the container, and child processes of the PID ',
                  (0, s.jsx)(n.code, { children: '1' }),
                  '. For example, the process started by ',
                  (0, s.jsx)(n.code, { children: 'kubectl exec' }),
                  ' does not be affected.',
                ],
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: 'You can create experiments in Chaos Dashboard or using the YAML configuration file.',
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'create-experiments-using-chaos-dashboard',
              children: 'Create experiments using Chaos Dashboard',
            }),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'Open Chaos Dashboard, and click ',
                        (0, s.jsx)(n.strong, { children: 'NEW EXPERIMENT' }),
                        ' on the page to create a new experiment:',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(n.p, {
                      children: (0, s.jsx)(n.img, {
                        alt: 'Create Experiment',
                        src: i(2557).A + '',
                        width: '959',
                        height: '519',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'In the ',
                        (0, s.jsx)(n.strong, { children: 'Choose a Target' }),
                        ' area, choose ',
                        (0, s.jsx)(n.strong, { children: 'CLOCK SCREW' }),
                        ' and fill out the Clock ID and time offset.',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(n.p, {
                      children: (0, s.jsx)(n.img, {
                        alt: 'TimeChaos Experiments',
                        src: i(59891).A + '',
                        width: '1089',
                        height: '671',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(n.p, {
                      children:
                        'Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration:',
                    }),
                    '\n',
                    (0, s.jsx)(n.p, {
                      children: (0, s.jsx)(n.img, {
                        alt: 'Experiment Information',
                        src: i(70724).A + '',
                        width: '973',
                        height: '442',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: ['\n', (0, s.jsx)(n.p, { children: 'Submit the experiment information.' }), '\n'],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'create-experiments-using-the-yaml-file',
              children: 'Create experiments using the YAML file',
            }),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'Write the experiment configuration to the YAML configuration file. In the following example, the ',
                        (0, s.jsx)(n.code, { children: 'time-shift.yaml' }),
                        ' file is used.',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(n.pre, {
                      children: (0, s.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: TimeChaos\nmetadata:\n  name: time-shift-example\n  namespace: chaos-mesh\nspec:\n  mode: one\n  selector:\n    labelSelectors:\n      'app': 'app1'\n  timeOffset: '-10m100ns'\n",
                      }),
                    }),
                    '\n',
                    (0, s.jsx)(n.p, {
                      children:
                        'This experiment configuration will shift the time of the processes in the specified Pod forward by 10 minutes and 100 nanoseconds.',
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'After the configuration file is prepared, use ',
                        (0, s.jsx)(n.code, { children: 'kubectl' }),
                        ' to create an experiment:',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(n.pre, {
                      children: (0, s.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f time-shift.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: 'The fields in the YAML configuration file are described in the following table:',
            }),
            '\n',
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, { children: 'Parameter' }),
                      (0, s.jsx)(n.th, { children: 'Type' }),
                      (0, s.jsx)(n.th, { children: 'Note' }),
                      (0, s.jsx)(n.th, { children: 'Default value' }),
                      (0, s.jsx)(n.th, { children: 'Required' }),
                      (0, s.jsx)(n.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'timeOffset' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsx)(n.td, { children: 'Specifies the length of time offset.' }),
                        (0, s.jsx)(n.td, { children: 'None' }),
                        (0, s.jsx)(n.td, { children: 'Yes' }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: '-5m' }) }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'clockIds' }),
                        (0, s.jsx)(n.td, { children: '[]string' }),
                        (0, s.jsxs)(n.td, {
                          children: [
                            'Specifies the ID of clock that will be offset. See the ',
                            (0, s.jsxs)(n.a, {
                              href: 'https://man7.org/linux/man-pages/man2/clock_gettime.2.html',
                              children: [(0, s.jsx)('clock', { children: 'clock_gettime' }), ' documentation'],
                            }),
                            ' for details.',
                          ],
                        }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: '["CLOCK_REALTIME"]' }) }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, { children: '["CLOCK_REALTIME", "CLOCK_MONOTONIC"]' }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'mode' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsxs)(n.td, {
                          children: [
                            'Specifies the mode of the experiment. The mode options include ',
                            (0, s.jsx)(n.code, { children: 'one' }),
                            ' (selecting a random Pod), ',
                            (0, s.jsx)(n.code, { children: 'all' }),
                            ' (selecting all eligible Pods), ',
                            (0, s.jsx)(n.code, { children: 'fixed' }),
                            ' (selecting a specified number of eligible Pods), ',
                            (0, s.jsx)(n.code, { children: 'fixed-percent' }),
                            ' (selecting a specified percentage of Pods from the eligible Pods), and ',
                            (0, s.jsx)(n.code, { children: 'random-max-percent' }),
                            ' (selecting the maximum percentage of Pods from the eligible Pods).',
                          ],
                        }),
                        (0, s.jsx)(n.td, { children: 'None' }),
                        (0, s.jsx)(n.td, { children: 'Yes' }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: 'one' }) }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'value' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsxs)(n.td, {
                          children: [
                            'Provides parameters for the ',
                            (0, s.jsx)(n.code, { children: 'mode' }),
                            ' configuration, depending on ',
                            (0, s.jsx)(n.code, { children: 'mode' }),
                            '.For example, when ',
                            (0, s.jsx)(n.code, { children: 'mode' }),
                            ' is set to ',
                            (0, s.jsx)(n.code, { children: 'fixed-percent' }),
                            ', ',
                            (0, s.jsx)(n.code, { children: 'value' }),
                            ' specifies the percentage of Pods.',
                          ],
                        }),
                        (0, s.jsx)(n.td, { children: 'None' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: '1' }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'containerNames' }),
                        (0, s.jsx)(n.td, { children: '[]string' }),
                        (0, s.jsx)(n.td, {
                          children: 'Specifies the name of the container into which the fault is injected.',
                        }),
                        (0, s.jsx)(n.td, { children: 'None' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: '["nginx"]' }) }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'selector' }),
                        (0, s.jsx)(n.td, { children: 'struct' }),
                        (0, s.jsxs)(n.td, {
                          children: [
                            'Specifies the target Pod. For details, refer to ',
                            (0, s.jsx)(n.a, {
                              href: '/docs/2.5.2/define-chaos-experiment-scope',
                              children: 'Define the experiment scope',
                            }),
                            '.',
                          ],
                        }),
                        (0, s.jsx)(n.td, { children: 'None' }),
                        (0, s.jsx)(n.td, { children: 'Yes' }),
                        (0, s.jsx)(n.td, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, r.R)(), ...e.components }
        return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e)
      }
    },
    2557: (e, n, i) => {
      i.d(n, { A: () => t })
      const t = i.p + 'assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png'
    },
    70724: (e, n, i) => {
      i.d(n, { A: () => t })
      const t = i.p + 'assets/images/exp-info-8b402b174aa7d3cd9f8cfde8b492e876.png'
    },
    59891: (e, n, i) => {
      i.d(n, { A: () => t })
      const t = i.p + 'assets/images/timechaos-exp-5f24c2314275106d7b726e601dd1aa8c.png'
    },
    28453: (e, n, i) => {
      i.d(n, { R: () => d, x: () => c })
      var t = i(96540)
      const s = {},
        r = t.createContext(s)
      function d(e) {
        const n = t.useContext(r)
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function c(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : d(e.components)),
          t.createElement(r.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
