import MonkeyCard from "./MonkeyCard";
export default {
    title: "Os Melhores Clubes PT/Cards dos Melhores", //title for our storybook
    component: MonkeyCard,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
      },
}



export const House1 = {
    args: {
      city:"Monkey",
      averagePrice:"40",
      propertyCount:"Monkey",
      imageUrl:"/img/jungle2.jpeg",
      imageAlt:"jungle",
    },
};
export const House2 = {
  args: {
    city: "Monkey",
    averagePrice: "70",
    propertyCount: "Monkey",
    imageUrl: "/img/jungle3.webp",
    imageAlt: "jungle",
  },
};

export const House3 = {
  args: {
    city: "Monkey",
    averagePrice: "60",
    propertyCount: "Monkey",
    imageUrl: "/img/jungle4.jpeg",
    imageAlt: "jungle",
  },
};

export const House4 = {
  args: {
    city: "Monkey",
    averagePrice: "90",
    propertyCount: "Monkey",
    imageUrl: "/img/jungle5.jpeg",
    imageAlt: "jungle",
  },
};

export const House5 = {
  args: {
    city: "Monkey",
    averagePrice: "40",
    propertyCount: "Monkey",
    imageUrl: "/img/jungle6.jpeg",
    imageAlt: "jungle",
  },
};

export const House6 = {
  args: {
    city: "Monkey",
    averagePrice: "10",
    propertyCount: "Monkey",
    imageUrl: "/img/jungle7.jpg",
    imageAlt: "jungle",
  },
};

