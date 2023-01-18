import Cards from './cards';
export default{
    title: 'Teste de componentes/Componentes/Cards',
    component: Cards,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
    },
};
export const app = {
    args:{
    }
};