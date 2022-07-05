const vmpData = () => {
  const arrListVMP = [
    {
        name: "Авиационная и космическая медицина",
        value: ["Общая врачебная практика (семейная медицина)", "Терапия"]
    },
 {
        name: "Акушерство и гинекология",
        value: ["Акушерство и гинекология"]
    },
    {
        name: "Аллергология и иммунология",
        value: ["Общая врачебная практика (семейная медицина)", "Педиатрия", "Терапия"]
    },
    {
        name: "Анестезиология-реаниматология",
        value: ["Неонатология", "Нефрология"]
    },
    {
        name: "Бактериология",
        value: ["Вирусология", "Инфекционные болезни", "Клиническая лабораторная диагностика", "Лабораторная микология", "Эпидемиология"]
    },
    {
        name: "Вирусология",
        value: ["Бактериология", "Инфекционные болезни", "Клиническая лабораторная диагностика", "Эпидемиология"]
    },
    {
        name: "Водолазная медицина",
        value: ["Общая врачебная практика (семейная медицина)", "Терапия"]
    },
    {
        name: "Гастроэнтерология",
        value: ["Общая врачебная практика (семейная медицина)", "Педиатрия", "Терапия"]
    },
    {
        name: "Гематология",
        value: ["Общая врачебная практика (семейная медицина)", "Педиатрия", "Терапия"]
    },
{
        name: "Генетика",
        value: ["Генетика"]
    },
    {
        name: "Гериатрия",
        value: ["Общая врачебная практика (семейная медицина)", "Терапия"]
    },
    {
        name: "Гигиена детей и подростков",
        value: ["Общая гигиена"]
    },
    {
        name: "Гигиена питания",
        value: ["Общая гигиена"]
    },
    {
        name: "Гигиена труда",
        value: ["Общая гигиена"]
    },
    {
        name: "Гигиеническое воспитание",
        value: ["Общая гигиена"]
    },
    {
        name: "Дезинфектология",
        value: ["Эпидемиология"]
    },
 {
        name: "Дерматовенерология",
        value: ["Дерматовенерология"]
    },
    {
        name: "Детская кардиология",
        value: ["Кардиология", "Педиатрия"]
    },
    {
        name: "Детская онкология",
        value: ["Гематология", "Детская хирургия", "Онкология", "Педиатрия"]
    },
    {
        name: "Детская онкология-гематология",
        value: ["Гематология", "Детская хирургия", "Онкология", "Педиатрия"]
    },
    {
        name: "Детская урология-андрология",
        value: ["Детская хирургия", "Урология"]
    },
  {
        name: "Детская хирургия",
        value: ["Детская хирургия"]
    },
    {
        name: "Детская эндокринология",
        value: ["Педиатрия", "Эндокринология"]
    },
    {
        name: "Диетология",
        value: ["Общая врачебная практика (семейная медицина)", "Педиатрия", "Терапия", "Гастроэнтерология", "Эндокринология"]
    },
    {
        name: "Инфекционные болезни",
        value: ["Общая врачебная практика (семейная медицина)", "Педиатрия", "Терапия", "Фтизиатрия"]
    },
    {
        name: "Кардиология",
        value: ["Общая врачебная практика (семейная медицина)", "Терапия"]
    },
  {
        name: "Клиническая лабораторная диагностика",
        value: ["Клиническая медицина", "Науки о здоровье и профилактическая медицина"]
    },
    {
        name: "Клиническая фармакология",
        value: ["Общая врачебная практика (семейная медицина)", "Педиатрия", "Терапия"]
    },
    {
        name: "Колопроктология",
        value: ["Детская хирургия", "Хирургия"]
    },
    {
        name: "Коммунальная гигиена",
        value: ["Общая гигиена"]
    },
    {
        name: "Косметология",
        value: ["Дерматовенерология"]
    },
    {
        name: "Лабораторная генетика",
        value: ["Генетика"]
    },
{
        name: "Лечебное дело",
        value: ["Лечебное дело"]
    },
    {
        name: "Лечебная физкультура и спортивная медицина",
        value: ["Авиационная и космическая медицина", "Акушерство и гинекология", "Анестезиология-реаниматология", "Детская кардиология", "Детская онкология", "Детская урология-андрология", "Детская хирургия", "Детская эндокринология", "Гастроэнтерология", "Гематология", "Гериатрия", "Кардиология", "Колопроктология", "Мануальная терапия", "Нефрология", "Неврология", "Неонатология", "Нейрохирургия", "Общая врачебная практика (семейная медицина)", "Онкология", "Педиатрия", "Пластическая хирургия", "Профпатология", "Пульмонология", "Ревматология", "Рефлексотерапия", "Сердечно-сосудистая хирургия", "Скорая медицинская помощь", "Терапия", "Торакальная хирургия", "Травматология и ортопедия", "Хирургия", "Детская онкология", "Урология", "Физиотерапия", "Фтизиатрия", "Хирургия", "Челюстно-лицевая хирургия", "Эндокринология"]
    },
    {
        name: "Мануальная терапия",
        value: ["Лечебная физкультура и спортивная медицина", "Неврология", "Педиатрия", "Ревматология", "Рефлексотерапия", "Терапия", "Травматология и ортопедия", "Челюстно-лицевая хирургия"]
    },
{
        name: "Медико-профилактическое дело",
        value: ["Медико-профилактическое дело"]
    },
    {
        name: "Медико-социальная экспертиза",
        value: ["Детская хирургия", "Неврология", "Общая врачебная практика (семейная медицина)", "Онкология", "Оториноларингология", "Офтальмология", "Педиатрия", "Психиатрия", "Терапия", "Травматология и ортопедия", "Фтизиатрия", "Хирургия", "Эндокринология"]
    },
{
        name: "Медицинская биохимия",
        value: ["Медицинская биохимия"]
    },
{
        name: "Медицинская биофизика",
        value: ["Медицинская биофизика"]
    },
{
        name: "Медицинская кибернетика",
        value: ["Медицинская кибернетика"]
    },
    {
        name: "Медицинская микробиология",
        value: ["Клиническая медицина", "Науки о здоровье и профилактическая медицина"],
        subValue: ["Бактериология", "Вирусология", "Лабораторная микология", "Паразитология"],
    },
{
        name: "Неврология",
        value: ["Неврология"]
    },
{
        name: "Нейрохирургия",
        value: ["Нейрохирургия"]
    },
    {
        name: "Неонатология",
        value: ["Анестезиология-реаниматология", "Педиатрия"]
    },
    {
        name: "Нефрология",
        value: ["Анестезиология-реаниматология", "Детская хирургия", "Детская урология-андрология", "Общая врачебная практика (семейная медицина)", "Педиатрия", "Терапия", "Урология", "Хирургия"]
    },
    {
        name: "Общая врачебная практика (семейная медицина)",
        value: ["Педиатрия", "Терапия"]
    },
{
        name: "Общая гигиена",
        value: ["Общая гигиена"]
    },
    {
        name: "Онкология",
        value: ["Акушерство и гинекология", "Терапия", "Хирургия"]
    },
{
        name: "Организация здравоохранения и общественное здоровье",
        value: ["Клиническая медицина", "Науки о здоровье и профилактическая медицина"]
    },
{
        name: "Ортодонтия",
        value: ["Ортодонтия"]
    },
    {
        name: "Остеопатия",
        value: ["Акушерство и гинекология", "Аллергология и иммунология", "Анестезиология-реаниматология", "Гериатрия", "Гастроэнтерология", "Гематология", "Дерматовенерология", "Детская кардиология", "Детская онкология", "Детская урология-андрология", "Детская хирургия", "Детская эндокринология", "Диетология", "Инфекционные болезни", "Кардиология", "Косметология", "Лечебная физкультура и спортивная медицина", "Мануальная терапия", "Неврология", "Нейрохирургия", "Неонатология", "Нефрология", "Общая врачебная практика (семейная медицина)", "Онкология", "Оториноларингология", "Офтальмология", "Педиатрия", "Пластическая хирургия", "Профпатология", "Психиатрия", "Психиатрия-наркология", "Психотерапия", "Пульмонология", "Ревматология", "Рефлексотерапия", "Сердечно-сосудистая хирургия", "Скорая медицинская помощь", "Сексология", "Стоматология детская", "Стоматология общей практики", "Стоматология ортопедическая", "Стоматология терапевтическая", "Стоматология хирургическая", "Терапия", "Торакальная хирургия", "Травматология и ортопедия", "Трансфузиология", "Урология", "Челюстно-лицевая хирургия", "Эндокринология", "Эндоскопия", "Физиотерапия", "Физическая и реабилитационная медицина", "Фтизиатрия", "Функциональная диагностика", "Хирургия"]
    },
{
        name: "Оториноларингология",
        value: ["Оториноларингология"]
    },
{
        name: "Офтальмология",
        value: ["Офтальмология"]
    },
    {
        name: "Паразитология",
        value: ["Инфекционные болезни", "Эпидемиология"]
    },
    {
        name: "Патологическая анатомия",
        value: ["Детская онкология", "Детская урология-андрология", "Детская хирургия", "Колопроктология", "Нейрохирургия", "Онкология", "Пластическая хирургия", "Сердечно-сосудистая хирургия", "Судебно-медицинская экспертиза", "Торакальная хирургия", "Травматология и ортопедия", "Урология", "Хирургия", "Челюстно-лицевая хирургия"]
    },
    {
        name: "Педиатрия",
        value: ["Общая врачебная практика (семейная медицина)"]
    },
{
        name: "Пластическая хирургия",
        value: ["Пластическая хирургия"]
    },
    {
        name: "Профпатология",
        value: ["Общая врачебная практика (семейная медицина)", "Терапия"]
    },
{
        name: "Психиатрия",
        value: ["Психиатрия"]
    },
    {
        name: "Психиатрия-наркология",
        value: ["Психиатрия"]
    },
    {
        name: "Психотерапия",
        value: ["Психиатрия"]
    },
    {
        name: "Пульмонология",
        value: ["Общая врачебная практика (семейная медицина)", "Педиатрия", "Терапия", "Фтизиатрия"]
    },
    {
        name: "Радиология",
        value: ["Кардиология", "Неврология", "Онкология", "Рентгенология"]
    },
    {
        name: "Радиотерапия",
        value: ["Детская онкология", "Онкология"]
    },
    {
        name: "Радиационная гигиена",
        value: ["Общая гигиена"]
    },
    {
        name: "Ревматология",
        value: ["Общая врачебная практика (семейная медицина)", "Педиатрия", "Терапия"]
    },
    {
        name: "Рентгенология",
        value: ["Авиационная и космическая медицина", "Акушерство и гинекология", "Анестезиология-реаниматология", "Водолазная медицина", "Дерматовенерология", "Детская хирургия", "Детская онкология", "Детская урология-андрология", "Детская эндокринология", "Гастроэнтерология", "Гематология", "Гериатрия", "Инфекционные болезни", "Кардиология", "Колопроктология", "Лечебная физкультура и спортивная медицина", "Нефрология", "Неврология", "Неонатология", "Нейрохирургия", "Общая врачебная практика (семейная медицина)", "Онкология", "Оториноларингология", "Офтальмология", "Педиатрия", "Пластическая хирургия", "Профпатология", "Пульмонология", "Ревматология", "Рентгенэндоваскулярные диагностика и лечение", "Сердечно-сосудистая хирургия", "Скорая медицинская помощь", "Торакальная хирургия", "Терапия", "Травматология и ортопедия", "Урология", "Фтизиатрия", "Хирургия", "Челюстно-лицевая хирургия", "Эндокринология"]
    },
    {
        name: "Рентгенэндоваскулярные диагностика и лечение",
        value: ["Акушерство и гинекология", "Детская хирургия", "Детская онкология", "Кардиология", "Неврология", "Нейрохирургия", "Онкология", "Рентгенология", "Сердечно-сосудистая хирургия", "Хирургия", "Урология"]
    },
    {
        name: "Рефлексотерапия",
        value: ["Анестезиология-реаниматология", "Акушерство и гинекология", "Детская кардиология", "Детская онкология", "Детская урология-андрология", "Детская хирургия", "Детская эндокринология", "Гастроэнтерология", "Гематология", "Гериатрия", "Инфекционные болезни", "Кардиология", "Колопроктология", "Лечебная физкультура и спортивная медицина", "Мануальная терапия", "Неврология", "Нефрология", "Нейрохирургия", "Общая врачебная практика (семейная медицина)", "Онкология", "Оториноларингология", "Офтальмология", "Педиатрия", "Пластическая хирургия", "Профпатология", "Психиатрия", "Психиатрия-наркология", "Пульмонология", "Ревматология", "Сердечно-сосудистая хирургия", "Скорая медицинская помощь", "Торакальная хирургия", "Терапия", "Травматология и ортопедия", "Урология", "Физиотерапия", "Фтизиатрия", "Хирургия", "Челюстно-лицевая хирургия", "Эндокринология"]
    },
    {
        name: "Санитарно-гигиенические лабораторные исследования",
        value: ["Общая гигиена"]
    },
    {
        name: "Сексология",
        value: ["Психиатрия"]
    },
{
        name: "Сердечно-сосудистая хирургия",
        value: ["Сердечно-сосудистая хирургия"]
    },
{
        name: "Сестринское дело",
        value: ["Сестринское дело"]
    },
    {
        name: "Скорая медицинская помощь",
        value: ["Анестезиология-реаниматология", "Общая врачебная практика (семейная медицина)", "Терапия", "Педиатрия", "Хирургия"]
    },
{
        name: "Социальная гигиена и организация госсанэпидслужбы",
        value: ["Социальная гигиена и организация госсанэпидслужбы"]
    },
    {
        name: "Стоматология общей практики",
        value: ["Стоматология"]
    },
    {
        name: "Стоматология детская",
        value: ["Стоматология общей практики", "Стоматология"]
    },
    {
        name: "Стоматология ортопедическая",
        value: ["Стоматология общей практики", "Стоматология"]
    },
    {
        name: "Стоматология терапевтическая",
        value: ["Стоматология общей практики", "Стоматология"]
    },
    {
        name: "Стоматология хирургическая",
        value: ["Стоматология общей практики", "Стоматология"]
    },
    {
        name: "Судебно-медицинская экспертиза",
        value: ["Акушерство и гинекология", "Детская онкология", "Детская урология-андрология", "Детская хирургия", "Колопроктология", "Нейрохирургия", "Онкология", "Оториноларингология", "Пластическая хирургия", "Патологическая анатомия", "Сердечно-сосудистая хирургия", "Торакальная хирургия", "Травматология и ортопедия", "Урология", "Хирургия", "Челюстно-лицевая хирургия"]
    },
    {
        name: "Судебно-психиатрическая экспертиза",
        value: ["Психиатрия"]
    },
    {
        name: "Сурдология-оториноларингология",
        value: ["Оториноларингология"]
    },
    {
        name: "Терапия",
        value: ["Общая врачебная практика (семейная медицина)"]
    },
    {
        name: "Токсикология",
        value: ["Анестезиология-реаниматология", "Педиатрия", "Терапия"]
    },
{
        name: "Торакальная хирургия",
        value: ["Торакальная хирургия"]
    },
{
        name: "Травматология и ортопедия",
        value: ["Травматология и ортопедия"]
    },
    {
        name: "Трансфузиология",
        value: ["Акушерство и гинекология", "Анестезиология-реаниматология", "Детская онкология", "Детская хирургия", "Гематология", "Общая врачебная практика (семейная медицина)", "Онкология", "Педиатрия", "Терапия", "Хирургия"]
    },
    {
        name: "Ультразвуковая диагностика",
        value: ["Авиационная и космическая медицина", "Акушерство и гинекология", "Анестезиология-реаниматология", "Водолазная медицина", "Дерматовенерология", "Детская хирургия", "Детская онкология", "Детская урология-андрология", "Детская эндокринология", "Гастроэнтерология", "Гематология", "Гериатрия", "Инфекционные болезни", "Рентгенология", "Кардиология", "Колопроктология", "Нефрология", "Неврология", "Неонатология", "Нейрохирургия", "Общая врачебная практика (семейная медицина)", "Онкология", "Оториноларингология", "Офтальмология", "Педиатрия", "Пластическая хирургия", "Профпатология", "Пульмонология", "Ревматология", "Рентгенэндоваскулярные диагностика и лечение", "Сердечно-сосудистая хирургия", "Скорая медицинская помощь", "Торакальная хирургия", "Терапия", "Травматология и ортопедия", "Урология", "Фтизиатрия", "Хирургия", "Челюстно-лицевая хирургия", "Эндокринология"]
    },
{
        name: "Управление и экономика фармации",
        value: ["Управление и экономика фармации"]
    },
{
        name: "Управление сестринской деятельностью",
        value: ["Управление сестринской деятельностью"]
    },
{
        name: "Урология",
        value: ["Урология"]
    },
{
        name: "Фармацевтическая технология",
        value: ["Фармацевтическая технология"]
    },
{
        name: "Фармацевтическая химия и фармакогнозия",
        value: ["Фармацевтическая химия и фармакогнозия"]
    },
{
        name: "Фармация",
        value: ["Фармация"]
    },
    {
        name: "Физиотерапия",
        value: ["Авиационная и космическая медицина", "Акушерство и гинекология", "Анестезиология-реаниматология", "Водолазная медицина", "Гематология", "Гериатрия", "Дерматовенерология", "Детская кардиология", "Детская онкология", "Детская урология-андрология", "Детская хирургия", "Детская эндокринология", "Гастроэнтерология", "Инфекционные болезни", "Кардиология", "Колопроктология", "Лечебная физкультура и спортивная медицина", "Мануальная терапия", "Нефрология", "Неврология", "Неонатология", "Нейрохирургия", "Общая врачебная практика (семейная медицина)", "Онкология", "Ортодонтия", "Оториноларингология", "Офтальмология", "Педиатрия", "Пластическая хирургия", "Профпатология", "Психиатрия", "Пульмонология", "Ревматология", "Рентгенэндоваскулярные диагностика и лечение", "Рефлексотерапия", "Сердечно-сосудистая хирургия", "Скорая медицинская помощь", "Стоматология общей практики", "Стоматология хирургическая", "Стоматология терапевтическая", "Стоматология детская", "Стоматология детская", "Стоматология ортопедическая", "Торакальная хирургия", "Терапия", "Травматология и ортопедия", "Урология", "Фтизиатрия", "Хирургия", "Челюстно-лицевая хирургия", "Эндокринология"]
    },
    {
        name: "Физическая и реабилитационная медицина",
        value: [" Акушерство и гинекология",  "Анестезиология-реаниматология", "Гастроэнтерология", "Гематология", "Гериатрия", "Гериатрия", "Детская кардиология", "Детская онкология", "Детская хирургия", "Детская урология-андрология", "Детская эндокринология", "Диетология", "Кардиология", "Колопроктология", "Лечебная физкультура и спортивная медицина", "Мануальная терапия", "Неврология", "Нейрохирургия", "Неонатология", "Нефрология", "Общая врачебная практика (семейная медицина)", "Онкология", "Остеопатия", "Оториноларингология", "Офтальмология", "Педиатрия", "Пластическая хирургия", "Профпатология", "Психиатрия", "Психотерапия", "Пульмонология", "Ревматология", "Рефлексотерапия", "Сердечно-сосудистая хирургия", "Торакальная хирургия", "Травматология и ортопедия", "Урология", "Физиотерапия", "Фтизиатрия", "Хирургия", "Челюстно-лицевая хирургия", "Эндокринология"]
    },
    {
        name: "Фтизиатрия",
        value: ["Инфекционные болезни", "Неврология", "Общая врачебная практика (семейная медицина)", "Педиатрия", "Пульмонология", "Терапия", "Торакальная хирургия", "Травматология и ортопедия", "Урология", "Хирургия"]
    },
    {
        name: "Функциональная диагностика",
        value: ["Авиационная и космическая медицина", "Акушерство и гинекология", "Анестезиология-реаниматология", "Водолазная медицина", "Дерматовенерология", "Детская кардиология", "Детская онкология", "Детская хирургия", "Детская урология-андрология", "Детская эндокринология", "Гастроэнтерология", "Гематология", "Гериатрия", "Инфекционные болезни", "Кардиология", "Колопроктология", "Лечебная физкультура и спортивная медицина", "Нефрология", "Неврология", "Неонатология", "Нейрохирургия", "Общая врачебная практика (семейная медицина)", "Онкология", "Ортодонтия", "Оториноларингология", "Офтальмология", "Педиатрия", "Пластическая хирургия", "Профпатология", "Пульмонология", "Ревматология", "Рентгенэндоваскулярные диагностика и лечение", "Сердечно-сосудистая хирургия", "Скорая медицинская помощь", "Стоматология общей практики", "Стоматология хирургическая", "Стоматология терапевтическая", "Стоматология детская", "Стоматология ортопедическая", "Терапия", "Торакальная хирургия", "Травматология и ортопедия", "Урология", "Фтизиатрия", "Хирургия", "Челюстно-лицевая хирургия", "Эндокринология"]
    },
{
        name: "Хирургия",
        value: ["Хирургия"]
    },
{
        name: "Челюстно-лицевая хирургия",
        value: ["Челюстно-лицевая хирургия"]
    },
{
        name: "Эндокринология",
        value: ["Эндокринология"]
    },
    {
        name: "Эндоскопия",
        value: ["Акушерство и гинекология", "Анестезиология-реаниматология", "Гастроэнтерология", "Детская онкология", "Детская хирургия", "Детская урология-андрология", "Колопроктология", "Нейрохирургия", "Онкология", "Оториноларингология", "Общая врачебная практика (семейная медицина)", "Педиатрия", "Пульмонология", "Рентгенэндоваскулярные диагностика и лечение", "Сердечно-сосудистая хирургия", "Терапия", "Торакальная хирургия", "Травматология и ортопедия", "Урология", "Хирургия", "Челюстно-лицевая хирургия"]
    },
{
        name: "Эпидемиология",
        value: ["Эпидемиология"]
    }
];

const vmpUrl = [{
    "name": "Акушерство и гинекология",
    "url": "/training-programs/for-doctors/obstetrics-and-gynecology/refresher-courses-in-the-field-of-gynecology-and-obstetrics/"
}, {
    "name": "Анестезиология и реаниматология",
    "url": "/training-programs/for-doctors/anesthesiology-reanimatology/professional-courses-in-the-direction-of-anesthesiology-and-reanimatology-/"
}, {
    "name": "Трансфузиология",
    "url": "/training-programs/for-doctors/transfusiology/kursy-povysheniya-kvalifikatsii-po-napravleniyu-transfuziologiya/"
}, {
    "name": "Трансфузиология",
    "url": "/training-programs/for-doctors/transfusiology/transfuziologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Гематология",
    "url": "/training-programs/for-doctors/hematology/kursy-professionalnoy-perepodgotovki-po-napravleniyu-gematologiya/"
}, {
    "name": "Детская эндокринология",
    "url": "/training-programs/for-doctors/pediatric-endocrinology/a-refresher-course-in-the-direction-of-pediatric-endocrinology/"
}, {
    "name": "Детская эндокринология",
    "url": "/training-programs/for-doctors/pediatric-endocrinology/detskaya-endokrinologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Диетология",
    "url": "/training-programs/for-doctors/dietology/dietologija-povyshenie-kvalifikatsii/"
}, {
    "name": "Диетология",
    "url": "/training-programs/for-doctors/dietology/dietologiya-professionalnaya-perepodgotovka-dlya-vrachey/"
}, {
    "name": "Кардиология",
    "url": "/training-programs/for-doctors/cardiology/professional-courses-in-the-fields-of-cardiology/"
}, {
    "name": "Кардиология",
    "url": "/training-programs/for-doctors/cardiology/a-refresher-course-in-the-direction-of-cardiology/"
}, {
    "name": "Лечебная физкультура и спортивная медицина",
    "url": "/training-programs/for-doctors/physiotherapy-and-sports/course-of-professional-retraining-in-a-direction-physiotherapy-exercises-and-sports-medicine/"
}, {
    "name": "Лечебная физкультура и спортивная медицина",
    "url": "/training-programs/for-doctors/physiotherapy-and-sports/lechebnaya-fizkultura-i-sportivnaya-meditsina/"
}, {
    "name": "Функциональная диагностика",
    "url": "/training-programs/for-doctors/functional-diagnostics/professional-courses-in-the-direction-of-functional-diagnostics/"
}, {
    "name": "Функциональная диагностика",
    "url": "/training-programs/for-doctors/functional-diagnostics/kursy-povysheniya-kvalifikatsii-po-napravleniyu-funktsionalnaya-diagnostika/"
}, {
    "name": "Эндокринология",
    "url": "/training-programs/for-doctors/endocrinology/kursy-povysheniya-kvalifikatsii-po-napravleniyu-endokrinologiya/"
}, {
    "name": "Детская кардиология",
    "url": "/training-programs/for-doctors/pediatric-cardiology/detskaya-kardiologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Неонатология",
    "url": "/training-programs/for-doctors/neonatology/kurs-povysheniya-kvalifikatsii-po-napravleniyu-neonatologiya/"
}, {
    "name": "Неонатология",
    "url": "/training-programs/for-doctors/neonatology/neonatologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Педиатрия",
    "url": "/training-programs/for-doctors/pediatrics/professional-courses-in-the-field-of-pediatrics/"
}, {
    "name": "Педиатрия",
    "url": "/training-programs/for-doctors/pediatrics/kursy-povysheniya-kvalifikatsii-vrachey-pediatrov-po-napravleniyu-pediatriya/"
}, {
    "name": "Клиническая лабораторная диагностика",
    "url": "/training-programs/for-doctors/clinical-laboratory-diagnostics/course-of-professional-retraining-in-the-field-of-clinical-laboratory-diagnostics/"
}, {
    "name": "Клиническая лабораторная диагностика",
    "url": "/training-programs/for-doctors/clinical-laboratory-diagnostics/klinicheskaya-laboratornaya-diagnostika-povyshenie-kvalifikatsii/"
}, {
    "name": "Лабораторная генетика",
    "url": "/training-programs/for-doctors/laboratornaya-genetika-obuchenie/professional-courses-in-the-field-of-laboratory-genetics/"
}, {
    "name": "Лабораторная генетика",
    "url": "/training-programs/for-doctors/laboratornaya-genetika-obuchenie/laboratornaya-genetika-povyshenie-kuvalifikatsii/"
}, {
    "name": "Рентгенология",
    "url": "/training-programs/for-doctors/rentgenologiya/rentgenologiya-pp/"
}, {
    "name": "Рентгенология",
    "url": "/training-programs/for-doctors/rentgenologiya/rentgenologiya-pk/"
}, {
    "name": "Нейрохирургия",
    "url": "/training-programs/for-doctors/neurosurgery/kurs-povysheniya-kvalifikatsii-po-napravleniyu-neyrokhirurgiya/"
}, {
    "name": "Неврология",
    "url": "/training-programs/for-doctors/neuroscience/kursy-povysheniya-kvalifikatsii-po-napravleniyu-nevrologiya/"
}, {
    "name": "Рентгенэндоваскулярная диагностика и лечение",
    "url": "/training-programs/for-doctors/endovascular-diagnosis/kursy-povysheniya-kvalifikatsii-po-napravleniyu-rentgenendovaskulyarnaya-diagnostika-i-lechenie/"
}, {
    "name": "Рентгенэндоваскулярные диагностика и лечение",
    "url": "/training-programs/for-doctors/endovascular-diagnosis/rentgenendovaskulyarnye-diagnostika-i-lechenie-professionalnaya-perepodgotovka/"
}, {
    "name": "Сердечно",
    "url": "/training-programs/for-doctors/cardiovascular-surgery/kurs-povysheniya-kvalifikatsii-po-napravleniyu-serdechno-sosudistaya-khirurgiya/"
}, {
    "name": "Хирургия",
    "url": "/training-programs/for-doctors/surgery/kursy-povysheniya-kvalifikatsii-po-napravleniyu-khirurgiya/"
}, {
    "name": "Патологическая анатомия",
    "url": "/training-programs/for-doctors/pathological-anatomy/kursy-povysheniya-kvalifikatsii-po-napravleniyu-patologicheskaya-anatomiya/"
}, {
    "name": "Патологическая анатомия",
    "url": "/training-programs/for-doctors/pathological-anatomy/patologicheskaya-anatomiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Ультразвуковая диагностика",
    "url": "/training-programs/for-doctors/ultrasound-diagnosis/course-of-professional-retraining-for-doctors-in-the-direction-of-ultrasonic-diagnostics/"
}, {
    "name": "Ультразвуковая диагностика",
    "url": "/training-programs/for-doctors/ultrasound-diagnosis/the-refresher-course-for-doctors-in-the-direction-of-ultrasonic-diagnostics/"
}, {
    "name": "Организация здравоохранения и общественное здоровье",
    "url": "/training-programs/for-doctors/health-organization-and-public-health/kursy-professionalnoy-perepodgotovki-po-napravleniyu-organizatsiya-zdravookhraneniya/"
}, {
    "name": "Организация здравоохранения и общественное здоровье",
    "url": "/training-programs/for-doctors/health-organization-and-public-health/kursy-povysheniya-kvalifikatsii-po-napravleniyu-organizatsiya-zdravookhraneniya/"
}, {
    "name": "Организация здравоохранения для руководителей лечебно",
    "url": "/training-programs/for-doctors/health-organization-and-public-health/organizatsiya-zdravookhraneniya-dlya-rukovoditeley-lechebno-profilakticheskikh-uchrezhdeniy/"
}, {
    "name": "Организация здравоохранения для практических врачей",
    "url": "/training-programs/for-doctors/health-organization-and-public-health/povyshenie-kvalifikatsii-organizatsiya-zdravookhraneniya-dlya-prakticheskikh-vrachey/"
}, {
    "name": "Маркировка лекарственных препаратов. Как войти в систему маркировки",
    "url": "/training-programs/for-doctors/health-organization-and-public-health/povyshenie-kvalifikatsii-markirovka-lekarstvennykh-preparatov-kak-voyti-v-sistemu-markirovki/"
}, {
    "name": "Управление рентабельностью медицинских услуг и анализ экономической эффективности подразделений медицинской организации",
    "url": "/training-programs/for-doctors/health-organization-and-public-health/upravlenie-rentabelnostyu-meditsinskikh-uslug-i-analiz-ekonomicheskoy-effektivnosti-podrazdeleniy/"
}, {
    "name": "Правовое регулирование и оформление трудовых отношений с медицинскими работниками",
    "url": "/training-programs/for-doctors/health-organization-and-public-health/pravovoe-regulirovanie-i-oformlenie-trudovykh-otnosheniy-s-meditsinskimi-rabotnikami/"
}, {
    "name": "Условия труда, мотивация и охрана труда медицинских работников",
    "url": "/training-programs/for-doctors/health-organization-and-public-health/povyshenie-kvalifikatsii-usloviya-truda-motivatsiya-i-okhrana-truda-meditsinskikh-rabotnikov/"
}, {
    "name": "Информационные технологии в медицинской организации. Приемы эффективной работы с табличными приложениями и презентациями",
    "url": "/training-programs/for-doctors/health-organization-and-public-health/informatsionnye-tekhnologii-priemy-effektivnoy-raboty-s-tablichnymi-prilozheniyami-i-prezentatsiyami/"
}, {
    "name": "Информационные технологии в медицинской организации, приемы эффективной работы с табличными приложениями",
    "url": "/training-programs/for-doctors/health-organization-and-public-health/informatsionnye-tekhnologii-i-priemy-effektivnoy-raboty-s-tablichnymi-prilozheniyami/"
}, {
    "name": "Информационные технологии в медицинской организации, приемы эффективной работы с презентациями",
    "url": "/training-programs/for-doctors/health-organization-and-public-health/informatsionnye-tekhnologii-i-priemy-effektivnoy-raboty-s-prezentatsiyami/"
}, {
    "name": "Физиотерапия",
    "url": "/training-programs/for-doctors/physical-therapy/course-of-professional-retraining-for-physicians-in-the-field-of-physiotherapy/"
}, {
    "name": "Физическая реабилитация",
    "url": "/training-programs/for-doctors/physical-therapy/refresher-course-physical-rehabilitation/"
}, {
    "name": "Физиотерапия",
    "url": "/training-programs/for-doctors/physical-therapy/kursy-povysheniya-kvalifikatsii-po-napravleniyu-fizioterapiya/"
}, {
    "name": "Психотерапия",
    "url": "/training-programs/for-doctors/psychotherapy/professional-courses-in-the-field-of-psychotherapy/"
}, {
    "name": "Психотерапия",
    "url": "/training-programs/for-doctors/psychotherapy/kursy-povysheniya-kvalifikatsii-po-napravleniyu-psikhoterapiya/"
}, {
    "name": "Рефлексотерапия",
    "url": "/training-programs/for-doctors/reflexology/professional-retraining-on-a-speciality-reflexotherapy/"
}, {
    "name": "Рефлексотерапия",
    "url": "/training-programs/for-doctors/reflexology/kursy-povysheniya-kvalifikatsii-po-napravleniyu-refleksoterapiya/"
}, {
    "name": "Аллергология и иммунология",
    "url": "/training-programs/for-doctors/allergy-immunology/professional-courses-in-the-direction-of-allergology-and-immunology/"
}, {
    "name": "Гериатрия",
    "url": "/training-programs/for-doctors/geriatrics/kursy-professionalnoy-perepodgotovki-po-napravleniyu-geriatriya-/"
}, {
    "name": "Гериатрия",
    "url": "/training-programs/for-doctors/geriatrics/kursy-povysheniya-kvalifikatsii-po-napravleniyu-geriatriya/"
}, {
    "name": "Бактериология",
    "url": "/training-programs/for-doctors/bacteriology/professional-courses-in-the-direction-of-bacteriology-/"
}, {
    "name": "Вирусология",
    "url": "/training-programs/for-doctors/virology/professional-courses-in-the-direction-of-virology/"
}, {
    "name": "Гастроэнтерология",
    "url": "/training-programs/for-doctors/gastroenterology/kursy-professionalnoy-perepodgotovki-po-napravleniyu-gastroenterologiya/"
}, {
    "name": "Гастроэнтерология",
    "url": "/training-programs/for-doctors/gastroenterology/kurs-povysheniya-kvalifikatsii-vrachey-gastroenterologov/"
}, {
    "name": "Дерматовенерология",
    "url": "/training-programs/for-doctors/dermatology-training/a-refresher-course-in-the-direction-of-dermatovenereology/"
}, {
    "name": "Детская хирургия",
    "url": "/training-programs/for-doctors/pediatric-surgery-training/a-refresher-course-in-the-direction-of-pediatric-surgery/"
}, {
    "name": "Клиническая фармакология",
    "url": "/training-programs/for-doctors/clinical-pharmacology/klinicheskaya-farmakologiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Клиническая фармакология",
    "url": "/training-programs/for-doctors/clinical-pharmacology/klinicheskaya-farmakologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Косметология",
    "url": "/training-programs/for-doctors/cosmetology-training/kosmetologiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Косметология",
    "url": "/training-programs/for-doctors/cosmetology-training/kosmetologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Инфекционные болезни",
    "url": "/training-programs/for-doctors/infectious-diseases-training/infektsionnye-bolezni-povyshenie-kvalifikatsii/"
}, {
    "name": "Инфекционные болезни",
    "url": "/training-programs/for-doctors/infectious-diseases-training/infektsionnye-bolezni-professionalnaya-perepodgotovka/"
}, {
    "name": "Нефрология",
    "url": "/training-programs/for-doctors/nephrology-learning/kurs-povysheniya-kvalifikatsii-po-napravleniyu-nefrologiya/"
}, {
    "name": "Нефрология",
    "url": "/training-programs/for-doctors/nephrology-learning/nefrologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Медико",
    "url": "/training-programs/for-doctors/medico-social-expertise-training/mediko-sotsialnaya-ekspertiza-povyshenie-kvalifikatsii/"
}, {
    "name": "Медико",
    "url": "/training-programs/for-doctors/medico-social-expertise-training/mediko-sotsialnaya-ekspertiza-professionalnaya-perepodgotovka/"
}, {
    "name": "Мануальная терапия",
    "url": "/training-programs/for-doctors/manual-therapy-training/kursy-professionalnoy-perepodgotovki-po-napravleniyu-manualnaya-terapiya/"
}, {
    "name": "Мануальная терапия",
    "url": "/training-programs/for-doctors/manual-therapy-training/manualnaya-terapiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Общая врачебная практика (семейная медицина)",
    "url": "/training-programs/for-doctors/general-medical-practice-family-medicine-training/kurs-povysheniya-kvalifikatsii-po-napravleniyu-obshchaya-vrachebnaya-praktika-semeynaya-meditsina/"
}, {
    "name": "Общая врачебная практика (семейная медицина)",
    "url": "/training-programs/for-doctors/general-medical-practice-family-medicine-training/obshchaya-vrachebnaya-praktika-semeynaya-meditsina/"
}, {
    "name": "Гигиена детей и подростков",
    "url": "/training-programs/for-doctors/hygiene-of-children-and-adolescents/kursy-povysheniya-kvalifikatsii-po-napravleniyu-gigiena-detey-i-podrostkov/"
}, {
    "name": "Гигиена детей и подростков",
    "url": "/training-programs/for-doctors/hygiene-of-children-and-adolescents/gigiena-detey-i-podrostkov-professionalnaya-perepodgotovka/"
}, {
    "name": "Дезинфектология",
    "url": "/training-programs/for-doctors/desinfectology-training/professional-retraining-in-a-direction-desinfectology/"
}, {
    "name": "Дезинфектология",
    "url": "/training-programs/for-doctors/desinfectology-training/kurs-povysheniya-kvalifikatsii-po-napravleniyu-dezinfektologiya/"
}, {
    "name": "Актуальные вопросы профилактики, диагностики и лечения коронавирусной инфекции COVID",
    "url": "/training-programs/for-doctors/desinfectology-training/aktualnye-voprosy-profilaktiki-diagnostiki-i-lecheniya-koronavirusnoy-infektsii-covid-19/"
}, {
    "name": "Онкология",
    "url": "/training-programs/for-doctors/oncology-training/professional-courses-in-the-field-of-oncology-/"
}, {
    "name": "Онкология",
    "url": "/training-programs/for-doctors/oncology-training/kurs-povysheniya-kvalifikatsii-po-napravleniyu-onkologiya/"
}, {
    "name": "Офтальмология",
    "url": "/training-programs/for-doctors/ophthalmology-training/kursy-povysheniya-kvalifikatsii-po-napravleniyu-oftalmologiya/"
}, {
    "name": "Оториноларингология",
    "url": "/training-programs/for-doctors/otorhinolaryngology/a-refresher-course-in-the-direction-of-otolaryngology/"
}, {
    "name": "Психиатрия",
    "url": "/training-programs/for-doctors/psychiatry-psychiatry-narcology/professional-courses-in-the-field-of-psychiatry-narcology/"
}, {
    "name": "Психиатрия",
    "url": "/training-programs/for-doctors/psychiatry-psychiatry-narcology/kursy-povysheniya-kvalifikatsii-po-napravleniyu-psikhiatriya/"
}, {
    "name": "Психиатрия",
    "url": "/training-programs/for-doctors/psychiatry-psychiatry-narcology/kursy-povysheniya-kvalifikatsii-po-napravleniyu-psikhiatriya-narkologiya/"
}, {
    "name": "Пульмонология",
    "url": "/training-programs/for-doctors/pulmonology-education/pulmonologiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Пульмонология",
    "url": "/training-programs/for-doctors/pulmonology-education/pulmonologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Радиотерапия",
    "url": "/training-programs/for-doctors/radiotherapy-training/radioterapiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Радиотерапия",
    "url": "/training-programs/for-doctors/radiotherapy-training/radioterapiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Ревматология",
    "url": "/training-programs/for-doctors/rheumatology-training-/revmatologiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Ревматология",
    "url": "/training-programs/for-doctors/rheumatology-training-/revmatologiya-professionalnaya-perepodgotovka-/"
}, {
    "name": "Фармацевтическая технология",
    "url": "/training-programs/for-doctors/pharmacy-training/a-refresher-course-in-the-direction-of-pharmacy/"
}, {
    "name": "Фитотерапия",
    "url": "/training-programs/for-doctors/pharmacy-training/kursy-povysheniya-kvalifikatsii-fitoterapiya/"
}, {
    "name": "Фармацевтическая химия и фармакогнозия",
    "url": "/training-programs/for-doctors/pharmacy-training/kurs-povysheniya-kvalifikatsii-po-napravleniyu-farmatsevticheskaya-khimiya-i-farmakognoziya/"
}, {
    "name": "Стоматология общей практики",
    "url": "/training-programs/for-doctors/dentistry-training/professionalnaya-perepodgotovka-na-kurse-stomatologiya-obshchey-praktiki/"
}, {
    "name": "Стоматология общей практики",
    "url": "/training-programs/for-doctors/dentistry-training/stomatologiya-obshchey-praktiki-povyshenie-kvalifikatsii/"
}, {
    "name": "Генетика",
    "url": "/training-programs/for-doctors/genetika/kurs-povysheniya-kvalifikatsii-dlya-vrachey-po-napravleniyu-genetika/"
}, {
    "name": "Гигиена питания",
    "url": "/training-programs/for-doctors/gigiena-pitaniya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-gigiena-pitaniya/"
}, {
    "name": "Гигиена питания",
    "url": "/training-programs/for-doctors/gigiena-pitaniya/gigiena-pitaniya-professionalnaya-perepodgotovka/"
}, {
    "name": "Гигиена труда",
    "url": "/training-programs/for-doctors/gigiena-truda/kurs-povysheniya-kvalifikatsii-po-napravleniyu-gigiena-truda/"
}, {
    "name": "Гигиена труда",
    "url": "/training-programs/for-doctors/gigiena-truda/gigiena-truda-professionalnaya-perepodgotovka/"
}, {
    "name": "Гигиеническое воспитание",
    "url": "/training-programs/for-doctors/gigienicheskoe-vospitanie/kurs-povysheniya-kvalifikatsii-po-napravleniyu-gigienicheskoe-vospitanie/"
}, {
    "name": "Гигиеническое воспитание",
    "url": "/training-programs/for-doctors/gigienicheskoe-vospitanie/gigienicheskoe-vospitanie-perepodgotovka/"
}, {
    "name": "Скорая медицинская помощь",
    "url": "/training-programs/for-doctors/skoraya-meditsinskaya-pomoshch/kurs-povysheniya-kvalifikatsii-po-napravleniyu-skoraya-meditsinskaya-pomoshch/"
}, {
    "name": "Скорая медицинская помощь",
    "url": "/training-programs/for-doctors/skoraya-meditsinskaya-pomoshch/skoraya-meditsinskaya-pomoshch-professionalnaya-perepodgotovka/"
}, {
    "name": "Судебно-медицинская экспертиза",
    "url": "/training-programs/for-doctors/sudebno-meditsinskaya-ekspertiza/sudebno-meditsinskaya-ekspertiza-perepodgotovka/"
}, {
    "name": "Общая гигиена",
    "url": "/training-programs/for-doctors/obshchaya-gigiena/kurs-povysheniya-kvalifikatsii-po-napravleniyu-obshchaya-gigiena/"
}, {
    "name": "Ортодонтия",
    "url": "/training-programs/for-doctors/ortodontiya/kurs-povysheniya-kvalifikatsii-po-napravleniyu-ortodontiya/"
}, {
    "name": "Остеопатия",
    "url": "/training-programs/for-doctors/osteopatiya/kurs-povysheniya-kvalifikatsii-po-napravleniyu-osteopatiya/"
}, {
    "name": "Остеопатия",
    "url": "/training-programs/for-doctors/osteopatiya/osteopatiya-professionalnaya-perepodgotovka-/"
}, {
    "name": "Паразитология",
    "url": "/training-programs/for-doctors/parazitologiya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-parazitologiya/"
}, {
    "name": "Паразитология",
    "url": "/training-programs/for-doctors/parazitologiya/parazitologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Пластическая хирургия",
    "url": "/training-programs/for-doctors/plasticheskaya-khirurgiya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-plasticheskaya-khirurgiya/"
}, {
    "name": "Профпатология",
    "url": "/training-programs/for-doctors/profpatologiya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-profpatologiya/"
}, {
    "name": "Профпатология",
    "url": "/training-programs/for-doctors/profpatologiya/profpatologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Фтизиатрия",
    "url": "/training-programs/for-doctors/ftiziatriya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-ftiziatriya/"
}, {
    "name": "Фтизиатрия",
    "url": "/training-programs/for-doctors/ftiziatriya/ftiziatriya-professionalnaya-perepodgotovka/"
}, {
    "name": "Челюстно",
    "url": "/training-programs/for-doctors/chelyustno-litsevaya-khirurgiya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-chelyustno-litsevaya-khirurgiya/"
}, {
    "name": "Физическая и реабилитационная медицина",
    "url": "/training-programs/for-doctors/fizicheskaya-i-reabilitatsionnaya-meditsina/fizicheskaya-i-reabilitatsionnaya-meditsina-professionalnaya-perepodgotovka/"
}, {
    "name": "Санитарно",
    "url": "/training-programs/for-doctors/sanitarno-gigienicheskie-laboratornye-issledovaniya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-sanitarno-gigienicheskie-laboratornye-issledovaniya/"
}, {
    "name": "Санитарно",
    "url": "/training-programs/for-doctors/sanitarno-gigienicheskie-laboratornye-issledovaniya/sanitarno-gigienicheskie-laboratornye-issledovaniya-/"
}, {
    "name": "Сексология",
    "url": "/training-programs/for-doctors/seksologiya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-seksologiya/"
}, {
    "name": "Сексология",
    "url": "/training-programs/for-doctors/seksologiya/seksologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Урология",
    "url": "/training-programs/for-doctors/urologiya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-urologiya/"
}, {
    "name": "Управление сестринской деятельностью",
    "url": "/training-programs/for-doctors/upravlenie-sestrinskoy-deyatelnostyu/kursy-povysheniya-kvalifikatsii-po-napravleniyu-upravlenie-sestrinskoy-deyatelnostyu/"
}, {
    "name": "Управление и экономика фармации",
    "url": "/training-programs/for-doctors/upravlenie-i-ekonomika-farmatsii/kursy-povysheniya-kvalifikatsii-po-napravleniyu-upravlenie-i-ekonomika-farmatsii/"
}, {
    "name": "Управление и экономика фармации",
    "url": "/training-programs/for-doctors/upravlenie-i-ekonomika-farmatsii/upravlenie-i-ekonomika-farmatsii-professionalnaya-perepodgotovka/"
}, {
    "name": "Травматология и ортопедия",
    "url": "/training-programs/for-doctors/travmatologiya-i-ortopediya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-travmatologiya-i-ortopediya/"
}, {
    "name": "Торакальная хирургия",
    "url": "/training-programs/for-doctors/torakalnaya-khirurgiya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-torakalnaya-khirurgiya/"
}, {
    "name": "Токсикология",
    "url": "/training-programs/for-doctors/toksikologiya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-toksikologiya/"
}, {
    "name": "Токсикология",
    "url": "/training-programs/for-doctors/toksikologiya/toksikologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Терапия",
    "url": "/training-programs/for-doctors/terapiya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-terapiya/"
}, {
    "name": "Терапия",
    "url": "/training-programs/for-doctors/terapiya/terapiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Стоматология детская",
    "url": "/training-programs/for-doctors/stomatologiya-detskaya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-stomatologiya-detskaya/"
}, {
    "name": "Стоматология детская",
    "url": "/training-programs/for-doctors/stomatologiya-detskaya/stomatologiya-detskaya-professionalnaya-perepodgotovka/"
}, {
    "name": "Стоматология ортопедическая",
    "url": "/training-programs/for-doctors/stomatologiya-ortopedicheskaya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-stomatologiya-ortopedicheskaya/"
}, {
    "name": "Стоматология ортопедическая",
    "url": "/training-programs/for-doctors/stomatologiya-ortopedicheskaya/stomatologiya-ortopedicheskaya-professionalnaya-perepodgotovka/"
}, {
    "name": "Эндоскопия",
    "url": "/training-programs/for-doctors/endoskopiya/kurs-povysheniya-kvalifikatsii-po-napravleniyu-endoskopiya/"
}, {
    "name": "Эндоскопия",
    "url": "/training-programs/for-doctors/endoskopiya/endoskopiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Эпидемиология",
    "url": "/training-programs/for-doctors/epidemiologiya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-epidemiologiya/"
}, {
    "name": "Стоматология терапевтическая",
    "url": "/training-programs/for-doctors/stomatologiya-terapevticheskaya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-stomatologiya-terapevticheskaya/"
}, {
    "name": "Стоматология терапевтическая",
    "url": "/training-programs/for-doctors/stomatologiya-terapevticheskaya/stomatologiya-terapevticheskaya-professionalnaya-perepodgotovka/"
}, {
    "name": "Стоматология хирургическая",
    "url": "/training-programs/for-doctors/stomatologiya-khirurgicheskaya/kursy-povysheniya-kvalifikatsii-po-napravleniyu-stomatologiya-khirurgicheskaya/"
}, {
    "name": "Стоматология хирургическая",
    "url": "/training-programs/for-doctors/stomatologiya-khirurgicheskaya/stomatologiya-khirurgicheskaya-professionalnaya-perepodgotovka/"
}, {
    "name": "Судебно",
    "url": "/training-programs/for-doctors/sudebno-meditsinskaya-ekspertiza/sudmed-ekspertiza-povyshenie-kvalifikatsii/"
}, {
    "name": "Судебно",
    "url": "/training-programs/for-doctors/sudebno-meditsinskaya-ekspertiza/sudebno-meditsinskaya-ekspertiza-perepodgotovka/"
}, {
    "name": "Судебно",
    "url": "/training-programs/for-doctors/sudebno-psikhiatricheskaya-ekspertiza/sudebno-psikhiatricheskaya-ekspertiza-povyshenie-kvalifikatsii/"
}, {
    "name": "Судебно",
    "url": "/training-programs/for-doctors/sudebno-psikhiatricheskaya-ekspertiza/sudebno-psikhiatricheskaya-ekspertiza-professionalnaya-perepodgotovka/"
}, {
    "name": "Колопроктология",
    "url": "/training-programs/for-doctors/koloproktologiya/koloproktologiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Колопроктология",
    "url": "/training-programs/for-doctors/koloproktologiya/koloproktologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Сурдология",
    "url": "/training-programs/for-doctors/surdologiya-otorinolaringologiya/surdologiya-otorinolaringologiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Сурдология",
    "url": "/training-programs/for-doctors/surdologiya-otorinolaringologiya/surdologiya-otorinolaringologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Социальная гигиена и организация госсанэпидслужбы",
    "url": "/training-programs/for-doctors/sotsialnaya-gigiena-i-organizatsiya-gossanepidsluzhby/sotsialnaya-gigiena-i-organizatsiya-gossanepidsluzhby-povyshenie-kvalifikatsii/"
}, {
    "name": "Социальная гигиена и организация госсанэпидслужбы",
    "url": "/training-programs/for-doctors/sotsialnaya-gigiena-i-organizatsiya-gossanepidsluzhby/sotsialnaya-gigiena-i-organizatsiya-gossanepidsluzhby-professionalnaya-perepodgotovka/"
}, {
    "name": "Детская онкология",
    "url": "/training-programs/for-doctors/detskaya-onkologiya/detskaya-onkologiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Детская онкология",
    "url": "/training-programs/for-doctors/detskaya-onkologiya/detskaya-onkologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Детская урология",
    "url": "/training-programs/for-doctors/detskaya-urologiya/detskaya-urologiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Детская урология",
    "url": "/training-programs/for-doctors/detskaya-urologiya/detskaya-urologiya-andrologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Радиационная гигиена",
    "url": "/training-programs/for-doctors/radiatsionnaya-gigiena/radiatsionnaya-gigiena-povyshenie-kvalifikatsii/"
}, {
    "name": "Радиационная гигиена",
    "url": "/training-programs/for-doctors/radiatsionnaya-gigiena/radiatsionnaya-gigiena-professionalnaya-perepodgotovka/"
}, {
    "name": "Радиология",
    "url": "/training-programs/for-doctors/radiologiya/radiologiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Радиология",
    "url": "/training-programs/for-doctors/radiologiya/radiologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Авиационная и космическая медицина",
    "url": "/training-programs/for-doctors/aviatsionnaya-i-kosmicheskaya-meditsina/aviatsionnaya-i-kosmicheskaya-meditsina-professionalnaya-perepodgotovka/"
}, {
    "name": "Водолазная медицина",
    "url": "/training-programs/for-doctors/vodolaznaya-meditsina/vodolaznaya-meditsina-professionalnaya-perepodgotovka/"
}, {
    "name": "Коммунальная гигиена",
    "url": "/training-programs/for-doctors/kommunalnaya-gigiena-obuchenie/kommunalnaya-gigiena-povyshenie-kvalifikatsii/"
}]

  const dataObj = {arrListVMP, vmpUrl}
  return dataObj
}

export default vmpData