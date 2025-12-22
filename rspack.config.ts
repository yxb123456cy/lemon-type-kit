// 1. 替换 require 为 import（ESM 核心）
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

// 2. ESM 用 export default 替代 module.exports
export default {
  // ... 其他配置
  plugins: [
    // 保持条件注册逻辑，语法完全兼容
    process.env.RSDOCTOR &&
      new RsdoctorRspackPlugin({
        // 插件选项（按需配置）
        output: {},
        experiments: {
          enableNativePlugin: true,
        },
      }),
  ].filter(Boolean), // 过滤掉 false 值，避免无效插件
};
