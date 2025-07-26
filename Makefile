# App Showcase Makefile
# 个人应用展示网站的构建和部署脚本

.PHONY: help install dev build preview clean deploy lint audit

# 默认目标
help:
	@echo "=== App Showcase 可用命令 ==="
	@echo "make install    - 安装项目依赖"
	@echo "make dev        - 启动开发服务器"
	@echo "make build      - 构建生产版本"
	@echo "make preview    - 预览生产构建"
	@echo "make deploy     - 部署到Vercel"
	@echo "make lint       - 代码检查"
	@echo "make audit      - 安全漏洞检查"
	@echo "make clean      - 清理构建文件"

# 安装依赖
install:
	@echo "📦 安装项目依赖..."
	npm install

# 启动开发服务器
dev:
	@echo "🚀 启动开发服务器..."
	npm run dev

# 构建生产版本
build:
	@echo "🔨 构建生产版本..."
	npm run build

# 预览生产构建
preview: build
	@echo "👀 预览生产构建..."
	npm run preview

# 部署到Vercel
deploy: build
	@echo "🚀 部署到Vercel..."
	@if command -v vercel >/dev/null 2>&1; then \
		vercel --prod; \
	else \
		echo "❌ Vercel CLI未安装，请先运行: npm i -g vercel"; \
		exit 1; \
	fi

# 代码检查
lint:
	@echo "🔍 运行代码检查..."
	@if [ -f "package.json" ] && grep -q "eslint" package.json; then \
		npm run lint; \
	else \
		echo "✅ 未配置ESLint，跳过代码检查"; \
	fi

# 安全漏洞检查
audit:
	@echo "🔒 检查安全漏洞..."
	npm audit

# 清理构建文件
clean:
	@echo "🧹 清理构建文件..."
	rm -rf dist/
	rm -rf node_modules/.astro/
	@echo "✅ 清理完成"

# 完整的CI/CD流程
ci: install audit build
	@echo "✅ CI/CD流程完成"

# 本地开发流程
setup: install
	@echo "✅ 开发环境设置完成，运行 'make dev' 启动开发服务器"