#!/bin/bash
# Скрипт для деплоя статического сайта на GitHub Pages

# Создаем временную папку для деплоя
mkdir -p .deploy
rm -rf .deploy/*

# Копируем только нужные файлы
cp index.html .deploy/
if [ -f favicon.ico ]; then
  cp favicon.ico .deploy/
fi
if [ -d css ]; then
  cp -r css .deploy/
fi
if [ -d js ]; then
  cp -r js .deploy/
fi

# Деплоим
gh-pages -d .deploy

# Удаляем временную папку
rm -rf .deploy

echo "Деплой завершен!"
