import FirstCard from './first';
export default{
    title: 'Teste de componentes/Componentes/FirstCard',
    component: FirstCard,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
    },
};
export const app = {
    args:{
    }
};