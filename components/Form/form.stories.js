import Form from './form2';
export default{
    title: 'Teste de componentes/Componentes/Form',
    component: Form,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
    },
};
export const app = {
    args:{
        backgroundColor:"",
    }
};