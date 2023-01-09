import monkeyCard from "./MonkeyCard";

export default {
    title: "Os Melhores Clubes PT/Cards dos Melhores", //title for our storybook
    component: monkeyCard,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
      },
}

export const First = {
    args: {
      primary: true,
      children: 'Benfica',
    },
  };
  export const Second = {
    args: {
      primary: false,
      children: 'Casa Pia',
    },
  };


