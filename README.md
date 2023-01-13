Нужно создать приложение для изучения иностранных слов по карточкам. 

## week 26
- создать новый проект и набросать структуру приложения (список компонент - jsx файлы).<img src="public\assets\check.png" width="20rem"/>
## week 27
- Подключите стили для всех созданных элементов <img src="public\assets\check.png" width="20rem"/>
- Выделите основные цвета, шрифты и размеры в отдельный файл <img src="public\assets\check.png" width="20rem"/>
- Добавьте анимацию наведения, фокуса и нажатия на все элементы взаимодействия с пользователем (кнопки, формы и т.д.) <img src="public\assets\check.png" width="20rem"/>
- Сделайте список слов в виде таблицы. Реализуйте условный рендеринг для полей таблицы: должны отображаться либо поля для чтения и с кнопками редактировать/удалить, либо поля ввода с кнопками сохранить/отмена.<img src="public\assets\check.png" width="20rem"/>

## week 28
- Карточке слова добавьте состояние, которое будет отвечать за показывание/скрытие перевода. По умолчанию перевод всегда скрыт.  При нажатии на кнопку "Показать перевод", появляется перевод слова, а кнопка исчезает. Реализуйте этот функционал с помощью внутреннего состояния элемента и условного рендеринга.<img src="public\assets\check.png" width="20rem"/>
- В таблицах добавьте состояние для открытия/закрытия режима редактирования.<img src="public\assets\check.png" width="20rem"/>
- У всех редактируемых полей изначальное состояние должно получаться из `props`. Добавьте обработчики событий изменения этих полей.
- Добавьте обработчик события кнопки "отмена редактирования". При нажатии этой кнопки, редактирование закрывается, все поля должны быть возвращены к изначальному значению.<img src="public\assets\check.png" width="20rem"/>

## week29
- Реализовать галерею с карточками <img src="public\assets\check.png" width="20rem"/>

## week 33
- Добавить в приложение компонент меню с логотипом (любым), и ссылками на Главную страницу и Страницу с карточками. Меню должно быть стилизовано и всегда находиться в верхней части приложения (не уезжать при прокрутке). При клике на логотип приложение должно возвращаться на главную страницу <img src="public\assets\check.png" width="20rem"/>
- На главной странице должна располагаться наша созданная таблица слов <img src="public\assets\check.png" width="20rem"/>
- На странице с карточками (*/game*) должен быть компонент с нашим тренажером для изучения слов по карточкам <img src="public\assets\check.png" width="20rem"/>
- Создайте страницу 404. <img src="public\assets\check.png" width="20rem"/>
## Что должно быть в результате (через 8 недель):

- Список всех существующих слов. У каждого слова есть основное значение, транскрипция, перевод, тема. У каждого слова должна быть возможность его удаления и редактирования. Также должна быть возможность добавления слов.
- Карточка слова, у которой есть основное значение, транскрипция, перевод, тема.
- Главная страница, где отображаются списки слов и карточек.
