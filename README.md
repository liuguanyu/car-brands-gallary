# 汽车品牌标志展示 - SolidJS版本

这是一个使用SolidJS + Vite构建的汽车品牌标志展示项目。

## 特性

- 使用SolidJS响应式框架
- Vite作为构建工具
- 展示33个主流汽车品牌的真实标志
- 响应式网格布局
- 支持打印功能（A4纸优化）
- 现代化的UI设计

## 包含的汽车品牌

### 豪华品牌
- 宝马 (BMW)
- 奔驰 (Mercedes-Benz)
- 奥迪 (Audi)
- 雷克萨斯 (Lexus)
- 捷豹 (Jaguar)
- 路虎 (Land Rover)
- 保时捷 (Porsche)

### 美系品牌
- 福特 (Ford)
- 雪佛兰 (Chevrolet)
- 别克 (Buick)
- 凯迪拉克 (Cadillac)
- 林肯 (Lincoln)

### 日韩品牌
- 丰田 (Toyota)
- 本田 (Honda)
- 马自达 (Mazda)
- 斯巴鲁 (Subaru)
- 日产 (Nissan)
- 现代 (Hyundai)
- 起亚 (Kia)

### 欧系品牌
- 大众 (Volkswagen)
- 标致 (Peugeot)
- 雪铁龙 (Citroën)
- 沃尔沃 (Volvo)

### 中国品牌
- 比亚迪 (BYD)
- 吉利 (Geely)
- 哈弗 (Haval)
- 领克 (Lynk & Co)
- 五菱 (Wuling)
- 蔚来 (NIO)
- 理想 (Li Xiang)
- 小鹏 (XPeng)
- 小米汽车 (Xiaomi)

### 新能源先锋
- 特斯拉 (Tesla)

## 安装和运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 打印功能

点击页面右上角的"打印页面"按钮可以直接打印页面，布局已经针对A4纸张进行了优化。

## 技术栈

- SolidJS 1.8.0
- Vite 4.4.0
- vite-plugin-solid 2.7.0
- CSS3 (Grid Layout, Flexbox)
- 响应式设计

## 项目结构

```
src/
├── components/
│   ├── BrandCard.jsx          # 品牌卡片组件
│   ├── CarBrandGrid.jsx       # 品牌网格组件
│   └── PrintButton.jsx        # 打印按钮组件
├── App.jsx                    # 主应用组件
├── index.jsx                  # 应用入口
└── index.css                  # 样式文件
public/
└── images/                    # 汽车标志图片
```

## 特别说明

本项目使用的汽车标志均为真实的官方标志，特别是丰田、本田、现代、起亚等品牌使用的是汽车上实际使用的标志图案。
