# Готовая конфигурация Webpack + React + Babel Loader, для использования в своих проектах

---
### Скрипты:

- `npm start` - запуск webpack с dev-server
- `npm run start:dev` - запуск development сборки
- `npm run start:prod` - запуск production сборки
- `npm run start:mobile` - запуск production сборки c глобальной переменной, которую можно использовать для мобильной сборки
- `npm run start:desktop` - запуск production сборки c глобальной переменной, которую можно использовать для десктопной сборки (по умолчанию)

---

### Данная конфигурация включает в себя:

1. Опции конфигурации. 
2. Переменные окружения.
3. Production и Development сборка.
4. Webpack development server.
5. React, JSX + Typescript (ts-loader или babel-loader).
6. Препроцессоры scss и изоляция стилей с css modules.
7. Поддержка абсолютных путей из папки src с alias '@'. 
8. Webpack bundle analyser для production сборки.
9. Поддержка работы с ассетами (картинки, иконки, шрифты).
10. Глобальные переменные сборки.
11. Выполнение сборки и проверки типов в разных процессах.
12. Hot module replacement для React.
13. Работа с favicon.
14. Поддержка copy plugin.

---
### Дополнительная информация:

Изменить опции конфигурации по умолчанию можно в файле [webpack.config.ts](webpack.config.ts)

Данная конфигурация является базовой и ее расширение (добавление лоадеров, плагинов) возможно засчет изменения соответсвующих функций в папке [config](config/build) в корне сборки.