const menuData = [
  {
    title: 'Starters',
    menu: [
      {
        name: 'Soup',
        price: 9,
        status: '',
        desc: "Daily chef's creation, see server"
      },
      {
        name: 'Caesar',
        price: { small: 13.8, large: 18.8 },
        status: 'VE',
        desc: 'Romaine, fried capers, sourdough croutons, Grana Padano, tossed in house dressing'
      },
      {
        name: 'The Rocket',
        price: { small: 14.3, large: 19.3 },
        status: 'GF, VE',
        desc: 'Arugula, Grana Padano, cured egg yolk, dressed in fresh lemon vinaigrette'
      },
      {
        name: 'Orchard Salad',
        price: { small: 14.5, large: 19.8 },
        status: 'GF, DF, VE',
        desc: 'Mixed greens, roasted apples, seeds, nuts, honey, dressed in an apple vinaigrette'
      },
      {
        name: 'Burrata On Toast',
        price: 23,
        status: 'VE',
        desc: 'Grilled sourdough, roast garlic spread, tomatoes, arugula, basil olive oil'
      }
    ]
  },
  {
    title: 'Pasta',
    menu: [
      {
        name: 'Marky Mark',
        price: 24,
        status: 'DF',
        desc: 'House made sausage, pepperoncini and tomato sauce with cavatelli'
      },
      {
        name: 'Sea Dis',
        price: 25.2,
        status: '',
        desc: 'Shrimp and mussels in a garlic-tarragon cream sauce over linguine'
      },
      {
        name: 'Parmigiano',
        price: 28,
        status: '',
        desc: 'Breaded chicken breast, tomato sauce and provolone over linguine'
      },
      {
        name: 'Putta',
        price: 21,
        status: 'VE',
        desc: 'Red onion, roasted red peppers, olives, sundried tomatoes, capers, tomatoes, eggplant, over penne in a spicy tomato stew'
      },
      {
        name: 'Chicken Rose',
        price: 24,
        status: '',
        desc: 'Roasted chicken, sundried tomatoes, spinach, goat cheese over penne in a creamy tomato sauce'
      },
      {
        name: 'Truffle Cavatelli',
        price: 24.2,
        status: 'VE',
        desc: 'Roast mushrooms and garlic tossed with cavatelli pasta in a white truffle cream sauce, topped with parm breadcrumb'
      }
    ]
  },
  {
    title: 'Sharing',
    menu: [
      {
        name: 'Coaletali',
        price: 16.5,
        status: 'VE',
        desc: 'Signature battered coal roasted onions. Now petals... Same same but different...'
      },
      {
        name: 'Crispy Cali',
        price: 19.6,
        status: 'GF',
        desc: 'Buttermilk marinated calamari tossed with artichoke hearts in a new breeding served with our signature lemon garlic dip'
      },
      {
        name: 'Bomba Mussels',
        price: 18.5,
        status: '',
        desc: 'P.E.I. mussels, spicy pepperoncini, red onion, spicy eggplant & toasted bread'
      },
      {
        name: 'Charcuterie',
        price: 29.3,
        status: '',
        desc: 'Selection of local and imported cured meats, house pickled vegetables, marinated olives, and toasted bread'
      },
      {
        name: 'Oystaz',
        price: { small: 24, large: 48 },
        status: 'GF, DF',
        desc: 'Freshly shucked oysters, mignonette, lemon, horseradish and house hot sauce available'
      },
      {
        name: 'Garlic Bread',
        price: 13,
        status: 'VE',
        desc: 'Sourdough loaf covered with our house garlic butter and baked with a blend of 3 cheeses'
      },
      {
        name: 'Wings',
        price: { small: 17.2, large: 43 },
        status: 'GF',
        desc: 'Local wings tossed with your choice of bbq, honey garlic, hot, truffle parm, honey hot, cajun lemon pepper, or salt and pepper'
      },
      {
        name: 'G Frites',
        price: 13,
        status: 'GF',
        desc: 'In house cute fries, truffle olive oil, Grana Padano, thyme'
      },
      {
        name: 'Warm Olives',
        price: 13,
        status: 'VE, DF',
        desc: 'Fennel and orange marinated olives served with toasted sourdough bread'
      }
    ]
  },

  {
    title: 'Sammys',
    menu: [
      {
        name: 'Sasso Burger',
        price: 23,
        status: '',
        desc: "7 oz Jepson's Farmers Market beef burger. Roasted mushrooms, lettuce, prosciutto cheese sauce"
      },
      {
        name: 'Build Your Burger',
        price: 19.6,
        status: '',
        desc: "7 oz Jepson's Farmers Market beef burger. Choice of lettuce, tomato, red onion, aioli, pickles"
      },
      {
        name: 'The 2.0',
        price: 22,
        status: '',
        desc: 'Buttermilk fried chicken topped with lettuce, tomato, bacon and provolone finished with garlic lemon sauce'
      },
      {
        name: 'Special Request',
        price: 22,
        status: '',
        desc: 'Blackened chicken breast with arugula, red onion, smoky aioli, pickled jalapenos and smoked cheddar'
      },
      {
        name: 'Chopped Panini',
        price: 20.5,
        status: '',
        desc: 'Cured meats, arugula, onions, mozzarella, sub sauce, tomatoes, chopped together and baked in a pizza dough panini, served crispy'
      }
    ]
  },

  {
    title: 'As Mains',
    menu: [
      {
        name: 'Trout',
        price: 29,
        status: 'GF, DF',
        desc: 'Seared 7oz fillet garnished with chickpeas and rapini sauteed in a tomato parm sauce'
      },
      {
        name: 'Grilled Calamari',
        price: 26,
        status: 'GF, DF',
        desc: 'Perfectly grilled calamari tossed in fennel, olive and chili tomato stew topped with crispy potatoes'
      }
    ]
  },

  {
    title: 'Pizzas Pomodori',
    menu: [
      {
        name: 'Mona Lisa',
        price: 16.5,
        status: 'VE',
        desc: 'Basil, fresh mozzarella'
      },
      {
        name: 'Dirty South',
        price: 21.6,
        status: '',
        desc: 'Red onions, roasted red peppers, capers, olives, anchovies, sun dried tomatoes, confit garlic, oregano'
      },
      {
        name: 'The Cured',
        price: 23.8,
        status: '',
        desc: 'Prosciutto, marinated olives, confit garlic, oregano, fresh mozzarella'
      },
      {
        name: 'PePeR-G’S',
        price: 23.5,
        status: '',
        desc: 'Spicy pepperoncini, confit garlic, rapini, sausage, pecorinio'
      }
    ]
  },
  {
    title: 'Additions',
    menu: [
      { name: 'Sautéed Rapini', price: 9.8, status: 'GF', desc: null },
      { name: 'Grilled chicken', price: 7.6, status: 'GF', desc: null },
      { name: 'Garlic Butter Shrimp', price: 8.2, status: 'GF', desc: null },
      { name: 'Grilled Calamari 1 Pc', price: 10.5, status: '', desc: null },
      { name: 'Chicken Parm 1 Pc', price: 10.2, status: '', desc: null },
      { name: 'Side of Pasta', price: 11, status: '', desc: null }
    ]
  }
]

export default menuData
