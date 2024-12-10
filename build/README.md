# gulp管理的统一打包脚本（使用rollup和rollup相关插件）

> 不同于每个@mylib包的单独打包，gulp打包的是@mylib的所有包，统一打包到dist目录下，方便统一管理，减少了多个包的管理，降低复杂度
> build文件夹（@mylib/build）的移除不会影响到每个@mylib包的单独打包
