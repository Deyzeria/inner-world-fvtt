function LoadLanguagesInnerWorld() {
  var lang = CONFIG.DND5E.languages;

  delete lang.standard;
  delete lang.exotic;
  delete lang.druidic;
  delete lang.cant;

  lang['standard'] = {
    label: "Обычные",
    children: {
      common: {
        label: "Распространенные",
        children: {
          kazrud: "Казруд",
          highelven: "Высокий Эльфийский",
          woodelven: "Лесной Эльфийский",
        }
      },

      lakes: {
        label: "Языки Озер",
        children: {
          lagovulgar: "Простонародный лаго",
          grenlandic: "Гренландский",
          lycaon: "Ликаон",
          kanur: "Канурский",
          mashriq: "Машрикский",
          amharian: "Амхарский",
          wastlorc: "Орочий степной",
          kano: "Кано",
        }
      },

      northern: {
        label: "Северные языки",
        children: {
          skellang: "Скелянг",
          vintu: "Винту",
          pomo: "Помо",
          cheke: "Чеке",
        }
      },

      erebia: {
        label: "Языки полей Эребии на западе",
        children: {
          highvandala: "Высокий вандала",
          eri: "Эри",
          estel: "Эстель",
          darkelven: "Темноэльфийский"
        }
      },

      southwest: {
        label: "Языки Разделенных Земель юго-запада",
        children: {
          dalem: "Далем",
          gur: "Гур",
          kuran: "Куран"
        }
      },

      dakhara: {
        label: "Языки южнейших земель Дакхары",
        children: {
          dramaran: "Драмара",
          tacindan: "Тацинда",
          djakat: "Джакат"
        }
      },

      emeraldland: {
        label: "Языки Изумрудной Земли",
        children: {
          whiteelven: "Белоэльфийский",
          coastelven: "Брегоэльфийский"
        }
      }
    }
  }

  lang['exotic'] = {
    label: "Экзотические языки",
    children: {
      draconic: "Драконий",
      feycypher: "Шифры фей",
      demonicrune: "Демонические Руны",
      druidic: "Друидский Шифр",
      cant: "Воровской Шифр"
    }
  }
}

Hooks.once("setup", () => {
  LoadLanguagesInnerWorld();
});