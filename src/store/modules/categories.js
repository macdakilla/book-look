const state = {
    categoryList: [
        {
            name: 'Fiction',
            title: 'Фантастика'
        },
        {
            name: 'Computers',
            title: 'Компьютеры'
        },
        {
            name: 'Business & Economics',
            title: 'Бизнес & Экономика'
        },
        {
            name: 'Education',
            title: 'Образование'
        },
        {
            name: 'Medical',
            title: 'Медицина'
        },
        {
            name: 'History',
            title: 'История'
        },
        {
            name: 'Science',
            title: 'Наука'
        },
        {
            name: 'Biography & Autobiography',
            title: 'Биография & Автобиография'
        },
        {
            name: 'Music',
            title: 'Музыка'
        },
        {
            name: 'Mathematics',
            title: 'Математика'
        },
        {
            name: 'Cooking',
            title: 'Готовка'
        },
        {
            name: 'Nature',
            title: 'Природа'
        },
        {
            name: 'Health & Fitness',
            title: 'Здоровье и фитнес'
        },
        {
            name: 'Arts',
            title: 'Искусство'
        },
        {
            name: 'Psychology',
            title: 'Психология'
        },
        {
            name: 'Architecture',
            title: 'Архитектура'
        },
        {
            name: 'Law',
            title: 'Закон'
        },
        {
            name: 'Social Science',
            title: 'Социология'
        }
    ],
};
const getters = {
    categoryList(state) {
        return state.categoryList;
    },
};
export default {
    state,
    getters
};
