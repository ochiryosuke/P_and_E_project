let is_hide = true;
function hide(mode){
    if(mode === 'found') is_hide = false;
    if(mode === 'lost') is_hide = true;
}

while(1)
{
    if(is_hide){
        document.querySelector('answer').classList.add('hide');
        console.log('hide');
    } else {
        document.querySelector('answer').classList.remove('hide');
        console.log('no hide');
    }
}
