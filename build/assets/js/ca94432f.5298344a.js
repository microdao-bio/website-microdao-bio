'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [5607],
  {
    68906: (e, s, t) => {
      t.r(s),
        t.d(s, {
          assets: () => o,
          contentTitle: () => d,
          default: () => h,
          frontMatter: () => c,
          metadata: () => n,
          toc: () => l,
        })
      const n = JSON.parse(
        '{"id":"chaosd-search-recover","title":"Search and Recover Experiments of Chaosd","description":"You can search experiments by conditions and recover the experiments corresponding to specified UIDs using Chaosd. This document describes how to search and recover experiments of Chaosd, and provides releated examples.","source":"@site/versioned_docs/version-2.5.2/chaosd-search-recover.md","sourceDirName":".","slug":"/chaosd-search-recover","permalink":"/docs/2.5.2/chaosd-search-recover","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.5.2/chaosd-search-recover.md","tags":[],"version":"2.5.2","frontMatter":{"title":"Search and Recover Experiments of Chaosd","summary":"Describes how to search and recover the experiments of Chaosd, and provide related examples."},"sidebar":"docs","previous":{"title":"Simulate Redis Faults","permalink":"/docs/2.5.2/simulate-redis-chaos-on-physical-nodes"},"next":{"title":"GCP OAuth Authentication","permalink":"/docs/2.5.2/gcp-authentication"}}'
      )
      var r = t(74848),
        i = t(28453)
      const c = {
          title: 'Search and Recover Experiments of Chaosd',
          summary: 'Describes how to search and recover the experiments of Chaosd, and provide related examples.',
        },
        d = void 0,
        o = {},
        l = [
          { value: 'Search experiments of Chaosd', id: 'search-experiments-of-chaosd', level: 2 },
          {
            value: 'Search experiments using the command-line mode',
            id: 'search-experiments-using-the-command-line-mode',
            level: 3,
          },
          { value: 'Configuration description', id: 'configuration-description', level: 4 },
          { value: 'Example', id: 'example', level: 4 },
          {
            value: 'Search experiments using the service mode',
            id: 'search-experiments-using-the-service-mode',
            level: 3,
          },
          { value: 'Example', id: 'example-1', level: 4 },
          { value: 'Recover experiments of Chaosd', id: 'recover-experiments-of-chaosd', level: 2 },
          {
            value: 'Recover experiments using the command-line mode',
            id: 'recover-experiments-using-the-command-line-mode',
            level: 3,
          },
          {
            value: 'Recover experiments using the service mode',
            id: 'recover-experiments-using-the-service-mode',
            level: 3,
          },
        ]
      function a(e) {
        const s = {
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ...(0, i.R)(),
          ...e.components,
        }
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(s.p, {
              children:
                'You can search experiments by conditions and recover the experiments corresponding to specified UIDs using Chaosd. This document describes how to search and recover experiments of Chaosd, and provides releated examples.',
            }),
            '\n',
            (0, r.jsx)(s.h2, { id: 'search-experiments-of-chaosd', children: 'Search experiments of Chaosd' }),
            '\n',
            (0, r.jsx)(s.p, {
              children:
                'This section introduces how to use command-line mode and service mode to find experiments of Chaosd.',
            }),
            '\n',
            (0, r.jsx)(s.h3, {
              id: 'search-experiments-using-the-command-line-mode',
              children: 'Search experiments using the command-line mode',
            }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'By running the following command, you can view the configurations supported by the ',
                (0, r.jsx)(s.code, { children: 'search' }),
                ' command:',
              ],
            }),
            '\n',
            (0, r.jsx)(s.pre, {
              children: (0, r.jsx)(s.code, {
                className: 'language-bash',
                children:
                  "$ chaosd search --help\nSearch chaos attack, you can search attacks through the uid or the state of the attack\n\nUsage:\n  chaosd search UID [flags]\n\nFlags:\n  -A, --all             list all chaos attacks\n      --asc             order by CreateTime, default value is false that means order by CreateTime desc\n  -h, --help            help for search\n  -k, --kind string     attack kind, supported value: network, process, stress, disk, host, jvm\n  -l, --limit uint32    limit the count of attacks\n  -o, --offset uint32   starting to search attacks from offset\n  -s, --status string   attack status, supported value: created, success, error, destroyed, revoked\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, r.jsx)(s.h4, { id: 'configuration-description', children: 'Configuration description' }),
            '\n',
            (0, r.jsxs)(s.table, {
              children: [
                (0, r.jsx)(s.thead, {
                  children: (0, r.jsxs)(s.tr, {
                    children: [
                      (0, r.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, r.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, r.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, r.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Type' }),
                    ],
                  }),
                }),
                (0, r.jsxs)(s.tbody, {
                  children: [
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, r.jsx)(s.code, { children: 'all' }),
                        }),
                        (0, r.jsx)(s.td, { style: { textAlign: 'left' }, children: 'A' }),
                        (0, r.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Lists all experiments' }),
                        (0, r.jsx)(s.td, { style: { textAlign: 'left' }, children: 'bool' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, r.jsx)(s.code, { children: 'asc' }),
                        }),
                        (0, r.jsx)(s.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, r.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Sorts the experiments in ascending order of the creation time. The default value is ',
                            (0, r.jsx)(s.code, { children: 'false' }),
                            '.',
                          ],
                        }),
                        (0, r.jsx)(s.td, { style: { textAlign: 'left' }, children: 'bool' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, r.jsx)(s.code, { children: 'kind' }),
                        }),
                        (0, r.jsx)(s.td, { style: { textAlign: 'left' }, children: 'k' }),
                        (0, r.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: 'Lists experiments of the specified kind',
                        }),
                        (0, r.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string. The supported kinds are as follows: ',
                            (0, r.jsx)(s.code, { children: 'network' }),
                            ', ',
                            (0, r.jsx)(s.code, { children: 'process' }),
                            ', ',
                            (0, r.jsx)(s.code, { children: 'stress' }),
                            ', ',
                            (0, r.jsx)(s.code, { children: 'disk' }),
                            ', ',
                            (0, r.jsx)(s.code, { children: 'host' }),
                            ', ',
                            (0, r.jsx)(s.code, { children: 'jvm' }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, r.jsx)(s.code, { children: 'limit' }),
                        }),
                        (0, r.jsx)(s.td, { style: { textAlign: 'left' }, children: 'l' }),
                        (0, r.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: 'The number of listed experiments',
                        }),
                        (0, r.jsx)(s.td, { style: { textAlign: 'left' }, children: 'int' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, r.jsx)(s.code, { children: 'offset' }),
                        }),
                        (0, r.jsx)(s.td, { style: { textAlign: 'left' }, children: 'o' }),
                        (0, r.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: 'Searches from the specified offset',
                        }),
                        (0, r.jsx)(s.td, { style: { textAlign: 'left' }, children: 'int' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, r.jsx)(s.code, { children: 'status' }),
                        }),
                        (0, r.jsx)(s.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, r.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: 'Lists experiments with the specified status',
                        }),
                        (0, r.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string. The supported types are as follows: ',
                            (0, r.jsx)(s.code, { children: 'created' }),
                            ', ',
                            (0, r.jsx)(s.code, { children: 'success' }),
                            ', ',
                            (0, r.jsx)(s.code, { children: 'error' }),
                            ', ',
                            (0, r.jsx)(s.code, { children: 'destroyed' }),
                            ', ',
                            (0, r.jsx)(s.code, { children: 'revoked' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(s.h4, { id: 'example', children: 'Example' }),
            '\n',
            (0, r.jsx)(s.pre, {
              children: (0, r.jsx)(s.code, {
                className: 'language-bash',
                children: './chaosd search --kind network --status destroyed --limit 1\n',
              }),
            }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'By running this command, you can search the experiments of the kind of ',
                (0, r.jsx)(s.code, { children: 'network' }),
                ' in the status of ',
                (0, r.jsx)(s.code, { children: 'destroyed' }),
                ' (indicating that the experiment has been recovered).',
              ],
            }),
            '\n',
            (0, r.jsx)(s.p, { children: 'After running the command, only one row of data is output in the result:' }),
            '\n',
            (0, r.jsx)(s.pre, {
              children: (0, r.jsx)(s.code, {
                className: 'language-bash',
                children:
                  '                  UID                     KIND     ACTION    STATUS            CREATE TIME                                                                                                                  CONFIGURATION\n--------------------------------------- --------- -------- ----------- --------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n  1f6c1253-522a-43d9-83f8-42607102b3b9   network   delay    destroyed   2021-11-02T15:14:07+08:00   {"schedule":"","duration":"","action":"delay","kind":"network","uid":"1f6c1253-522a-43d9-83f8-42607102b3b9","latency":"2s","jitter":"0ms","correlation":"0","device":"eth0","ip-address":"220.181.38.251","ip-protocol":"all"}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(s.h3, {
              id: 'search-experiments-using-the-service-mode',
              children: 'Search experiments using the service mode',
            }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'Currently, the service mode only supports searching all experiments. You can get the data by visiting the ',
                (0, r.jsx)(s.code, { children: '/api/experiments/' }),
                ' path of Chaosd service.',
              ],
            }),
            '\n',
            (0, r.jsx)(s.h4, { id: 'example-1', children: 'Example' }),
            '\n',
            (0, r.jsx)(s.pre, {
              children: (0, r.jsx)(s.code, {
                className: 'language-bash',
                children: 'curl -X GET 127.0.0.1:31767/api/experiments/\n',
              }),
            }),
            '\n',
            (0, r.jsx)(s.p, { children: 'The result is as follows:' }),
            '\n',
            (0, r.jsx)(s.pre, {
              children: (0, r.jsx)(s.code, {
                className: 'language-bash',
                children:
                  '[{"id":1,"uid":"ddc5ca81-b677-4595-b691-0ce57bedb156","created_at":"2021-10-18T16:01:18.563542491+08:00","updated_at":"2021-10-18T16:07:27.87111393+08:00","status":"success","kind":"stress","action":"mem","recover_command":"{\\"schedule\\":\\"\\",\\"duration\\":\\"\\",\\"action\\":\\"mem\\",\\"kind\\":\\"stress\\",\\"uid\\":\\"ddc5ca81-b677-4595-b691-0ce57bedb156\\",\\"Load\\":0,\\"Workers\\":0,\\"Size\\":\\"100MB\\",\\"Options\\":null,\\"StressngPid\\":0}","launch_mode":"svr"}]\n',
              }),
            }),
            '\n',
            (0, r.jsx)(s.h2, { id: 'recover-experiments-of-chaosd', children: 'Recover experiments of Chaosd' }),
            '\n',
            (0, r.jsx)(s.p, {
              children:
                'After creating an experiment, if you want to withdraw the impact caused by the experiment, you can use the recovery feature of experiments.',
            }),
            '\n',
            (0, r.jsx)(s.h3, {
              id: 'recover-experiments-using-the-command-line-mode',
              children: 'Recover experiments using the command-line mode',
            }),
            '\n',
            (0, r.jsx)(s.p, { children: 'You can recover an experiment by using Chaosd recover UID.' }),
            '\n',
            (0, r.jsx)(s.p, {
              children: 'The following example shows how to recover an experiment using the command-line mode.',
            }),
            '\n',
            (0, r.jsxs)(s.ol, {
              children: [
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(s.p, { children: 'Create a CPU stress experiment using Chaosd:' }),
                    '\n',
                    (0, r.jsx)(s.pre, {
                      children: (0, r.jsx)(s.code, {
                        className: 'language-bash',
                        children: 'chaosd attack stress cpu --workers 2 --load 10\n',
                      }),
                    }),
                    '\n',
                    (0, r.jsx)(s.p, { children: 'The result is as follows:' }),
                    '\n',
                    (0, r.jsx)(s.pre, {
                      children: (0, r.jsx)(s.code, {
                        className: 'language-bash',
                        children:
                          '[2021/05/12 03:38:33.698 +00:00] [INFO] [stress.go:66] ["stressors normalize"] [arguments=" --cpu 2 --cpu-load 10"]\n[2021/05/12 03:38:33.702 +00:00] [INFO] [stress.go:82] ["Start stress-ng process successfully"] [command="/usr/bin/stress-ng --cpu 2 --cpu-load 10"] [Pid=27483]\nAttack stress cpu successfully, uid: 4f33b2d4-aee6-43ca-9c43-0f12867e5c9c\n',
                      }),
                    }),
                    '\n',
                    (0, r.jsx)(s.p, { children: 'Save the experiment UID for later use.' }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(s.p, {
                      children: [
                        'When you do not need to simulate the CPU stress scenario anymore, use the ',
                        (0, r.jsx)(s.code, { children: 'recover' }),
                        ' command to recover the experiment corresponding to the UID:',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(s.pre, {
                      children: (0, r.jsx)(s.code, {
                        className: 'language-bash',
                        children: 'chaosd recover 4f33b2d4-aee6-43ca-9c43-0f12867e5c9c\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(s.h3, {
              id: 'recover-experiments-using-the-service-mode',
              children: 'Recover experiments using the service mode',
            }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'You can recover an experiment by sending a ',
                (0, r.jsx)(s.code, { children: 'DELETE' }),
                ' HTTP request to the ',
                (0, r.jsx)(s.code, { children: '/api/attack/{uid}' }),
                ' path of Chaosd service.',
              ],
            }),
            '\n',
            (0, r.jsx)(s.p, {
              children: 'The following example shows how to recover an experiment using the service mode.',
            }),
            '\n',
            (0, r.jsxs)(s.ol, {
              children: [
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(s.p, {
                      children: [
                        'Send a ',
                        (0, r.jsx)(s.code, { children: 'POST' }),
                        ' HTTP request to the Chaosd service to create a CPU stress experiment:',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(s.pre, {
                      children: (0, r.jsx)(s.code, {
                        className: 'language-bash',
                        children:
                          'curl -X POST 172.16.112.130:31767/api/attack/stress -H "Content-Type:application/json" -d \'{"load":10, "action":"cpu","workers":1}\'\n',
                      }),
                    }),
                    '\n',
                    (0, r.jsx)(s.p, { children: 'The result is as follows:' }),
                    '\n',
                    (0, r.jsx)(s.pre, {
                      children: (0, r.jsx)(s.code, {
                        className: 'language-bash',
                        children:
                          '{"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n',
                      }),
                    }),
                    '\n',
                    (0, r.jsx)(s.p, { children: 'Save the experiment UID for later use.' }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(s.p, {
                      children:
                        'When you do not need to simulate the CPU stress scenario anymore, run the following command to recover the experiment corresponding to the UID:',
                    }),
                    '\n',
                    (0, r.jsx)(s.pre, {
                      children: (0, r.jsx)(s.code, {
                        className: 'language-bash',
                        children:
                          'curl -X DELETE 172.16.112.130:31767/api/attack/c3c519bf-819a-4a7b-97fb-e3d0814481fa\n',
                      }),
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
      function h(e = {}) {
        const { wrapper: s } = { ...(0, i.R)(), ...e.components }
        return s ? (0, r.jsx)(s, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e)
      }
    },
    28453: (e, s, t) => {
      t.d(s, { R: () => c, x: () => d })
      var n = t(96540)
      const r = {},
        i = n.createContext(r)
      function c(e) {
        const s = n.useContext(i)
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function d(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : c(e.components)),
          n.createElement(i.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
