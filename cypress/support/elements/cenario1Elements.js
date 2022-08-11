class pageElements {


    homeLogo = () => { return 'h1' }
    bootstrapModal = () => {return ':nth-child(1) > .panel > .panel-heading'}
    multipleModal = () => {return ':nth-child(2) > .panel > .panel-heading'}
    bootstrapModalButton = () => {return ':nth-child(1) > .panel > .panel-body > a.btn'}
    multipleModalButton = () => {return '[href="#myModalMulti"]'}

    tituloModal = () => { return '.modal-title'}
    conteudoModal = () => { return '#myModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1)'}
    buttonClose = () => { return '.modal-footer > .btn-default'}
    buttonSaveChanges = () => { return '#myModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'}
}



export default pageElements; 
