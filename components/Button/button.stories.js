import Button from './index';

export default {
    title: "Button/My First Button", //title for our storybook
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
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


