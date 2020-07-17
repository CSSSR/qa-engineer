Страница с инфографикой о вакансии
=======================

# Задание

Специально для вас мы подготовили [страницу](https://csssr.github.io/qa-engineer/) с информацией о вакансии. Разработчик верстал её в спешке и был невнимателен. 

Составьте три списка правок для нашего разработчика:
- соответствие верстки исходному макету и техническому заданию (техническое задание вы найдете ниже — оно тоже не идеально, как и в реальном мире :));
- кроссбраузерность;
- юзабилити: что на ваш взгляд стоит сделать, чтобы улучшить впечатление пользователей от этой страницы.

Оформите репорты в понятном формате. Обязательно укажите название репорта, фактический и ожидаемый результаты, приложите скрины. Все остальное — опционально. 

\* Для тех, кто хочет выделиться из толпы, предлагаем дополнительный челлендж. Напишите автоматический тест, который сможет найти любой из обнаруженных вами дефектов. Выложите исходники и инструкцию по запуску в общий доступ (желательно на GitHub) и приложите к вашему решению. 

## Техническое задание для разработчика

### Макет
Все необходимые макеты находятся по [ссылке](https://www.figma.com/file/CtJDsg3EvAYWFfY7bEMeKZ/QA-%D1%82%D0%B5%D1%81%D1%82).

### Браузеры
Internet Explorer 9, Google Chrome 81, Safari 10.1, iOS 10 (Safari), Android 8 (Chrome)

### Ширина страницы
Контентная часть фиксированная при ширине в 1000px, при ширине окна браузера более 1024px тянется синий фон.

### Описание
Блок «Распределение обязанностей» имеет четыре состояния. При переключении вкладок блок с черной рамкой должен исчезать и появляться из прозрачности. Столбики с процентами не должны исчезать. При переключении столбики с процентами должны заполняться красным паттерном снизу вверх.
Ссылки в футере должны быть кликабельными и работать. Ховеры всех ссылок должны быть красными. Ссылка «Софт для быстрого создания скриншотов» должна вести сюда [https://getsharex.com/](https://getsharex.com/) (открывается в новом окне).
При сабмите кнопки в форме обратной связи происходит отправка POST запроса на сервер.
