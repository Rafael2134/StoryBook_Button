import Marcadores from './marcadores';
export default{
    title: 'Teste de componentes/Componentes/Marcadores',
    component: Marcadores,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
    },
};
export const app = {
    args:{
    }
};