import Menu from './menu';
export default{
    title: 'Teste de componentes/Componentes/Menu',
    component: Menu,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
    },
};
export const app = {
    args:{
    }
};