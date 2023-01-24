import Button2 from './Button';

export default {
    title: "Teste de componentes/Componentes/Botões copy", //title for our storybook
    component: Button2,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
      },
}

export const First = {
    args: {
      children: 'Benfica',
      
    },
  };
  export const Second = {
    args: {
      children: 'Casa Pia',
    },
  };