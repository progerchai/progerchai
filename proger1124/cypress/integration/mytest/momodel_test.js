describe('EDU版本自动化脚本',function(){
    cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include('something about the error')
        console.log(77777777,err)
        // using mocha's async done callback to finish
        // this test so we prove that an uncaught exception
        // was thrown
        done()
    
        // return false to prevent the error from
        // failing this test
        return false
      })
    //   cy.on('fail', (error, runnable) => {
    //     console.log(888888,err)
    //     debugger
      
    //     // we now have access to the err instance
    //     // and the mocha runnable this failed on
      
    //     throw error // throw error to have test still fail
    //   })
    it('新建Notebook',function(){
        cy.visit('http://192.168.30.36:8899')
        cy.get('#Header-login').click()
        cy.get('#username').type('teacher003')
        cy.get('#password').type('123456')
        cy.get('[type=submit]').click()
        cy.get('#headerWrap > div > nav > div > ul:nth-child(1) > li:nth-child(2) > a')
        .click()
        cy.get('#content-wrap > div.MainLayout_content-2El_O > div > div > div > div:nth-child(1) > div > div')
        .click()
        cy.get('#content-wrap > div.MainLayout_content-2El_O > div > div.index_template-9KrM7 > div.index_templateLeft-2lvD0.index_homeworkTableStyle-LtsRV > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div:nth-child(2) > div > div:nth-child(1) > div.index_itemHeader-2RB07 > div.index_itemHeaderRight-yb0bN > div > button')
        .should('have.text','进入 Notebook')
        // .click()
        cy.visit('http://192.168.30.36:8899/workspace/5f1b967fb37f6b356132670d/app')
        // cy.get('#mo-jlContainer > div.ant-spin.ant-spin-lg.ant-spin-spinning.ant-spin-show-text > div').should('not.exist')
        // cy.get('body').should('have.css','#filebrowser')
        console.warn('点击 launcher tab')
        cy.get('#jp-main-dock-panel > div.p-Widget.p-TabBar.p-DockPanel-tabBar.jp-Activity > ul > li:nth-child(1)')
        .click()
        console.warn('点击新建 notebook')
        cy.get('* > div > div > div:nth-child(2) > div.jp-Launcher-cardContainer > div')
        .click()
        console.log(11,'点击新建 cell')
        cy.get('#jp-main-dock-panel > div > div.p-Widget.jp-Notebook.jp-mod-scrollPastEnd.jp-NotebookPanel-notebook.jp-mod-editMode > div.p-Widget.jp-Cell.slideCell.jp-CodeCell.jp-mod-noOutputs.jp-Notebook-cell.jp-mod-active.jp-mod-selected.jp-mod-collapsed > div.p-Widget.p-Panel.jp-Cell-inputWrapper > div.p-Widget.jp-InputArea.jp-Cell-inputArea > div.p-Widget.p-Panel.code-bar-parent > div.p-Widget.jp-CodeMirrorEditor.jp-Editor.jp-InputArea-editor > div > div.CodeMirror-scroll > div.CodeMirror-sizer > div > div > div > div.CodeMirror-code > pre')
        .click()
        cy.get('#jp-main-dock-panel > div > div.p-Widget.jp-Notebook.jp-mod-scrollPastEnd.jp-NotebookPanel-notebook.jp-mod-editMode > div.p-Widget.jp-Cell.slideCell.jp-CodeCell.jp-mod-noOutputs.jp-Notebook-cell.jp-mod-active.jp-mod-selected.jp-mod-collapsed > div.p-Widget.p-Panel.jp-Cell-inputWrapper > div.p-Widget.jp-InputArea.jp-Cell-inputArea > div.p-Widget.p-Panel.code-bar-parent > div.p-Widget.jp-CodeMirrorEditor.jp-Editor.jp-InputArea-editor > div > div > textarea')
        .type('print("hello world")')
        

    })
    // .catch(err=>{cy.console.log(12345555,err)})
})

// function sendemail(e){
//     console.log(123333,e)
// }
