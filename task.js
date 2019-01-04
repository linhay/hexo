const shell = require('shelljs')

function updateHexo() {
    shell.cd('/hexo/')
    // shell.exec('git checkout .')
    var stdout = shell.exec('git pull').stdout
    if (stdout == 'Already up to date.\n') { return false }
    return true
}

function updatePost() {
    shell.cd('/hexo/source/')
    // shell.exec('git checkout .')
    var stdout = shell.exec('git pull').stdout
    if (stdout == 'Already up to date.\n') { return false }
    return true
}


function update() {
    if (updatePost() || updateHexo()) {
        shell.cd('/hexo/')
        shell.exec('node_modules/hexo/bin/hexo clean')
        shell.exec('node_modules/hexo/bin/hexo d -g')
        shell.exec('node_modules/hexo/bin/hexo gulp')
    }
}

setInterval(() => {
    update()
}, 5000)
