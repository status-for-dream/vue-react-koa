
/**
 *  build: 主要目的时修改项目构建系统(例如：gulp, webpack, rollup, vite的配置等)的提交
 *  ci: 主要目的时修改项目继续集成流程(例如：Travis, JenKins, GitLab CI, Circle等)的提交
 *  docs: 文档更新
 *  feat: 新增功能
 *  perf: 性能优化
 *  fix: bug修复
 *  refactor: 重构代码(既没有薪资功能，也没有修复 bug)
 *  style: 不影响程序逻辑的代码修改(修改空白字符， 补全缺失的分好等)
 *  test:  薪资测试用例或 更新现有测试
 *  revert: 回滚某个更早之前的提交
 *  chore: 不属于以上类型的其他类型(日常事务)
 * 
 * **/


 const types = ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'release', 'chore', 'revert'];

module.exports = {
  extends:['@commitlint/config-conventional'],
  rules:{
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types],
    'scope-case': [0, 'always'],
    'subject-empty': [2, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [2, 'always', 88],
  }
}