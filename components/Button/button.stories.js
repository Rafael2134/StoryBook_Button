import Button from './index';

export default {
    title: "Os Melhores Clubes PT/Botões dos Melhores", //title for our storybook
    component: Button,
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




