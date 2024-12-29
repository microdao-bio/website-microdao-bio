'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [9746],
  {
    46603: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => a,
          contentTitle: () => r,
          default: () => l,
          frontMatter: () => o,
          metadata: () => t,
          toc: () => d,
        })
      const t = JSON.parse(
        '{"id":"inspect-chaos-experiments","title":"Inspect Results of Chaos Experiments","description":"This document describes how to use Chaos Mesh to check running status and results of chaos experiments.","source":"@site/versioned_docs/version-2.6.2/inspect-chaos-experiments.md","sourceDirName":".","slug":"/inspect-chaos-experiments","permalink":"/docs/inspect-chaos-experiments","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/inspect-chaos-experiments.md","tags":[],"version":"2.6.2","frontMatter":{"title":"Inspect Results of Chaos Experiments"},"sidebar":"docs","previous":{"title":"Run a Chaos Experiment","permalink":"/docs/run-a-chaos-experiment"},"next":{"title":"Create Chaos Mesh Workflow","permalink":"/docs/create-chaos-mesh-workflow"}}'
      )
      var i = n(74848),
        c = n(28453)
      const o = { title: 'Inspect Results of Chaos Experiments' },
        r = void 0,
        a = {},
        d = [
          {
            value: 'Introduction to steps of a chaos experiment',
            id: 'introduction-to-steps-of-a-chaos-experiment',
            level: 2,
          },
          { value: 'Check results using Chaos Dashboard', id: 'check-results-using-chaos-dashboard', level: 2 },
          {
            value: 'Check results using the <code>kubectl</code> command',
            id: 'check-results-using-the-kubectl-command',
            level: 2,
          },
        ]
      function h(e) {
        const s = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          img: 'img',
          li: 'li',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, c.R)(),
          ...e.components,
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.p, {
              children:
                'This document describes how to use Chaos Mesh to check running status and results of chaos experiments.',
            }),
            '\n',
            (0, i.jsx)(s.h2, {
              id: 'introduction-to-steps-of-a-chaos-experiment',
              children: 'Introduction to steps of a chaos experiment',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'In Chaos Mesh, the life cycle of a chaos experiment is divided into four steps, according to its running process:',
            }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    'Injecting: Chaos experiment is in the process of fault injection. Normally, this step lasts for a short time. If the "Injecting" step lasts a long time, it may be due to some exceptions in the chaos experiment. In this case, you can check ',
                    (0, i.jsx)(s.code, { children: 'Events' }),
                    ' to find the cause of the exceptions.',
                  ],
                }),
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    'Running: After the faults have been successfully injected into all target pods, the chaos experiment starts running.',
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    'Paused: when executing a ',
                    (0, i.jsx)(s.a, {
                      href: '/docs/run-a-chaos-experiment#pause-chaos-experiments',
                      children: 'paused',
                    }),
                    ' process for a running chaos experiment, Chaos Mesh restores the injected faults from all target pods, which indicates the experiment is paused.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    'Finished: if the ',
                    (0, i.jsx)(s.code, { children: 'duration' }),
                    ' parameter of the experiment is configured, and when the experiment runs it up, Chaos Mesh restores the injected faults from all target pods, which indicates that the experiment is finished.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.h2, {
              id: 'check-results-using-chaos-dashboard',
              children: 'Check results using Chaos Dashboard',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'You can check the running steps of chaos experiments on any of the following pages using Chaos Dashboard:',
            }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(s.p, { children: 'List of chaos experiments:' }),
                    '\n',
                    (0, i.jsx)(s.p, {
                      children: (0, i.jsx)(s.img, {
                        alt: 'Experimental Status',
                        src: n(76329).A + '',
                        width: '1760',
                        height: '648',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(s.p, { children: 'Details of chaos experiments:' }),
                    '\n',
                    (0, i.jsx)(s.p, {
                      children: (0, i.jsx)(s.img, {
                        alt: 'Experimental Status',
                        src: n(81606).A + '',
                        width: '1680',
                        height: '762',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.admonition, {
              type: 'note',
              children: (0, i.jsxs)(s.ul, {
                children: [
                  '\n',
                  (0, i.jsxs)(s.li, {
                    children: [
                      'If the ',
                      (0, i.jsx)(s.strong, { children: '"Injecting"' }),
                      ' step lasts for a long time, it may be due to some anomalies in the chaos experiment (e.g. the configured selectors have not selected target pods where to inject chaos actions). In this case, you can check ',
                      (0, i.jsx)(s.strong, { children: (0, i.jsx)(s.code, { children: 'Events' }) }),
                      ' to find the cause of the exceptions and check the configuration of the chaos experiment.',
                    ],
                  }),
                  '\n',
                  (0, i.jsxs)(s.li, {
                    children: [
                      'Chaos Dashboard only displays ',
                      (0, i.jsx)(s.a, {
                        href: '#introduction-to-steps-of-a-chaos-experiment',
                        children: 'main steps of a chaos experiment',
                      }),
                      '. For more detailed information about experiment status and results, run the ',
                      (0, i.jsx)(s.code, { children: 'kubectl' }),
                      ' command.',
                    ],
                  }),
                  '\n',
                ],
              }),
            }),
            '\n',
            (0, i.jsxs)(s.h2, {
              id: 'check-results-using-the-kubectl-command',
              children: ['Check results using the ', (0, i.jsx)(s.code, { children: 'kubectl' }), ' command'],
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                'To confirm the results of chaos experiments, use the following ',
                (0, i.jsx)(s.code, { children: 'kubectl describe' }),
                ' command to check the ',
                (0, i.jsx)(s.code, { children: 'Status' }),
                ' and ',
                (0, i.jsx)(s.code, { children: 'Events' }),
                ' of experiment objects.',
              ],
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-shell',
                children: 'kubectl describe podchaos pod-failure-tikv -n tidb-cluster\n',
              }),
            }),
            '\n',
            (0, i.jsx)(s.p, { children: 'The expected output is as follows:' }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-shell',
                children:
                  '...\nStatus:\n  Conditions:\n    Reason:\n    Status:  False\n    Type:    Paused\n    Reason:\n    Status:  True\n    Type:    Selected\n    Reason:\n    Status:  True\n    Type:    AllInjected\n    Reason:\n    Status:  False\n    Type:    AllRecovered\n  Experiment:\n    Container Records:\n      Id:            tidb-cluster/basic-tikv-0\n      Phase:         Injected\n      Selector Key:  .\n    Desired Phase:   Run\nEvents:\n  Type    Reason           Age   From          Message\n  ----    ------           ----  ----          -------\n  Normal  FinalizerInited  39s   finalizer     Finalizer has been inited\n  Normal  Paused           39s   desiredphase  Experiment has been paused\n  Normal  Updated          39s   finalizer     Successfully update finalizer of resource\n  Normal  Updated          39s   records       Successfully update records of resource\n  Normal  Updated          39s   desiredphase  Successfully update desiredPhase of resource\n  Normal  Started          17s   desiredphase  Experiment has started\n  Normal  Updated          17s   desiredphase  Successfully update desiredPhase of resource\n  Normal  Applied          17s   records       Successfully apply chaos for tidb-cluster/basic-tikv-0\n  Normal  Updated          17s   records       Successfully update records of resource\n',
              }),
            }),
            '\n',
            (0, i.jsx)(s.p, { children: 'The above output contains two parts:' }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(s.p, { children: (0, i.jsx)(s.code, { children: 'Status' }) }),
                    '\n',
                    (0, i.jsxs)(s.p, {
                      children: [
                        'Based on the running process of the chaos experiment, the ',
                        (0, i.jsx)(s.code, { children: 'Status' }),
                        ' provides four types of status records:',
                      ],
                    }),
                    '\n',
                    (0, i.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            (0, i.jsx)(s.code, { children: 'Paused' }),
                            ': indicates the chaos experiment is in the "Paused" step.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            (0, i.jsx)(s.code, { children: 'Selected' }),
                            ': indicates the chaos experiment had correctly selected the target pods where to inject chaos actions.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            (0, i.jsx)(s.code, { children: 'AllInjected' }),
                            ': indicates the faults have been successfully injected to all target pods.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            (0, i.jsx)(s.code, { children: 'AllRecoverd' }),
                            ': indicates the injected faults have been succesfully restored from all target pods.',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(s.p, {
                      children:
                        'The actual running status of current chaos experiments can be inferred from these four types of status records. For example:',
                    }),
                    '\n',
                    (0, i.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            'When ',
                            (0, i.jsx)(s.code, { children: 'Paused' }),
                            '\u3001',
                            (0, i.jsx)(s.code, { children: 'Selected' }),
                            '\u3001',
                            (0, i.jsx)(s.code, { children: 'AllRecoverd' }),
                            ' is ',
                            (0, i.jsx)(s.code, { children: 'True' }),
                            ' and ',
                            (0, i.jsx)(s.code, { children: 'AllInjected' }),
                            ' is ',
                            (0, i.jsx)(s.code, { children: 'False' }),
                            ', it indicates the current chaos experiment is paused.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            'When ',
                            (0, i.jsx)(s.code, { children: 'Paused' }),
                            ' is ',
                            (0, i.jsx)(s.code, { children: 'True' }),
                            ', it indicates the current chaos experiment is paused. However, if the ',
                            (0, i.jsx)(s.code, { children: 'Selected' }),
                            ' is ',
                            (0, i.jsx)(s.code, { children: 'False' }),
                            ' at the same time, then it means the current experiment cannot select the target pods where to inject chaos actions.',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(s.admonition, {
                      type: 'note',
                      children: (0, i.jsxs)(s.p, {
                        children: [
                          'You can get more information from the combination of the above status records, for example, when ',
                          (0, i.jsx)(s.code, { children: 'Paused' }),
                          ' is ',
                          (0, i.jsx)(s.code, { children: 'True' }),
                          ', it indicates the experiment is paused, but if the ',
                          (0, i.jsx)(s.code, { children: 'Selected' }),
                          ' is ',
                          (0, i.jsx)(s.code, { children: 'False' }),
                          ' at the same time, then it means the current experiment cannot select the target pods where to inject chaos actions.',
                        ],
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(s.p, { children: (0, i.jsx)(s.code, { children: 'Events' }) }),
                    '\n',
                    (0, i.jsx)(s.p, {
                      children:
                        'It contains the records of actions conducted during the whole life cycle of a chaos experiment, which can help to check experiment status and troubleshoot issues.',
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
          ],
        })
      }
      function l(e = {}) {
        const { wrapper: s } = { ...(0, c.R)(), ...e.components }
        return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e)
      }
    },
    81606: (e, s, n) => {
      n.d(s, { A: () => t })
      const t = n.p + 'assets/images/chaos_detail_status-171482b3cd8c1e3759a52e4fd6860875.png'
    },
    76329: (e, s, n) => {
      n.d(s, { A: () => t })
      const t = n.p + 'assets/images/list_chaos_status-478857ce5a06cb75eabc4d3a980a91e0.png'
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => o, x: () => r })
      var t = n(96540)
      const i = {},
        c = t.createContext(i)
      function o(e) {
        const s = t.useContext(c)
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function r(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : o(e.components)),
          t.createElement(c.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
