export default {
  extends: ['@commitlint/config-conventional'], // 继承自 commitlint 的标准配置
  rules: {
    'type-enum': [
      2, // 规则级别：错误
      'always', // 规则应用条件：始终检查
      [
        'feat', // 新功能
        'fix', // 修复
        'docs', // 文档变更
        'style', // 代码格式（不影响代码运行的变动）
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'perf', // 性能优化
        'test', // 增加测试
        'build', // 影响构建系统或外部依赖关系的更改
        'ci', // 更改持续集成文件和脚本
        'chore', // 其他不修改src或test文件的更改
        'revert', // 撤销之前的提交
      ],
    ],
  },
};
