import MonkeyCard from "./MonkeyCard";
export default {
    title: "Teste de componentes/Componentes/Cards dos Melhores", //title for our storybook
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
      imageUrl:"/img/jungle1.jpg",
      imageAlt:"jungle",
    },
};
