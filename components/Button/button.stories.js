import Button from '.';

export default {
    title: "Teste de componentes/Componentes/Botões dos Melhores", //title for our storybook
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