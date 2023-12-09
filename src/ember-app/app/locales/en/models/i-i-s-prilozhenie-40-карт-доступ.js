export default {
  projections: {
    КартДоступE: {
      справСотр: {
        __caption__: 'Сотрудник',
        фИОСотр: {
          __caption__: 'Ответственный'
        }
      },
      база_Данных: {
        __caption__: 'База Данных',
        номерКарты: {
          __caption__: 'Номер Карты'
        },
        справУч: {
          __caption__: 'Ученик',
          фио: {
            __caption__: 'Фио Ученика'
          },
          справРодит: {
            __caption__: '',
            фио: {
              __caption__: 'Фио Родителя'
            }
          }
        },
        справУчен: {
          __caption__: 'Ученик',
          фио: {
            __caption__: 'Фио Ученика'
          }
        }
      }
    },
    КартДоступL: {
      справСотр: {
        __caption__: 'Ответственный',
        фИОСотр: {
          __caption__: 'Ответственный'
        }
      }
    }
  },
  validations: {
    справСотр: {
      __caption__: 'Сотрудник'
    },
    база_Данных: {
      __caption__: 'База Данных'
    }
  }
};
