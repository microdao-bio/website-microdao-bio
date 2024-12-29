'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [8750],
  {
    7307: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => a,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => o,
          metadata: () => t,
          toc: () => c,
        })
      const t = JSON.parse(
        '{"id":"simulate-process-chaos-in-physical-nodes","title":"Simulate Process Faults","description":"This document describes how to use Chaosd to simulate process faults. The process faults use the Golang interface of the kill command to simulate the scenarios that the process is killed or stopped. You can create experiments either in the command-line mode or service mode.","source":"@site/versioned_docs/version-2.5.2/simulate-process-chaos-in-physical-nodes.md","sourceDirName":".","slug":"/simulate-process-chaos-in-physical-nodes","permalink":"/docs/2.5.2/simulate-process-chaos-in-physical-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.5.2/simulate-process-chaos-in-physical-nodes.md","tags":[],"version":"2.5.2","frontMatter":{"title":"Simulate Process Faults"},"sidebar":"docs","previous":{"title":"Simulate Faults on Physical Machines","permalink":"/docs/2.5.2/simulate-physical-machine-chaos"},"next":{"title":"Simulate Network Faults","permalink":"/docs/2.5.2/simulate-network-chaos-in-physical-nodes"}}'
      )
      var l = n(74848),
        i = n(28453)
      const o = { title: 'Simulate Process Faults' },
        r = void 0,
        a = {},
        c = [
          {
            value: 'Create experiments using the command-line mode',
            id: 'create-experiments-using-the-command-line-mode',
            level: 2,
          },
          {
            value: 'Killing a process using the command-line mode',
            id: 'killing-a-process-using-the-command-line-mode',
            level: 3,
          },
          { value: 'Commands for killing a process', id: 'commands-for-killing-a-process', level: 4 },
          {
            value: 'Configuration description for killing a process',
            id: 'configuration-description-for-killing-a-process',
            level: 4,
          },
          { value: 'Example for killing a process', id: 'example-for-killing-a-process', level: 4 },
          {
            value: 'Stopping a process using the command-line mode',
            id: 'stopping-a-process-using-the-command-line-mode',
            level: 3,
          },
          { value: 'Command for stopping a process', id: 'command-for-stopping-a-process', level: 4 },
          {
            value: 'Configuration description of stopping a process',
            id: 'configuration-description-of-stopping-a-process',
            level: 4,
          },
          { value: 'Example for stopping a process', id: 'example-for-stopping-a-process', level: 4 },
          {
            value: 'Create experiments using the service mode',
            id: 'create-experiments-using-the-service-mode',
            level: 2,
          },
          {
            value: 'Simulate process faults using the service mode',
            id: 'simulate-process-faults-using-the-service-mode',
            level: 3,
          },
          {
            value: 'Parameters for simulating process faults',
            id: 'parameters-for-simulating-process-faults',
            level: 4,
          },
          {
            value: 'Examples for simulating process faults using the service mode',
            id: 'examples-for-simulating-process-faults-using-the-service-mode',
            level: 4,
          },
          { value: 'Terminate a process', id: 'terminate-a-process', level: 5 },
          { value: 'Stop a process', id: 'stop-a-process', level: 5 },
        ]
      function d(e) {
        const s = {
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
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
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(s.p, {
              children: [
                'This document describes how to use Chaosd to simulate process faults. The process faults use the Golang interface of the ',
                (0, l.jsx)(s.code, { children: 'kill' }),
                ' command to simulate the scenarios that the process is killed or stopped. You can create experiments either in the command-line mode or service mode.',
              ],
            }),
            '\n',
            (0, l.jsx)(s.h2, {
              id: 'create-experiments-using-the-command-line-mode',
              children: 'Create experiments using the command-line mode',
            }),
            '\n',
            (0, l.jsx)(s.p, {
              children:
                'Before creating an experiment, you can run the following command to see the process fault types that are supported by Chaosd:',
            }),
            '\n',
            (0, l.jsx)(s.pre, {
              children: (0, l.jsx)(s.code, { className: 'language-bash', children: 'chaosd attack process -h\n' }),
            }),
            '\n',
            (0, l.jsx)(s.p, { children: 'The result is as follows:' }),
            '\n',
            (0, l.jsx)(s.pre, {
              children: (0, l.jsx)(s.code, {
                className: 'language-bash',
                children:
                  "Process attack related commands\n\nUsage:\n  chaosd attack process [command]\n\nAvailable Commands:\n  kill        kill process, default signal 9\n  stop        stop process, this action will stop the process with SIGSTOP\n\nFlags:\n  -h, --help   help for process\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack process [command] --help\" for more information about a command.\n",
              }),
            }),
            '\n',
            (0, l.jsx)(s.p, { children: 'Currently, Chaosd supports simulating that a process is killed or stopped.' }),
            '\n',
            (0, l.jsx)(s.h3, {
              id: 'killing-a-process-using-the-command-line-mode',
              children: 'Killing a process using the command-line mode',
            }),
            '\n',
            (0, l.jsx)(s.h4, { id: 'commands-for-killing-a-process', children: 'Commands for killing a process' }),
            '\n',
            (0, l.jsx)(s.pre, {
              children: (0, l.jsx)(s.code, { className: 'language-bash', children: 'chaosd attack process kill -h\n' }),
            }),
            '\n',
            (0, l.jsx)(s.p, { children: 'The result is as follows:' }),
            '\n',
            (0, l.jsx)(s.pre, {
              children: (0, l.jsx)(s.code, {
                className: 'language-bash',
                children:
                  "kill process, default signal 9\n\nUsage:\n  chaosd attack process kill [flags]\n\nFlags:\n  -h, --help                 help for kill\n  -p, --process string       The process name or the process ID\n  -r, --recover-cmd string   The command to be run when recovering experiment\n  -s, --signal int           The signal number to send (default 9)\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, l.jsx)(s.h4, {
              id: 'configuration-description-for-killing-a-process',
              children: 'Configuration description for killing a process',
            }),
            '\n',
            (0, l.jsxs)(s.table, {
              children: [
                (0, l.jsx)(s.thead, {
                  children: (0, l.jsxs)(s.tr, {
                    children: [
                      (0, l.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, l.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, l.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, l.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(s.tbody, {
                  children: [
                    (0, l.jsxs)(s.tr, {
                      children: [
                        (0, l.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(s.code, { children: 'process' }),
                        }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, l.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: 'The name or the identifier of the process to be injected faults',
                        }),
                        (0, l.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: ['string; the default value is ', (0, l.jsx)(s.code, { children: '""' }), '.'],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(s.tr, {
                      children: [
                        (0, l.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(s.code, { children: 'recover-cmd' }),
                        }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: 'r' }),
                        (0, l.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: 'The command to be run when recovering experiment',
                        }),
                        (0, l.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: ['string; the default value is ', (0, l.jsx)(s.code, { children: '""' }), '.'],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(s.tr, {
                      children: [
                        (0, l.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(s.code, { children: 'signal' }),
                        }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, l.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: 'The provided value of the process signal',
                        }),
                        (0, l.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int; the default value is ',
                            (0, l.jsx)(s.code, { children: '9' }),
                            '. Currently, only ',
                            (0, l.jsx)(s.code, { children: 'SIGKILL' }),
                            ', ',
                            (0, l.jsx)(s.code, { children: 'SIGTERM' }),
                            ', and ',
                            (0, l.jsx)(s.code, { children: 'SIGSTOP' }),
                            ' are supported.',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(s.h4, { id: 'example-for-killing-a-process', children: 'Example for killing a process' }),
            '\n',
            (0, l.jsx)(s.pre, {
              children: (0, l.jsx)(s.code, {
                className: 'language-bash',
                children: 'chaosd attack process kill -p python\n',
              }),
            }),
            '\n',
            (0, l.jsx)(s.p, { children: 'The result is as follows:' }),
            '\n',
            (0, l.jsx)(s.pre, {
              children: (0, l.jsx)(s.code, {
                className: 'language-bash',
                children: 'Attack process python successfully, uid: 10e633ac-0a37-41ba-8b4a-cd5ab92099f9\n',
              }),
            }),
            '\n',
            (0, l.jsx)(s.admonition, {
              type: 'note',
              children: (0, l.jsxs)(s.p, {
                children: [
                  'Only the experiments whose ',
                  (0, l.jsx)(s.code, { children: 'signal' }),
                  ' is ',
                  (0, l.jsx)(s.code, { children: 'SIGSTOP' }),
                  ' can be recovered.',
                ],
              }),
            }),
            '\n',
            (0, l.jsx)(s.h3, {
              id: 'stopping-a-process-using-the-command-line-mode',
              children: 'Stopping a process using the command-line mode',
            }),
            '\n',
            (0, l.jsx)(s.h4, { id: 'command-for-stopping-a-process', children: 'Command for stopping a process' }),
            '\n',
            (0, l.jsx)(s.pre, {
              children: (0, l.jsx)(s.code, { className: 'language-bash', children: 'chaosd attack process stop -h\n' }),
            }),
            '\n',
            (0, l.jsx)(s.p, { children: 'The result is as follows:' }),
            '\n',
            (0, l.jsx)(s.pre, {
              children: (0, l.jsx)(s.code, {
                className: 'language-bash',
                children:
                  "stop process, this action will stop the process with SIGSTOP\n\nUsage:\n  chaosd attack process stop [flags]\n\nFlags:\n  -h, --help             help for stop\n  -p, --process string   The process name or the process ID\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, l.jsx)(s.h4, {
              id: 'configuration-description-of-stopping-a-process',
              children: 'Configuration description of stopping a process',
            }),
            '\n',
            (0, l.jsxs)(s.table, {
              children: [
                (0, l.jsx)(s.thead, {
                  children: (0, l.jsxs)(s.tr, {
                    children: [
                      (0, l.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, l.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, l.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, l.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, l.jsx)(s.tbody, {
                  children: (0, l.jsxs)(s.tr, {
                    children: [
                      (0, l.jsx)(s.td, {
                        style: { textAlign: 'left' },
                        children: (0, l.jsx)(s.code, { children: 'process' }),
                      }),
                      (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: 'p' }),
                      (0, l.jsx)(s.td, {
                        style: { textAlign: 'left' },
                        children: 'The name or the identifier of the process to be stopped',
                      }),
                      (0, l.jsxs)(s.td, {
                        style: { textAlign: 'left' },
                        children: ['string; the default value is ', (0, l.jsx)(s.code, { children: '""' }), '.'],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(s.h4, { id: 'example-for-stopping-a-process', children: 'Example for stopping a process' }),
            '\n',
            (0, l.jsx)(s.pre, {
              children: (0, l.jsx)(s.code, {
                className: 'language-bash',
                children: 'chaosd attack process stop -p python\n',
              }),
            }),
            '\n',
            (0, l.jsx)(s.p, { children: 'The result is as follows:' }),
            '\n',
            (0, l.jsx)(s.pre, {
              children: (0, l.jsx)(s.code, {
                className: 'language-bash',
                children: 'Attack process python successfully, uid: 9cb6b3be-4f5b-4ecb-ae05-51050fcd0010\n',
              }),
            }),
            '\n',
            (0, l.jsx)(s.h2, {
              id: 'create-experiments-using-the-service-mode',
              children: 'Create experiments using the service mode',
            }),
            '\n',
            (0, l.jsx)(s.p, {
              children: 'To create experiments using the service mode, follow the instructions below:',
            }),
            '\n',
            (0, l.jsxs)(s.ol, {
              children: [
                '\n',
                (0, l.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, l.jsx)(s.p, { children: 'Run Chaosd in the service mode:' }),
                    '\n',
                    (0, l.jsx)(s.pre, {
                      children: (0, l.jsx)(s.code, {
                        className: 'language-bash',
                        children: 'chaosd server --port 31767\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(s.p, {
                      children: [
                        'Send a ',
                        (0, l.jsx)(s.code, { children: 'POST' }),
                        ' HTTP request to the ',
                        (0, l.jsx)(s.code, { children: '/api/attack/process' }),
                        ' path of the Chaosd service.',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(s.pre, {
                      children: (0, l.jsx)(s.code, {
                        className: 'language-bash',
                        children:
                          'curl -X POST 172.16.112.130:31767/api/attack/process -H "Content-Type:application/json" -d \'{fault-configuration}\'\n',
                      }),
                    }),
                    '\n',
                    (0, l.jsxs)(s.p, {
                      children: [
                        'In the above command, you need to configure ',
                        (0, l.jsx)(s.code, { children: 'fault-configuration' }),
                        ' according to the fault types. For the corresponding parameters, refer to the parameters and examples of each fault type in the following sections.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(s.admonition, {
              type: 'note',
              children: (0, l.jsxs)(s.p, {
                children: [
                  'When running an experiment, remember to record the UID of the experiment. When you want to end the experiment corresponding to the UID, you need to send a ',
                  (0, l.jsx)(s.code, { children: 'DELETE' }),
                  ' HTTP request to the ',
                  (0, l.jsx)(s.code, { children: '/api/attack/{uid}' }),
                  ' path of the Chaosd service.',
                ],
              }),
            }),
            '\n',
            (0, l.jsx)(s.h3, {
              id: 'simulate-process-faults-using-the-service-mode',
              children: 'Simulate process faults using the service mode',
            }),
            '\n',
            (0, l.jsx)(s.h4, {
              id: 'parameters-for-simulating-process-faults',
              children: 'Parameters for simulating process faults',
            }),
            '\n',
            (0, l.jsxs)(s.table, {
              children: [
                (0, l.jsx)(s.thead, {
                  children: (0, l.jsxs)(s.tr, {
                    children: [
                      (0, l.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Parameter' }),
                      (0, l.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, l.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(s.tbody, {
                  children: [
                    (0, l.jsxs)(s.tr, {
                      children: [
                        (0, l.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(s.code, { children: 'process' }),
                        }),
                        (0, l.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: 'The name or the identifier of the process to be injected faults',
                        }),
                        (0, l.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: ['string; the default value is ', (0, l.jsx)(s.code, { children: '""' }), '.'],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(s.tr, {
                      children: [
                        (0, l.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(s.code, { children: 'signal' }),
                        }),
                        (0, l.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: 'The provided value of the process signal',
                        }),
                        (0, l.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: ['int; the default value is ', (0, l.jsx)(s.code, { children: '9' })],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(s.h4, {
              id: 'examples-for-simulating-process-faults-using-the-service-mode',
              children: 'Examples for simulating process faults using the service mode',
            }),
            '\n',
            (0, l.jsx)(s.h5, { id: 'terminate-a-process', children: 'Terminate a process' }),
            '\n',
            (0, l.jsx)(s.pre, {
              children: (0, l.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/process -H "Content-Type:application/json" -d \'{"process":"12345","signal":15}\'\n',
              }),
            }),
            '\n',
            (0, l.jsx)(s.p, { children: 'The result is as follows:' }),
            '\n',
            (0, l.jsx)(s.pre, {
              children: (0, l.jsx)(s.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n',
              }),
            }),
            '\n',
            (0, l.jsx)(s.h5, { id: 'stop-a-process', children: 'Stop a process' }),
            '\n',
            (0, l.jsx)(s.pre, {
              children: (0, l.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/process -H "Content-Type:application/json" -d \'{"process":"12345","signal":19}\'\n',
              }),
            }),
            '\n',
            (0, l.jsx)(s.p, { children: 'The result is as follows:' }),
            '\n',
            (0, l.jsx)(s.pre, {
              children: (0, l.jsx)(s.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"a00cca2b-eba7-4716-86b3-3e66f94880f7"}\n',
              }),
            }),
            '\n',
            (0, l.jsx)(s.admonition, {
              type: 'note',
              children: (0, l.jsxs)(s.p, {
                children: [
                  'Only the experiments whose ',
                  (0, l.jsx)(s.code, { children: 'signal' }),
                  ' is ',
                  (0, l.jsx)(s.code, { children: 'SIGSTOP' }),
                  ' can be recovered.',
                ],
              }),
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: s } = { ...(0, i.R)(), ...e.components }
        return s ? (0, l.jsx)(s, { ...e, children: (0, l.jsx)(d, { ...e }) }) : d(e)
      }
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => o, x: () => r })
      var t = n(96540)
      const l = {},
        i = t.createContext(l)
      function o(e) {
        const s = t.useContext(i)
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
              ? e.components(l)
              : e.components || l
            : o(e.components)),
          t.createElement(i.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
