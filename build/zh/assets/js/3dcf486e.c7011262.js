'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [4178],
  {
    7661: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => r,
          contentTitle: () => d,
          default: () => o,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => a,
        })
      const l = JSON.parse(
        '{"id":"simulate-process-chaos-in-physical-nodes","title":"\u6a21\u62df\u8fdb\u7a0b\u6545\u969c","description":"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u8fdb\u7a0b\u6545\u969c\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 kill \u7684 Golang \u63a5\u53e3\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u6216\u6682\u505c\u7684\u573a\u666f\uff0c\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/simulate-process-chaos-in-physical-nodes.md","sourceDirName":".","slug":"/simulate-process-chaos-in-physical-nodes","permalink":"/zh/docs/2.4.3/simulate-process-chaos-in-physical-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/simulate-process-chaos-in-physical-nodes.md","tags":[],"version":"2.4.3","frontMatter":{"title":"\u6a21\u62df\u8fdb\u7a0b\u6545\u969c"},"sidebar":"docs","previous":{"title":"\u4f7f\u7528 Chaos Mesh \u521b\u5efa\u7269\u7406\u673a\u6545\u969c","permalink":"/zh/docs/2.4.3/simulate-physical-machine-chaos"},"next":{"title":"\u6a21\u62df\u7f51\u7edc\u6545\u969c","permalink":"/zh/docs/2.4.3/simulate-network-chaos-in-physical-nodes"}}'
      )
      var t = n(74848),
        c = n(28453)
      const i = { title: '\u6a21\u62df\u8fdb\u7a0b\u6545\u969c' },
        d = void 0,
        r = {},
        a = [
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u547d\u4ee4',
            id: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u793a\u4f8b',
            id: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u547d\u4ee4',
            id: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u793a\u4f8b',
            id: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c',
            level: 3,
          },
          {
            value: '\u8fdb\u7a0b\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u8fdb\u7a0b\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c\u793a\u4f8b',
            level: 4,
          },
          { value: '\u8fdb\u7a0b\u88ab\u7ec8\u6b62', id: '\u8fdb\u7a0b\u88ab\u7ec8\u6b62', level: 5 },
          { value: '\u8fdb\u7a0b\u88ab\u6682\u505c', id: '\u8fdb\u7a0b\u88ab\u6682\u505c', level: 5 },
        ]
      function h(e) {
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
          ...(0, c.R)(),
          ...e.components,
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(s.p, {
              children: [
                '\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u8fdb\u7a0b\u6545\u969c\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 ',
                (0, t.jsx)(s.code, { children: 'kill' }),
                ' \u7684 Golang \u63a5\u53e3\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u6216\u6682\u505c\u7684\u573a\u666f\uff0c\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002',
              ],
            }),
            '\n',
            (0, t.jsx)(s.h2, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, t.jsx)(s.p, {
              children:
                '\u5728\u521b\u5efa\u8fdb\u7a0b\u6545\u969c\u5b9e\u9a8c\u524d\uff0c\u53ef\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u884c\u67e5\u770b Chaosd \u652f\u6301\u7684\u8fdb\u7a0b\u6545\u969c\u7c7b\u578b\uff1a',
            }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, { className: 'language-bash', children: 'chaosd attack process -h\n' }),
            }),
            '\n',
            (0, t.jsx)(s.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children:
                  "Process attack related commands\n\nUsage:\n  chaosd attack process [command]\n\nAvailable Commands:\n  kill        kill process, default signal 9\n  stop        stop process, this action will stop the process with SIGSTOP\n\nFlags:\n  -h, --help   help for process\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack process [command] --help\" for more information about a command.\n",
              }),
            }),
            '\n',
            (0, t.jsx)(s.p, {
              children:
                '\u76ee\u524d Chaosd \u652f\u6301\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u6216\u6682\u505c\u7684\u6545\u969c\u3002',
            }),
            '\n',
            (0, t.jsx)(s.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62',
            }),
            '\n',
            (0, t.jsx)(s.h4, {
              id: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u547d\u4ee4',
              children: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u547d\u4ee4',
            }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, { className: 'language-bash', children: 'chaosd attack process kill -h\n' }),
            }),
            '\n',
            (0, t.jsx)(s.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children:
                  "kill process, default signal 9\n\nUsage:\n  chaosd attack process kill [flags]\n\nFlags:\n  -h, --help                 help for kill\n  -p, --process string       The process name or the process ID\n  -r, --recover-cmd string   The command to be run when recovering experiment\n  -s, --signal int           The signal number to send (default 9)\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, t.jsx)(s.h4, {
              id: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, t.jsxs)(s.table, {
              children: [
                (0, t.jsx)(s.thead, {
                  children: (0, t.jsxs)(s.tr, {
                    children: [
                      (0, t.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, t.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, t.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, t.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, t.jsxs)(s.tbody, {
                  children: [
                    (0, t.jsxs)(s.tr, {
                      children: [
                        (0, t.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, t.jsx)(s.code, { children: 'process' }),
                        }),
                        (0, t.jsx)(s.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, t.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684\u8fdb\u7a0b\u7684\u540d\u5b57\u6216\u8005\u8fdb\u7a0b\u7684\u6807\u8bc6\u7b26',
                        }),
                        (0, t.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, t.jsx)(s.code, { children: '""' }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)(s.tr, {
                      children: [
                        (0, t.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, t.jsx)(s.code, { children: 'recover-cmd' }),
                        }),
                        (0, t.jsx)(s.td, { style: { textAlign: 'left' }, children: 'r' }),
                        (0, t.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: '\u9700\u8981\u5728\u5b9e\u9a8c\u6062\u590d\u65f6\u6267\u884c\u7684\u547d\u4ee4',
                        }),
                        (0, t.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, t.jsx)(s.code, { children: '""' }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)(s.tr, {
                      children: [
                        (0, t.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, t.jsx)(s.code, { children: 'signal' }),
                        }),
                        (0, t.jsx)(s.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, t.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: '\u6240\u63d0\u4f9b\u7684\u8fdb\u7a0b\u4fe1\u53f7\u503c',
                        }),
                        (0, t.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, t.jsx)(s.code, { children: '9' }),
                            '\u3002\u76ee\u524d\u53ea\u652f\u6301 ',
                            (0, t.jsx)(s.code, { children: 'SIGKILL' }),
                            '\u3001',
                            (0, t.jsx)(s.code, { children: 'SIGTERM' }),
                            ' \u548c ',
                            (0, t.jsx)(s.code, { children: 'SIGSTOP' }),
                            ' \u4e09\u79cd\u4fe1\u53f7\u503c\u3002',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, t.jsx)(s.h4, {
              id: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u793a\u4f8b',
              children: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u793a\u4f8b',
            }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children: 'chaosd attack process kill -p python\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children: 'Attack process python successfully, uid: 10e633ac-0a37-41ba-8b4a-cd5ab92099f9\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, t.jsxs)(s.p, {
                children: [
                  '\u53ea\u6709 ',
                  (0, t.jsx)(s.code, { children: 'signal' }),
                  ' \u4e3a ',
                  (0, t.jsx)(s.code, { children: 'SIGSTOP' }),
                  ' \u7684\u5b9e\u9a8c\u652f\u6301\u88ab\u6062\u590d\u3002',
                ],
              }),
            }),
            '\n',
            (0, t.jsx)(s.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c',
            }),
            '\n',
            (0, t.jsx)(s.h4, {
              id: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u547d\u4ee4',
              children: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u547d\u4ee4',
            }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, { className: 'language-bash', children: 'chaosd attack process stop -h\n' }),
            }),
            '\n',
            (0, t.jsx)(s.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children:
                  "stop process, this action will stop the process with SIGSTOP\n\nUsage:\n  chaosd attack process stop [flags]\n\nFlags:\n  -h, --help             help for stop\n  -p, --process string   The process name or the process ID\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, t.jsx)(s.h4, {
              id: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, t.jsxs)(s.table, {
              children: [
                (0, t.jsx)(s.thead, {
                  children: (0, t.jsxs)(s.tr, {
                    children: [
                      (0, t.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, t.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, t.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, t.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, t.jsx)(s.tbody, {
                  children: (0, t.jsxs)(s.tr, {
                    children: [
                      (0, t.jsx)(s.td, {
                        style: { textAlign: 'left' },
                        children: (0, t.jsx)(s.code, { children: 'process' }),
                      }),
                      (0, t.jsx)(s.td, { style: { textAlign: 'left' }, children: 'p' }),
                      (0, t.jsx)(s.td, {
                        style: { textAlign: 'left' },
                        children:
                          '\u9700\u8981\u6682\u505c\u7684\u8fdb\u7a0b\u7684\u540d\u5b57\u6216\u8005\u8fdb\u7a0b\u7684\u6807\u8bc6\u7b26',
                      }),
                      (0, t.jsxs)(s.td, {
                        style: { textAlign: 'left' },
                        children: [
                          'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                          (0, t.jsx)(s.code, { children: '""' }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            '\n',
            (0, t.jsx)(s.h4, {
              id: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u793a\u4f8b',
              children: '\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u793a\u4f8b',
            }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children: 'chaosd attack process stop -p python\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children: 'Attack process python successfully, uid: 9cb6b3be-4f5b-4ecb-ae05-51050fcd0010\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.h2, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, t.jsx)(s.p, {
              children:
                '\u8981\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\uff0c\u8bf7\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a',
            }),
            '\n',
            (0, t.jsxs)(s.ol, {
              children: [
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(s.p, { children: '\u4ee5\u670d\u52a1\u6a21\u5f0f\u8fd0\u884c Chaosd\u3002' }),
                    '\n',
                    (0, t.jsx)(s.pre, {
                      children: (0, t.jsx)(s.code, {
                        className: 'language-bash',
                        children: 'chaosd server --port 31767\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        '\u5411 Chaosd \u670d\u52a1\u7684\u8def\u5f84 ',
                        (0, t.jsx)(s.code, { children: '/api/attack/process' }),
                        ' \u53d1\u9001 ',
                        (0, t.jsx)(s.code, { children: 'POST' }),
                        ' HTTP \u8bf7\u6c42\u3002',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(s.pre, {
                      children: (0, t.jsx)(s.code, {
                        className: 'language-bash',
                        children:
                          'curl -X POST 172.16.112.130:31767/api/attack/process -H "Content-Type:application/json" -d \'{fault-configuration}\'\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                '\u5728\u4e0a\u8ff0\u547d\u4ee4\u4e2d\uff0c\u4f60\u9700\u8981\u6309\u7167\u6545\u969c\u7c7b\u578b\u5728 ',
                (0, t.jsx)(s.code, { children: 'fault-configuration' }),
                ' \u4e2d\u8fdb\u884c\u914d\u7f6e\u3002\u6709\u5173\u5bf9\u5e94\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u8bf7\u53c2\u8003\u4e0b\u6587\u4e2d\u5404\u4e2a\u7c7b\u578b\u6545\u969c\u7684\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u548c\u547d\u4ee4\u793a\u4f8b\u3002',
              ],
            }),
            '\n',
            (0, t.jsx)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, t.jsxs)(s.p, {
                children: [
                  '\u5728\u8fd0\u884c\u5b9e\u9a8c\u65f6\uff0c\u8bf7\u6ce8\u610f\u4fdd\u5b58\u5b9e\u9a8c\u7684 UID \u4fe1\u606f\u3002\u5f53\u8981\u7ed3\u675f UID \u5bf9\u5e94\u7684\u5b9e\u9a8c\u65f6\uff0c\u9700\u8981\u5411 Chaosd \u670d\u52a1\u7684\u8def\u5f84 ',
                  (0, t.jsx)(s.code, { children: '/api/attack/{uid}' }),
                  ' \u53d1\u9001 ',
                  (0, t.jsx)(s.code, { children: 'DELETE' }),
                  ' HTTP \u8bf7\u6c42\u3002',
                ],
              }),
            }),
            '\n',
            (0, t.jsx)(s.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c',
            }),
            '\n',
            (0, t.jsx)(s.h4, {
              id: '\u8fdb\u7a0b\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u8fdb\u7a0b\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, t.jsxs)(s.table, {
              children: [
                (0, t.jsx)(s.thead, {
                  children: (0, t.jsxs)(s.tr, {
                    children: [
                      (0, t.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, t.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, t.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, t.jsxs)(s.tbody, {
                  children: [
                    (0, t.jsxs)(s.tr, {
                      children: [
                        (0, t.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, t.jsx)(s.code, { children: 'process' }),
                        }),
                        (0, t.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684\u8fdb\u7a0b\u7684\u540d\u5b57\u6216\u8005\u8fdb\u7a0b\u7684\u6807\u8bc6\u7b26',
                        }),
                        (0, t.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, t.jsx)(s.code, { children: '""' }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)(s.tr, {
                      children: [
                        (0, t.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, t.jsx)(s.code, { children: 'signal' }),
                        }),
                        (0, t.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: '\u6240\u63d0\u4f9b\u7684\u8fdb\u7a0b\u4fe1\u53f7\u503c',
                        }),
                        (0, t.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, t.jsx)(s.code, { children: '9' }),
                            '\u3002',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, t.jsx)(s.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c\u793a\u4f8b',
            }),
            '\n',
            (0, t.jsx)(s.h5, { id: '\u8fdb\u7a0b\u88ab\u7ec8\u6b62', children: '\u8fdb\u7a0b\u88ab\u7ec8\u6b62' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/process -H "Content-Type:application/json" -d \'{"process":"12345","signal":15}\'\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.h5, { id: '\u8fdb\u7a0b\u88ab\u6682\u505c', children: '\u8fdb\u7a0b\u88ab\u6682\u505c' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/process -H "Content-Type:application/json" -d \'{"process":"12345","signal":19}\'\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"a00cca2b-eba7-4716-86b3-3e66f94880f7"}\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, t.jsxs)(s.p, {
                children: [
                  '\u53ea\u6709 ',
                  (0, t.jsx)(s.code, { children: 'signal' }),
                  ' \u4e3a ',
                  (0, t.jsx)(s.code, { children: 'SIGSTOP' }),
                  ' \u7684\u5b9e\u9a8c\u652f\u6301\u88ab\u6062\u590d\u3002',
                ],
              }),
            }),
          ],
        })
      }
      function o(e = {}) {
        const { wrapper: s } = { ...(0, c.R)(), ...e.components }
        return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e)
      }
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => i, x: () => d })
      var l = n(96540)
      const t = {},
        c = l.createContext(t)
      function i(e) {
        const s = l.useContext(c)
        return l.useMemo(
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
              ? e.components(t)
              : e.components || t
            : i(e.components)),
          l.createElement(c.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
