/*
 * @Author: hayyot
 * @Date: 2023-06-21 14:10:57
 * @Description: 铁沸物
 * @FilePath: \forum\forum\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  //解决“vite use `--host` to expose”
  base: './',	//不加打包后白屏
  server: {             
    host: '0.0.0.0',
    // port: 8080,      
    open: true
  },
  resolve:{   
    //别名配置，引用src路径下的东西可以通过@如：import Layout from '@/layout/index.vue'
    alias:[   
      {
        find:'@',
        replacement:resolve(__dirname,'src') 
      }
    ]
  }
})
