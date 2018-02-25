# В качестве базового образа используем образ с Node.js 8
FROM node:8

# Копируем файлы необходимы для работы приложения
COPY app /app
COPY config /config

# Устанавливаем зависимости
COPY package.json /
RUN yarn install --production

# В переменную окружения какой порт должен слушать веб-сервер Express
# Затем в настройках config/production.js мы это используем
ENV PORT 80

ENV NODE_ENV=production

# Сообщаем, что контейнер готов принимать запросы по указанному порту
EXPOSE 80

# Команда для запуска процесса в контейнере
CMD node app/index.js
