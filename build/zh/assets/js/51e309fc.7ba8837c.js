'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [2857],
  {
    86799: (e, l, s) => {
      s.r(l),
        s.d(l, {
          assets: () => r,
          contentTitle: () => c,
          default: () => o,
          frontMatter: () => i,
          metadata: () => t,
          toc: () => h,
        })
      const t = JSON.parse(
        '{"id":"simulate-disk-pressure-in-physical-nodes","title":"\u6a21\u62df\u78c1\u76d8\u6545\u969c","description":"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u78c1\u76d8\u6545\u969c\u573a\u666f\u3002\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u5728\u7269\u7406\u673a\u5668\u4e0a\u6a21\u62df\u78c1\u76d8\u8bfb\u5199\u8d1f\u8f7d\uff08\u901a\u8fc7 dd\uff09\uff0c\u6216\u78c1\u76d8\u586b\u5145\uff08\u901a\u8fc7 dd\uff0c\u6216 fallocate\uff09\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/simulate-disk-pressure-in-physical-nodes.md","sourceDirName":".","slug":"/simulate-disk-pressure-in-physical-nodes","permalink":"/zh/docs/2.4.3/simulate-disk-pressure-in-physical-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/simulate-disk-pressure-in-physical-nodes.md","tags":[],"version":"2.4.3","frontMatter":{"title":"\u6a21\u62df\u78c1\u76d8\u6545\u969c"},"sidebar":"docs","previous":{"title":"\u6a21\u62df\u538b\u529b\u573a\u666f","permalink":"/zh/docs/2.4.3/simulate-heavy-stress-in-physical-nodes"},"next":{"title":"\u6a21\u62df JVM \u5e94\u7528\u6545\u969c","permalink":"/zh/docs/2.4.3/simulate-jvm-application-chaos-in-physical-nodes"}}'
      )
      var n = s(74848),
        d = s(28453)
      const i = { title: '\u6a21\u62df\u78c1\u76d8\u6545\u969c' },
        c = void 0,
        r = {},
        h = [
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u547d\u4ee4',
            id: '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u793a\u4f8b',
            id: '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u547d\u4ee4',
            id: '\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u793a\u4f8b',
            id: '\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u586b\u5145',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u586b\u5145',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u78c1\u76d8\u586b\u5145\u547d\u4ee4',
            id: '\u6a21\u62df\u78c1\u76d8\u586b\u5145\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u78c1\u76d8\u586b\u5145\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u6a21\u62df\u78c1\u76d8\u586b\u5145\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u78c1\u76d8\u586b\u5145\u793a\u4f8b',
            id: '\u6a21\u62df\u78c1\u76d8\u586b\u5145\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u586b\u5145',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u586b\u5145',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u78c1\u76d8\u586b\u5145\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u6a21\u62df\u78c1\u76d8\u586b\u5145\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u586b\u5145\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u586b\u5145\u793a\u4f8b',
            level: 4,
          },
        ]
      function a(e) {
        const l = {
          a: 'a',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ...(0, d.R)(),
          ...e.components,
        }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(l.p, {
              children: [
                '\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u78c1\u76d8\u6545\u969c\u573a\u666f\u3002\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u5728\u7269\u7406\u673a\u5668\u4e0a\u6a21\u62df\u78c1\u76d8\u8bfb\u5199\u8d1f\u8f7d\uff08\u901a\u8fc7 ',
                (0, n.jsx)(l.a, { href: 'https://man7.org/linux/man-pages/man1/dd.1.html', children: 'dd' }),
                '\uff09\uff0c\u6216\u78c1\u76d8\u586b\u5145\uff08\u901a\u8fc7 ',
                (0, n.jsx)(l.a, { href: 'https://man7.org/linux/man-pages/man1/dd.1.html', children: 'dd' }),
                '\uff0c\u6216 ',
                (0, n.jsx)(l.a, {
                  href: 'https://man7.org/linux/man-pages/man1/fallocate.1.html',
                  children: 'fallocate',
                }),
                '\uff09\u3002',
              ],
            }),
            '\n',
            (0, n.jsx)(l.h2, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, n.jsx)(l.p, {
              children:
                '\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u4e2d\u521b\u5efa\u78c1\u76d8\u6545\u969c\u5b9e\u9a8c\u3002',
            }),
            '\n',
            (0, n.jsx)(l.p, {
              children:
                '\u5728\u521b\u5efa\u78c1\u76d8\u6545\u969c\u5b9e\u9a8c\u524d\uff0c\u53ef\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u884c\u67e5\u770b Chaosd \u652f\u6301\u7684\u78c1\u76d8\u6545\u969c\u7c7b\u578b\uff1a',
            }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, { className: 'language-bash', children: 'chaosd attack disk -h\n' }),
            }),
            '\n',
            (0, n.jsx)(l.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children:
                  "disk attack related command\n\nUsage:\n  chaosd attack disk [command]\n\nAvailable Commands:\n  add-payload add disk payload\n  fill        fill disk\n\nFlags:\n  -h, --help   help for disk\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack disk [command] --help\" for more information about a command.\n",
              }),
            }),
            '\n',
            (0, n.jsx)(l.p, {
              children:
                '\u76ee\u524d Chaosd \u652f\u6301\u521b\u5efa\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u5b9e\u9a8c\u3001\u78c1\u76d8\u5199\u8d1f\u8f7d\u5b9e\u9a8c\u3001\u78c1\u76d8\u586b\u5145\u5b9e\u9a8c\u3002',
            }),
            '\n',
            (0, n.jsx)(l.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d',
            }),
            '\n',
            (0, n.jsx)(l.p, {
              children:
                '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u4e3a\u4e00\u6b21\u6027\u64cd\u4f5c\uff0c\u56e0\u6b64\u5b9e\u9a8c\u4e0d\u9700\u8981\u6062\u590d\u3002',
            }),
            '\n',
            (0, n.jsx)(l.h4, {
              id: '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u547d\u4ee4',
              children: '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u547d\u4ee4',
            }),
            '\n',
            (0, n.jsx)(l.p, { children: '\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children: 'chaosd attack disk add-payload read -h\n',
              }),
            }),
            '\n',
            (0, n.jsx)(l.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children:
                  "read payload\n\nUsage:\n  chaosd attack disk add-payload read [flags]\n\nFlags:\n  -h, --help                help for read\n  -p, --path string         'path' specifies the location to read data.If path not provided, payload will read from disk mount on \"/\"\n  -n, --process-num uint8   'process-num' specifies the number of process work on reading , default 1, only 1-255 is valid value (default 1)\n  -s, --size string         'size' specifies how many units of data will read from the file path.'unit' specifies the unit of data, support c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000,M=1024*1024, , GB=1000*1000*1000, G=1024*1024*1024 BYTESexample : 1M | 512kB\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, n.jsx)(l.h4, {
              id: '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(l.table, {
              children: [
                (0, n.jsx)(l.thead, {
                  children: (0, n.jsxs)(l.tr, {
                    children: [
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(l.tbody, {
                  children: [
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'path' }),
                        }),
                        (0, n.jsx)(l.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u6307\u5b9a\u6240\u8bfb\u6570\u636e\u7684\u6587\u4ef6\u8def\u5f84\u3002\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u6b64\u53c2\u6570\uff0c\u6216\u8005\u8bbe\u7f6e\u53c2\u6570\u503c\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0cChaosd \u5219\u4ece\u76ee\u5f55 "/" \u6240\u6302\u8f7d\u7684\u865a\u62df\u78c1\u76d8\u6587\u4ef6\u8bfb\u53d6\u3002\u6839\u636e\u8bfb\u53d6\u6587\u4ef6\u7684\u6743\u9650\u4e0d\u540c\uff0c\u4f1a\u9700\u8981\u4f60\u4f7f\u7528\u4e00\u5b9a\u7684\u6743\u9650\u8fd0\u884c\u672c\u7a0b\u5e8f\u3002',
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(l.code, { children: '""' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'process-num' }),
                        }),
                        (0, n.jsx)(l.td, { style: { textAlign: 'left' }, children: 'n' }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u6307\u5b9a\u4f7f\u7528\u591a\u5c11\u4e2a\u5e76\u53d1\u8fd0\u884c\u7684 ',
                            (0, n.jsx)(l.a, {
                              href: 'https://man7.org/linux/man-pages/man1/dd.1.html',
                              children: 'dd',
                            }),
                            ' \u8fdb\u7a0b\u6267\u884c\u7a0b\u5e8f\u3002',
                          ],
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'uint8 \u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c\u4e3a ',
                            (0, n.jsx)(l.code, { children: '1' }),
                            '\uff0c\u8303\u56f4\u4e3a ',
                            (0, n.jsx)(l.code, { children: '1' }),
                            ' \u81f3 ',
                            (0, n.jsx)(l.code, { children: '255' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'size' }),
                        }),
                        (0, n.jsx)(l.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u6307\u5b9a\u8bfb\u53d6\u591a\u5c11\u6570\u636e\u3002\u8be5\u503c\u4e3a\u591a\u4e2a dd \u8bfb\u6570\u636e\u7684\u603b\u91cf\u3002',
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(l.code, { children: '""' }),
                            '\uff0c',
                            (0, n.jsx)(l.strong, { children: '\u5fc5\u987b' }),
                            '\u8981\u8bbe\u7f6e\u3002\u5408\u6cd5\u5f62\u5f0f\u4e3a\u4e00\u4e2a\u6574\u6570\u52a0\u4e00\u4e2a\u5355\u4f4d\u3002\u4f8b\u5982\uff1a1M\u3001512kB\u3002\u652f\u6301\u7684\u5355\u4f4d\u6709 c=1\u3001w=2\u3001b=512\u3001kB=1000\u3001K=1024\u3001MB=1000*1000,M=1024*1024\u3001GB=1000*1000*1000\u3001G=1024*1024*1024 BYTE \u7b49\u3002',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(l.h4, {
              id: '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u793a\u4f8b',
              children: '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u793a\u4f8b',
            }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children: 'chaosd attack disk add-payload read -s 1000G -n 7 -p /dev/zero\n',
              }),
            }),
            '\n',
            (0, n.jsx)(l.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children:
                  'andrew@LAPTOP-NUS30NQD:~/chaosd/bin$ ./chaosd attack disk add-payload read -s 1000G -n 7 -p /dev/zero\n[2021/05/20 13:54:31.323 +08:00] [INFO] [disk.go:128] ["5242880+0 records in\\n5242880+0 records out\\n5242880 bytes (5.2 MB, 5.0 MiB) copied, 4.13252 s, 1.3 MB/s\\n"]\n[2021/05/20 13:54:46.977 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6513 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.002 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6762 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.004 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6777 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.015 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6899 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.018 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6914 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.051 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.7254 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.074 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.7487 s, 9.7 GB/s\\n"]\nRead file /dev/zero successfully, uid: 4bc9b74a-5fe2-4038-b4f2-09ae95b57694\n',
              }),
            }),
            '\n',
            (0, n.jsx)(l.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d',
            }),
            '\n',
            (0, n.jsx)(l.h4, {
              id: '\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u547d\u4ee4',
              children: '\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u547d\u4ee4',
            }),
            '\n',
            (0, n.jsx)(l.p, { children: '\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children: 'chaosd attack disk add-payload write -h\n',
              }),
            }),
            '\n',
            (0, n.jsx)(l.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children:
                  "write payload\n\nUsage:\n  chaosd attack disk add-payload write [flags]\n\nFlags:\n  -h, --help                help for write\n  -p, --path string         'path' specifies the location to fill data in.If path not provided, payload will write into a temp file, temp file will be deleted after writing\n  -n, --process-num uint8   'process-num' specifies the number of process work on writing , default 1, only 1-255 is valid value (default 1)\n  -s, --size string         'size' specifies how many units of data will write into the file path.'unit' specifies the unit of data, support c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000,M=1024*1024, , GB=1000*1000*1000, G=1024*1024*1024 BYTESexample : 1M | 512kB\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, n.jsx)(l.h4, {
              id: '\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(l.table, {
              children: [
                (0, n.jsx)(l.thead, {
                  children: (0, n.jsxs)(l.tr, {
                    children: [
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(l.tbody, {
                  children: [
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'path' }),
                        }),
                        (0, n.jsx)(l.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u6307\u5b9a\u6240\u5199\u6570\u636e\u7684\u6587\u4ef6\u8def\u5f84\u3002\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u6b64\u53c2\u6570\uff0c\u6216\u8005\u8bbe\u7f6e\u53c2\u6570\u503c\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5219\u4f1a\u5728\u7a0b\u5e8f\u6267\u884c\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6\u3002\u6839\u636e\u5199\u5165\u6587\u4ef6\u7684\u6743\u9650\u4e0d\u540c\uff0c\u4f1a\u9700\u8981\u4f60\u4f7f\u7528\u4e00\u5b9a\u7684\u6743\u9650\u8fd0\u884c\u672c\u7a0b\u5e8f\u3002',
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(l.code, { children: '""' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'process-num' }),
                        }),
                        (0, n.jsx)(l.td, { style: { textAlign: 'left' }, children: 'n' }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u6307\u5b9a\u4f7f\u7528\u591a\u5c11\u4e2a\u5e76\u53d1\u8fd0\u884c\u7684 ',
                            (0, n.jsx)(l.a, {
                              href: 'https://man7.org/linux/man-pages/man1/dd.1.html',
                              children: 'dd',
                            }),
                            ' \u8fdb\u7a0b\u6267\u884c\u7a0b\u5e8f\u3002',
                          ],
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'uint8 \u7c7b\u578b\u3002\u9ed8\u8ba4\u503c\u4e3a ',
                            (0, n.jsx)(l.code, { children: '1' }),
                            '\uff0c\u8303\u56f4\u4e3a ',
                            (0, n.jsx)(l.code, { children: '1' }),
                            ' \u81f3 ',
                            (0, n.jsx)(l.code, { children: '255' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'size' }),
                        }),
                        (0, n.jsx)(l.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u6307\u5b9a\u5199\u5165\u591a\u5c11\u6570\u636e\uff0c\u8be5\u503c\u4e3a\u591a\u4e2a dd \u5199\u6570\u636e\u7684\u603b\u91cf\u3002',
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(l.code, { children: '""' }),
                            '\uff0c',
                            (0, n.jsx)(l.strong, { children: '\u5fc5\u987b' }),
                            '\u8981\u8bbe\u7f6e\u3002\u5408\u6cd5\u5f62\u5f0f\u4e3a\u4e00\u4e2a\u6574\u6570\u52a0\u4e00\u4e2a\u5355\u4f4d\u3002\u4f8b\u5982\uff1a1M\u3001512kB\u3002\u652f\u6301\u7684\u5355\u4f4d\u6709 c=1\u3001w=2\u3001b=512\u3001kB=1000\u3001K=1024\u3001MB=1000*1000,M=1024*1024\u3001GB=1000*1000*1000\u3001G=1024*1024*1024 BYTE \u7b49\u3002',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(l.h4, {
              id: '\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u793a\u4f8b',
              children: '\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u793a\u4f8b',
            }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children: 'chaosd attack disk add-payload write -s 2G -n 8\n',
              }),
            }),
            '\n',
            (0, n.jsx)(l.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children:
                  '[2021/05/20 14:28:14.452 +08:00] [INFO] [disk.go:128] ["0+0 records in\\n0+0 records out\\n0 bytes copied, 4.3e-05 s, 0.0 kB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.32841 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.3344 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33312 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33466 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33189 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33752 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33295 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.794 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.3359 s, 115 MB/s\\n"]\nWrite file /home/andrew/chaosd/bin/example255569279 successfully, uid: e66afd86-6f3e-43a0-b161-09447ed84856\n',
              }),
            }),
            '\n',
            (0, n.jsx)(l.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u586b\u5145',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u586b\u5145',
            }),
            '\n',
            (0, n.jsx)(l.h4, {
              id: '\u6a21\u62df\u78c1\u76d8\u586b\u5145\u547d\u4ee4',
              children: '\u6a21\u62df\u78c1\u76d8\u586b\u5145\u547d\u4ee4',
            }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, { className: 'language-bash', children: 'chaosd attack disk fill -h\n' }),
            }),
            '\n',
            (0, n.jsx)(l.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children:
                  "fill disk\n\nUsage:\n  chaosd attack disk fill [flags]\n\nFlags:\n  -d, --destroy          destroy file after filled in or allocated\n  -f, --fallocate        fill disk by fallocate instead of dd (default true)\n  -h, --help             help for fill\n  -p, --path string      'path' specifies the location to fill data in.If path not provided, a temp file will be generated and deleted immediately after data filled in or allocated\n  -c, --percent string   'percent' how many percent data of disk will fill in the file path\n  -s, --size string      'size' specifies how many units of data will fill in the file path.'unit' specifies the unit of data, support c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000,M=1024*1024, , GB=1000*1000*1000, G=1024*1024*1024 BYTESexample : 1M | 512kB\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, n.jsx)(l.h4, {
              id: '\u6a21\u62df\u78c1\u76d8\u586b\u5145\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u6a21\u62df\u78c1\u76d8\u586b\u5145\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(l.table, {
              children: [
                (0, n.jsx)(l.thead, {
                  children: (0, n.jsxs)(l.tr, {
                    children: [
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(l.tbody, {
                  children: [
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'destroy' }),
                        }),
                        (0, n.jsx)(l.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u5982\u679c\u6b64\u53c2\u6570\u4e3a ',
                            (0, n.jsx)(l.code, { children: 'true' }),
                            '\uff0c\u5219\u5728\u586b\u5145\u6587\u4ef6\u540e\u7acb\u5373\u5220\u9664\u586b\u5145\u6587\u4ef6',
                          ],
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'bool \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(l.code, { children: 'false' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'fallocate' }),
                        }),
                        (0, n.jsx)(l.td, { style: { textAlign: 'left' }, children: 'f' }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u5982\u679c\u6b64\u53c2\u6570\u4e3a ',
                            (0, n.jsx)(l.code, { children: 'true' }),
                            '\uff0cChaosd \u5219\u4f7f\u7528 Linux \u8c03\u7528 ',
                            (0, n.jsx)(l.code, { children: 'fallocate' }),
                            ' \u6765\u5feb\u901f\u7533\u8bf7\u78c1\u76d8\u7a7a\u95f4\uff0c\u6b64\u65f6 size \u5fc5\u987b\u5927\u4e8e ',
                            (0, n.jsx)(l.code, { children: '0' }),
                            '\u3002\u5982\u679c\u6b64\u53c2\u6570\u4e3a ',
                            (0, n.jsx)(l.code, { children: 'false' }),
                            '\uff0cChaosd \u5219\u4f7f\u7528 Linux \u8c03\u7528 dd \u4ee5\u76f8\u5bf9\u8f83\u6162\u901f\u5ea6\u586b\u5145\u78c1\u76d8\u3002',
                          ],
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'bool \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(l.code, { children: 'true' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'path' }),
                        }),
                        (0, n.jsx)(l.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u6307\u5b9a\u6240\u5199\u6570\u636e\u7684\u6587\u4ef6\u8def\u5f84\u3002\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u6b64\u53c2\u6570\uff0c\u6216\u8005\u8bbe\u7f6e\u53c2\u6570\u503c\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5219\u4f1a\u5728\u7a0b\u5e8f\u6267\u884c\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6\u3002\u6839\u636e\u5199\u5165\u6587\u4ef6\u7684\u6743\u9650\u4e0d\u540c\uff0c\u4f1a\u9700\u8981\u4f60\u4f7f\u7528\u4e00\u5b9a\u7684\u6743\u9650\u8fd0\u884c\u672c\u7a0b\u5e8f\u3002',
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(l.code, { children: '""' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'percent' }),
                        }),
                        (0, n.jsx)(l.td, { style: { textAlign: 'left' }, children: 'c' }),
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u6307\u5b9a\u586b\u5145\u591a\u5c11\u767e\u5206\u6bd4\u78c1\u76d8\u3002',
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ""\uff0c\u53ef\u4ee5\u586b\u5165 uint \u7c7b\u578b\u7684\u6b63\u6574\u6570\u3002\u5fc5\u987b\u8981\u8bbe\u7f6e ',
                            (0, n.jsx)(l.code, { children: 'size' }),
                            ' \u6216 ',
                            (0, n.jsx)(l.code, { children: 'percent' }),
                            ' \u4e2d\u7684\u4e00\u9879\uff0c\u4e24\u4e2a\u914d\u7f6e\u9879\u7684\u503c',
                            (0, n.jsx)(l.strong, { children: '\u4e0d\u80fd' }),
                            '\u540c\u65f6\u4e3a ',
                            (0, n.jsx)(l.code, { children: '""' }),
                            '\u3002',
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'size' }),
                        }),
                        (0, n.jsx)(l.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u6307\u5b9a\u5199\u5165\u591a\u5c11\u6570\u636e\u3002',
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(l.code, { children: '""' }),
                            '\uff0c\u5408\u6cd5\u5f62\u5f0f\u4e3a\u4e00\u4e2a\u6574\u6570\u52a0\u4e00\u4e2a\u5355\u4f4d\u3002\u4f8b\u5982\uff1a1M\u3001512kB\u3002\u652f\u6301\u7684\u5355\u4f4d\u6709 c=1\u3001w=2\u3001b=512\u3001kB=1000\u3001K=1024\u3001MB=1000*1000,M=1024*1024\u3001GB=1000*1000*1000\u3001G=1024*1024*1024 BYTE \u7b49\u3002\u5fc5\u987b\u8981\u8bbe\u7f6e ',
                            (0, n.jsx)(l.code, { children: 'size' }),
                            ' \u6216 ',
                            (0, n.jsx)(l.code, { children: 'percent' }),
                            ' \u4e2d\u7684\u4e00\u9879\uff0c\u4e24\u4e2a\u914d\u7f6e\u9879\u7684\u503c',
                            (0, n.jsx)(l.strong, { children: '\u4e0d\u80fd' }),
                            '\u540c\u65f6\u4e3a ',
                            (0, n.jsx)(l.code, { children: '""' }),
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
            (0, n.jsx)(l.h4, {
              id: '\u6a21\u62df\u78c1\u76d8\u586b\u5145\u793a\u4f8b',
              children: '\u6a21\u62df\u78c1\u76d8\u586b\u5145\u793a\u4f8b',
            }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children: 'chaosd attack disk fill -c 50 -d\n',
              }),
            }),
            '\n',
            (0, n.jsx)(l.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children:
                  '[2021/05/20 14:30:02.943 +08:00] [INFO] [disk.go:215]\nFill file /home/andrew/chaosd/bin/example623832242 successfully, uid: 097b4214-8d8e-46ad-8768-c3e0d8cbb326\n',
              }),
            }),
            '\n',
            (0, n.jsx)(l.h2, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, n.jsx)(l.p, {
              children:
                '\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u78c1\u76d8\u6545\u969c\u5b9e\u9a8c\u3002',
            }),
            '\n',
            (0, n.jsx)(l.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d',
            }),
            '\n',
            (0, n.jsx)(l.p, {
              children:
                '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u4e3a\u4e00\u6b21\u6027\u64cd\u4f5c\uff0c\u56e0\u6b64\u5b9e\u9a8c\u4e0d\u9700\u8981\u6062\u590d\u3002',
            }),
            '\n',
            (0, n.jsx)(l.h4, {
              id: '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(l.table, {
              children: [
                (0, n.jsx)(l.thead, {
                  children: (0, n.jsxs)(l.tr, {
                    children: [
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(l.tbody, {
                  children: [
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'action' }),
                        }),
                        (0, n.jsx)(l.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: ['\u8bbe\u7f6e\u4e3a ', (0, n.jsx)(l.code, { children: '"read-payload"' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'path' }),
                        }),
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u6307\u5b9a\u6240\u8bfb\u6570\u636e\u7684\u6587\u4ef6\u8def\u5f84\u3002\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u6b64\u53c2\u6570\uff0c\u6216\u8005\u8bbe\u7f6e\u53c2\u6570\u503c\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5219\u4ece\u76ee\u5f55\u201c/\u201d\u6240\u6302\u8f7d\u7684\u865a\u62df\u78c1\u76d8\u6587\u4ef6\u8bfb\u53d6\u3002\u6839\u636e\u8bfb\u53d6\u6587\u4ef6\u7684\u6743\u9650\u4e0d\u540c\uff0c\u4f1a\u9700\u8981\u4f60\u4f7f\u7528\u4e00\u5b9a\u7684\u6743\u9650\u8fd0\u884c\u672c\u7a0b\u5e8f\u3002',
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(l.code, { children: '""' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'process-num' }),
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u6307\u5b9a\u4f7f\u7528\u591a\u5c11\u4e2a\u5e76\u53d1\u8fd0\u884c\u7684 ',
                            (0, n.jsx)(l.a, {
                              href: 'https://man7.org/linux/man-pages/man1/dd.1.html',
                              children: 'dd',
                            }),
                            ' \u8fdb\u7a0b\u6267\u884c\u7a0b\u5e8f\u3002',
                          ],
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'uint8 \u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c\u4e3a ',
                            (0, n.jsx)(l.code, { children: '1' }),
                            '\uff0c\u8303\u56f4\u4e3a ',
                            (0, n.jsx)(l.code, { children: '1' }),
                            ' \u81f3 ',
                            (0, n.jsx)(l.code, { children: '255' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'size' }),
                        }),
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u6307\u5b9a\u8bfb\u53d6\u591a\u5c11\u6570\u636e\u3002\u8be5\u503c\u4e3a\u591a\u4e2a dd \u8bfb\u6570\u636e\u7684\u603b\u91cf\u3002',
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(l.code, { children: '""' }),
                            '\uff0c',
                            (0, n.jsx)(l.strong, { children: '\u5fc5\u987b' }),
                            '\u8981\u8bbe\u7f6e\u3002\u5408\u6cd5\u5f62\u5f0f\u4e3a\u4e00\u4e2a\u6574\u6570\u52a0\u4e00\u4e2a\u5355\u4f4d\u3002\u4f8b\u5982\uff1a1M\u3001512kB\u3002\u652f\u6301\u7684\u5355\u4f4d\u6709 c=1\u3001w=2\u3001b=512\u3001kB=1000\u3001K=1024\u3001MB=1000*1000,M=1024*1024\u3001GB=1000*1000*1000\u3001G=1024*1024*1024 BYTE \u7b49\u3002',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(l.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u793a\u4f8b',
            }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/disk -H "Content-Type:application/json" -d \'{"action":"read-payload","path":"/dev/zero", "payload-process-num":7,"size":"1000G"}\'\n',
              }),
            }),
            '\n',
            (0, n.jsx)(l.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n',
              }),
            }),
            '\n',
            (0, n.jsx)(l.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d',
            }),
            '\n',
            (0, n.jsx)(l.h4, {
              id: '\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(l.table, {
              children: [
                (0, n.jsx)(l.thead, {
                  children: (0, n.jsxs)(l.tr, {
                    children: [
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(l.tbody, {
                  children: [
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'action' }),
                        }),
                        (0, n.jsx)(l.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: ['\u8bbe\u7f6e\u4e3a ', (0, n.jsx)(l.code, { children: '"write-payload"' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'path' }),
                        }),
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u6307\u5b9a\u6240\u5199\u6570\u636e\u7684\u6587\u4ef6\u8def\u5f84\u3002\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u6b64\u53c2\u6570\uff0c\u6216\u8005\u8bbe\u7f6e\u53c2\u6570\u503c\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5219\u4f1a\u5728\u7a0b\u5e8f\u6267\u884c\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6\u3002\u6839\u636e\u5199\u5165\u6587\u4ef6\u7684\u6743\u9650\u4e0d\u540c\uff0c\u4f1a\u9700\u8981\u4f60\u4f7f\u7528\u4e00\u5b9a\u7684\u6743\u9650\u8fd0\u884c\u672c\u7a0b\u5e8f\u3002',
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(l.code, { children: '""' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'process-num' }),
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u6307\u5b9a\u4f7f\u7528\u591a\u5c11\u4e2a\u5e76\u53d1\u8fd0\u884c\u7684 ',
                            (0, n.jsx)(l.a, {
                              href: 'https://man7.org/linux/man-pages/man1/dd.1.html',
                              children: 'dd',
                            }),
                            ' \u8fdb\u7a0b\u6267\u884c\u7a0b\u5e8f\u3002',
                          ],
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'uint8 \u7c7b\u578b\u3002\u9ed8\u8ba4\u503c\u4e3a ',
                            (0, n.jsx)(l.code, { children: '1' }),
                            '\uff0c\u8303\u56f4\u4e3a ',
                            (0, n.jsx)(l.code, { children: '1' }),
                            ' \u81f3 ',
                            (0, n.jsx)(l.code, { children: '255' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'size' }),
                        }),
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u6307\u5b9a\u5199\u5165\u591a\u5c11\u6570\u636e\u3002\u8be5\u503c\u4e3a\u591a\u4e2a dd \u5199\u6570\u636e\u7684\u603b\u91cf\u3002',
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(l.code, { children: '""' }),
                            '\uff0c',
                            (0, n.jsx)(l.strong, { children: '\u5fc5\u987b' }),
                            '\u8981\u8bbe\u7f6e\u3002\u5408\u6cd5\u5f62\u5f0f\u4e3a\u4e00\u4e2a\u6574\u6570\u52a0\u4e00\u4e2a\u5355\u4f4d\u3002\u4f8b\u5982\uff1a1M\u3001512kB\u3002\u652f\u6301\u7684\u5355\u4f4d\u6709 c=1\u3001w=2\u3001b=512\u3001kB=1000\u3001K=1024\u3001MB=1000*1000,M=1024*1024\u3001GB=1000*1000*1000\u3001G=1024*1024*1024 BYTE \u7b49\u3002',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(l.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u793a\u4f8b',
            }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/disk -H "Content-Type:application/json" -d \'{"action":"write-payload","path":"/tmp/test", "payload-process-num":7,"size":"1000G"}\'\n',
              }),
            }),
            '\n',
            (0, n.jsx)(l.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n',
              }),
            }),
            '\n',
            (0, n.jsx)(l.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u586b\u5145',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u586b\u5145',
            }),
            '\n',
            (0, n.jsx)(l.h4, {
              id: '\u6a21\u62df\u78c1\u76d8\u586b\u5145\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u6a21\u62df\u78c1\u76d8\u586b\u5145\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(l.table, {
              children: [
                (0, n.jsx)(l.thead, {
                  children: (0, n.jsxs)(l.tr, {
                    children: [
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(l.tbody, {
                  children: [
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'action' }),
                        }),
                        (0, n.jsx)(l.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: ['\u8bbe\u7f6e\u4e3a ', (0, n.jsx)(l.code, { children: '"fill"' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'destroy' }),
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u5982\u679c\u6b64\u53c2\u6570\u4e3a ',
                            (0, n.jsx)(l.code, { children: 'true' }),
                            '\uff0c\u5219\u5728\u586b\u5145\u6587\u4ef6\u540e\u7acb\u5373\u5220\u9664\u586b\u5145\u6587\u4ef6',
                          ],
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'bool \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(l.code, { children: 'false' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'fill-by-fallocate' }),
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u5982\u679c\u6b64\u53c2\u6570\u4e3a ',
                            (0, n.jsx)(l.code, { children: 'true' }),
                            '\uff0cChaosd \u5219\u4f7f\u7528 Linux \u8c03\u7528 ',
                            (0, n.jsx)(l.code, { children: 'fallocate' }),
                            ' \u6765\u5feb\u901f\u7533\u8bf7\u78c1\u76d8\u7a7a\u95f4\uff0c\u6b64\u65f6 size \u5fc5\u987b\u5927\u4e8e ',
                            (0, n.jsx)(l.code, { children: '0' }),
                            '\u3002\u5982\u679c\u6b64\u53c2\u6570\u4e3a ',
                            (0, n.jsx)(l.code, { children: 'false' }),
                            '\uff0cChaosd \u5219\u4f7f\u7528 Linux \u8c03\u7528 dd \u4ee5\u76f8\u5bf9\u8f83\u6162\u901f\u5ea6\u586b\u5145\u78c1\u76d8\u3002',
                          ],
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'bool \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(l.code, { children: 'true' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'path' }),
                        }),
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u6307\u5b9a\u6240\u5199\u6570\u636e\u7684\u6587\u4ef6\u8def\u5f84\u3002\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u6b64\u53c2\u6570\uff0c\u6216\u8005\u8bbe\u7f6e\u53c2\u6570\u503c\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5219\u4f1a\u5728\u7a0b\u5e8f\u6267\u884c\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6\u3002\u6839\u636e\u5199\u5165\u6587\u4ef6\u7684\u6743\u9650\u4e0d\u540c\uff0c\u4f1a\u9700\u8981\u4f60\u4f7f\u7528\u4e00\u5b9a\u7684\u6743\u9650\u8fd0\u884c\u672c\u7a0b\u5e8f\u3002',
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(l.code, { children: '""' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'percent' }),
                        }),
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u6307\u5b9a\u586b\u5145\u591a\u5c11\u767e\u5206\u6bd4\u78c1\u76d8\u3002',
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ""\uff0c\u53ef\u4ee5\u586b\u5165 uint \u7c7b\u578b\u7684\u6b63\u6574\u6570\u3002\u5fc5\u987b\u8981\u8bbe\u7f6e ',
                            (0, n.jsx)(l.code, { children: 'size' }),
                            ' \u6216 ',
                            (0, n.jsx)(l.code, { children: 'percent' }),
                            ' \u4e2d\u7684\u4e00\u9879\uff0c\u4e24\u4e2a\u914d\u7f6e\u9879\u7684\u503c',
                            (0, n.jsx)(l.strong, { children: '\u4e0d\u80fd' }),
                            '\u540c\u65f6\u4e3a ',
                            (0, n.jsx)(l.code, { children: '""' }),
                            '\u3002',
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.tr, {
                      children: [
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(l.code, { children: 'size' }),
                        }),
                        (0, n.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u6307\u5b9a\u5199\u5165\u591a\u5c11\u6570\u636e\u3002',
                        }),
                        (0, n.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a""\uff0c\u5408\u6cd5\u5f62\u5f0f\u4e3a\u4e00\u4e2a\u6574\u6570\u52a0\u4e00\u4e2a\u5355\u4f4d\u3002\u4f8b\u5982\uff1a1M\u3001512kB\u3002\u652f\u6301\u7684\u5355\u4f4d\u6709 c=1\u3001w=2\u3001b=512\u3001kB=1000\u3001K=1024\u3001MB=1000*1000,M=1024*1024\u3001GB=1000*1000*1000\u3001G=1024*1024*1024 BYTE \u7b49\u3002\u5fc5\u987b\u8981\u8bbe\u7f6e ',
                            (0, n.jsx)(l.code, { children: 'size' }),
                            ' \u6216 ',
                            (0, n.jsx)(l.code, { children: 'percent' }),
                            ' \u4e2d\u7684\u4e00\u9879\uff0c\u4e24\u4e2a\u914d\u7f6e\u9879\u7684\u503c',
                            (0, n.jsx)(l.strong, { children: '\u4e0d\u80fd' }),
                            '\u540c\u65f6\u4e3a ',
                            (0, n.jsx)(l.code, { children: '""' }),
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
            (0, n.jsx)(l.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u586b\u5145\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u78c1\u76d8\u586b\u5145\u793a\u4f8b',
            }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/disk -H "Content-Type:application/json" -d \'{"action":"fill","path":"/tmp/test", "fill-by-fallocate":true,"percent":"50"}\'\n',
              }),
            }),
            '\n',
            (0, n.jsx)(l.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, n.jsx)(l.pre, {
              children: (0, n.jsx)(l.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n',
              }),
            }),
          ],
        })
      }
      function o(e = {}) {
        const { wrapper: l } = { ...(0, d.R)(), ...e.components }
        return l ? (0, n.jsx)(l, { ...e, children: (0, n.jsx)(a, { ...e }) }) : a(e)
      }
    },
    28453: (e, l, s) => {
      s.d(l, { R: () => i, x: () => c })
      var t = s(96540)
      const n = {},
        d = t.createContext(n)
      function i(e) {
        const l = t.useContext(d)
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(l) : { ...l, ...e }
          },
          [l, e]
        )
      }
      function c(e) {
        let l
        return (
          (l = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : i(e.components)),
          t.createElement(d.Provider, { value: l }, e.children)
        )
      }
    },
  },
])
