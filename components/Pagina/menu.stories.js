import Page from './pagina';
export default{
    title: 'Teste de componentes/Componentes/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
    },
};
export const app = {
    args:{
    }
};