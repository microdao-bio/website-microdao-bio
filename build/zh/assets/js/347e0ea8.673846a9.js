'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [7020],
  {
    65939: (e, l, t) => {
      t.r(l),
        t.d(l, {
          assets: () => r,
          contentTitle: () => c,
          default: () => a,
          frontMatter: () => d,
          metadata: () => n,
          toc: () => h,
        })
      const n = JSON.parse(
        '{"id":"simulate-file-chaos-in-physical-nodes","title":"\u6a21\u62df\u6587\u4ef6\u6545\u969c","description":"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u6587\u4ef6\u6545\u969c\u573a\u666f\uff0c\u5305\u62ec\u65b0\u589e\u6587\u4ef6\u3001\u5199\u6587\u4ef6\u3001\u5220\u9664\u6587\u4ef6\u3001\u4fee\u6539\u6587\u4ef6\u6743\u9650\u3001\u91cd\u547d\u540d\u6587\u4ef6\u3001\u66ff\u6362\u6587\u4ef6\u6570\u636e\u7b49\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/simulate-file-chaos-in-physical-nodes.md","sourceDirName":".","slug":"/simulate-file-chaos-in-physical-nodes","permalink":"/zh/docs/2.4.3/simulate-file-chaos-in-physical-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/simulate-file-chaos-in-physical-nodes.md","tags":[],"version":"2.4.3","frontMatter":{"title":"\u6a21\u62df\u6587\u4ef6\u6545\u969c"},"sidebar":"docs","previous":{"title":"\u6a21\u62df\u65f6\u95f4\u6545\u969c","permalink":"/zh/docs/2.4.3/simulate-time-chaos-on-physical-nodes"},"next":{"title":"\u6a21\u62df Redis \u6545\u969c","permalink":"/zh/docs/2.4.3/simulate-redis-chaos-on-physical-nodes"}}'
      )
      var s = t(74848),
        i = t(28453)
      const d = { title: '\u6a21\u62df\u6587\u4ef6\u6545\u969c' },
        c = void 0,
        r = {},
        h = [
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5199\u6587\u4ef6',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5199\u6587\u4ef6',
            level: 3,
          },
          { value: '\u5199\u6587\u4ef6\u547d\u4ee4', id: '\u5199\u6587\u4ef6\u547d\u4ee4', level: 4 },
          {
            value: '\u5199\u6587\u4ef6\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u5199\u6587\u4ef6\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5199\u6587\u4ef6\u793a\u4f8b',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5199\u6587\u4ef6\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u6587\u4ef6',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u6587\u4ef6',
            level: 3,
          },
          { value: '\u521b\u5efa\u6587\u4ef6\u547d\u4ee4', id: '\u521b\u5efa\u6587\u4ef6\u547d\u4ee4', level: 4 },
          {
            value: '\u521b\u5efa\u6587\u4ef6\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u521b\u5efa\u6587\u4ef6\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u6587\u4ef6\u793a\u4f8b',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u6587\u4ef6\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5220\u9664\u6587\u4ef6',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5220\u9664\u6587\u4ef6',
            level: 3,
          },
          { value: '\u5220\u9664\u6587\u4ef6\u547d\u4ee4', id: '\u5220\u9664\u6587\u4ef6\u547d\u4ee4', level: 4 },
          {
            value: '\u5220\u9664\u6587\u4ef6\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u5220\u9664\u6587\u4ef6\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5220\u9664\u6587\u4ef6\u793a\u4f8b',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5220\u9664\u6587\u4ef6\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u4fee\u6539\u6587\u4ef6\u6743\u9650',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u4fee\u6539\u6587\u4ef6\u6743\u9650',
            level: 3,
          },
          {
            value: '\u4fee\u6539\u6587\u4ef6\u6743\u9650\u547d\u4ee4',
            id: '\u4fee\u6539\u6587\u4ef6\u6743\u9650\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u4fee\u6539\u6587\u4ef6\u6743\u9650\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u4fee\u6539\u6587\u4ef6\u6743\u9650\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u4fee\u6539\u6587\u4ef6\u6743\u9650\u793a\u4f8b',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u4fee\u6539\u6587\u4ef6\u6743\u9650\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u91cd\u547d\u540d\u6587\u4ef6',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u91cd\u547d\u540d\u6587\u4ef6',
            level: 3,
          },
          {
            value: '\u91cd\u547d\u540d\u6587\u4ef6\u547d\u4ee4',
            id: '\u91cd\u547d\u540d\u6587\u4ef6\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u91cd\u547d\u540d\u6587\u4ef6\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u91cd\u547d\u540d\u6587\u4ef6\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u91cd\u547d\u540d\u6587\u4ef6\u793a\u4f8b',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u91cd\u547d\u540d\u6587\u4ef6\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u66ff\u6362\u6587\u4ef6\u5185\u5bb9',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u66ff\u6362\u6587\u4ef6\u5185\u5bb9',
            level: 3,
          },
          {
            value: '\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u547d\u4ee4',
            id: '\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u793a\u4f8b',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5199\u6587\u4ef6',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5199\u6587\u4ef6',
            level: 3,
          },
          {
            value: '\u5199\u6587\u4ef6\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u5199\u6587\u4ef6\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5199\u6587\u4ef6\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5199\u6587\u4ef6\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u6587\u4ef6',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u6587\u4ef6',
            level: 3,
          },
          {
            value: '\u521b\u5efa\u6587\u4ef6\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u521b\u5efa\u6587\u4ef6\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u6587\u4ef6\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u6587\u4ef6\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5220\u9664\u6587\u4ef6',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5220\u9664\u6587\u4ef6',
            level: 3,
          },
          {
            value: '\u5220\u9664\u6587\u4ef6\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u5220\u9664\u6587\u4ef6\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5220\u9664\u6587\u4ef6\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5220\u9664\u6587\u4ef6\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u4fee\u6539\u6587\u4ef6\u6743\u9650',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u4fee\u6539\u6587\u4ef6\u6743\u9650',
            level: 3,
          },
          {
            value: '\u4fee\u6539\u6587\u4ef6\u6743\u9650\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u4fee\u6539\u6587\u4ef6\u6743\u9650\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u4fee\u6539\u6587\u4ef6\u6743\u9650\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u4fee\u6539\u6587\u4ef6\u6743\u9650\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u91cd\u547d\u540d\u6587\u4ef6',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u91cd\u547d\u540d\u6587\u4ef6',
            level: 3,
          },
          {
            value: '\u91cd\u547d\u540d\u6587\u4ef6\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u91cd\u547d\u540d\u6587\u4ef6\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u91cd\u547d\u540d\u6587\u4ef6\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u91cd\u547d\u540d\u6587\u4ef6\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u66ff\u6362\u6587\u4ef6\u5185\u5bb9',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u66ff\u6362\u6587\u4ef6\u5185\u5bb9',
            level: 3,
          },
          {
            value: '\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u793a\u4f8b',
            level: 4,
          },
        ]
      function x(e) {
        const l = {
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
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(l.p, {
              children:
                '\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u6587\u4ef6\u6545\u969c\u573a\u666f\uff0c\u5305\u62ec\u65b0\u589e\u6587\u4ef6\u3001\u5199\u6587\u4ef6\u3001\u5220\u9664\u6587\u4ef6\u3001\u4fee\u6539\u6587\u4ef6\u6743\u9650\u3001\u91cd\u547d\u540d\u6587\u4ef6\u3001\u66ff\u6362\u6587\u4ef6\u6570\u636e\u7b49\u3002',
            }),
            '\n',
            (0, s.jsx)(l.h2, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, s.jsx)(l.p, {
              children:
                '\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u4e2d\u521b\u5efa\u6587\u4ef6\u6545\u969c\u5b9e\u9a8c\u3002',
            }),
            '\n',
            (0, s.jsx)(l.p, {
              children:
                '\u5728\u521b\u5efa\u6587\u4ef6\u6545\u969c\u5b9e\u9a8c\u524d\uff0c\u53ef\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u884c\u67e5\u770b Chaosd \u652f\u6301\u7684\u6587\u4ef6\u6545\u969c\u7c7b\u578b\uff1a',
            }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, { className: 'language-bash', children: 'chaosd attack file -h\n' }),
            }),
            '\n',
            (0, s.jsx)(l.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children:
                  "File attack related commands\n\nUsage:\n  chaosd attack file [command]\n\nAvailable Commands:\n  append      append file\n  create      create file\n  delete      delete file\n  modify      modify file privilege\n  rename      rename file\n  replace     replace data in file\n\nFlags:\n  -h, --help   help for file\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n\nUse \"chaosd attack file [command] --help\" for more information about a command.\n",
              }),
            }),
            '\n',
            (0, s.jsx)(l.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5199\u6587\u4ef6',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5199\u6587\u4ef6',
            }),
            '\n',
            (0, s.jsx)(l.p, {
              children:
                '\u901a\u8fc7\u8be5\u529f\u80fd\u4ee5\u8ffd\u52a0\u7684\u65b9\u5f0f\u5c06\u6570\u636e\u5199\u5230\u6587\u4ef6\u7684\u672b\u5c3e\u3002',
            }),
            '\n',
            (0, s.jsx)(l.h4, { id: '\u5199\u6587\u4ef6\u547d\u4ee4', children: '\u5199\u6587\u4ef6\u547d\u4ee4' }),
            '\n',
            (0, s.jsx)(l.p, { children: '\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, { className: 'language-bash', children: 'chaosd attack file append -h\n' }),
            }),
            '\n',
            (0, s.jsx)(l.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children:
                  "append file\n\nUsage:\n  chaosd attack file append [flags]\n\nFlags:\n  -c, --count int          append count with default value is 1 (default 1)\n  -d, --data string        append data\n  -f, --file-name string   append data to the file\n  -h, --help               help for append\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u5199\u6587\u4ef6\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u5199\u6587\u4ef6\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsxs)(l.table, {
              children: [
                (0, s.jsx)(l.thead, {
                  children: (0, s.jsxs)(l.tr, {
                    children: [
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(l.tbody, {
                  children: [
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'count' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: 'c' }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u5199\u6570\u636e\u7684\u6b21\u6570',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: ['int\uff0c\u9ed8\u8ba4\u503c\u4e3a ', (0, s.jsx)(l.code, { children: '1' })],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'data' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u8981\u5199\u5165\u6587\u4ef6\u7684\u6570\u636e',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"test"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'file-name' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: 'f' }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u8981\u5199\u5165\u6570\u636e\u7684\u6587\u4ef6\u8def\u5f84',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test.txt"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5199\u6587\u4ef6\u793a\u4f8b',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5199\u6587\u4ef6\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children: 'chaosd attack file append --count 2 --data "test" --file-name /tmp/test.txt\n',
              }),
            }),
            '\n',
            (0, s.jsx)(l.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u6587\u4ef6',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u6587\u4ef6',
            }),
            '\n',
            (0, s.jsx)(l.p, {
              children:
                '\u901a\u8fc7\u8be5\u529f\u80fd\u53ef\u4ee5\u521b\u5efa\u65b0\u7684\u6587\u4ef6\u6216\u8005\u76ee\u5f55\u3002',
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u521b\u5efa\u6587\u4ef6\u547d\u4ee4',
              children: '\u521b\u5efa\u6587\u4ef6\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(l.p, { children: '\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, { className: 'language-bash', children: 'chaosd attack file create -h\n' }),
            }),
            '\n',
            (0, s.jsx)(l.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children:
                  "create file\n\nUsage:\n  chaosd attack file create [flags]\n\nFlags:\n  -d, --dir-name string    the name of directory to be created\n  -f, --file-name string   the name of file to be created\n  -h, --help               help for create\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u521b\u5efa\u6587\u4ef6\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u521b\u5efa\u6587\u4ef6\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsxs)(l.table, {
              children: [
                (0, s.jsx)(l.thead, {
                  children: (0, s.jsxs)(l.tr, {
                    children: [
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(l.tbody, {
                  children: [
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'dir-name' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u521b\u5efa\u7684\u76ee\u5f55\u540d\u79f0',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test"' }),
                            '\uff0c',
                            (0, s.jsx)(l.code, { children: 'dir-name' }),
                            ' \u548c ',
                            (0, s.jsx)(l.code, { children: 'file-name' }),
                            ' \u5fc5\u987b\u8981\u8bbe\u7f6e\u5176\u4e2d\u4e00\u4e2a',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'file-name' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: 'f' }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u521b\u5efa\u7684\u6587\u4ef6\u540d\u79f0',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test.txt"' }),
                            '\uff0c',
                            (0, s.jsx)(l.code, { children: 'dir-name' }),
                            ' \u548c ',
                            (0, s.jsx)(l.code, { children: 'file-name' }),
                            ' \u5fc5\u987b\u8981\u8bbe\u7f6e\u5176\u4e2d\u4e00\u4e2a',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u6587\u4ef6\u793a\u4f8b',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u6587\u4ef6\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children: 'chaosd attack file create --file-name "/tmp/test.txt"\n',
              }),
            }),
            '\n',
            (0, s.jsx)(l.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5220\u9664\u6587\u4ef6',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5220\u9664\u6587\u4ef6',
            }),
            '\n',
            (0, s.jsx)(l.p, {
              children: '\u4f7f\u7528\u8be5\u529f\u80fd\u5220\u9664\u6587\u4ef6\u6216\u8005\u76ee\u5f55\u3002',
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u5220\u9664\u6587\u4ef6\u547d\u4ee4',
              children: '\u5220\u9664\u6587\u4ef6\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(l.p, { children: '\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, { className: 'language-bash', children: 'chaosd attack file delete -h\n' }),
            }),
            '\n',
            (0, s.jsx)(l.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children:
                  "delete file\n\nUsage:\n  chaosd attack file delete [flags]\n\nFlags:\n  -d, --dir-name string    the directory to be deleted\n  -f, --file-name string   the file to be deleted\n  -h, --help               help for delete\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u5220\u9664\u6587\u4ef6\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u5220\u9664\u6587\u4ef6\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsxs)(l.table, {
              children: [
                (0, s.jsx)(l.thead, {
                  children: (0, s.jsxs)(l.tr, {
                    children: [
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(l.tbody, {
                  children: [
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'dir-name' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u5220\u9664\u7684\u76ee\u5f55\u540d\u79f0',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test"' }),
                            '\uff0c',
                            (0, s.jsx)(l.code, { children: 'dir-name' }),
                            ' \u548c ',
                            (0, s.jsx)(l.code, { children: 'file-name' }),
                            ' \u5fc5\u987b\u8981\u8bbe\u7f6e\u5176\u4e2d\u4e00\u4e2a',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'file-name' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: 'f' }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u5220\u9664\u7684\u6587\u4ef6\u540d\u79f0',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test.txt"' }),
                            '\uff0c',
                            (0, s.jsx)(l.code, { children: 'dir-name' }),
                            ' \u548c ',
                            (0, s.jsx)(l.code, { children: 'file-name' }),
                            ' \u5fc5\u987b\u8981\u8bbe\u7f6e\u5176\u4e2d\u4e00\u4e2a',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5220\u9664\u6587\u4ef6\u793a\u4f8b',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5220\u9664\u6587\u4ef6\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children: 'chaosd attack file delete --file-name "/tmp/test.txt"\n',
              }),
            }),
            '\n',
            (0, s.jsx)(l.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u4fee\u6539\u6587\u4ef6\u6743\u9650',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u4fee\u6539\u6587\u4ef6\u6743\u9650',
            }),
            '\n',
            (0, s.jsx)(l.p, {
              children: '\u4f7f\u7528\u8be5\u529f\u80fd\u4fee\u6539\u6587\u4ef6\u7684\u6743\u9650\u3002',
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u4fee\u6539\u6587\u4ef6\u6743\u9650\u547d\u4ee4',
              children: '\u4fee\u6539\u6587\u4ef6\u6743\u9650\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(l.p, { children: '\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, { className: 'language-bash', children: 'chaosd attack file modify -h\n' }),
            }),
            '\n',
            (0, s.jsx)(l.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children:
                  "modify file privilege\n\nUsage:\n  chaosd attack file modify [flags]\n\nFlags:\n  -f, --file-name string   file to be change privilege\n  -h, --help               help for modify\n  -p, --privilege uint32   privilege to be update\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u4fee\u6539\u6587\u4ef6\u6743\u9650\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u4fee\u6539\u6587\u4ef6\u6743\u9650\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsxs)(l.table, {
              children: [
                (0, s.jsx)(l.thead, {
                  children: (0, s.jsxs)(l.tr, {
                    children: [
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(l.tbody, {
                  children: [
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'file-name' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: 'f' }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u8981\u4fee\u6539\u6743\u9650\u7684\u6587\u4ef6\u540d\u79f0',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test.txt"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'privilege' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u5c06\u6587\u4ef6\u6743\u9650\u4fee\u6539\u4e3a\u8be5\u503c',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '777' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u4fee\u6539\u6587\u4ef6\u6743\u9650\u793a\u4f8b',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u4fee\u6539\u6587\u4ef6\u6743\u9650\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children: 'chaosd attack file modify --file-name /tmp/test.txt --privilege 777\n',
              }),
            }),
            '\n',
            (0, s.jsx)(l.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u91cd\u547d\u540d\u6587\u4ef6',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u91cd\u547d\u540d\u6587\u4ef6',
            }),
            '\n',
            (0, s.jsx)(l.p, { children: '\u4f7f\u7528\u8be5\u529f\u80fd\u91cd\u547d\u540d\u6587\u4ef6\u3002' }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u91cd\u547d\u540d\u6587\u4ef6\u547d\u4ee4',
              children: '\u91cd\u547d\u540d\u6587\u4ef6\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(l.p, { children: '\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, { className: 'language-bash', children: 'chaosd attack file rename -h\n' }),
            }),
            '\n',
            (0, s.jsx)(l.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children:
                  "rename file\n\nUsage:\n  chaosd attack file rename [flags]\n\nFlags:\n  -d, --dest-file string     the destination file/dir of rename\n  -h, --help                 help for rename\n  -s, --source-file string   the source file/dir of rename\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u91cd\u547d\u540d\u6587\u4ef6\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u91cd\u547d\u540d\u6587\u4ef6\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsxs)(l.table, {
              children: [
                (0, s.jsx)(l.thead, {
                  children: (0, s.jsxs)(l.tr, {
                    children: [
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(l.tbody, {
                  children: [
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'dest-file' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u76ee\u6807\u6587\u4ef6\u540d\u79f0',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test2.txt"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'source-file' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: '\u6e90\u6587\u4ef6\u540d\u79f0' }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test.txt"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u91cd\u547d\u540d\u6587\u4ef6\u793a\u4f8b',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u91cd\u547d\u540d\u6587\u4ef6\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children: 'chaosd attack file rename --source-file /tmp/test.txt --dest-file /tmp/test2.txt\n',
              }),
            }),
            '\n',
            (0, s.jsx)(l.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u66ff\u6362\u6587\u4ef6\u5185\u5bb9',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u66ff\u6362\u6587\u4ef6\u5185\u5bb9',
            }),
            '\n',
            (0, s.jsx)(l.p, {
              children: '\u4f7f\u7528\u8be5\u529f\u80fd\u66ff\u6362\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u3002',
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u547d\u4ee4',
              children: '\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(l.p, { children: '\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, { className: 'language-bash', children: 'chaosd attack file replace -h\n' }),
            }),
            '\n',
            (0, s.jsx)(l.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children:
                  "replace data in file\n\nUsage:\n  chaosd attack file replace [flags]\n\nFlags:\n  -d, --dest-string string     the destination string to replace the origin string\n  -f, --file-name string       replace data in the file\n  -h, --help                   help for replace\n  -l, --line int               the line number to replace, default is 0, means replace all lines\n  -o, --origin-string string   the origin string to be replaced\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsxs)(l.table, {
              children: [
                (0, s.jsx)(l.thead, {
                  children: (0, s.jsxs)(l.tr, {
                    children: [
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(l.tbody, {
                  children: [
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'dest-string' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u5c06\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u66ff\u6362\u4e3a\u8be5\u503c',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"text"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'file-name' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: 'f' }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u8981\u66ff\u6362\u5185\u5bb9\u7684\u6587\u4ef6\u540d\u79f0',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test.txt"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'line' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: 'l' }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u66ff\u6362\u6587\u4ef6\u4e2d\u54ea\u4e00\u884c\u7684\u6570\u636e',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, s.jsx)(l.code, { children: '0' }),
                            '\uff0c\u8868\u793a\u66ff\u6362\u6240\u6709\u80fd\u5339\u914d\u5230 ',
                            (0, s.jsx)(l.code, { children: 'origin-string' }),
                            ' \u7684\u884c\u7684\u6570\u636e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'origin-string' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: 'o' }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u6587\u4ef6\u4e2d\u8981\u66ff\u6362\u7684\u6570\u636e',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"test"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u793a\u4f8b',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children:
                  './bin/chaosd attack file replace --origin-string test --dest-string text --file-name /tmp/test.txt --line 1\n',
              }),
            }),
            '\n',
            (0, s.jsx)(l.h2, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, s.jsx)(l.p, {
              children:
                '\u8981\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\uff0c\u8bf7\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a',
            }),
            '\n',
            (0, s.jsxs)(l.ol, {
              children: [
                '\n',
                (0, s.jsxs)(l.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(l.p, { children: '\u4ee5\u670d\u52a1\u6a21\u5f0f\u8fd0\u884c Chaosd\u3002' }),
                    '\n',
                    (0, s.jsx)(l.pre, {
                      children: (0, s.jsx)(l.code, {
                        className: 'language-bash',
                        children: 'chaosd server --port 31767\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(l.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(l.p, {
                      children: [
                        '\u5411 Chaosd \u670d\u52a1\u7684\u8def\u5f84 ',
                        (0, s.jsx)(l.code, { children: '/api/attack/jvm' }),
                        ' \u53d1\u9001 ',
                        (0, s.jsx)(l.code, { children: 'POST' }),
                        ' HTTP \u8bf7\u6c42\u3002',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(l.pre, {
                      children: (0, s.jsx)(l.code, {
                        className: 'language-bash',
                        children:
                          'curl -X POST 172.16.112.130:31767/api/attack/jvm -H "Content-Type:application/json" -d \'{fault-configuration}\'\n',
                      }),
                    }),
                    '\n',
                    (0, s.jsxs)(l.p, {
                      children: [
                        '\u5728\u4e0a\u8ff0\u547d\u4ee4\u4e2d\uff0c\u4f60\u9700\u8981\u6309\u7167\u6545\u969c\u7c7b\u578b\u5728 ',
                        (0, s.jsx)(l.code, { children: 'fault-configuration' }),
                        ' \u4e2d\u8fdb\u884c\u914d\u7f6e\u3002\u6709\u5173\u5bf9\u5e94\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u8bf7\u53c2\u8003\u4e0b\u6587\u4e2d\u5404\u4e2a\u7c7b\u578b\u6545\u969c\u7684\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u548c\u547d\u4ee4\u793a\u4f8b\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(l.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, s.jsxs)(l.p, {
                children: [
                  '\u5728\u8fd0\u884c\u5b9e\u9a8c\u65f6\uff0c\u8bf7\u6ce8\u610f\u4fdd\u5b58\u5b9e\u9a8c\u7684 UID \u4fe1\u606f\u3002\u5f53\u8981\u7ed3\u675f UID \u5bf9\u5e94\u7684\u5b9e\u9a8c\u65f6\uff0c\u9700\u8981\u5411 Chaosd \u670d\u52a1\u7684\u8def\u5f84 ',
                  (0, s.jsx)(l.code, { children: '/api/attack/{uid}' }),
                  ' \u53d1\u9001 ',
                  (0, s.jsx)(l.code, { children: 'DELETE' }),
                  ' HTTP \u8bf7\u6c42\u3002',
                ],
              }),
            }),
            '\n',
            (0, s.jsx)(l.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5199\u6587\u4ef6',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5199\u6587\u4ef6',
            }),
            '\n',
            (0, s.jsx)(l.p, {
              children:
                '\u901a\u8fc7\u8be5\u529f\u80fd\u4ee5\u8ffd\u52a0\u7684\u65b9\u5f0f\u5c06\u6570\u636e\u5199\u5230\u6587\u4ef6\u7684\u672b\u5c3e\u3002',
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u5199\u6587\u4ef6\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u5199\u6587\u4ef6\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsxs)(l.table, {
              children: [
                (0, s.jsx)(l.thead, {
                  children: (0, s.jsxs)(l.tr, {
                    children: [
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(l.tbody, {
                  children: [
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'action' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: ['\u8bbe\u7f6e\u4e3a ', (0, s.jsx)(l.code, { children: '"append"' })],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'count' }),
                        }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u5199\u6570\u636e\u7684\u6b21\u6570',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: ['int\uff0c\u9ed8\u8ba4\u503c\u4e3a ', (0, s.jsx)(l.code, { children: '1' })],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'data' }),
                        }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u8981\u5199\u5165\u6587\u4ef6\u7684\u6570\u636e',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"test"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'file-name' }),
                        }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u8981\u5199\u5165\u6570\u636e\u7684\u6587\u4ef6\u8def\u5f84',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test.txt"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5199\u6587\u4ef6\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5199\u6587\u4ef6\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/file -H "Content-Type:application/json" -d \'{"action":"append","file-name":"/tmp/test.txt","data":"test","count":2}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(l.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u6587\u4ef6',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u6587\u4ef6',
            }),
            '\n',
            (0, s.jsx)(l.p, {
              children:
                '\u901a\u8fc7\u8be5\u529f\u80fd\u53ef\u4ee5\u521b\u5efa\u65b0\u7684\u6587\u4ef6\u6216\u8005\u76ee\u5f55\u3002',
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u521b\u5efa\u6587\u4ef6\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u521b\u5efa\u6587\u4ef6\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsxs)(l.table, {
              children: [
                (0, s.jsx)(l.thead, {
                  children: (0, s.jsxs)(l.tr, {
                    children: [
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(l.tbody, {
                  children: [
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'action' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: ['\u8bbe\u7f6e\u4e3a ', (0, s.jsx)(l.code, { children: '"create"' })],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'dir-name' }),
                        }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u521b\u5efa\u7684\u76ee\u5f55\u540d\u79f0',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test"' }),
                            '\uff0c',
                            (0, s.jsx)(l.code, { children: 'dir-name' }),
                            ' \u548c ',
                            (0, s.jsx)(l.code, { children: 'file-name' }),
                            ' \u5fc5\u987b\u8981\u8bbe\u7f6e\u5176\u4e2d\u4e00\u4e2a',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'file-name' }),
                        }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u521b\u5efa\u7684\u6587\u4ef6\u540d\u79f0',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test.txt"' }),
                            '\uff0c',
                            (0, s.jsx)(l.code, { children: 'dir-name' }),
                            ' \u548c ',
                            (0, s.jsx)(l.code, { children: 'file-name' }),
                            ' \u5fc5\u987b\u8981\u8bbe\u7f6e\u5176\u4e2d\u4e00\u4e2a',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u6587\u4ef6\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u6587\u4ef6\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/file -H "Content-Type:application/json" -d \'{"action":"create","file-name":"/tmp/test.txt"}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(l.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5220\u9664\u6587\u4ef6',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5220\u9664\u6587\u4ef6',
            }),
            '\n',
            (0, s.jsx)(l.p, {
              children: '\u4f7f\u7528\u8be5\u529f\u80fd\u5220\u9664\u6587\u4ef6\u6216\u8005\u76ee\u5f55\u3002',
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u5220\u9664\u6587\u4ef6\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u5220\u9664\u6587\u4ef6\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsxs)(l.table, {
              children: [
                (0, s.jsx)(l.thead, {
                  children: (0, s.jsxs)(l.tr, {
                    children: [
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(l.tbody, {
                  children: [
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'action' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: ['\u8bbe\u7f6e\u4e3a ', (0, s.jsx)(l.code, { children: '"delete"' })],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'dir-name' }),
                        }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u5220\u9664\u7684\u76ee\u5f55\u540d\u79f0',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test"' }),
                            '\uff0c',
                            (0, s.jsx)(l.code, { children: 'dir-name' }),
                            ' \u548c ',
                            (0, s.jsx)(l.code, { children: 'file-name' }),
                            ' \u5fc5\u987b\u8981\u8bbe\u7f6e\u5176\u4e2d\u4e00\u4e2a',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'file-name' }),
                        }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u5220\u9664\u7684\u6587\u4ef6\u540d\u79f0',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test.txt"' }),
                            '\uff0c',
                            (0, s.jsx)(l.code, { children: 'dir-name' }),
                            ' \u548c ',
                            (0, s.jsx)(l.code, { children: 'file-name' }),
                            ' \u5fc5\u987b\u8981\u8bbe\u7f6e\u5176\u4e2d\u4e00\u4e2a',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5220\u9664\u6587\u4ef6\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5220\u9664\u6587\u4ef6\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/file -H "Content-Type:application/json" -d \'{"action":"delete","file-name":"/tmp/test.txt"}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(l.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u4fee\u6539\u6587\u4ef6\u6743\u9650',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u4fee\u6539\u6587\u4ef6\u6743\u9650',
            }),
            '\n',
            (0, s.jsx)(l.p, {
              children: '\u4f7f\u7528\u8be5\u529f\u80fd\u4fee\u6539\u6587\u4ef6\u7684\u6743\u9650\u3002',
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u4fee\u6539\u6587\u4ef6\u6743\u9650\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u4fee\u6539\u6587\u4ef6\u6743\u9650\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsxs)(l.table, {
              children: [
                (0, s.jsx)(l.thead, {
                  children: (0, s.jsxs)(l.tr, {
                    children: [
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(l.tbody, {
                  children: [
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'action' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: ['\u8bbe\u7f6e\u4e3a ', (0, s.jsx)(l.code, { children: '"modify"' })],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'file-name' }),
                        }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u8981\u4fee\u6539\u6743\u9650\u7684\u6587\u4ef6\u540d\u79f0',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test.txt"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'privilege' }),
                        }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u5c06\u6587\u4ef6\u6743\u9650\u4fee\u6539\u4e3a\u8be5\u503c',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '777' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u4fee\u6539\u6587\u4ef6\u6743\u9650\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u4fee\u6539\u6587\u4ef6\u6743\u9650\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/file -H "Content-Type:application/json" -d \'{"action":"modify","file-name":"/tmp/test.txt","privilege":777}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(l.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u91cd\u547d\u540d\u6587\u4ef6',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u91cd\u547d\u540d\u6587\u4ef6',
            }),
            '\n',
            (0, s.jsx)(l.p, { children: '\u4f7f\u7528\u8be5\u529f\u80fd\u91cd\u547d\u540d\u6587\u4ef6\u3002' }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u91cd\u547d\u540d\u6587\u4ef6\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u91cd\u547d\u540d\u6587\u4ef6\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsxs)(l.table, {
              children: [
                (0, s.jsx)(l.thead, {
                  children: (0, s.jsxs)(l.tr, {
                    children: [
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(l.tbody, {
                  children: [
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'action' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: ['\u8bbe\u7f6e\u4e3a ', (0, s.jsx)(l.code, { children: '"rename"' })],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'dest-file' }),
                        }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u76ee\u6807\u6587\u4ef6\u540d\u79f0',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test2.txt"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'source-file' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: '\u6e90\u6587\u4ef6\u540d\u79f0' }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test.txt"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u91cd\u547d\u540d\u6587\u4ef6\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u91cd\u547d\u540d\u6587\u4ef6\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/file -H "Content-Type:application/json" -d \'{"action":"rename","source-file":"/tmp/test.txt","dest-file":"/tmp/test2.txt"}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(l.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u66ff\u6362\u6587\u4ef6\u5185\u5bb9',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u66ff\u6362\u6587\u4ef6\u5185\u5bb9',
            }),
            '\n',
            (0, s.jsx)(l.p, {
              children: '\u4f7f\u7528\u8be5\u529f\u80fd\u66ff\u6362\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u3002',
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsxs)(l.table, {
              children: [
                (0, s.jsx)(l.thead, {
                  children: (0, s.jsxs)(l.tr, {
                    children: [
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(l.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(l.tbody, {
                  children: [
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'action' }),
                        }),
                        (0, s.jsx)(l.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: ['\u8bbe\u7f6e\u4e3a ', (0, s.jsx)(l.code, { children: '"replace"' })],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'dest-string' }),
                        }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u5c06\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u66ff\u6362\u4e3a\u8be5\u503c',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"text"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'file-name' }),
                        }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u8981\u66ff\u6362\u5185\u5bb9\u7684\u6587\u4ef6\u540d\u79f0',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"/tmp/test.txt"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'line' }),
                        }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u66ff\u6362\u6587\u4ef6\u4e2d\u54ea\u4e00\u884c\u7684\u6570\u636e',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, s.jsx)(l.code, { children: '0' }),
                            '\uff0c\u8868\u793a\u66ff\u6362\u6240\u6709\u80fd\u5339\u914d\u5230 ',
                            (0, s.jsx)(l.code, { children: 'origin-string' }),
                            ' \u7684\u884c\u7684\u6570\u636e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l.tr, {
                      children: [
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(l.code, { children: 'origin-string' }),
                        }),
                        (0, s.jsx)(l.td, {
                          style: { textAlign: 'left' },
                          children: '\u6587\u4ef6\u4e2d\u8981\u66ff\u6362\u7684\u6570\u636e',
                        }),
                        (0, s.jsxs)(l.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string\uff0c\u4f8b\u5982 ',
                            (0, s.jsx)(l.code, { children: '"test"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(l.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u66ff\u6362\u6587\u4ef6\u5185\u5bb9\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(l.pre, {
              children: (0, s.jsx)(l.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/file -H "Content-Type:application/json" -d \'{"action":"replace","origin-string":"test","dest-string":"text","file-name":"/tmp/test.txt","line":1}\'\n',
              }),
            }),
          ],
        })
      }
      function a(e = {}) {
        const { wrapper: l } = { ...(0, i.R)(), ...e.components }
        return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x(e)
      }
    },
    28453: (e, l, t) => {
      t.d(l, { R: () => d, x: () => c })
      var n = t(96540)
      const s = {},
        i = n.createContext(s)
      function d(e) {
        const l = n.useContext(i)
        return n.useMemo(
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
              ? e.components(s)
              : e.components || s
            : d(e.components)),
          n.createElement(i.Provider, { value: l }, e.children)
        )
      }
    },
  },
])
