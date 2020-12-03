Обект тестирования: https://radar.wifi.ru/
Установка окружения: npm install
Запуск тестов: npm run test

!PS. При отправке запроса на логин с корректыми данными, браузер блокирует запрос и возвращает ошибку:
```
Mixed Content: The page at 'https://radar.wifi.ru/__/#/tests/integration/examples/login.spec.js' 
was loaded over HTTPS, but requested an insecure form action 'http://radar.wifi.ru/main-page'. 
This request has been blocked; the content must be served over HTTPS.
```
Временным решением была установка "chromeWebSecurity": false в конфиге cypress для браузера Chrome - это позволило успешо залогиниться и получить данные.
