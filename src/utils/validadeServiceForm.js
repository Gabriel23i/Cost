export const validate = ({ name, cost, description }) => {
    const errors = {};
    
    // NAME
    if (!name) {
      errors.name = 'Nome do serviço é obrigatório.';
    }
    if(typeof name !== 'string'){
        errors.name = 'O nome deve conter apenas letras.'
    }
    if(name < 3 && name > 0 ){
        errors.name = 'O nome deve ter no mínimo 3 caracters';
    }
    
    // COST
    if(cost < 1){
        errors.cost = 'O valor minimo é R$1,00.';
    }
    if (!cost) {
      errors.cost = 'Defina o custo do serviço.';
    } 
    if(typeof cost !== 'number'){
        errors.cost = 'Defina o custo do serviço.';
    }
    
    // DESCRIPTION
    if (!description) {
      errors.description = 'Descreva o serviço.';
    }
    if(description.length < 6){
        errors.description = 'Descrição deve ter no mínimo 6 caracters.';
    }
    return errors;
};
