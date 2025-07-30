---
title: "Janitor"
description: "一款专为开发者设计的智能依赖清理工具。通过清理未使用的包和缓存依赖，保持你的开发环境整洁有序，支持多种编程语言。"
category: "cli"
tech: ["Go", "CLI", "依赖管理", "自动化"]
status: "published"
publishDate: 2024-01-30
lastUpdated: 2025-07-29
featured: true
github: "https://github.com/andy-zhangtao/Janitor"
website: ""
appStore: ""
playStore: ""
downloadUrl: "https://github.com/andy-zhangtao/Janitor/releases/tag/v1.0"
releaseVersion: "v1.0"
features:
  - title: "智能依赖分析"
    description: "深度扫描项目代码，精确识别未使用的依赖包，避免误删重要依赖"
    icon: "🧠"
  - title: "多语言生态支持"
    description: "支持 Node.js、Python、Go、Rust 等主流编程语言的依赖管理系统"
    icon: "🌍"
  - title: "安全清理机制"
    description: "内置白名单保护和回退机制，确保重要文件不会被误删"
    icon: "🛡️"
  - title: "缓存空间释放"
    description: "智能识别各种构建工具和包管理器的缓存，一键释放磁盘空间"
    icon: "💾"
  - title: "可视化分析报告"
    description: "生成详细的空间占用报告，让你清楚了解每个目录的存储使用情况"
    icon: "📊"
  - title: "批量项目处理"
    description: "支持同时处理多个项目目录，适合管理大量开发项目的场景"
    icon: "🔄"
screenshots: []
icon: ""
---

# Janitor - 智能依赖清理工具

一款专为开发者设计的命令行工具，通过智能分析自动清理项目中的未使用依赖和缓存文件，帮助释放宝贵的磁盘空间。

## v1.0 版本特性

### 核心功能支持
- **Node.js 生态**：清理 node_modules、npm/yarn 缓存
- **Python 环境**：清理 __pycache__、pip 缓存、conda 环境
- **Go 项目**：清理模块缓存和构建产物
- **通用清理**：临时文件、日志文件、IDE 缓存

### 安全保障
采用 Go 语言开发，支持跨平台运行。内置白名单保护机制和操作确认流程，确保重要文件不会被误删。支持操作回退和自定义排除规则。

使用 Janitor 定期清理开发环境，让你的存储空间和项目构建性能都得到显著提升。