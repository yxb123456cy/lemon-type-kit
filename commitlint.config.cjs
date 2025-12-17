// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'], // 继承常规规范
  rules: {
    // 可选：自定义规则（如允许 emoji 前缀）
    'header-max-length': [2, 'always', 100], // 标题最长 100 字符（默认 72）
    'type-enum': [
      2, // 0=禁用，1=警告，2=错误（强制）
      'always',
      [
        'feat', // 新功能（对应版本号 minor）
        'fix', // 修复 bug（对应版本号 patch）
        'docs', // 文档更新（README/注释）
        'style', // 代码格式（空格/缩进，不影响逻辑）
        'refactor', // 重构（非 feat/fix 的代码优化）
        'perf', // 性能优化
        'test', // 添加/修改测试
        'chore', // 构建/工具链变动（如改 husky 配置）
        'ci', // CI 配置变动（如 GitHub Actions）
        'revert', // 回滚提交
      ],
    ],
  },
};
