'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [3730],
  {
    96331: (e, n, a) => {
      a.r(n),
        a.d(n, {
          assets: () => r,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => o,
          metadata: () => s,
          toc: () => c,
        })
      const s = JSON.parse(
        '{"id":"use-grafana-data-source","title":"Use Grafana Data Source Plugin for Observations","description":"This document describes how to install the Data Source plugin locally in Grafana and make observations using Grafana Data Source.","source":"@site/versioned_docs/version-2.6.2/use-grafana-data-source.md","sourceDirName":".","slug":"/use-grafana-data-source","permalink":"/docs/use-grafana-data-source","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/use-grafana-data-source.md","tags":[],"version":"2.6.2","frontMatter":{"title":"Use Grafana Data Source Plugin for Observations"},"sidebar":"docs","previous":{"title":"Integrate Chaos Mesh to GitHub Actions","permalink":"/docs/integrate-chaos-mesh-into-github-actions"},"next":{"title":"Chaosctl","permalink":"/docs/chaosctl-tool"}}'
      )
      var i = a(74848),
        t = a(28453)
      const o = { title: 'Use Grafana Data Source Plugin for Observations' },
        l = void 0,
        r = {},
        c = [
          {
            value: 'Install Data Source Plugin using grafana-cli',
            id: 'install-data-source-plugin-using-grafana-cli',
            level: 2,
          },
          { value: 'Manual installation', id: 'manual-installation', level: 2 },
          { value: 'Set up Data Source Plugin', id: 'set-up-data-source-plugin', level: 2 },
          { value: 'Query', id: 'query', level: 2 },
          { value: 'Annotations', id: 'annotations', level: 2 },
          { value: 'Variables', id: 'variables', level: 2 },
          { value: 'Questions and feedback', id: 'questions-and-feedback', level: 2 },
          { value: 'What&#39;s next', id: 'whats-next', level: 2 },
        ]
      function d(e) {
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
          ul: 'ul',
          ...(0, t.R)(),
          ...e.components,
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.p, {
              children:
                'This document describes how to install the Data Source plugin locally in Grafana and make observations using Grafana Data Source.',
            }),
            '\n',
            (0, i.jsx)(n.admonition, {
              type: 'note',
              children: (0, i.jsxs)(n.ul, {
                children: [
                  '\n',
                  (0, i.jsx)(n.li, { children: 'Minimum supported version for Grafana is 7.0.0' }),
                  '\n',
                  (0, i.jsx)(n.li, { children: 'Minimum supported version for Chaos Mesh is 2.1.0' }),
                  '\n',
                ],
              }),
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: 'install-data-source-plugin-using-grafana-cli',
              children: 'Install Data Source Plugin using grafana-cli',
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-shell',
                children: ' grafana-cli plugins install chaosmeshorg-datasource\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'manual-installation', children: 'Manual installation' }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'As an alternative, you can also install the Data Source plugin locally in Grafana by following these steps:',
            }),
            '\n',
            (0, i.jsxs)(n.ol, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'Download the plugin zip package with the following command, or visit ',
                        (0, i.jsx)(n.a, {
                          href: 'https://github.com/chaos-mesh/datasource/releases',
                          children: 'https://github.com/chaos-mesh/datasource/releases',
                        }),
                        ' to download the package:',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-shell',
                        children:
                          'curl -LO https://github.com/chaos-mesh/datasource/releases/download/v2.2.3/chaosmeshorg-datasource-2.2.3.zip\n',
                      }),
                    }),
                    '\n',
                    (0, i.jsx)(n.p, {
                      children: 'After downloading, extract the plugin to the Grafana plugin directory:',
                    }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-shell',
                        children: 'unzip chaosmeshorg-datasource-2.2.3.zip -d YOUR_PLUGIN_DIR\n',
                      }),
                    }),
                    '\n',
                    (0, i.jsx)(n.admonition, {
                      type: 'tip',
                      children: (0, i.jsxs)(n.p, {
                        children: [
                          'To find the plugin directory, refer to ',
                          (0, i.jsx)(n.a, {
                            href: 'https://grafana.com/docs/grafana/latest/plugins/installation/#install-a-packaged-plugin',
                            children:
                              'https://grafana.com/docs/grafana/latest/plugins/installation/#install-a-packaged-plugin',
                          }),
                          '.',
                        ],
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'Update and save the configuration file ',
                        (0, i.jsx)(n.code, { children: 'grafana.ini' }),
                        ' of Grafana. Then, add the plugin to ',
                        (0, i.jsx)(n.code, { children: 'allow_loading_unsigned_plugins' }),
                        ' to ensure that Grafana can load the unsigned plugin:',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-ini',
                        children: '[plugins]\n  allow_loading_unsigned_plugins = chaosmeshorg-datasource\n',
                      }),
                    }),
                    '\n',
                    (0, i.jsx)(n.admonition, {
                      type: 'tip',
                      children: (0, i.jsxs)(n.p, {
                        children: [
                          'To find the configuration file, refer to ',
                          (0, i.jsx)(n.a, {
                            href: 'https://grafana.com/docs/grafana/latest/administration/configuration/#config-file-locations',
                            children:
                              'https://grafana.com/docs/grafana/latest/administration/configuration/#config-file-locations',
                          }),
                          '.',
                        ],
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, { children: 'Finally, restart Grafana to load the Data Source plugin.' }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'set-up-data-source-plugin', children: 'Set up Data Source Plugin' }),
            '\n',
            (0, i.jsxs)(n.ol, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'After you have successfully installed the Data Source plugin locally in Grafana, go to ',
                        (0, i.jsx)(n.strong, { children: 'Configuration -> Data sources' }),
                        ' and add Chaos Mesh to there, then visit the following configuration page:',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(n.p, {
                      children: (0, i.jsx)(n.img, {
                        alt: 'Configuration page',
                        src: a(88007).A + '',
                        width: '1400',
                        height: '1330',
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'On this page, only the ',
                        (0, i.jsx)(n.code, { children: 'URL' }),
                        ' field needs to be filled in, and the other fields can be ignored.',
                      ],
                    }),
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'Suppose that you have installed Chaos Mesh locally. In this case, Dashboard exports the API on port ',
                        (0, i.jsx)(n.code, { children: '2333' }),
                        ' by default. Therefore, if you have not changed anything, you can write ',
                        (0, i.jsx)(n.code, { children: 'http://localhost:2333' }),
                        ' in ',
                        (0, i.jsx)(n.code, { children: 'URL' }),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'Then use the ',
                        (0, i.jsx)(n.code, { children: 'port-forward' }),
                        ' command to make the API externally accessible:',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-shell',
                        children: 'kubectl port-forward -n chaos-mesh svc/chaos-dashboard 2333:2333\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'Click ',
                        (0, i.jsx)(n.strong, { children: 'Save & Test' }),
                        ' to test the connection. If it shows a successful notification, the set-up is complete.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'query', children: 'Query' }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'The Data Source plugin observes Chaos Mesh from the perspective of events. The following options are responsible for filtering different events:',
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [(0, i.jsx)(n.code, { children: 'Object ID' }), ': Filter by object UUID'],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [(0, i.jsx)(n.code, { children: 'Namespace' }), ': Filter by different namespace'],
                }),
                '\n',
                (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: 'Name' }), ': Filter by object name'] }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: 'Kind' }),
                    ': Filter by kind (PodChaos, Schedule, and so on)',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [(0, i.jsx)(n.code, { children: 'Limit' }), ': Limit the number of events'],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The settings for these options are passed as parameters to the ',
                (0, i.jsx)(n.code, { children: '/api/events' }),
                ' API.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'annotations', children: 'Annotations' }),
            '\n',
            (0, i.jsx)(n.p, {
              children: 'You can integrate Chaos Mesh events into the panel by setting up Annotations. For example:',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.img, { alt: 'Annotations', src: a(8684).A + '', width: '1280', height: '1300' }),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'For information on how to fill in the fields in annotations, refer to ',
                (0, i.jsx)(n.a, { href: '#query', children: 'Query' }),
                '.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'variables', children: 'Variables' }),
            '\n',
            (0, i.jsx)(n.p, {
              children: 'You can query Chaos Mesh for events dynamically by setting different variables.',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.img, {
                src: 'https://raw.githubusercontent.com/chaos-mesh/datasource/master/src/img/variables.png',
                alt: 'Variables',
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, { children: 'The types of variables provided by the plugin are as follows:' }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: 'Namespace' }),
                    ': After your selection, all available namespaces are displayed directly at the bottom of the page under ',
                    (0, i.jsx)(n.code, { children: 'Preview of values' }),
                    '.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: 'Kind' }),
                    ': Same as ',
                    (0, i.jsx)(n.strong, { children: 'Namespace' }),
                    '. It can get all kinds.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: 'Experiment' }),
                    ': Same as ',
                    (0, i.jsx)(n.strong, { children: 'Namespace' }),
                    '. It can get the names of all experiments.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: 'Schedule' }),
                    ': Same as ',
                    (0, i.jsx)(n.strong, { children: 'Namespace' }),
                    '. It can get the names of all schedules.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'questions-and-feedback', children: 'Questions and feedback' }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'If you encounter problems during installation or set-up, you are welcome to ask questions to the community at ',
                (0, i.jsx)(n.a, {
                  href: 'https://cloud-native.slack.com/archives/C0193VAV272',
                  children: 'CNCF Slack',
                }),
                ', or create an ',
                (0, i.jsx)(n.a, { href: 'https://github.com/chaos-mesh/datasource/issues', children: 'GitHub issue' }),
                ' to communicate with the Chaos Mesh team.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'whats-next', children: "What's next" }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'If you want to learn more details about the Data Source plugin, feel free to check out the source code for the plugin at ',
                (0, i.jsx)(n.a, {
                  href: 'https://github.com/chaos-mesh/datasource',
                  children: 'chaos-mesh/datasource',
                }),
                '.',
              ],
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, t.R)(), ...e.components }
        return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e)
      }
    },
    8684: (e, n, a) => {
      a.d(n, { A: () => s })
      const s = a.p + 'assets/images/annotations-b9e5e1fd76f38a49dd9886922307fc69.png'
    },
    88007: (e, n, a) => {
      a.d(n, { A: () => s })
      const s = a.p + 'assets/images/settings-665c0b7d82f112c4cfc6e7555ff5fecb.png'
    },
    28453: (e, n, a) => {
      a.d(n, { R: () => o, x: () => l })
      var s = a(96540)
      const i = {},
        t = s.createContext(i)
      function o(e) {
        const n = s.useContext(t)
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function l(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : o(e.components)),
          s.createElement(t.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
