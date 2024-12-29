'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [6608],
  {
    2595: (e, s, t) => {
      t.r(s),
        t.d(s, {
          assets: () => r,
          contentTitle: () => c,
          default: () => o,
          frontMatter: () => d,
          metadata: () => l,
          toc: () => h,
        })
      const l = JSON.parse(
        '{"id":"simulate-heavy-stress-in-physical-nodes","title":"\u6a21\u62df\u538b\u529b\u573a\u666f","description":"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u538b\u529b\u573a\u666f\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 stress-ng \u5728\u4e3b\u673a\u4e0a\u751f\u6210 CPU \u6216\u8005\u5185\u5b58\u538b\u529b\uff0c\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/simulate-heavy-stress-in-physical-nodes.md","sourceDirName":".","slug":"/simulate-heavy-stress-in-physical-nodes","permalink":"/zh/docs/next/simulate-heavy-stress-in-physical-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/simulate-heavy-stress-in-physical-nodes.md","tags":[],"version":"current","frontMatter":{"title":"\u6a21\u62df\u538b\u529b\u573a\u666f"},"sidebar":"docs","previous":{"title":"\u6a21\u62df\u4e3b\u673a\u6545\u969c","permalink":"/zh/docs/next/simulate-host-console-in-physical-nodes"},"next":{"title":"\u6a21\u62df\u78c1\u76d8\u6545\u969c","permalink":"/zh/docs/next/simulate-disk-pressure-in-physical-nodes"}}'
      )
      var n = t(74848),
        i = t(28453)
      const d = { title: '\u6a21\u62df\u538b\u529b\u573a\u666f' },
        c = void 0,
        r = {},
        h = [
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u6a21\u62df CPU \u538b\u529b\u573a\u666f',
            id: '\u6a21\u62df-cpu-\u538b\u529b\u573a\u666f',
            level: 3,
          },
          {
            value: '\u6a21\u62df CPU \u538b\u529b\u547d\u4ee4',
            id: '\u6a21\u62df-cpu-\u538b\u529b\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u6a21\u62df CPU \u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u6a21\u62df-cpu-\u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u6a21\u62df CPU \u538b\u529b\u793a\u4f8b',
            id: '\u6a21\u62df-cpu-\u538b\u529b\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f',
            id: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u547d\u4ee4',
            id: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u793a\u4f8b',
            id: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df CPU \u538b\u529b\u573a\u666f',
            id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df-cpu-\u538b\u529b\u573a\u666f',
            level: 3,
          },
          {
            value: '\u6a21\u62df CPU \u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u6a21\u62df-cpu-\u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df CPU \u538b\u529b\u793a\u4f8b',
            id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df-cpu-\u538b\u529b\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f',
            id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u5185\u5b58\u538b\u529b\u793a\u4f8b',
            id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u5185\u5b58\u538b\u529b\u793a\u4f8b',
            level: 4,
          },
        ]
      function a(e) {
        const s = {
          a: 'a',
          admonition: 'admonition',
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
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(s.p, {
              children: [
                '\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u538b\u529b\u573a\u666f\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 ',
                (0, n.jsx)(s.a, { href: 'https://wiki.ubuntu.com/Kernel/Reference/stress-ng', children: 'stress-ng' }),
                ' \u5728\u4e3b\u673a\u4e0a\u751f\u6210 CPU \u6216\u8005\u5185\u5b58\u538b\u529b\uff0c\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c\u3002',
              ],
            }),
            '\n',
            (0, n.jsx)(s.h2, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c',
            }),
            '\n',
            (0, n.jsx)(s.p, {
              children:
                '\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u4e2d\u521b\u5efa\u538b\u529b\u5b9e\u9a8c\u3002',
            }),
            '\n',
            (0, n.jsx)(s.p, {
              children:
                '\u5728\u521b\u5efa\u538b\u529b\u5b9e\u9a8c\u524d\uff0c\u53ef\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b Chaosd \u652f\u6301\u7684\u538b\u529b\u5b9e\u9a8c\u7c7b\u578b\uff1a',
            }),
            '\n',
            (0, n.jsx)(s.pre, {
              children: (0, n.jsx)(s.code, { className: 'language-bash', children: 'chaosd attack stress --help\n' }),
            }),
            '\n',
            (0, n.jsx)(s.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(s.pre, {
              children: (0, n.jsx)(s.code, {
                className: 'language-bash',
                children:
                  "Stress attack related commands\n\nUsage:\n  chaosd attack stress [command]\n\nAvailable Commands:\n  cpu         continuously stress CPU out\n  mem         continuously stress virtual memory out\n\nFlags:\n  -h, --help   help for stress\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack stress [command] --help\" for more information about a command.\n",
              }),
            }),
            '\n',
            (0, n.jsx)(s.p, {
              children:
                '\u76ee\u524d Chaosd \u652f\u6301\u521b\u5efa CPU \u538b\u529b\u5b9e\u9a8c\u548c\u5185\u5b58\u538b\u529b\u5b9e\u9a8c\u3002',
            }),
            '\n',
            (0, n.jsx)(s.h3, {
              id: '\u6a21\u62df-cpu-\u538b\u529b\u573a\u666f',
              children: '\u6a21\u62df CPU \u538b\u529b\u573a\u666f',
            }),
            '\n',
            (0, n.jsx)(s.h4, {
              id: '\u6a21\u62df-cpu-\u538b\u529b\u547d\u4ee4',
              children: '\u6a21\u62df CPU \u538b\u529b\u547d\u4ee4',
            }),
            '\n',
            (0, n.jsx)(s.p, {
              children:
                '\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u53ef\u67e5\u770b\u6a21\u62df CPU \u538b\u529b\u573a\u666f\u652f\u6301\u7684\u914d\u7f6e\uff1a',
            }),
            '\n',
            (0, n.jsx)(s.pre, {
              children: (0, n.jsx)(s.code, {
                className: 'language-bash',
                children: 'chaosd attack stress cpu --help\n',
              }),
            }),
            '\n',
            (0, n.jsx)(s.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(s.pre, {
              children: (0, n.jsx)(s.code, {
                className: 'language-bash',
                children:
                  "continuously stress CPU out\n\nUsage:\n  chaosd attack stress cpu [options] [flags]\n\nFlags:\n  -h, --help              help for cpu\n  -l, --load int          Load specifies P percent loading per CPU worker. 0 is effectively a sleep (no load) and 100 is full loading. (default 10)\n  -o, --options strings   extend stress-ng options.\n  -w, --workers int       Workers specifies N workers to apply the stressor. (default 1)\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, n.jsx)(s.h4, {
              id: '\u6a21\u62df-cpu-\u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u6a21\u62df CPU \u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(s.table, {
              children: [
                (0, n.jsx)(s.thead, {
                  children: (0, n.jsxs)(s.tr, {
                    children: [
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u7c7b\u578b' }),
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(s.tbody, {
                  children: [
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(s.code, { children: 'load' }),
                        }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: 'l' }),
                        (0, n.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u6307\u5b9a\u4f7f\u7528\u6bcf\u4e2a CPU worker \u5360\u7528 CPU \u8d1f\u8f7d\u7684\u767e\u5206\u6bd4\u3002\u5982\u679c\u4e3a ',
                            (0, n.jsx)(s.code, { children: '0' }),
                            '\uff0c\u5219\u8868\u793a\u4e3a\u4e00\u4e2a\u7a7a\u8d1f\u8f7d\uff1b\u4e3a ',
                            (0, n.jsx)(s.code, { children: '100' }),
                            ' \u5219\u8868\u793a\u6ee1\u8d1f\u8f7d',
                          ],
                        }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: 'int \u7c7b\u578b' }),
                        (0, n.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u53d6\u503c\u8303\u56f4\u4e3a ',
                            (0, n.jsx)(s.code, { children: '0' }),
                            ' \u5230 ',
                            (0, n.jsx)(s.code, { children: '100' }),
                            '\uff0c \u9ed8\u8ba4\u503c\u4e3a ',
                            (0, n.jsx)(s.code, { children: '10' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(s.code, { children: 'workers' }),
                        }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: 'w' }),
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: '\u6307\u5b9a\u7528\u4e8e\u751f\u6210 CPU \u538b\u529b\u7684 worker \u6570\u91cf',
                        }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: 'int \u7c7b\u578b' }),
                        (0, n.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u503c\u4e3a ', (0, n.jsx)(s.code, { children: '1' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(s.code, { children: 'options' }),
                        }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: 'o' }),
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children:
                            'stress-ng \u7684\u5176\u4ed6\u53c2\u6570\u8bbe\u7f6e\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u914d\u7f6e',
                        }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: 'string \u7c7b\u578b' }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: '\u9ed8\u8ba4\u503c\u4e3a ""' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(s.h4, {
              id: '\u6a21\u62df-cpu-\u538b\u529b\u793a\u4f8b',
              children: '\u6a21\u62df CPU \u538b\u529b\u793a\u4f8b',
            }),
            '\n',
            (0, n.jsx)(s.pre, {
              children: (0, n.jsx)(s.code, {
                className: 'language-bash',
                children: 'chaosd attack stress cpu --workers 2 --load 10\n',
              }),
            }),
            '\n',
            (0, n.jsx)(s.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(s.pre, {
              children: (0, n.jsx)(s.code, {
                className: 'language-bash',
                children:
                  '[2021/05/12 03:38:33.698 +00:00] [INFO] [stress.go:66] ["stressors normalize"] [arguments=" --cpu 2 --cpu-load 10"]\n[2021/05/12 03:38:33.702 +00:00] [INFO] [stress.go:82] ["Start stress-ng process successfully"] [command="/usr/bin/stress-ng --cpu 2 --cpu-load 10"] [Pid=27483]\nAttack stress cpu successfully, uid: 4f33b2d4-aee6-43ca-9c43-0f12867e5c9c\n',
              }),
            }),
            '\n',
            (0, n.jsx)(s.h3, {
              id: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f',
              children: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f',
            }),
            '\n',
            (0, n.jsx)(s.h4, {
              id: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u547d\u4ee4',
              children: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u547d\u4ee4',
            }),
            '\n',
            (0, n.jsx)(s.p, {
              children:
                '\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u53ef\u67e5\u770b\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f\u652f\u6301\u7684\u914d\u7f6e\uff1a',
            }),
            '\n',
            (0, n.jsx)(s.pre, {
              children: (0, n.jsx)(s.code, {
                className: 'language-bash',
                children: 'chaosd attack stress mem --help\n',
              }),
            }),
            '\n',
            (0, n.jsx)(s.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(s.pre, {
              children: (0, n.jsx)(s.code, {
                className: 'language-bash',
                children:
                  "continuously stress virtual memory out\n\nUsage:\n  chaosd attack stress mem [options] [flags]\n\nFlags:\n  -h, --help              help for mem\n  -o, --options strings   extend stress-ng options.\n  -s, --size string       Size specifies N bytes consumed per vm worker, default is the total available memory. One can specify the size as % of total available memory or in units of B, KB/KiB, MB/MiB, GB/GiB, TB/TiB..\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, n.jsx)(s.h4, {
              id: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(s.table, {
              children: [
                (0, n.jsx)(s.thead, {
                  children: (0, n.jsxs)(s.tr, {
                    children: [
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u7c7b\u578b' }),
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(s.tbody, {
                  children: [
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(s.code, { children: 'size' }),
                        }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: '\u6307\u5b9a\u6bcf\u4e2a VM worker \u5360\u7528\u5185\u5b58\u7684\u5927\u5c0f',
                        }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: 'string \u7c7b\u578b' }),
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u652f\u6301\u4f7f\u7528\u5355\u4f4d B\uff0cKB/KiB\uff0cMB/MiB\uff0cGB/GiB\uff0cTB/TiB \u6765\u8bbe\u7f6e\u5360\u7528\u7684\u5185\u5b58\u5927\u5c0f\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u5360\u7528\u6240\u6709\u53ef\u7528\u7684\u5185\u5b58\u3002',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(s.code, { children: 'options' }),
                        }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: 'o' }),
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children:
                            'stress-ng \u7684\u5176\u4ed6\u53c2\u6570\u8bbe\u7f6e\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u914d\u7f6e',
                        }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: 'string \u7c7b\u578b' }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: '\u9ed8\u8ba4\u503c\uff1a""' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(s.h4, {
              id: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u793a\u4f8b',
              children: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u793a\u4f8b',
            }),
            '\n',
            (0, n.jsx)(s.pre, {
              children: (0, n.jsx)(s.code, {
                className: 'language-bash',
                children: 'chaosd attack stress mem --workers 2 --size 100M\n',
              }),
            }),
            '\n',
            (0, n.jsx)(s.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(s.pre, {
              children: (0, n.jsx)(s.code, {
                className: 'language-bash',
                children:
                  '[2021/05/12 03:37:19.643 +00:00] [INFO] [stress.go:66] ["stressors normalize"] [arguments=" --vm 2 --vm-keep --vm-bytes 100000000"]\n[2021/05/12 03:37:19.654 +00:00] [INFO] [stress.go:82] ["Start stress-ng process successfully"] [command="/usr/bin/stress-ng --vm 2 --vm-keep --vm-bytes 100000000"] [Pid=26799]\nAttack stress mem successfully, uid: c2bff2f5-3aac-4ace-b7a6-322946ae6f13\n',
              }),
            }),
            '\n',
            (0, n.jsx)(s.h2, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c',
            }),
            '\n',
            (0, n.jsx)(s.p, {
              children:
                '\u8981\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\uff0c\u8bf7\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a',
            }),
            '\n',
            (0, n.jsxs)(s.ol, {
              children: [
                '\n',
                (0, n.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(s.p, { children: '\u4ee5\u670d\u52a1\u6a21\u5f0f\u8fd0\u884c Chaosd\u3002' }),
                    '\n',
                    (0, n.jsx)(s.pre, {
                      children: (0, n.jsx)(s.code, {
                        className: 'language-bash',
                        children: 'chaosd server --port 31767\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, n.jsxs)(s.p, {
                      children: [
                        '\u5411 Chaosd \u670d\u52a1\u7684\u8def\u5f84 ',
                        (0, n.jsx)(s.code, { children: '/api/attack/stress' }),
                        ' \u53d1\u9001 ',
                        (0, n.jsx)(s.code, { children: 'POST' }),
                        ' HTTP \u8bf7\u6c42\u3002',
                      ],
                    }),
                    '\n',
                    (0, n.jsx)(s.pre, {
                      children: (0, n.jsx)(s.code, {
                        className: 'language-bash',
                        children:
                          'curl -X POST 172.16.112.130:31767/api/attack/stress -H "Content-Type:application/json" -d \'{fault-configuration}\'\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsxs)(s.p, {
              children: [
                '\u5728\u4e0a\u8ff0\u547d\u4ee4\u4e2d\uff0c\u4f60\u9700\u8981\u6309\u7167\u6545\u969c\u7c7b\u578b\u5728 ',
                (0, n.jsx)(s.code, { children: 'fault-configuration' }),
                ' \u4e2d\u8fdb\u884c\u914d\u7f6e\u3002\u6709\u5173\u5bf9\u5e94\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u8bf7\u53c2\u8003\u4e0b\u6587\u4e2d\u5404\u4e2a\u7c7b\u578b\u6545\u969c\u7684\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u548c\u547d\u4ee4\u793a\u4f8b\u3002',
              ],
            }),
            '\n',
            (0, n.jsx)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, n.jsxs)(s.p, {
                children: [
                  '\u5728\u8fd0\u884c\u5b9e\u9a8c\u65f6\uff0c\u8bf7\u6ce8\u610f\u4fdd\u5b58\u5b9e\u9a8c\u7684 UID \u4fe1\u606f\u3002\u5f53\u8981\u7ed3\u675f UID \u5bf9\u5e94\u7684\u5b9e\u9a8c\u65f6\uff0c\u9700\u8981\u5411 Chaosd \u670d\u52a1\u7684\u8def\u5f84 ',
                  (0, n.jsx)(s.code, { children: '/api/attack/{uid}' }),
                  ' \u53d1\u9001 ',
                  (0, n.jsx)(s.code, { children: 'DELETE' }),
                  ' HTTP \u8bf7\u6c42\u3002',
                ],
              }),
            }),
            '\n',
            (0, n.jsx)(s.h3, {
              id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df-cpu-\u538b\u529b\u573a\u666f',
              children: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df CPU \u538b\u529b\u573a\u666f',
            }),
            '\n',
            (0, n.jsx)(s.h4, {
              id: '\u6a21\u62df-cpu-\u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u6a21\u62df CPU \u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(s.table, {
              children: [
                (0, n.jsx)(s.thead, {
                  children: (0, n.jsxs)(s.tr, {
                    children: [
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u7c7b\u578b' }),
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(s.tbody, {
                  children: [
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(s.code, { children: 'action' }),
                        }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' } }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: '\u8bbe\u7f6e\u4e3a "cpu"' }),
                      ],
                    }),
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(s.code, { children: 'load' }),
                        }),
                        (0, n.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u6307\u5b9a\u4f7f\u7528\u6bcf\u4e2a CPU worker \u5360\u7528 CPU \u8d1f\u8f7d\u7684\u767e\u5206\u6bd4\u3002\u5982\u679c\u4e3a ',
                            (0, n.jsx)(s.code, { children: '0' }),
                            '\uff0c\u5219\u8868\u793a\u4e3a\u4e00\u4e2a\u7a7a\u8d1f\u8f7d\uff1b\u4e3a ',
                            (0, n.jsx)(s.code, { children: '100' }),
                            ' \u5219\u8868\u793a\u6ee1\u8d1f\u8f7d',
                          ],
                        }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: 'int \u7c7b\u578b' }),
                        (0, n.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u53d6\u503c\u8303\u56f4\u4e3a ',
                            (0, n.jsx)(s.code, { children: '0' }),
                            ' \u5230 ',
                            (0, n.jsx)(s.code, { children: '100' }),
                            '\uff0c \u9ed8\u8ba4\u503c\u4e3a ',
                            (0, n.jsx)(s.code, { children: '10' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(s.code, { children: 'workers' }),
                        }),
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: '\u6307\u5b9a\u7528\u4e8e\u751f\u6210 CPU \u538b\u529b\u7684 worker \u6570\u91cf',
                        }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: 'int \u7c7b\u578b' }),
                        (0, n.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u503c\uff1a', (0, n.jsx)(s.code, { children: '1' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(s.code, { children: 'options' }),
                        }),
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children:
                            'stress-ng \u7684\u5176\u4ed6\u53c2\u6570\u8bbe\u7f6e\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u914d\u7f6e',
                        }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: 'string \u7c7b\u578b' }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: '\u9ed8\u8ba4\u503c\uff1a""' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(s.h4, {
              id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df-cpu-\u538b\u529b\u793a\u4f8b',
              children: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df CPU \u538b\u529b\u793a\u4f8b',
            }),
            '\n',
            (0, n.jsx)(s.pre, {
              children: (0, n.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/stress -H "Content-Type:application/json" -d \'{"load":10, "action":"cpu","workers":1}\'\n',
              }),
            }),
            '\n',
            (0, n.jsx)(s.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(s.pre, {
              children: (0, n.jsx)(s.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n',
              }),
            }),
            '\n',
            (0, n.jsx)(s.h3, {
              id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f',
              children: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f',
            }),
            '\n',
            (0, n.jsx)(s.h4, {
              id: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(s.table, {
              children: [
                (0, n.jsx)(s.thead, {
                  children: (0, n.jsxs)(s.tr, {
                    children: [
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u7c7b\u578b' }),
                      (0, n.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(s.tbody, {
                  children: [
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(s.code, { children: 'action' }),
                        }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' } }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: '\u8bbe\u7f6e\u4e3a "mem"' }),
                      ],
                    }),
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(s.code, { children: 'size' }),
                        }),
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: '\u6307\u5b9a\u6bcf\u4e2a VM worker \u5360\u7528\u5185\u5b58\u7684\u5927\u5c0f',
                        }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: 'string \u7c7b\u578b' }),
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u652f\u6301\u4f7f\u7528\u5355\u4f4d B\uff0cKB/KiB\uff0cMB/MiB\uff0cGB/GiB\uff0cTB/TiB \u6765\u8bbe\u7f6e\u5360\u7528\u7684\u5185\u5b58\u5927\u5c0f\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u5360\u7528\u6240\u6709\u53ef\u7528\u7684\u5185\u5b58\u3002',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(s.code, { children: 'options' }),
                        }),
                        (0, n.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children:
                            'stress-ng \u7684\u5176\u4ed6\u53c2\u6570\u8bbe\u7f6e\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u914d\u7f6e',
                        }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: 'string \u7c7b\u578b' }),
                        (0, n.jsx)(s.td, { style: { textAlign: 'left' }, children: '\u9ed8\u8ba4\u503c\uff1a""' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(s.h4, {
              id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u5185\u5b58\u538b\u529b\u793a\u4f8b',
              children: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u5185\u5b58\u538b\u529b\u793a\u4f8b',
            }),
            '\n',
            (0, n.jsx)(s.pre, {
              children: (0, n.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/stress -H "Content-Type:application/json" -d \'{"size":"100M", "action":"mem"}\'\n',
              }),
            }),
            '\n',
            (0, n.jsx)(s.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(s.pre, {
              children: (0, n.jsx)(s.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n',
              }),
            }),
          ],
        })
      }
      function o(e = {}) {
        const { wrapper: s } = { ...(0, i.R)(), ...e.components }
        return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(a, { ...e }) }) : a(e)
      }
    },
    28453: (e, s, t) => {
      t.d(s, { R: () => d, x: () => c })
      var l = t(96540)
      const n = {},
        i = l.createContext(n)
      function d(e) {
        const s = l.useContext(i)
        return l.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function c(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : d(e.components)),
          l.createElement(i.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
