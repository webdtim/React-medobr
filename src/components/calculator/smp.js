const smpData = () => {
  const arrListSMP = [
    {
        name: 'Акушерское дело',
        value: ['Лечебное дело']
    },
    {
        name: 'Анестезиология и реаниматология',
        value: ['Лечебное дело', 'Акушерское дело', 'Сестринское дело']
    },
    {
        name: 'Бактериология',
        value: ['Лабораторная диагностика', 'Медико-профилактическое дело']
    },
    {
        name: 'Гигиеническое воспитание',
        value: ['Лечебное дело', 'Акушерское дело', 'Сестринское дело', 'Медико-профилактическое дело']
    },
    {
        name: 'Гигиена и санитария',
        value: ['Гигиена и санитария']
    },
    {
        name: 'Гистология',
        value: ['Лабораторная диагностика']
    },
    {
        name: 'Дезинфекционное дело',
        value: ['Медико-профилактическое дело'],
    },
    {
        name: 'Диетология',
        value: ['Лечебное дело', 'Акушерское дело', 'Сестринское дело']
    },
    {
        name: 'Лабораторное дело',
        value: ['Медико-профилактическое дело', 'Лабораторная диагностика']
    },
    {
        name: 'Лабораторная диагностика',
        value: ['Лабораторная диагностика']
    },
    {
        name: 'Лечебная физкультура',
        value: ['Лечебное дело', 'Акушерское дело', 'Сестринское дело']
    },
    {
        name: 'Медицинский массаж',
        value: ['Лечебное дело', 'Акушерское дело', 'Сестринское дело']
    },
    {
        name: 'Медицинская оптика',
        value: ['Медицинская оптика']
    },
    {
        name: 'Медицинская статистика',
        value: ['Лечебное дело', 'Акушерское дело', 'Сестринское дело', 'Медико-профилактическое дело', 'Лабораторная диагностика', 'Стоматология', 'Стоматология ортопедическая', 'Стоматология профилактическая']
    },
    {
        name: 'Медико-социальная помощь',
        value: ['Лечебное дело', 'Акушерское дело', 'Сестринское дело']
    },
    {
        name: 'Наркология',
        value: ['Лечебное дело']
    },
    {
        name: 'Общая практика',
        value: ['Лечебное дело', 'Акушерское дело', 'Сестринское дело']
    },
    {
        name: 'Операционное дело',
        value: ['Лечебное дело', 'Акушерское дело', 'Сестринское дело']
    },
    {
        name: 'Организация сестринского дела',
        value: ['Лечебное дело', 'Акушерское дело', 'Сестринское дело']
    },
    {
        name: 'Реабилитационное сестринское дело',
        value: ['Лечебное дело', 'Акушерское дело', 'Сестринское дело']
    },
    {
        name: 'Рентгенология',
        value: ['Лечебное дело', 'Акушерское дело', 'Сестринское дело', 'Стоматология', 'Стоматология ортопедическая', 'Стоматология профилактическая', 'Медико-профилактическое дело', 'Лабораторная диагностика']
    },
    {
        name: 'Сестринское дело в педиатрии',
        value: ['Лечебное дело', 'Акушерское дело', 'Сестринское дело']
    },
    {
        name: 'Сестринское дело',
        value: ['Лечебное дело', 'Акушерское дело']
    },
    {
        name: 'Сестринское дело в косметологии',
        value: ['Лечебное дело', 'Акушерское дело', 'Сестринское дело']
    },
    {
        name: 'Скорая и неотложная помощь',
        value: ['Лечебное дело']
    },
    {
        name: 'Стоматология',
        value: ['Стоматология']
    },
    {
        name: 'Стоматология профилактическая',
        value: ['Стоматология профилактическая']
    },
    {
        name: 'Стоматология ортопедическая',
        value: ['Стоматология ортопедическая']
    },
    {
        name: 'Судебно-медицинская экспертиза',
        value: ['Лабораторная диагностика']
    },
    {
        name: 'Фармация',
        value: ['Фармация']
    },
    {
        name: 'Физиотерапия',
        value: ['Лечебное дело', 'Акушерское дело', 'Сестринское дело']
    },
    {
        name: 'Функциональная диагностика',
        value: ['Лечебное дело', 'Акушерское дело', 'Сестринское дело']
    },
    {
        name: 'Эпидемиология (паразитология)',
        value: ['Медико-профилактическое дело']
    },
    {
        name: 'Энтомология',
        value: ['Медико-профилактическое дело']
    },
];
const smpUrl = [{
    "name": "Сестринское дело в терапии",
    "url": "/training-programs/for-nurses/nursing/sesdelovterapiii/"
}, {
    "name": "Сестринское дело в хирургии",
    "url": "/training-programs/for-nurses/nursing/nursing-care-in-surgery/"
}, {
    "name": "Сестринское дело",
    "url": "/training-programs/for-nurses/nursing/professional-courses-in-the-field-of-nursing/"
}, {
    "name": "Сестринское дело",
    "url": "/training-programs/for-nurses/nursing/sestrinskoe-delo-povyshenie-kvalifikatsii/"
}, {
    "name": "Сестринское дело в педиатрии",
    "url": "/training-programs/for-nurses/nursing-in-pediatrics/professional-courses-in-the-field-of-nursing-in-pediatrics/"
}, {
    "name": "Сестринское дело в педиатрии",
    "url": "/training-programs/for-nurses/nursing-in-pediatrics/sestrinskoe-delo-v-pediatrii-povyshenie-kvalifikatsii/"
}, {
    "name": "Лабораторное дело",
    "url": "/training-programs/for-nurses/medical-care/professional-courses-in-the-direction-lab-business/"
}, {
    "name": "Лабораторное дело",
    "url": "/training-programs/for-nurses/medical-care/laboratornoe-delo-povyshenie-kvalifikatsii/"
}, {
    "name": "Операционное дело",
    "url": "/training-programs/for-nurses/operating-case/kursy-perepodgotovki-po-napravleniyu-operatsionnoye-delo/"
}, {
    "name": "Операционное дело",
    "url": "/training-programs/for-nurses/operating-case/operatsionnoe-delo-povyshenie-kvalifikatsii/"
}, {
    "name": "Организация сестринского дела",
    "url": "/training-programs/for-nurses/organization-of-nursing-care/organizatsiya-sestrinskogo-dela-pp/"
}, {
    "name": "Организация сестринского дела",
    "url": "/training-programs/for-nurses/organization-of-nursing-care/organizatsiya-sestrinskogo-dela-povyshenie-kvalifikatsii/"
}, {
    "name": "Охрана здоровья женщин",
    "url": "/training-programs/for-nurses/obstetrician/health-women/"
}, {
    "name": "Современные аспекты акушеркой помощи в родовспомогательных учреждениях",
    "url": "/training-programs/for-nurses/obstetrician/modern-aspects-of-midwife-care-in-obstetric-institutions/"
}, {
    "name": "Акушерское дело",
    "url": "/training-programs/for-nurses/obstetrician/akusherskoye-delo-perepodgotovka/"
}, {
    "name": "Акушерское дело",
    "url": "/training-programs/for-nurses/obstetrician/povyshenie-kvalifikatsii-akusherskoe-delo/"
}, {
    "name": "Анестезиология и реаниматология",
    "url": "/training-programs/for-nurses/anesthesiology-and-intensive-care/anesteziologiya-i-reanimatologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Функциональная диагностика",
    "url": "/training-programs/for-nurses/functional-diagnostics-nurses/professional-courses-of-nursing-staff-in-the-direction-of-functional-diagnostics/"
}, {
    "name": "Функциональная диагностика",
    "url": "/training-programs/for-nurses/functional-diagnostics-nurses/funktsionalnaya-diagnostika-povyshenie-kvalifikatsii/"
}, {
    "name": "Дезинфекционное дело",
    "url": "/training-programs/for-nurses/disinfection-business-training/professional-courses-in-the-direction-of-disinfection-business/"
}, {
    "name": "Дезинфекционное дело",
    "url": "/training-programs/for-nurses/disinfection-business-training/dezinfektsionnoe-delo-povyshenie-kvalifikatsii/"
}, {
    "name": "Актуальные вопросы профилактики, диагностики и лечения коронавирусной инфекции COVID",
    "url": "/training-programs/for-nurses/disinfection-business-training/aktualnye-voprosy-profilaktiki-diagnostiki-i-lecheniya-koronavirusnoy-infektsii-covid-19-sredniy-med/"
}, {
    "name": "Лечебная физкультура",
    "url": "/training-programs/for-nurses/lechebnaya-fizkultura/lechebnaya-fizkultura-povyshenie-kvalifikatsii/"
}, {
    "name": "Медицинский массаж",
    "url": "/training-programs/for-nurses/medical-massage-training/professional-courses-in-the-field-of-medical-massage-/"
}, {
    "name": "Медицинский массаж",
    "url": "/training-programs/for-nurses/medical-massage-training/meditsinskiy-massazh-povyshenie-kvalifikatsii/"
}, {
    "name": "Медицинская статистика",
    "url": "/training-programs/for-nurses/medical-statistics-learning/professional-courses-in-the-field-of-medical-yastatistika2/"
}, {
    "name": "Медицинская статистика",
    "url": "/training-programs/for-nurses/medical-statistics-learning/meditsinskaya-statistika-povyshenie-kvalifikatsii/"
}, {
    "name": "Фельдшер",
    "url": "/training-programs/for-nurses/paramedic-training/medical-assistant-professional-courses-/"
}, {
    "name": "Гигиеническое воспитание",
    "url": "/training-programs/for-nurses/gigienicheskoe-vospitanie/gigienicheskoe-vospitanie-professionalnaya-perepodgotovka/"
}, {
    "name": "Гигиеническое воспитание",
    "url": "/training-programs/for-nurses/gigienicheskoe-vospitanie/gigienicheskoe-vospitanie-povyshenie-kvalifikatsii/"
}, {
    "name": "Гистология",
    "url": "/training-programs/for-nurses/gistologiya/gistologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Гистология",
    "url": "/training-programs/for-nurses/gistologiya/gistologiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Диетология",
    "url": "/training-programs/for-nurses/dietologiya/dietologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Диетология",
    "url": "/training-programs/for-nurses/dietologiya/dietologiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Медико",
    "url": "/training-programs/for-nurses/mediko-sotsialnaya-pomoshch/mediko-sotsialnaya-pomoshch-professionalnaya-perepodgotovka/"
}, {
    "name": "Медико",
    "url": "/training-programs/for-nurses/mediko-sotsialnaya-pomoshch/mediko-sotsialnaya-pomoshch-povyshenie-kvalifikatsii/"
}, {
    "name": "Медико-социальная помощь",
    "url": "/training-programs/for-nurses/mediko-sotsialnaya-pomoshch/mediko-sotsialnaya-pomoshch-professionalnaya-perepodgotovka/"
}, {
    "name": "Наркология",
    "url": "/training-programs/for-nurses/narkologiya/narkologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Наркология",
    "url": "/training-programs/for-nurses/narkologiya/narkologiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Общая практика",
    "url": "/training-programs/for-nurses/obshchaya-praktika/obshchaya-praktika-professionalnaya-perepodgotovka/"
}, {
    "name": "Общая практика",
    "url": "/training-programs/for-nurses/obshchaya-praktika/obshchaya-praktika-povyshenie-kvalifikatsii/"
}, {
    "name": "Реабилитационное сестринское дело",
    "url": "/training-programs/for-nurses/reabilitatsionnoe-sestrinskoe-delo/reabilitatsionnoe-sestrinskoe-delo-professionalnaya-perepodgotovka/"
}, {
    "name": "Реабилитационное сестринское дело",
    "url": "/training-programs/for-nurses/reabilitatsionnoe-sestrinskoe-delo/reabilitatsionnoe-sestrinskoe-delo-povyshenie-kvalifikatsii/"
}, {
    "name": "Рентгенология",
    "url": "/training-programs/for-nurses/rentgenologiya/rentgenologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Рентгенология",
    "url": "/training-programs/for-nurses/rentgenologiya/rentgenologiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Сестринское дело в косметологии",
    "url": "/training-programs/for-nurses/sestrinskoe-delo-v-kosmetologii/sestrinskoe-delo-v-kosmetologii-professionalnaya-perepodgotovka/"
}, {
    "name": "Сестринское дело в косметологии",
    "url": "/training-programs/for-nurses/sestrinskoe-delo-v-kosmetologii/sestrinskoe-delo-v-kosmetologii-povyshenie-kvalifikatsii/"
}, {
    "name": "Судебно-медицинская экспертиза",
    "url": "/training-programs/for-nurses/sudebno-meditsinskaya-ekspertiza/sudebno-meditsinskaya-ekspertiza-professionalnaya-perepodgotovka/"
}, {
    "name": "Судебно-медицинская экспертиза",
    "url": "/training-programs/for-nurses/sudebno-meditsinskaya-ekspertiza/sudebno-meditsinskaya-ekspertiza-povyshenie-kvalifikatsii-/"
}, {
    "name": "Физиотерапия",
    "url": "/training-programs/for-nurses/fizioterapiya/fizioterapiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Физиотерапия",
    "url": "/training-programs/for-nurses/fizioterapiya/fizioterapiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Энтомология",
    "url": "/training-programs/for-nurses/entomologiya/entomologiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Энтомология",
    "url": "/training-programs/for-nurses/entomologiya/entomologiya-professionalnaya-perepodgotovka-/"
}, {
    "name": "Бактериология",
    "url": "/training-programs/for-nurses/bakteriologiya/bakteriologiya-professionalnaya-perepodgotovka/"
}, {
    "name": "Бактериология",
    "url": "/training-programs/for-nurses/bakteriologiya/bakteriologiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Гигиена и санитария",
    "url": "/training-programs/for-nurses/gigiena-i-sanitariya/gigiena-i-sanitariya-povyshenie-kvalifikatsii/"
}, {
    "name": "Лабораторная диагностика",
    "url": "/training-programs/for-nurses/laboratornaya-diagnostika/laboratornaya-diagnostika-povyshenie-kvalifikatsii/"
}, {
    "name": "Лечебное дело",
    "url": "/training-programs/for-nurses/lechebnoe-delo/lechebnoe-delo-povyshenie-kvalifikatsii/"
}, {
    "name": "Медицинская оптика",
    "url": "/training-programs/for-nurses/meditsinskaya-optika/meditsinskaya-optika-povyshenie-kvalifikatsii/"
}, {
    "name": "Скорая и неотложная помощь",
    "url": "/training-programs/for-nurses/skoraya-i-neotlozhnaya-pomoshch/skoraya-i-neotlozhnaya-pomoshch-povyshenie-kvalifikatsii/"
}, {
    "name": "Стоматология",
    "url": "/training-programs/for-nurses/stomatologiya/stomatologiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Стоматология ортопедическая",
    "url": "/training-programs/for-nurses/stomatologiya-ortopedicheskaya/stomatologiya-ortopedicheskaya-povyshenie-kvalifikatsii/"
}, {
    "name": "Стоматология профилактическая",
    "url": "/training-programs/for-nurses/stomatologiya-profilakticheskaya/stomatologiya-profilakticheskaya-povyshenie-kvalifikatsii/"
}, {
    "name": "Фармация",
    "url": "/training-programs/for-nurses/farmatsiya/farmatsiya-povyshenie-kvalifikatsii/"
}, {
    "name": "Эпидемиология (паразитология)",
    "url": "/training-programs/for-nurses/epidemiologiya-parazitologiya/epidemiologiya-parazitologiya-povyshenie-kvalifikatsii/"
}]

  const smpArray = {arrListSMP, smpUrl}
  return smpArray
}

export default smpData